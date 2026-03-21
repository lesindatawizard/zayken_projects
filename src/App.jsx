import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Global Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import QuotePopup from "./Components/QuotePopup";
import ScrollToTop from "./ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Admin
import { AdminAuthProvider, RequireAdmin } from "./admin/AdminAuthContext";
import AdminLogin from "./admin/AdminLogin";
import AdminLayout from "./admin/AdminLayout";
import AdminProjects from "./admin/AdminProjects";
import AdminSettings from "./admin/AdminSettings";

// Context
import { PopupProvider } from "./context/PopupContext";
import { pageTransition } from "./lib/motion";

function PageTransition({ children }) {
  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      {children}
    </motion.div>
  );
}

function AppContent() {
  const location = useLocation();
  const publicPaths = ["/", "/about", "/projects", "/services", "/contact"];
  const isAdminPath = location.pathname.startsWith("/admin");
  const isKnownPublicPath = publicPaths.includes(location.pathname);
  const showShell = isAdminPath || isKnownPublicPath;

  return (
    <>
      {showShell && <Navbar />}

      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public */}
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />

        {/* Admin */}
        <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
        <Route path="/admin/login" element={<PageTransition><AdminLogin /></PageTransition>} />
        <Route
          path="/admin/projects"
          element={
            <PageTransition>
              <RequireAdmin>
                <AdminLayout>
                  <AdminProjects />
                </AdminLayout>
              </RequireAdmin>
            </PageTransition>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <PageTransition>
              <RequireAdmin>
                <AdminLayout>
                  <AdminSettings />
                </AdminLayout>
              </RequireAdmin>
            </PageTransition>
          }
        />

        {/* 404 */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
      </AnimatePresence>

      {showShell && <Footer />}
      <QuotePopup />
    </>
  );
}

//Functions
function App() {
  return (
    <PopupProvider>
      <AdminAuthProvider>
        <Router>
          <ScrollToTop />
          <AppContent />
        </Router>
      </AdminAuthProvider>
    </PopupProvider>
  );
}

export default App;