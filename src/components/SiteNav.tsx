import { Link } from '@tanstack/react-router'

// A quiet top navigation shared across every page. Fixed to the top, it stays
// out of the way of the reading — a thin brand on the left, the three
// destinations on the right.
export function SiteNav() {
  return (
    <nav className="site-nav" aria-label="Primary">
      <div className="site-nav-inner">
        <Link to="/" className="nav-brand">
          QuanTheo
        </Link>
        <div className="nav-links">
          <Link
            to="/about"
            className="nav-link"
            activeProps={{ className: 'nav-link is-current' }}
          >
            About
          </Link>
          <Link
            to="/theo"
            className="nav-link"
            activeProps={{ className: 'nav-link is-current' }}
          >
            Theo
          </Link>
          <Link
            to="/donate"
            className="nav-link"
            activeProps={{ className: 'nav-link is-current' }}
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  )
}
