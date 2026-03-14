import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChevronRight } from 'lucide-react';
import { heroContent, boilerBrands, siteInfo } from '../data/mock';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TrustSignalsSection from '../components/TrustSignalsSection';
import EnhancedLeadForm from '../components/EnhancedLeadForm';

const Home = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <SEOHead page="home" />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroContent.image}
            alt={t.home.heroTitle}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/75"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t.home.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
            {t.home.heroSubtitle}
          </p>
          <p className="text-lg text-blue-200 mb-10 max-w-2xl mx-auto">
            {t.home.heroDescription}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href={siteInfo.phoneLink}
              className="flex items-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">

              <Phone className="w-6 h-6" />
              <span>{t.common.callNow}</span>
            </a>
            
            <a
              href={siteInfo.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-white">

              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 3.779-1.362 5.016-.168.523-.5.697-.819.715-.696.064-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.248-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.244-1.349-.374-1.297-.788.027-.216.324-.437.892-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.154.232.17.326.016.094.036.308.02.475z" />
              </svg>
              <span>{t.common.telegram}</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-8 h-8 text-white rotate-90" />
        </div>
      </section>

      {/* Trust Signals Section - NEW */}
      <TrustSignalsSection />

      {/* Detailed Pricing Section - NEW */}
      <PricingSection />

      {/* Popular Brands Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.home.brandsTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.home.brandsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {boilerBrands.map((brand) => (
              <Link
                key={brand.slug}
                to={`/katyollar/${brand.slug}`}
                className="group bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 border-transparent hover:border-blue-200"
              >
                <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={brand.image}
                    alt={`${brand.name} ${t.home.brandsTitle.toLowerCase()}`}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center group-hover:text-blue-600 transition-colors">
                  {brand.name}
                </h3>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              {t.home.brandsMore}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>{t.common.freeConsultation}</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - NEW */}
      <TestimonialsSection />

      {/* Enhanced Lead Form - NEW */}
      <EnhancedLeadForm />

      {/* Trust & CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.home.ctaTitle}
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            {t.home.ctaSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href={siteInfo.phoneLink}
              className="flex items-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              <span>{siteInfo.phone}</span>
            </a>
            
            <Link
              to="/contact"
              className="flex items-center space-x-2 bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-white"
            >
              <span>{t.common.onlineRequest}</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">{t.home.stats1}</div>
              <div className="text-blue-100">{t.home.stats1Label}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">{t.home.stats2}</div>
              <div className="text-blue-100">{t.home.stats2Label}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">{t.home.stats3}</div>
              <div className="text-blue-100">{t.home.stats3Label}</div>
            </div>
          </div>
        </div>
      </section>
    </div>);

};

export default Home;