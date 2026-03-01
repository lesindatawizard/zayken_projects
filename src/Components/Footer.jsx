import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import ZaykenLogo from "../assets/zayken_projects_logo.svg"; 

function useSocialLinks() {
  const [links, setLinks] = useState(null);

  useEffect(() => {
    const settingsRef = doc(db, "siteSettings", "social");
    const unsubscribe = onSnapshot(
      settingsRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setLinks(snapshot.data());
        } else {
          setLinks({});
        }
      },
      (err) => {
        console.error("Failed to listen to social settings", err);
        setLinks({});
      }
    );

    return () => unsubscribe();
  }, []);

  return links || {};
}

export default function Footer() {
  const { facebookUrl, instagramUrl, linkedinUrl } = useSocialLinks();

  return (
    <footer className="text-dark-charcoal dark:text-white/70 py-6 mt-6 border-t border-gray-200 dark:border-white/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div>
  {/* Logo + Name */}
  <Link to="/" className="flex items-center gap-3 mb-1 text-brand-navy cursor-pointer w-fit">
    <img
      src={ZaykenLogo}
      alt="Zayken Projects Logo"
      className="h-12 w-auto -mt-2"
    />

    <h3 className="font-bold text-xl text-dark-charcoal dark:text-white -ml-5">
      Zayken <span className="font-light">Projects</span>
    </h3>
  </Link>

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

              {/* Facebook */}
              {facebookUrl && (
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Zayken Projects on Facebook"
                  className="text-[#1877F2] hover:text-[#145bc0] cursor-pointer transition-transform hover:scale-110"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                  </svg>
                </a>
              )}

              {/* Instagram */}
              {instagramUrl && (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Zayken Projects on Instagram"
                  className="text-[#E1306C] hover:text-[#c1265a] cursor-pointer transition-transform hover:scale-110"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 3.5A4.505 4.505 0 007.5 12 4.505 4.505 0 0012 16.5 4.505 4.505 0 0016.5 12 4.505 4.505 0 0012 7.5zm0 2A2.503 2.503 0 0114.5 12 2.503 2.503 0 0112 14.5 2.503 2.503 0 019.5 12 2.503 2.503 0 0112 9.5zM17.25 6.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
                  </svg>
                </a>
              )}

              {/* LinkedIn */}
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Zayken Projects on LinkedIn"
                  className="text-[#0A66C2] hover:text-[#084f96] cursor-pointer transition-transform hover:scale-110"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM8.339 18.339H5.661V9h2.678v9.339zM7 7.661A1.661 1.661 0 117 4.339a1.661 1.661 0 010 3.322zM18.339 18.339h-2.677v-4.839c0-1.154-.023-2.639-1.609-2.639-1.61 0-1.856 1.259-1.856 2.556v4.922H9.521V9h2.569v1.274h.036c.358-.677 1.233-1.391 2.539-1.391 2.715 0 3.213 1.786 3.213 4.106v5.35z" />
                  </svg>
                </a>
              )}

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

