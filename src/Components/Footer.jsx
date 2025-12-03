import { Link } from "react-router-dom";
import ZaykenLogo from "../assets/zayken_projects_logo.svg"; 

export default function Footer() {
  return (
    <footer className="text-dark-charcoal dark:text-white/70 py-6 mt-6 border-t border-gray-200 dark:border-white/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div>
  {/* Logo + Name */}
  <div className="flex items-center gap-3 mb-1 text-brand-navy">
    <img
      src={ZaykenLogo}
      alt="Zayken Projects Logo"
      className="h-12 w-auto -mt-2"
    />

    <h3 className="font-bold text-xl text-dark-charcoal dark:text-white -ml-5">
      Zayken <span className="font-light">Projects</span>
    </h3>
  </div>

  {/* Tagline — brought even closer */}
  <p className="text-sm -mt-1">
    Creating inspiring spaces with passion and precision.
  </p>
</div>


          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">

              <li>
                <Link className="hover:text-primary dark:hover:text-primary-light" to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link className="hover:text-primary dark:hover:text-primary-light" to="/about">
                  About Us
                </Link>
              </li>

              <li>
                <Link className="hover:text-primary dark:hover:text-primary-light" to="/services">
                  Services
                </Link>
              </li>

              <li>
                <Link className="hover:text-primary dark:hover:text-primary-light" to="/projects">
                  Projects
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="hover:text-primary dark:hover:text-primary-light"
                  href="mailto:info@zaykenprojects.com"
                >
                  info@zaykenprojects.com
                </a>
              </li>

              <li>
                <a
                  className="hover:text-primary dark:hover:text-primary-light"
                  href="tel:+1234567890"
                >
                  +968 9465 7347
                </a>
              </li>

              {/* ✅ Updated Address */}
              <li>Azaiba, House of Music, 3rd Floor, Office-308</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>

            <div className="flex space-x-4">

              <a className="hover:text-primary dark:hover:text-primary-light" href="#">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
                </svg>
              </a>

              <a className="hover:text-primary dark:hover:text-primary-light" href="#">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z" />
                </svg>
              </a>

              <a className="hover:text-primary dark:hover:text-primary-light" href="#">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM8.339 18.339H5.661V9h2.677v9.339zM7 7.661a1.551 1.551 0 110-3.102 1.551 1.551 0 010 3.102zM18.339 18.339h-2.677v-4.839c0-1.154-.023-2.639-1.609-2.639-1.61 0-1.856 1.259-1.856 2.556v4.922H9.521V9h2.569v1.274h.036c.358-.677 1.233-1.391 2.539-1.391 2.715 0 3.213 1.786 3.213 4.106v5.35z" />
                </svg>
              </a>

            </div>
          </div>

        </div>

        <div className="text-center text-sm mt-6 pt-6 border-t border-gray-200 dark:border-white/20">
          <p>© 2025 Zayken Projects. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

