import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Phone, Wrench, CheckCircle, AlertCircle, ChevronRight } from 'lucide-react';
import { boilerBrands, siteInfo } from '../data/mock';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

const BoilerBrandPage = () => {
  const { slug } = useParams();
  const { t, language, getBoilerTranslation } = useLanguage();
  const brand = boilerBrands.find(b => b.slug === slug);

  // If brand not found, redirect to home
  if (!brand) {
    return <Navigate to="/" replace />;
  }

  // Get Russian translation if available
  const boilerTrans = getBoilerTranslation(slug);
  const description = boilerTrans?.description || brand.description;
  const problems = boilerTrans?.problems || brand.commonProblems;

  // Get 4 random images for the brand (cycling through available images)
  const brandImages = [
    brand.image,
    "https://images.unsplash.com/photo-1594233078955-e1f73a02ebb2",
    "https://images.unsplash.com/photo-1618826470964-f6f8b3ae52aa",
    "https://images.unsplash.com/photo-1658758904121-ee49fc5e205c",
    "https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg",
    "https://images.pexels.com/photos/7736158/pexels-photo-7736158.jpeg"
  ].slice(0, 6);

  return (
    <div className="min-h-screen pt-20">
      <SEOHead page="boiler" slug={slug} />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {brand.name} {t.boiler.titleSuffix}
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {language === 'uz' ? 'Professional' : 'Профессиональный'} {brand.name} {t.boiler.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href={siteInfo.phoneLink}
                  className="flex items-center justify-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>{t.common.callMaster}</span>
                </a>
                <Link
                  to="/contact"
                  className="flex items-center justify-center space-x-2 bg-blue-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition-all duration-300 border-2 border-white"
                >
                  <span>{t.common.submitRequest}</span>
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src={brand.image}
                alt={`${brand.name} ${t.boiler.titleSuffix}`}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {brand.name} {t.boiler.aboutTitle}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {description}
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-700 font-medium">
                    {t.boiler.aboutNote.replace('{brand}', brand.name)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {brand.name} {t.boiler.problemsTitle}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">
                      {problem}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-700 leading-relaxed">
                <strong>{language === 'uz' ? 'Muammo ko\'rdingizmi?' : 'Обнаружили проблему?'}</strong> {t.boiler.problemNote.replace('{brand}', brand.name)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for this Brand */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t.boiler.servicesTitle} {brand.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: t.boiler.service1Title, desc: t.boiler.service1Desc.replace('{brand}', brand.name) },
                { title: t.boiler.service2Title, desc: t.boiler.service2Desc },
                { title: t.boiler.service3Title, desc: t.boiler.service3Desc },
                { title: t.boiler.service4Title, desc: t.boiler.service4Desc },
                { title: t.boiler.service5Title, desc: t.boiler.service5Desc },
                { title: t.boiler.service6Title, desc: t.boiler.service6Desc }
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100 hover:border-blue-300 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Wrench className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {brand.name} {t.boiler.galleryTitle}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {brandImages.map((image, index) => (
                <div
                  key={index}
                  className="aspect-w-16 aspect-h-12 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <img
                    src={image}
                    alt={`${brand.name} ${index + 1}`}
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {brand.name} {t.boiler.ctaTitle}
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            {t.boiler.ctaSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href={siteInfo.phoneLink}
              className="flex items-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              <span>{t.common.callMaster}</span>
            </a>
            
            <Link
              to="/contact"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-white"
            >
              {t.common.onlineRequest}
            </Link>
          </div>

          <div className="mt-12">
            <p className="text-blue-100 mb-4">{t.boiler.otherBrands}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {boilerBrands.filter(b => b.slug !== slug).slice(0, 6).map((otherBrand) => (
                <Link
                  key={otherBrand.slug}
                  to={`/katyollar/${otherBrand.slug}`}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg transition-colors"
                >
                  {otherBrand.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BoilerBrandPage;
