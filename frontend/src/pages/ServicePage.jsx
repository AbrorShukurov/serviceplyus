import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, ChevronRight, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { siteInfo, services } from '../data/mock';
import SEOHead from '../components/SEOHead';
import EnhancedLeadForm from '../components/EnhancedLeadForm';

const ServicePage = () => {
  const { slug } = useParams();
  const { t } = useLanguage();
  
  // Get service data from translations
  const serviceData = t.servicePages?.[slug];
  const serviceInfo = services.find(s => s.slug === slug);
  
  // If service not found, show 404-like message
  if (!serviceData || !serviceInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Xizmat topilmadi</h1>
          <Link to="/" className="text-blue-600 hover:underline">Bosh sahifaga qaytish</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <SEOHead page="service" slug={slug} />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url(${serviceInfo.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-blue-200 mb-8 text-sm">
            <Link to="/" className="hover:text-white transition-colors">{t.nav.home}</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/services" className="hover:text-white transition-colors">{t.nav.services}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{serviceData.title}</span>
          </nav>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="service-hero-title">
                {serviceData.heroTitle}
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                {serviceData.heroSubtitle}
              </p>
              
              {/* Price & Duration badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                  <div className="text-2xl font-bold">{serviceData.price}</div>
                  <div className="text-blue-200 text-sm">{t.pricing?.tableHeaders?.price || 'Narxi'}</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <div>
                    <div className="font-semibold">{serviceData.duration}</div>
                    <div className="text-blue-200 text-sm">{t.pricing?.tableHeaders?.duration || 'Vaqti'}</div>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={siteInfo.phoneLink}
                  className="flex items-center justify-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all shadow-lg"
                  data-testid="service-call-btn"
                >
                  <Phone className="w-5 h-5" />
                  <span>{t.common.callNow}</span>
                </a>
                <a
                  href={siteInfo.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-blue-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-all border-2 border-white/30"
                  data-testid="service-telegram-btn"
                >
                  <span>{t.common.telegram}</span>
                </a>
              </div>
            </div>
            
            {/* Service Image */}
            <div className="hidden lg:block">
              <img
                src={serviceInfo.image}
                alt={serviceData.title}
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-600 leading-relaxed">
              {serviceData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t.services?.includesTitle || 'Xizmat nimalarni o\'z ichiga oladi?'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.features?.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-gray-700 font-medium">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            {t.about?.processTitle || 'Ish jarayoni'}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {t.about?.processSubtitle || 'Oddiy va samarali jarayon'}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.process?.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-gray-700">{step}</p>
                  </div>
                </div>
                {index < serviceData.process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-12 w-full h-0.5 bg-gray-200" style={{ width: 'calc(100% - 3rem)' }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t.home?.additionalServicesTitle || 'Boshqa xizmatlarimiz'}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.filter(s => s.slug !== slug).slice(0, 4).map((service) => {
              const otherServiceData = t.servicePages?.[service.slug];
              return (
                <Link
                  key={service.slug}
                  to={`/xizmatlar/${service.slug}`}
                  className="group bg-white rounded-xl p-4 hover:shadow-lg transition-all hover:-translate-y-1"
                  data-testid={`other-service-${service.slug}`}
                >
                  <img
                    src={service.image}
                    alt={otherServiceData?.title || service.slug}
                    className="w-full h-24 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm">
                    {otherServiceData?.title || service.slug}
                  </h3>
                  <div className="flex items-center text-blue-600 text-xs mt-2">
                    <span>{t.common?.learnMore || 'Batafsil'}</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <EnhancedLeadForm />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {serviceData.heroTitle}
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            {t.home?.ctaSubtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteInfo.phoneLink}
              className="flex items-center space-x-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>{siteInfo.phone}</span>
            </a>
            <Link
              to="/contact"
              className="flex items-center space-x-2 bg-orange-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-800 transition-all border-2 border-white/30"
            >
              <span>{t.common?.onlineRequest}</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
