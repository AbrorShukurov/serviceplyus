import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { LanguageProvider } from "./contexts/LanguageContext";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import BoilerBrandPage from "./pages/BoilerBrandPage";
import ServicePage from "./pages/ServicePage";
import PricingPage from "./pages/PricingPage";
import BlogPage from "./pages/BlogPage";
import BlogArticlePage from "./pages/BlogArticlePage";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Service Pages */}
              <Route path="/xizmatlar/:slug" element={<ServicePage />} />
              
              {/* Pricing Page */}
              <Route path="/narxlar" element={<PricingPage />} />
              
              {/* Blog Pages */}
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogArticlePage />} />
              
              {/* Boiler Brand Pages */}
              <Route path="/katyollar/:slug" element={<BoilerBrandPage />} />
            </Routes>
          </main>
          <Footer />
          <Toaster position="top-center" richColors />
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;
