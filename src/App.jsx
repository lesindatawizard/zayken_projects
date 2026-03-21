import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

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

function AppContent() {
  const location = useLocation();
  const publicPaths = ["/", "/about", "/projects", "/services", "/contact"];
  const isAdminPath = location.pathname.startsWith("/admin");
  const isKnownPublicPath = publicPaths.includes(location.pathname);
  const showShell = isAdminPath || isKnownPublicPath;

  return (
    <>
      {showShell && <Navbar />}

      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin */}
        <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/projects"
          element={
            <RequireAdmin>
              <AdminLayout>
                <AdminProjects />
              </AdminLayout>
            </RequireAdmin>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <RequireAdmin>
              <AdminLayout>
                <AdminSettings />
              </AdminLayout>
            </RequireAdmin>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

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