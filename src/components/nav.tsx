import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

function Nav(): JSX.Element {
  const [isMenuToggled, setMenuToggled] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [isProjectPage, setProjectPage] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const toggleMenu = (): void => {
    setMenuToggled(!isMenuToggled);
  };

  const checkForProjectClass = (): void => {
    const isProjectPage = document.querySelector('.project') !== null;
    setProjectPage(isProjectPage);
  };

  useEffect(() => {
    checkForProjectClass();

    const handleClickOutside = (event: MouseEvent): void => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuToggled(false);
      }
    };

    const handleScroll = (): void => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [location]);

  useEffect(() => {
    if (isProjectPage) {
      navRef.current?.classList.add('hide');
    } else {
      navRef.current?.classList.remove('hide');
    }
  }, [isProjectPage]);

  return (
    <nav
      ref={navRef}
      className={`nav ${isMenuToggled ? 'active' : ''} ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="nav-bar grid container">
        <a href='/' className='col-s'><span>Kenneth Chan</span></a>
        <span className='col-s menu-toggle' onClick={toggleMenu}>
          {isMenuToggled ? 'Close' : 'Menu'}
        </span>
      </div>

      <div className="menu-wrap grid container">
        <div className="menu list col-xl">
          <div className="list menu-nav">
            <Link to="/work" className="menu-nav-item" onClick={toggleMenu}>
              <h1>Work</h1>
            </Link>
            <a className="menu-nav-item coming-soon" onClick={toggleMenu}>
              <h1>About</h1>
            </a>
            <a className="menu-nav-item coming-soon" onClick={toggleMenu}>
              <h1>Contact</h1>
            </a>
          </div>
          <div className="list">
            <span className="list-item">Instagram</span>
            <span className="list-item">Behance</span>
            <a href="https://www.linkedin.com/in/kennchann/"><span className="list-item">LinkedIn</span></a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;