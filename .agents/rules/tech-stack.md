---
trigger: always_on
---

Rule 1: The Monopole-Runtime Constraint (The Foundation)
Any application execution environment must rely on a single, core structural framework acting as a positive, uniform engine. You cannot mix disparate runtime philosophies or expect separate ecosystems to interface directly without an intermediary handler.

The Stack: The runtime architecture operates on React (v18.3.1).

The Language Constraint: The entire layout is typed under TypeScript (~v6.0.2), ensuring static compile-time boundaries across all modules.

The Compilation Engine: Local compilation, hot module replacement, and bundling vectors are strictly governed by Vite (v8.0.12).

Rule 2: The Data Isolation & Permission Barrier (The Backend)
A decoupled system architecture requires an external, cloud-hosted relational infrastructure where public data access vectors are isolated from administrative manipulation through explicit authorization filters.

The BaaS Platform: Persistence mechanics and user profiles are managed externally via Supabase via @supabase/supabase-js (v2.107.0).

The Structural Layer: Data schemas are built into relational PostgreSQL tables, tracking properties across unified data nodes (global_settings, categories, and videos).

The Access Protocol: Security boundaries enforce Row Level Security (RLS), defining open parameters for public readings (Allow public read) and restricted parameters (auth.role() = 'authenticated') that allow edits only to authenticated administrators.

Rule 3: The Atomic Presentational System (Styling & Layout)
The presentational interface cannot use disjointed styles or manually calculated layout attributes. It must conform to a deterministic utility framework combined with unstyled, structural atomic blocks.

The Functional Utility Framework: Layout rendering and responsive dimensions are calculated via Tailwind CSS (v3.4.1).

The Structural Primitives: High-level interactive elements (including dialogs, accordion boxes, drop-down sheets, and navigation frames) are built from unstyled Radix UI primitives. This structure indicates a full shadcn/ui design system setup.

The Kinetic Modifiers: State-based entry, exit, and component transforms are animated strictly through Framer Motion (v12.38.0).

Rule 4: The Interface Functionality Protocol (Specialized Utilities)
When adding specific functionality (such as state tracking, routing, validation, or media handling), the application must utilize isolated libraries to prevent custom code overhead.

The Routing Vector: Multi-view routing and client-side view management are delegated to React Router DOM (v7.17.0).

The Validation Constraint: Client input handling uses React Hook Form (v7.77.0), bound to type-safe validation criteria through Zod (v4.4.3).

The Large Asset Pipeline: High-bandwidth file handling and chunks-based media uploading are processed via the open Tus Protocol utilizing tus-js-client.

The Canvas/Dnd Array: Drag-and-drop mechanics are managed exclusively via @dnd-kit (core, sortable, utilities).

Rule 5: The Edge Routing & Single-Page Fallback (Deployment)
The compiled client bundle cannot handle multi-route server resolutions natively without explicit instructions on the cloud hosting perimeter.

The Target Platform: Production-ready deployments are built for and hosted on Vercel.

The Catch-All Law: To keep deep-linked admin routes from failing on page refresh, a strict edge-rewrite rule intercepts request pathways matching /admin(.*) and routes them back to the single-page application entry file /index.html.