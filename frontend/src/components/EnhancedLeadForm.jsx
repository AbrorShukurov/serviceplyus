import React, { useState } from 'react';
import { Send, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { siteInfo } from '../data/mock';
import axios from 'axios';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const EnhancedLeadForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service_type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    { value: '', label: t.contact.serviceTypePlaceholder },
    { value: 'diagnostika', label: t.home.servicePricing.diagnostics.name },
    { value: 'tozalash', label: t.home.servicePricing.cleaning.name },
    { value: 'klapan', label: t.home.servicePricing.threeWayValve.name },
    { value: 'turbina', label: t.home.servicePricing.turbine.name },
    { value: 'issiqlik', label: t.home.servicePricing.heatExchanger.name },
    { value: 'sensor', label: t.home.servicePricing.pressureSensor.name },
    { value: 'manostat', label: t.home.servicePricing.manostat.name },
    { value: 'shoshilinch', label: t.home.servicePricing.emergency.name }
  ];

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
      toast.error(t.contact.errorMessage || 'Iltimos, barcha majburiy maydonlarni to\'ldiring');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await axios.post(`${BACKEND_URL}/api/lead`, {
        name: formData.name,
        phone: formData.phone,
        service_type: formData.service_type,
        message: formData.message
      });
      
      if (response.data.success) {
        toast.success(response.data.message || 'Arizangiz qabul qilindi!');
        setFormData({ name: '', phone: '', service_type: '', message: '' });
      } else {
        toast.error(response.data.message || 'Xatolik yuz berdi');
      }
    } catch (error) {
      console.error('Lead submission error:', error);
      toast.error(t.contact.errorSubmit || 'Xatolik yuz berdi. Qayta urinib ko\'ring.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t.contact.leadFormTitle || t.contact.formTitle}
              </h2>
              <p className="text-lg text-gray-600">
                {t.contact.leadFormSubtitle || t.contact.formSubtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="lead-name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    {t.contact.nameLabel} *
                  </label>
                  <input
                    type="text"
                    id="lead-name"
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
                    htmlFor="lead-phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    {t.contact.phoneLabel} *
                  </label>
                  <input
                    type="tel"
                    id="lead-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition-colors outline-none"
                    placeholder={t.contact.phonePlaceholder}
                    required
                  />
                </div>
              </div>

              {/* Service Type */}
              <div>
                <label
                  htmlFor="lead-service"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  {t.contact.serviceTypeLabel}
                </label>
                <select
                  id="lead-service"
                  name="service_type"
                  value={formData.service_type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition-colors outline-none bg-white"
                >
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="lead-message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  {t.contact.messageLabel}
                </label>
                <textarea
                  id="lead-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition-colors outline-none resize-none"
                  placeholder={t.contact.messagePlaceholder}
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 flex items-center justify-center space-x-3 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
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

                <a
                  href={siteInfo.phoneLink}
                  className="flex-1 flex items-center justify-center space-x-2 bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-6 h-6" />
                  <span>{t.common.callNow}</span>
                </a>
              </div>

              <p className="text-sm text-gray-500 text-center">
                {t.contact.submitNote}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedLeadForm;
