import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Global Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import QuotePopup from "./Components/QuotePopup";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";   // ⭐ NEWLY ADDED

// Context
import { PopupProvider } from "./context/PopupContext";

function App() {
  return (
    <PopupProvider>
      <Router>
        {/* NAVBAR */}
        <Navbar />

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> {/* ⭐ FIXED */}
        </Routes>

        {/* FOOTER */}
        <Footer />

        {/* GLOBAL POPUP */}
        <QuotePopup />
      </Router>
    </PopupProvider>
  );
}

export default App;