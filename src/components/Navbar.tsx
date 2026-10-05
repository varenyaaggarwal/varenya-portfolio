import {
    useEffect,
    useState,
  } from 'react'
  
  const sections = [
    'about',
    'projects',
    'skills',
    'experience',
    'contact',
  ]
  
  function Navbar() {
    const [menuOpen, setMenuOpen] =
      useState(false)
  
    const [activeSection, setActiveSection] =
      useState('')
  
    useEffect(() => {
      if (
        window.location.pathname !== '/'
      ) {
        return
      }
  
      const elements =
        sections
          .map((id) =>
            document.getElementById(id)
          )
          .filter(
            (
              element
            ): element is HTMLElement =>
              Boolean(element)
          )
  
      const observer =
        new IntersectionObserver(
          (entries) => {
            const visible =
              entries
                .filter(
                  (entry) =>
                    entry.isIntersecting
                )
                .sort(
                  (a, b) =>
                    b.intersectionRatio -
                    a.intersectionRatio
                )[0]
  
            if (visible) {
              setActiveSection(
                visible.target.id
              )
            }
          },
          {
            rootMargin:
              '-30% 0px -55% 0px',
            threshold: [
              0,
              0.1,
              0.25,
              0.5,
            ],
          }
        )
  
      elements.forEach((element) =>
        observer.observe(element)
      )
  
      return () => {
        observer.disconnect()
      }
    }, [])
  
    const closeMenu = () => {
      setMenuOpen(false)
    }
  
    const getHref = (
      section: string
    ) => {
      return window.location.pathname === '/'
        ? `#${section}`
        : `/#${section}`
    }
  
    return (
      <header className="navbar-wrapper">
        <nav className="navbar">
          <a
            href="/"
            className="logo"
            onClick={closeMenu}
          >
            VARENYA AGGARWAL
          </a>
  
          <div className="nav-links desktop-nav">
            {sections.map((section) => (
              <a
                key={section}
                href={getHref(section)}
                className={
                  activeSection === section
                    ? 'active'
                    : ''
                }
              >
                {section
                  .charAt(0)
                  .toUpperCase() +
                  section.slice(1)}
              </a>
            ))}
          </div>
  
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="nav-resume desktop-nav"
            data-cursor="RESUME"
          >
            Resume ↗
          </a>
  
          <button
            className={`menu-button ${
              menuOpen
                ? 'active'
                : ''
            }`}
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            aria-label="Toggle navigation"
          >
            <span />
            <span />
          </button>
        </nav>
  
        <div
          className={`mobile-menu ${
            menuOpen
              ? 'open'
              : ''
          }`}
        >
          {sections.map((section) => (
            <a
              key={section}
              href={getHref(section)}
              onClick={closeMenu}
            >
              {section
                .charAt(0)
                .toUpperCase() +
                section.slice(1)}
            </a>
          ))}
  
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Resume ↗
          </a>
        </div>
      </header>
    )
  }
  
  export default Navbar