import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

// Admin
import { AdminAuthProvider, RequireAdmin } from "./admin/AdminAuthContext";
import AdminLogin from "./admin/AdminLogin";
import AdminLayout from "./admin/AdminLayout";
import AdminProjects from "./admin/AdminProjects";

// Context
import { PopupProvider } from "./context/PopupContext";

function App() {
  return (
    <PopupProvider>
      <AdminAuthProvider>
        <Router>
          <ScrollToTop />

          {/* NAVBAR */}
          <Navbar />

          {/* ROUTES */}
          <Routes>
            {/* Public */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />

            {/* Admin */}
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
          </Routes>

          {/* FOOTER */}
          <Footer />

          {/* GLOBAL POPUP */}
          <QuotePopup />
        </Router>
      </AdminAuthProvider>
    </PopupProvider>
  );
}

export default App;