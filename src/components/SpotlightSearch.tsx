import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { pages } from '../contentIndex'

interface SpotlightSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PageItem {
  id?: string | number;
  title: string;
  category: string;
  desc?: string;
  url: string;
  [key: string]: any;
}

const typedPages = pages as PageItem[];

export default function SpotlightSearch({ isOpen, onClose }: SpotlightSearchProps) {
  const [query, setQuery] = useState('')
  const [highlightIdx, setHighlightIdx] = useState(0)
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  // Filter pages based on search query
  const filtered = query.trim() === '' ? [] : typedPages.filter(page => {
    const q = query.toLowerCase()
    return (
      (page.title && page.title.toLowerCase().includes(q)) ||
      (page.category && page.category.toLowerCase().includes(q)) ||
      (page.desc && page.desc.toLowerCase().includes(q))
    )
  })

  // Auto-focus search input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setHighlightIdx(0)
      setTimeout(() => inputRef.current?.focus(), 50)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Reset highlight index when query changes
  useEffect(() => {
    setHighlightIdx(0)
  }, [query])

  // Scroll active item into view
  useEffect(() => {
    if (resultsRef.current) {
      const activeEl = resultsRef.current.querySelector('.spotlight-item.highlighted') as HTMLElement | null
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' })
      }
    }
  }, [highlightIdx])

  // Key handlers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) {
        // Global Ctrl+K / Cmd+K handler
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
          e.preventDefault()
          onClose() // Toggle or open search
        }
        return
      }

      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        if (filtered.length > 0) {
          setHighlightIdx(prev => (prev + 1) % filtered.length)
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        if (filtered.length > 0) {
          setHighlightIdx(prev => (prev - 1 + filtered.length) % filtered.length)
        }
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (filtered.length > 0 && filtered[highlightIdx]) {
          handleSelect(filtered[highlightIdx])
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, filtered, highlightIdx])

  const handleSelect = (page: PageItem) => {
    onClose()
    navigate(page.url)
  }

  if (!isOpen) return null

  return (
    <div 
      className="spotlight-modal" 
      id="spotlightModal"
      onClick={(e) => {
        const target = e.target as HTMLElement;
        if (target.id === 'spotlightModal') onClose()
      }}
    >
      <div className="spotlight-content">
        <div className="spotlight-header">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            ref={inputRef}
            placeholder="Search departments, facilities, or admissions..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="spotlight-close-btn" onClick={onClose} title="Close search">
            ESC
          </button>
        </div>

        <div className="spotlight-results" ref={resultsRef}>
          {query.trim() === '' ? (
            <div className="no-results">Type query to search departments, facilities, or admissions...</div>
          ) : filtered.length === 0 ? (
            <div className="no-results">No results found for "{query}"</div>
          ) : (
            filtered.map((item, idx) => (
              <div 
                key={item.id ?? idx} 
                className={`spotlight-item ${idx === highlightIdx ? 'highlighted' : ''}`}
                onClick={() => handleSelect(item)}
                onMouseEnter={() => setHighlightIdx(idx)}
              >
                <div className="spotlight-item-info">
                  <span className="spotlight-item-title">{item.title}</span>
                  <span className="spotlight-item-desc">{item.desc ? `${item.desc.substring(0, 75)}...` : ''}</span>
                </div>
                <span className="spotlight-item-category">{item.category}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
