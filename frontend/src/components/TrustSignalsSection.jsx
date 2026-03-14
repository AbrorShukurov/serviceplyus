import React from 'react';
import { Clock, Search, Wrench, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TrustSignalsSection = () => {
  const { t } = useLanguage();

  const trustSignals = [
    {
      icon: Clock,
      title: t.home.trust1Title,
      description: t.home.trust1Desc,
      color: 'blue'
    },
    {
      icon: Search,
      title: t.home.trust2Title,
      description: t.home.trust2Desc,
      color: 'orange'
    },
    {
      icon: Shield,
      title: t.home.trust3Title,
      description: t.home.trust3Desc,
      color: 'blue'
    },
    {
      icon: Wrench,
      title: t.home.trust4Title,
      description: t.home.trust4Desc,
      color: 'orange'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.home.trustTitle}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t.home.trustSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustSignals.map((signal, index) => {
            const IconComponent = signal.icon;
            const bgColor = signal.color === 'orange' ? 'bg-orange-500' : 'bg-blue-500';
            
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${bgColor} rounded-lg flex items-center justify-center mb-6 mx-auto`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {signal.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-center">
                  {signal.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Trust Badges */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white">
            <div className="text-3xl font-bold mb-2">{t.home.averageRepairTime}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white">
            <div className="text-3xl font-bold mb-2">{t.home.paymentAfterRepair}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white">
            <div className="text-3xl font-bold mb-2">{t.home.discountWebsite}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignalsSection;
