import { useState, useRef, useEffect } from 'react'
import { Link } from '@tanstack/react-router'

// A quiet top navigation shared across every page. Fixed to the top, it stays
// out of the way of the reading — a thin brand on the left, the three
// destinations on the right.
export function SiteNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleMouseEnter = () => {
    // Clear any pending close timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsMenuOpen(true)
  }

  const handleMouseLeave = () => {
    // Add a small delay before closing to allow moving to dropdown
    timeoutRef.current = setTimeout(() => {
      setIsMenuOpen(false)
    }, 300)
  }

  const handleDropdownMouseEnter = () => {
    // Clear the close timeout when entering the dropdown
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const handleDropdownMouseLeave = () => {
    // Close immediately when leaving the dropdown
    setIsMenuOpen(false)
  }

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
          <div 
            className="nav-dropdown"
            ref={menuRef}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="nav-link dropdown-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onMouseEnter={handleMouseEnter}
              aria-expanded={isMenuOpen}
              aria-haspopup="true"
            >
              Menu
              <span className="dropdown-arrow">{isMenuOpen ? '\u25b2' : '\u25bc'}</span>
            </button>
            {isMenuOpen && (
              <div 
                className="dropdown-menu"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
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
