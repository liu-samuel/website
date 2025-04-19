"use client";

import { useState, useEffect, useRef } from "react";
import "./header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    
    if (href?.startsWith('#')) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const headerHeight = document.querySelector('.header')?.clientHeight || 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        setMenuOpen(false);
      }
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <h2>Joanna Kil</h2>
      <div className="hamburger-menu" ref={menuRef}>
        <button className="hamburger-button" onClick={toggleMenu}>
          <span className={`hamburger-icon ${menuOpen ? 'open' : ''}`}></span>
        </button>
        
        <div className="dropdown-container">
          <nav className={`nav-menu dropdown ${menuOpen ? 'open' : ''}`}>
            <a href="#about" onClick={handleNavClick}>About</a>
            <a href="#education" onClick={handleNavClick}>Education</a>
            <a href="#experience" onClick={handleNavClick}>Experience</a>
            <a href="#skills" onClick={handleNavClick}>Skills</a>
            <a href="#volunteering" onClick={handleNavClick}>Volunteering</a>
            <a href="#contact" onClick={handleNavClick}>Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}