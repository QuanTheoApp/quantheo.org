import { useState } from 'react'
import { Link } from '@tanstack/react-router'

// A quiet top navigation shared across every page. Fixed to the top, it stays
// out of the way of the reading — a thin brand on the left, the three
// destinations on the right.
export function SiteNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
          <div className="nav-dropdown" onMouseLeave={() => setIsMenuOpen(false)}>
            <button
              className="nav-link dropdown-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onMouseEnter={() => setIsMenuOpen(true)}
              aria-expanded={isMenuOpen}
              aria-haspopup="true"
            >
              Menu
              <span className="dropdown-arrow">{isMenuOpen ? '▲' : '▼'}</span>
            </button>
            {isMenuOpen && (
              <div className="dropdown-menu">
                <Link
                  to="/theo"
                  className="dropdown-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Theo
                </Link>
                <Link
                  to="/passages"
                  className="dropdown-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Passages
                </Link>
                <Link
                  to="/contrast"
                  className="dropdown-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contrast
                </Link>
                <Link
                  to="/closing"
                  className="dropdown-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Closing
                </Link>
                <hr className="dropdown-divider" />
                <a
                  href="https://quantheo.etsy.com"
                  className="dropdown-item"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Guided Meditation
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
