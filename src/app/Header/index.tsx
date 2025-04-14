"use client";

import { useState, useEffect, useRef } from "react";
import "./header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
            <a href="#about" onClick={toggleMenu}>About</a>
            <a href="#education" onClick={toggleMenu}>Education</a>
            <a href="#experience" onClick={toggleMenu}>Experience</a>
            <a href="#skills" onClick={toggleMenu}>Skills</a>
            <a href="#volunteering" onClick={toggleMenu}>Volunteering</a>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}