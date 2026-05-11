import { Link } from "react-router"
import './Navbar.css'
import {useState, useEffect, useRef} from "react"

function Navbar () {
  const  [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const menuButtonRef = useRef(null)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // focus trap ja scrollauksen esto kun menu on auki
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      
      setTimeout(() => {
        const firstFocusable = menuRef.current?.querySelector('a, [role="button"], button')
        firstFocusable?.focus()
      }, 0)
    } else {
      document.body.style.overflow = 'unset'
      menuButtonRef.current?.focus()
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // esc sulkee menun
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  // focus trap
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen || e.key !== 'Tab') return

      const focusableElements = menuRef.current?.querySelectorAll('a, [role="button"], button')
      if (!focusableElements || focusableElements.length === 0) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]
      const activeElement = document.activeElement

      if (e.shiftKey) {
        if (activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      } else {
        if (activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <nav className="navbar">
      <Link to="/"><img src="/navlogo.png" alt="Go to Helsinkithings homepage"></img></Link>
      <div className="navbar-list">
        <div className="navbar-item">
          <Link to="/">Home</Link>
        </div>
        <div className="navbar-item">
          <Link to="/about">About</Link>
        </div>
      </div>
      <button ref={menuButtonRef}
      onClick={toggleMenu} 
      className={`mobile-nav-button ${isOpen ? "open" : ""}`} 
      aria-label="Menu"
      aria-expanded={isOpen}>
        <div className="menu-button-line"></div>
        <div className="menu-button-line"></div>
      </button>
      <div ref={menuRef} className={`nav-container ${isOpen ? "open" : ""}`} role="dialog" aria-modal="true" aria-label="Mobile menu" aria-hidden={!isOpen}>
        <div className="mobile-nav-list">
          <div onClick={toggleMenu} className="mobile-nav-item">
            <Link to="/" tabIndex={isOpen ? 0 : -1}>Home</Link>
          </div>
          <div onClick={toggleMenu} className="mobile-nav-item">
            <Link to="/about" tabIndex={isOpen ? 0 : -1}>About</Link>
          </div>
          <div onClick={toggleMenu} className="mobile-nav-item">
            <a href="https://payhip.com/helsinkithings" target="_blank" rel="noopener noreferrer" tabIndex={isOpen ? 0 : -1}>Our E-books</a>
          </div>
          <div onClick={toggleMenu} className="mobile-nav-item">
            <a href="mailto:helsinkithings@gmail.com" tabIndex={isOpen ? 0 : -1}>Contact us</a>
          </div>
        </div>
      </div>
    </nav>
  )

}

export default Navbar