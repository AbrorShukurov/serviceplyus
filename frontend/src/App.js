import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
      <BrowserRouter>
        <LanguageProvider>
          <Navbar />
          <main>
            <Routes>
              {/* Default e */}
              <Route path="/" element={<Navigate to="/uz" replace />} />

              {/* Uzbek */}
              <Route path="/uz" element={<Home />} />
              <Route path="/uz/about" element={<About />} />
              <Route path="/uz/services" element={<Services />} />
              <Route path="/uz/contact" element={<Contact />} />
              <Route path="/uz/xizmatlar/:slug" element={<ServicePage />} />
              <Route path="/uz/narxlar" element={<PricingPage />} />
              <Route path="/uz/blog" element={<BlogPage />} />
              <Route path="/uz/blog/:slug" element={<BlogArticlePage />} />
              <Route path="/uz/katyollar/:slug" element={<BoilerBrandPage />} />

              {/* Russian */}
              <Route path="/ru" element={<Home />} />
              <Route path="/ru/about" element={<About />} />
              <Route path="/ru/services" element={<Services />} />
              <Route path="/ru/contact" element={<Contact />} />
              <Route path="/ru/xizmatlar/:slug" element={<ServicePage />} />
              <Route path="/ru/narxlar" element={<PricingPage />} />
              <Route path="/ru/blog" element={<BlogPage />} />
              <Route path="/ru/blog/:slug" element={<BlogArticlePage />} />
              <Route path="/ru/katyollar/:slug" element={<BoilerBrandPage />} />

              {/* Invalid routes */}
              <Route path="*" element={<Navigate to="/uz" replace />} />
            </Routes>
          </main>
          <Footer />
          <Toaster position="top-center" richColors />
        </LanguageProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;