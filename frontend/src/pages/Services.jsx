import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Wrench, Settings, CheckCircle, Phone, ChevronRight } from 'lucide-react';
import { services, siteInfo } from '../data/mock';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

const Services = () => {
  const { t } = useLanguage();
  
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Search': return Search;
      case 'Wrench': return Wrench;
      case 'Settings': return Settings;
      case 'CheckCircle': return CheckCircle;
      default: return Wrench;
    }
  };

  // Create services array with translations
  const translatedServices = [
    {
      id: 1,
      title: t.services.service1Title,
      description: t.services.service1Desc,
      icon: 'Search',
      image: services[0].image
    },
    {
      id: 2,
      title: t.services.service2Title,
      description: t.services.service2Desc,
      icon: 'Wrench',
      image: services[1].image
    },
    {
      id: 3,
      title: t.services.service3Title,
      description: t.services.service3Desc,
      icon: 'Settings',
      image: services[2].image
    },
    {
      id: 4,
      title: t.services.service4Title,
      description: t.services.service4Desc,
      icon: 'CheckCircle',
      image: services[3].image
    },
    {
      id: 5,
      title: t.services.service5Title,
      description: t.services.service5Desc,
      icon: 'Wrench',
      image: services[4].image
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead page="services" />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t.services.title}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {translatedServices.map((service) => {
              const IconComponent = getIcon(service.icon);
              
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                    {/* Image */}
                    <div className="md:col-span-2 h-64 md:h-auto">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="md:col-span-3 p-8">
                      <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                        <IconComponent className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <a
                        href={siteInfo.phoneLink}
                        className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group/link"
                      >
                        <span>{t.common.orderNow}</span>
                        <ChevronRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Includes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.services.includesTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.services.includesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: t.services.include1Title, desc: t.services.include1Desc, icon: '🔍' },
              { title: t.services.include2Title, desc: t.services.include2Desc, icon: '⚡' },
              { title: t.services.include3Title, desc: t.services.include3Desc, icon: '✓' },
              { title: t.services.include4Title, desc: t.services.include4Desc, icon: '👨\u200D🔧' },
              { title: t.services.include5Title, desc: t.services.include5Desc, icon: '🛡️' },
              { title: t.services.include6Title, desc: t.services.include6Desc, icon: '💰' }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.services.pricingTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.services.pricingSubtitle}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t.services.averagePrices}
                </h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">{t.services.price1}</span>
                    <span className="font-bold text-blue-600">{t.services.price1Value}</span>
                  </li>
                  <li className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">{t.services.price2}</span>
                    <span className="font-bold text-gray-900">{t.services.price2Value}</span>
                  </li>
                  <li className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">{t.services.price3}</span>
                    <span className="font-bold text-gray-900">{t.services.price3Value}</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">{t.services.price4}</span>
                    <span className="font-bold text-gray-900">{t.services.price4Value}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">
                  {t.services.getPrice}
                </h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  {t.services.getPriceDesc}
                </p>
                <a
                  href={siteInfo.phoneLink}
                  className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl w-full justify-center"
                >
                  <Phone className="w-5 h-5" />
                  <span>{t.common.callNow}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.services.ctaTitle}
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            {t.services.ctaSubtitle}
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
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-white"
            >
              {t.common.onlineRequest}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
