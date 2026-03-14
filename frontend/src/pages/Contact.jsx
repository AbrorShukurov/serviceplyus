import React, { useState } from 'react';
import { Phone, MapPin, Clock, Send } from 'lucide-react';
import { siteInfo, submitContactForm } from '../data/mock';
import { toast } from 'sonner';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error(t.contact.errorMessage || 'Iltimos, barcha maydonlarni to\'ldiring');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        toast.success(result.message);
        setFormData({ name: '', phone: '' });
      }
    } catch (error) {
      toast.error(t.contact.errorSubmit || 'Xatolik yuz berdi. Qayta urinib ko\'ring.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <SEOHead page="contact" />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t.contact.title}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t.contact.contactInfo}
              </h2>

              <div className="space-y-6 mb-12">
                {/* Phone */}
                <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-7 h-7 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {t.contact.phoneTitle}
                    </h3>
                    <a
                      href={siteInfo.phoneLink}
                      className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      {siteInfo.phone}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      {t.contact.phoneSubtitle}
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-7 h-7 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {t.contact.locationTitle}
                    </h3>
                    <p className="text-gray-700">
                      {t.contact.locationText}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {t.contact.locationSubtext}
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-7 h-7 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {t.contact.hoursTitle}
                    </h3>
                    <p className="text-2xl font-bold text-gray-900">
                      {t.contact.hoursText}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {t.contact.hoursSubtext}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t.contact.socialTitle}
                </h3>
                <div className="flex space-x-4">
                  <a
                    href={siteInfo.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 3.779-1.362 5.016-.168.523-.5.697-.819.715-.696.064-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.248-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.244-1.349-.374-1.297-.788.027-.216.324-.437.892-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.154.232.17.326.016.094.036.308.02.475z"/>
                    </svg>
                    <span className="font-semibold">{t.common.telegram}</span>
                  </a>
                  
                  <a
                    href={siteInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="font-semibold">{t.common.instagram}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {t.contact.formTitle}
                </h2>
                <p className="text-gray-600 mb-8">
                  {t.contact.formSubtitle}
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition-colors outline-none"
                      placeholder={t.contact.namePlaceholder}
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      {t.contact.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition-colors outline-none"
                      placeholder={t.contact.phonePlaceholder}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-3 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>{t.contact.submitting}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6" />
                        <span>{t.contact.submitButton}</span>
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    {t.contact.submitNote}
                  </p>
                </form>
              </div>

              {/* Quick Call */}
              <div className="mt-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-6 text-center">
                <p className="text-lg mb-4">
                  {t.contact.quickCall}
                </p>
                <a
                  href={siteInfo.phoneLink}
                  className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>{siteInfo.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center">
            <div>
              <div className="text-3xl font-bold mb-2">{t.contact.banner1}</div>
              <div className="text-blue-100">{t.contact.banner1Label}</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{t.contact.banner2}</div>
              <div className="text-blue-100">{t.contact.banner2Label}</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{t.contact.banner3}</div>
              <div className="text-blue-100">{t.contact.banner3Label}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
