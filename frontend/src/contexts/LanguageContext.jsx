import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations, boilerTranslationsRu } from '../data/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // Get initial language from localStorage or default to 'uz'
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('serviceplyus_language');
    return savedLang || 'uz';
  });

  // Save language preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('serviceplyus_language', language);
    // Update document lang attribute for SEO
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'uz' ? 'ru' : 'uz');
  };

  const t = translations[language];
  
  // Helper function to get boiler brand translations
  const getBoilerTranslation = (slug) => {
    if (language === 'ru' && boilerTranslationsRu[slug]) {
      return boilerTranslationsRu[slug];
    }
    return null; // Will fall back to Uzbek from mock.js
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t,
    getBoilerTranslation
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
