import React from 'react';
import { DollarSign, Wrench } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { siteInfo } from '../data/mock';

const PricingSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      key: 'diagnostics',
      icon: '🔍'
    },
    {
      key: 'cleaning',
      icon: '🧹'
    },
    {
      key: 'threeWayValve',
      icon: '🔧'
    },
    {
      key: 'turbine',
      icon: '💨'
    },
    {
      key: 'heatExchanger',
      icon: '🔥'
    },
    {
      key: 'pressureSensor',
      icon: '📊'
    },
    {
      key: 'manostat',
      icon: '⚙️'
    },
    {
      key: 'emergency',
      icon: '🚨'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.home.pricingTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.home.pricingSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const serviceData = t.home.servicePricing[service.key];
            
            return (
              <div
                key={service.key}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {serviceData.name}
                </h3>
                
                <div className="flex items-baseline mb-3">
                  <span className="text-2xl font-bold text-orange-600">
                    {serviceData.price}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {serviceData.desc}
                </p>
                
                <a
                  href={siteInfo.phoneLink}
                  className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm"
                >
                  {t.common.orderNow}
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            {t.home.paymentAfterRepair}
          </p>
          <a
            href={siteInfo.phoneLink}
            className="inline-flex items-center space-x-2 bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <DollarSign className="w-6 h-6" />
            <span>{t.common.callNow}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
