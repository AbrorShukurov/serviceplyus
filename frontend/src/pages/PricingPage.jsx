import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { siteInfo, services } from '../data/mock';
import SEOHead from '../components/SEOHead';
import EnhancedLeadForm from '../components/EnhancedLeadForm';

const PricingPage = () => {
  const { t } = useLanguage();
  
  // Price data from service pages
  const priceData = [
    { 
      slug: 'diagnostika',
      category: 'diagnostics'
    },
    { 
      slug: 'tozalash',
      category: 'maintenance'
    },
    { 
      slug: 'uch-klapan',
      category: 'replacement'
    },
    { 
      slug: 'turbina',
      category: 'replacement'
    },
    { 
      slug: 'issiqlik-almashgich',
      category: 'replacement'
    },
    { 
      slug: 'bosim-sensori',
      category: 'replacement'
    },
    { 
      slug: 'manostat',
      category: 'replacement'
    },
    { 
      slug: 'shoshilinch',
      category: 'repair'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead page="pricing" />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-blue-200 mb-8 text-sm">
            <Link to="/" className="hover:text-white transition-colors">{t.nav.home}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{t.pricing?.title || 'Narxlar'}</span>
          </nav>
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="pricing-hero-title">
              {t.pricing?.heroTitle || 'Xizmat narxlari'}
            </h1>
            <p className="text-xl text-blue-100">
              {t.pricing?.heroSubtitle || 'Shaffof va adolatli narxlar'}
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <div className="text-2xl font-bold text-blue-600">{t.services?.price1Value || 'Bepul'}</div>
              <div className="text-gray-600 text-sm">{t.services?.price1 || 'Diagnostika'}</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600 text-sm">{t.home?.trust3Title || 'Ish tartibi'}</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-blue-600">6 {t.home?.stats3Label?.includes('oy') ? 'oy' : 'мес.'}</div>
              <div className="text-gray-600 text-sm">{t.home?.advantage2Title || 'Kafolat'}</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-blue-600">30-60</div>
              <div className="text-gray-600 text-sm">{t.home?.trust1Desc?.includes('daqiqa') ? 'daqiqada yetib kelish' : 'минут до приезда'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Table Header */}
            <div className="bg-blue-600 text-white px-6 py-4 grid grid-cols-3 gap-4 font-semibold">
              <div>{t.pricing?.tableHeaders?.service || 'Xizmat turi'}</div>
              <div className="text-center">{t.pricing?.tableHeaders?.price || 'Narxi'}</div>
              <div className="text-right">{t.pricing?.tableHeaders?.duration || 'Vaqti'}</div>
            </div>
            
            {/* Table Body */}
            <div className="divide-y divide-gray-100">
              {priceData.map((item, index) => {
                const servicePageData = t.servicePages?.[item.slug];
                if (!servicePageData) return null;
                
                return (
                  <Link
                    key={item.slug}
                    to={`/xizmatlar/${item.slug}`}
                    className={`px-6 py-5 grid grid-cols-3 gap-4 items-center hover:bg-blue-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                    data-testid={`pricing-row-${item.slug}`}
                  >
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="font-medium text-gray-900">{servicePageData.title}</span>
                    </div>
                    <div className="text-center">
                      <span className="font-bold text-blue-600">{servicePageData.price}</span>
                    </div>
                    <div className="text-right flex items-center justify-end space-x-2">
                      <span className="text-gray-600">{servicePageData.duration}</span>
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          
          {/* Note */}
          <p className="text-gray-500 text-sm text-center mt-6 max-w-2xl mx-auto">
            {t.pricing?.note || '* Aniq narx diagnostikadan keyin aniqlanadi'}
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t.services?.title || 'Bizning xizmatlarimiz'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 8).map((service) => {
              const servicePageData = t.servicePages?.[service.slug];
              if (!servicePageData) return null;
              
              return (
                <Link
                  key={service.slug}
                  to={`/xizmatlar/${service.slug}`}
                  className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                  data-testid={`service-card-${service.slug}`}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={servicePageData.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                      {servicePageData.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-semibold text-sm">{servicePageData.price}</span>
                      <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.pricing?.cta?.title || 'Aniq narxni bilmoqchimisiz?'}
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            {t.pricing?.cta?.subtitle || 'Bepul diagnostika buyurtma qiling'}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteInfo.phoneLink}
              className="flex items-center space-x-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition-all shadow-lg"
              data-testid="pricing-call-btn"
            >
              <Phone className="w-5 h-5" />
              <span>{siteInfo.phone}</span>
            </a>
            <Link
              to="/contact"
              className="flex items-center space-x-2 bg-orange-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-800 transition-all border-2 border-white/30"
              data-testid="pricing-contact-btn"
            >
              <span>{t.pricing?.cta?.button || t.common?.onlineRequest}</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <EnhancedLeadForm />
    </div>
  );
};

export default PricingPage;
