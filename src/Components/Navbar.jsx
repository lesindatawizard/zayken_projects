import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import zaykenLogo from "../assets/zayken_projects_logo.svg";
import { usePopup } from "../context/PopupContext";

export default function Navbar() {
  const { openQuote } = usePopup();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const panelRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleOutsideClick(e) {
      if (!isMobileMenuOpen || !panelRef.current) return;
      if (!panelRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMobileMenuOpen]);

  return (
    <>
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap px-6 sm:px-10 lg:px-20 py-4 bg-white/80 backdrop-blur-sm border-b border-gray-200">

      {/* ⭐ LOGO + TEXT */}
 <Link to="/" className="flex items-center gap-3 text-brand-navy cursor-pointer">
  <img
    src={zaykenLogo}
    alt="Zayken Projects logo"
    className="h-12 w-auto -mt-2"
  />

  <h3 className="font-bold text-xl text-dark-charcoal -ml-5">
    Zayken <span className="font-light">Projects</span>
  </h3>
</Link>


      <nav className="hidden md:flex items-center gap-8">
        <Link
          to="/"
          className="text-gray-700 text-base font-medium transition-all transform hover:scale-110 hover:text-brand-ocean-blue"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="text-gray-700 text-base font-medium transition-all transform hover:scale-110 hover:text-brand-ocean-blue"
        >
          About Us
        </Link>

        <Link
          to="/services"
          className="text-gray-700 text-base font-medium transition-all transform hover:scale-110 hover:text-brand-ocean-blue"
        >
          Services
        </Link>

        <Link
          to="/projects"
          className="text-gray-700 text-base font-medium transition-all transform hover:scale-110 hover:text-brand-ocean-blue"
        >
          Projects
        </Link>

        <Link
          to="/contact"
          className="text-gray-700 text-base font-medium transition-all transform hover:scale-110 hover:text-brand-ocean-blue"
        >
          Contact
        </Link>
      </nav>

      <div className="flex items-center">
        <button
          onClick={openQuote}
          className="hidden md:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden 
            rounded-lg h-10 px-5 bg-brand-ocean-blue text-white text-sm font-bold shadow-soft transition-transform hover:scale-105"
        >
          <span className="truncate">Get a Quote</span>
        </button>

        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden text-brand-navy"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </header>
    {isMobileMenuOpen && <div className="fixed inset-0 z-40 bg-black/30 md:hidden" />}
    <aside
      ref={panelRef}
      className={`fixed top-0 right-0 z-50 h-full w-[78%] max-w-xs bg-white shadow-2xl p-6 transition-transform duration-300 md:hidden ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900">Menu</h3>
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(false)}
          className="rounded-md p-2 text-gray-600 hover:bg-gray-100"
          aria-label="Close mobile menu"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <nav className="flex flex-col gap-4 text-base font-medium text-gray-800">
        <Link to="/" className="hover:text-brand-ocean-blue">Home</Link>
        <Link to="/about" className="hover:text-brand-ocean-blue">About Us</Link>
        <Link to="/services" className="hover:text-brand-ocean-blue">Services</Link>
        <Link to="/projects" className="hover:text-brand-ocean-blue">Projects</Link>
        <Link to="/contact" className="hover:text-brand-ocean-blue">Contact</Link>
      </nav>

      <button
        type="button"
        onClick={() => {
          setIsMobileMenuOpen(false);
          openQuote();
        }}
        className="mt-6 flex w-full items-center justify-center rounded-lg h-11 px-5 bg-brand-ocean-blue text-white text-sm font-bold shadow-soft"
      >
        Get a Quote
      </button>
    </aside>
    </>
  );
}






