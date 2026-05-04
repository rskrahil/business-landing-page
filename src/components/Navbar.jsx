import { useState } from "react";
import { useScrolled } from "../hooks";
import { NAV_LINKS } from "../data";
import "../styles/Navbar.css";

export default function Navbar() {
  const scrolled    = useScrolled();
  const [active, setActive]     = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (item) => {
    setActive(item);
    setMenuOpen(false);
    const id = item === "Home" ? "home" : item.toLowerCase();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        {/* Logo */}
        <span className="navbar-logo" onClick={() => scrollTo("Home")}>
          IZU<span>Solutions</span>
        </span>

        {/* Desktop links */}
        <ul className="navbar-links desktop-nav">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                className={active === link ? "active" : ""}
                onClick={() => scrollTo(link)}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" className="btn btn-orange" onClick={() => setMenuOpen(false)}>
          Schedule a Call
        </a>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                transform: menuOpen
                  ? i === 0 ? "translateY(7px) rotate(45deg)"
                  : i === 2 ? "translateY(-7px) rotate(-45deg)"
                  : ""
                  : "",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "" : "closed"}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link === "Home" ? "home" : link.toLowerCase()}`}
            onClick={() => scrollTo(link)}
          >
            {link}
          </a>
        ))}
        <a href="#contact" className="btn btn-orange" onClick={() => setMenuOpen(false)}>
          Schedule a Call
        </a>
      </div>
    </>
  );
}
