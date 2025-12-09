import { Link } from "react-router-dom";
import zaykenLogo from "../assets/zayken_projects_logo.svg";
import { usePopup } from "../context/PopupContext";

export default function Navbar() {
  const { openQuote } = usePopup();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap px-6 sm:px-10 lg:px-20 py-4 bg-white/80 backdrop-blur-sm border-b border-gray-200">

      {/* ⭐ LOGO + TEXT */}
 <div className="flex items-center gap-3 text-brand-navy">
  <img
    src={zaykenLogo}
    alt="Zayken Projects logo"
    className="h-12 w-auto -mt-2"
  />

  <h3 className="font-bold text-xl text-dark-charcoal -ml-5">
    Zayken <span className="font-light">Projects</span>
  </h3>
</div>


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

        <button className="md:hidden text-brand-navy">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </header>
  );
}






