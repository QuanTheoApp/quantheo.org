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
              <span className="dropdown-arrow">{isMenuOpen ? '\u25b2' : '\u25bc'}</span>
            </button>
            {isMenuOpen && (
              <div className="dropdown-menu">
                <Link
                  to="/guided-meditation"
                  className="dropdown-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Guided Meditation
                </Link>
                <Link
                  to="/videos"
                  className="dropdown-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Videos
                </Link>
                <Link
                  to="/essays"
                  className="dropdown-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Essays
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
