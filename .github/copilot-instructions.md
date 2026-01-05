# Copilot Instructions for Neuro Thrive Coach Website

## Architecture Overview
- **Framework**: React 18 + TypeScript + Vite SPA
- **Routing**: React Router with HashRouter (GitHub Pages compatible)
- **Styling**: Tailwind CSS with custom color scheme (primary: #338173), dark mode support
- **Content Management**: Static content defined in page components
- **Booking Integration**: Cal.com via embed and proxied API calls
- **Deployment**: Vercel with SPA rewrites and Cal API proxy

## Key Patterns
- **Page Structure**: Most pages wrapped in `Layout` component; booking pages use custom headers
- **Data Fetching**: Avoid runtime content fetches; keep pages static
- **Navigation**: `useNavigate` for programmatic routing, `Link` for declarative
- **Responsive Design**: Tailwind classes with `md:`, `lg:` breakpoints; mobile-first approach

## Integrations
- **Cal API**: Proxied via `/api/cal` in Vite config; functions in `utils/calApi.ts` handle V1/V2 API differences
- **Cal Embed**: Use `data-cal-link` attributes and `(window as any).Cal` for UI customization

## Development Workflow
- **Start Dev**: `npm run dev` (Vite dev server)
- **Build**: `npm run build` (outputs to `dist/`)
- **Preview**: `npm run preview` (local production preview)
- **Environment**: Set `VITE_CAL_API_KEY` in `.env`
- **No Tests/Linting**: Currently no automated tests or linting scripts

## Conventions
- **File Organization**: Pages in `pages/`, components in `components/`, utilities in `utils/`
- **Error Handling**: Console errors for API failures, user-friendly error messages in UI
- **SEO**: Meta tags in `index.html`, dynamic titles via React Helmet (if added)
- **Icons**: Material Symbols via Google Fonts, loaded in `index.html`

## Examples
- Add new page: Create in `pages/`, add route in `App.tsx` with `Layout` wrapper
- Keep content static: Define values in the page component and render directly
- Style components: Use Tailwind utilities like `bg-primary`, `text-text-main`, `hover:bg-primary-dark`</content>
<parameter name="filePath">c:\Users\ihoti\Desktop\Sams website\.github\copilot-instructions.md
