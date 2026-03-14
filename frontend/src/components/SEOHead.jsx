import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// SEO Meta data for all pages - bilingual (UZ/RU)
export const seoData = {
  uz: {
    home: {
      title: "ServicePlyus - Katyol Ta'mirlash Toshkentda | Gaz Kotlov Remonti 24/7",
      description: "Toshkentda professional katyol ta'mirlash xizmati. Gaz kotlov remonti, diagnostika va texnik xizmat. 24/7 tezkor chiqish, 6 oylik kafolat. ☎ +998 92 070 54 54",
      keywords: "katyol ta'mirlash, gaz kotlov remonti, katyol remont Toshkent, remont kotlov, katyol diagnostikasi, katyol texnik xizmat"
    },
    about: {
      title: "Biz Haqimizda | ServicePlyus - Katyol Ta'mirlash Toshkentda",
      description: "ServicePlyus - 10+ yillik tajribaga ega katyol ta'mirlash kompaniyasi. Professional ustalar, barcha brendlarni ta'mirlash, kafolat xizmati.",
      keywords: "ServicePlyus haqida, katyol ustasi Toshkent, professional katyol ta'mirlash"
    },
    services: {
      title: "Xizmatlar | Katyol Ta'mirlash va Texnik Xizmat - ServicePlyus",
      description: "Katyol diagnostikasi, ta'mirlash, tozalash, ehtiyot qismlar almashtirish. Barcha xizmatlar narxlari. Bepul diagnostika!",
      keywords: "katyol xizmatlari, katyol tozalash, katyol diagnostikasi, ehtiyot qismlar"
    },
    pricing: {
      title: "Narxlar | Katyol Ta'mirlash Narxlari Toshkentda - ServicePlyus",
      description: "Katyol ta'mirlash xizmat narxlari: diagnostika bepul, tozalash 450,000 so'mdan, ta'mirlash 400,000 so'mdan. Shaffof va adolatli narxlar.",
      keywords: "katyol ta'mirlash narxi, remont kotlov tsena, katyol tozalash narxi"
    },
    blog: {
      title: "Blog | Katyol Haqida Foydali Maqolalar - ServicePlyus",
      description: "Katyolni qanday to'g'ri saqlash, yangi katyol tanlash, qishga tayyorgarlik. Professional maslahatlar va foydali maqolalar.",
      keywords: "katyol haqida, katyol maslahatlar, katyol saqlash, katyol tanlash"
    },
    contact: {
      title: "Aloqa | Katyol Ta'mirlash Uchun Qo'ng'iroq Qiling - ServicePlyus",
      description: "Katyol ta'mirlash uchun qo'ng'iroq qiling: +998 92 070 54 54. Telegram: @Umidserviceplyus. 24/7 xizmatdamiz. Toshkent bo'ylab tezkor chiqish.",
      keywords: "katyol ta'mirlash telefon, ServicePlyus aloqa, katyol usta chaqirish"
    },
    servicePages: {
      diagnostika: {
        title: "Katyol Diagnostikasi Toshkentda | Bepul Tekshirish - ServicePlyus",
        description: "Professional katyol diagnostikasi - nosozliklarni aniq aniqlash. Zamonaviy uskunalar, yozma hisobot. 400,000 so'mdan. ☎ +998 92 070 54 54",
        keywords: "katyol diagnostikasi, katyol tekshirish, gaz kotlov diagnostika"
      },
      tozalash: {
        title: "Katyol Tozalash va Texnik Xizmat | ServicePlyus Toshkent",
        description: "Katyol tozalash, issiqlik almashinuvchi tozalash, profilaktika. 450,000 so'mdan. Katyol samaradorligini oshiring!",
        keywords: "katyol tozalash, katyol profilaktika, issiqlik almashinuvchi tozalash"
      },
      "uch-klapan": {
        title: "Uch Yo'nalishli Klapan Almashtirish | Katyol Ta'mirlash - ServicePlyus",
        description: "Uch yo'nalishli klapan ta'mirlash va almashtirish. Asl ehtiyot qismlar, kafolat bilan. 450,000 so'mdan.",
        keywords: "uch yo'nalishli klapan, katyol klapan almashtirish, trexkhodovoy klapan"
      },
      turbina: {
        title: "Turbina Ta'mirlash | Turbo Ventilyator Almashtirish - ServicePlyus",
        description: "Katyol turbinasi ta'mirlash va almashtirish. Shovqin muammolarini hal qilish. 850,000 so'mdan. Professional xizmat.",
        keywords: "katyol turbina, turbo ventilyator, katyol fan ta'mirlash"
      },
      "issiqlik-almashgich": {
        title: "Issiqlik Almashinuvchi Almashtirish | ServicePlyus Toshkent",
        description: "Katyol issiqlik almashinuvchi almashtirish. Yuqori sifatli qismlar, professional o'rnatish. 1,300,000 so'mdan.",
        keywords: "issiqlik almashinuvchi, teploobmennik almashtirish, katyol teploobmennik"
      },
      "bosim-sensori": {
        title: "Bosim Sensori Almashtirish | Katyol Sensor Ta'mirlash - ServicePlyus",
        description: "Suv bosimi sensori almashtirish va kalibrovka. Asl sensorlar, tezkor xizmat. 250,000 so'mdan.",
        keywords: "bosim sensori, katyol sensor, datchik davleniya"
      },
      manostat: {
        title: "Manostat Almashtirish | Havo Bosimi Datchigi - ServicePlyus",
        description: "Manostat (havo bosimi datchigi) almashtirish. Katyol yonmasa - bizga qo'ng'iroq qiling! 380,000 so'mdan.",
        keywords: "manostat, havo bosimi datchigi, katyol manostat"
      },
      shoshilinch: {
        title: "Shoshilinch Katyol Ta'mirlash 24/7 | Tezkor Chiqish - ServicePlyus",
        description: "24/7 shoshilinch katyol ta'mirlash. 30-60 daqiqada yetib kelish. Tungi va dam olish kunlari ham ishlaymiz!",
        keywords: "shoshilinch katyol ta'mirlash, katyol ta'mirlash 24/7, tezkor katyol xizmati"
      }
    },
    boilerPages: {
      baxi: {
        title: "Baxi Katyol Remonti Toshkentda | ServicePlyus",
        description: "Baxi katyol ta'mirlash va texnik xizmat. Italyan katyollari uchun professional xizmat. Asl ehtiyot qismlar, kafolat.",
        keywords: "Baxi katyol remont, Baxi ta'mirlash Toshkent, Baxi servis"
      },
      navien: {
        title: "Navien Katyol Remonti Toshkentda | ServicePlyus",
        description: "Navien katyol ta'mirlash. Koreys katyollari uchun professional diagnostika va ta'mirlash. 24/7 xizmat.",
        keywords: "Navien katyol remont, Navien ta'mirlash, Navien servis Toshkent"
      },
      ferroli: {
        title: "Ferroli Katyol Remonti Toshkentda | ServicePlyus",
        description: "Ferroli katyol ta'mirlash va xizmat ko'rsatish. Italyan brendiga professional yondashuv. Kafolat bilan.",
        keywords: "Ferroli katyol remont, Ferroli ta'mirlash Toshkent"
      },
      airfel: {
        title: "Airfel Katyol Remonti Toshkentda | ServicePlyus",
        description: "Airfel katyol ta'mirlash xizmati. Turkiya katyollari uchun tajribali ustalar. Tezkor xizmat.",
        keywords: "Airfel katyol remont, Airfel ta'mirlash Toshkent"
      },
      akfa: {
        title: "Akfa Katyol Remonti Toshkentda | ServicePlyus",
        description: "Akfa katyol ta'mirlash va diagnostika. Mahalliy bozor uchun eng yaxshi xizmat. Arzon ehtiyot qismlar.",
        keywords: "Akfa katyol remont, Akfa ta'mirlash Toshkent"
      },
      atlantic: {
        title: "Atlantic Katyol Remonti Toshkentda | ServicePlyus",
        description: "Atlantic katyol ta'mirlash. Frantsuz brendiga professional xizmat ko'rsatish.",
        keywords: "Atlantic katyol remont, Atlantic ta'mirlash"
      },
      baymak: {
        title: "Baymak Katyol Remonti Toshkentda | ServicePlyus",
        description: "Baymak katyol ta'mirlash va texnik xizmat. Turkiya katyollari mutaxassislari.",
        keywords: "Baymak katyol remont, Baymak ta'mirlash"
      },
      rulls: {
        title: "Rulls Katyol Remonti Toshkentda | ServicePlyus",
        description: "Rulls katyol ta'mirlash. Zamonaviy turkcha brend uchun professional xizmat.",
        keywords: "Rulls katyol remont, Rulls ta'mirlash"
      },
      kiturami: {
        title: "Kiturami Katyol Remonti Toshkentda | ServicePlyus",
        description: "Kiturami katyol ta'mirlash. Koreys texnologiyasi uchun tajribali mutaxassislar.",
        keywords: "Kiturami katyol remont, Kiturami ta'mirlash"
      },
      unit: {
        title: "Unit Katyol Remonti Toshkentda | ServicePlyus",
        description: "Unit katyol ta'mirlash va xizmat. Arzon va ishonchli ta'mirlash xizmati.",
        keywords: "Unit katyol remont, Unit ta'mirlash"
      },
      viessmann: {
        title: "Viessmann Katyol Remonti Toshkentda | ServicePlyus",
        description: "Viessmann katyol ta'mirlash. Nemis premium katyollari uchun professional xizmat.",
        keywords: "Viessmann katyol remont, Viessmann ta'mirlash"
      },
      everel: {
        title: "Everel Katyol Remonti Toshkentda | ServicePlyus",
        description: "Everel katyol ta'mirlash xizmati. Tezkor va sifatli xizmat.",
        keywords: "Everel katyol remont, Everel ta'mirlash"
      },
      thermona: {
        title: "Thermona Katyol Remonti Toshkentda | ServicePlyus",
        description: "Thermona katyol ta'mirlash. Chexiya katyollari uchun professional xizmat.",
        keywords: "Thermona katyol remont, Thermona ta'mirlash"
      },
      orbek: {
        title: "Orbek Katyol Remonti Toshkentda | ServicePlyus",
        description: "Orbek katyol ta'mirlash. Mahalliy bozorda mashhur brend uchun xizmat.",
        keywords: "Orbek katyol remont, Orbek ta'mirlash"
      }
    },
    blogArticles: {
      "katyolni-qanday-saqlash": {
        title: "Katyolni Qanday To'g'ri Saqlash Kerak? | ServicePlyus Blog",
        description: "Katyolning uzoq va xavfsiz ishlashi uchun muntazam texnik xizmat ko'rsatish bo'yicha to'liq qo'llanma. Professional maslahatlar.",
        keywords: "katyol saqlash, katyol texnik xizmat, katyol profilaktika"
      },
      "katyol-tanlash": {
        title: "Yangi Katyol Qanday Tanlash Kerak? | ServicePlyus Blog",
        description: "Uy uchun katyol tanlash bo'yicha to'liq qo'llanma. Brendlar, quvvat, narxlar va boshqa muhim omillar.",
        keywords: "katyol tanlash, yangi katyol sotib olish, eng yaxshi katyol"
      },
      "qish-tayyorgarlik": {
        title: "Qishga Tayyorgarlik: Katyolni Tekshirish | ServicePlyus Blog",
        description: "Qish mavsumidan oldin katyolni qanday tekshirish va tayyorlash kerak? Professional maslahatlar va tekshirish ro'yxati.",
        keywords: "qishga tayyorgarlik, katyol tekshirish, qish katyol"
      }
    }
  },
  ru: {
    home: {
      title: "ServicePlyus - Ремонт Котлов в Ташкенте | Ремонт Газовых Котлов 24/7",
      description: "Профессиональный ремонт котлов в Ташкенте. Ремонт газовых котлов, диагностика и техобслуживание. Выезд 24/7, гарантия 6 месяцев. ☎ +998 92 070 54 54",
      keywords: "ремонт котлов, ремонт газовых котлов, ремонт котлов Ташкент, remont kotlov, диагностика котла, техобслуживание котла"
    },
    about: {
      title: "О Нас | ServicePlyus - Ремонт Котлов в Ташкенте",
      description: "ServicePlyus - компания по ремонту котлов с опытом более 10 лет. Профессиональные мастера, ремонт всех брендов, гарантия.",
      keywords: "о ServicePlyus, мастер по котлам Ташкент, профессиональный ремонт котлов"
    },
    services: {
      title: "Услуги | Ремонт и Обслуживание Котлов - ServicePlyus",
      description: "Диагностика котла, ремонт, чистка, замена запчастей. Цены на все услуги. Бесплатная диагностика!",
      keywords: "услуги по котлам, чистка котла, диагностика котла, запчасти для котла"
    },
    pricing: {
      title: "Цены | Цены на Ремонт Котлов в Ташкенте - ServicePlyus",
      description: "Цены на ремонт котлов: диагностика бесплатно, чистка от 450 000 сум, ремонт от 400 000 сум. Прозрачные и справедливые цены.",
      keywords: "цены на ремонт котла, стоимость ремонта котла, прайс ремонт котлов"
    },
    blog: {
      title: "Блог | Полезные Статьи о Котлах - ServicePlyus",
      description: "Как правильно обслуживать котел, выбор нового котла, подготовка к зиме. Профессиональные советы и полезные статьи.",
      keywords: "статьи о котлах, советы по котлам, обслуживание котла, выбор котла"
    },
    contact: {
      title: "Контакты | Вызов Мастера для Ремонта Котла - ServicePlyus",
      description: "Вызов мастера по ремонту котлов: +998 92 070 54 54. Telegram: @Umidserviceplyus. Работаем 24/7. Быстрый выезд по Ташкенту.",
      keywords: "ремонт котлов телефон, контакты ServicePlyus, вызов мастера по котлам"
    },
    servicePages: {
      diagnostika: {
        title: "Диагностика Котла в Ташкенте | Бесплатная Проверка - ServicePlyus",
        description: "Профессиональная диагностика котла - точное определение неисправностей. Современное оборудование, письменный отчет. От 400 000 сум.",
        keywords: "диагностика котла, проверка котла, диагностика газового котла"
      },
      tozalash: {
        title: "Чистка и Обслуживание Котла | ServicePlyus Ташкент",
        description: "Чистка котла, теплообменника, профилактика. От 450 000 сум. Повысьте эффективность вашего котла!",
        keywords: "чистка котла, профилактика котла, чистка теплообменника"
      },
      "uch-klapan": {
        title: "Замена Трёхходового Клапана | Ремонт Котла - ServicePlyus",
        description: "Ремонт и замена трёхходового клапана. Оригинальные запчасти, с гарантией. От 450 000 сум.",
        keywords: "трёхходовой клапан, замена клапана котла, трехходовой клапан ремонт"
      },
      turbina: {
        title: "Ремонт Турбины | Замена Турбовентилятора - ServicePlyus",
        description: "Ремонт и замена турбины котла. Устранение проблем с шумом. От 850 000 сум. Профессиональный сервис.",
        keywords: "турбина котла, турбовентилятор, ремонт вентилятора котла"
      },
      "issiqlik-almashgich": {
        title: "Замена Теплообменника | ServicePlyus Ташкент",
        description: "Замена теплообменника котла. Высококачественные детали, профессиональная установка. От 1 300 000 сум.",
        keywords: "теплообменник, замена теплообменника, теплообменник котла"
      },
      "bosim-sensori": {
        title: "Замена Датчика Давления | Ремонт Датчика Котла - ServicePlyus",
        description: "Замена и калибровка датчика давления воды. Оригинальные датчики, быстрый сервис. От 250 000 сум.",
        keywords: "датчик давления, датчик котла, замена датчика давления"
      },
      manostat: {
        title: "Замена Маностата | Датчик Давления Воздуха - ServicePlyus",
        description: "Замена маностата (датчика давления воздуха). Котел не зажигается - звоните нам! От 380 000 сум.",
        keywords: "маностат, датчик давления воздуха, маностат котла"
      },
      shoshilinch: {
        title: "Срочный Ремонт Котла 24/7 | Быстрый Выезд - ServicePlyus",
        description: "Срочный ремонт котла 24/7. Выезд за 30-60 минут. Работаем ночью и в выходные!",
        keywords: "срочный ремонт котла, ремонт котла 24/7, экстренный ремонт котла"
      }
    },
    boilerPages: {
      baxi: {
        title: "Ремонт Котлов Baxi в Ташкенте | ServicePlyus",
        description: "Ремонт и обслуживание котлов Baxi. Профессиональный сервис для итальянских котлов. Оригинальные запчасти, гарантия.",
        keywords: "ремонт Baxi, Baxi ремонт Ташкент, сервис Baxi"
      },
      navien: {
        title: "Ремонт Котлов Navien в Ташкенте | ServicePlyus",
        description: "Ремонт котлов Navien. Профессиональная диагностика и ремонт корейских котлов. Сервис 24/7.",
        keywords: "ремонт Navien, Navien ремонт, сервис Navien Ташкент"
      },
      ferroli: {
        title: "Ремонт Котлов Ferroli в Ташкенте | ServicePlyus",
        description: "Ремонт и обслуживание котлов Ferroli. Профессиональный подход к итальянскому бренду. С гарантией.",
        keywords: "ремонт Ferroli, Ferroli ремонт Ташкент"
      },
      airfel: {
        title: "Ремонт Котлов Airfel в Ташкенте | ServicePlyus",
        description: "Сервис по ремонту котлов Airfel. Опытные мастера для турецких котлов. Быстрый сервис.",
        keywords: "ремонт Airfel, Airfel ремонт Ташкент"
      },
      akfa: {
        title: "Ремонт Котлов Akfa в Ташкенте | ServicePlyus",
        description: "Ремонт и диагностика котлов Akfa. Лучший сервис для местного рынка. Доступные запчасти.",
        keywords: "ремонт Akfa, Akfa ремонт Ташкент"
      },
      atlantic: {
        title: "Ремонт Котлов Atlantic в Ташкенте | ServicePlyus",
        description: "Ремонт котлов Atlantic. Профессиональное обслуживание французского бренда.",
        keywords: "ремонт Atlantic, Atlantic ремонт"
      },
      baymak: {
        title: "Ремонт Котлов Baymak в Ташкенте | ServicePlyus",
        description: "Ремонт и техобслуживание котлов Baymak. Специалисты по турецким котлам.",
        keywords: "ремонт Baymak, Baymak ремонт"
      },
      rulls: {
        title: "Ремонт Котлов Rulls в Ташкенте | ServicePlyus",
        description: "Ремонт котлов Rulls. Профессиональный сервис для современного турецкого бренда.",
        keywords: "ремонт Rulls, Rulls ремонт"
      },
      kiturami: {
        title: "Ремонт Котлов Kiturami в Ташкенте | ServicePlyus",
        description: "Ремонт котлов Kiturami. Опытные специалисты для корейской технологии.",
        keywords: "ремонт Kiturami, Kiturami ремонт"
      },
      unit: {
        title: "Ремонт Котлов Unit в Ташкенте | ServicePlyus",
        description: "Ремонт и обслуживание котлов Unit. Доступный и надежный ремонт.",
        keywords: "ремонт Unit, Unit ремонт"
      },
      viessmann: {
        title: "Ремонт Котлов Viessmann в Ташкенте | ServicePlyus",
        description: "Ремонт котлов Viessmann. Профессиональный сервис для немецких премиум котлов.",
        keywords: "ремонт Viessmann, Viessmann ремонт"
      },
      everel: {
        title: "Ремонт Котлов Everel в Ташкенте | ServicePlyus",
        description: "Сервис по ремонту котлов Everel. Быстрый и качественный сервис.",
        keywords: "ремонт Everel, Everel ремонт"
      },
      thermona: {
        title: "Ремонт Котлов Thermona в Ташкенте | ServicePlyus",
        description: "Ремонт котлов Thermona. Профессиональный сервис для чешских котлов.",
        keywords: "ремонт Thermona, Thermona ремонт"
      },
      orbek: {
        title: "Ремонт Котлов Orbek в Ташкенте | ServicePlyus",
        description: "Ремонт котлов Orbek. Сервис для популярного на местном рынке бренда.",
        keywords: "ремонт Orbek, Orbek ремонт"
      }
    },
    blogArticles: {
      "katyolni-qanday-saqlash": {
        title: "Как Правильно Обслуживать Котел? | ServicePlyus Блог",
        description: "Полное руководство по регулярному техническому обслуживанию котла для долгой и безопасной работы. Профессиональные советы.",
        keywords: "обслуживание котла, техобслуживание котла, профилактика котла"
      },
      "katyol-tanlash": {
        title: "Как Выбрать Новый Котел? | ServicePlyus Блог",
        description: "Полное руководство по выбору котла для дома. Бренды, мощность, цены и другие важные факторы.",
        keywords: "выбор котла, купить новый котел, лучший котел"
      },
      "qish-tayyorgarlik": {
        title: "Подготовка к Зиме: Проверка Котла | ServicePlyus Блог",
        description: "Как проверить и подготовить котел перед зимним сезоном? Профессиональные советы и чек-лист проверки.",
        keywords: "подготовка к зиме, проверка котла, зимний котел"
      }
    }
  }
};

const SEOHead = ({ page, slug = null }) => {
  const { language } = useLanguage();
  
  useEffect(() => {
    let seo;
    
    if (page === 'service' && slug) {
      seo = seoData[language]?.servicePages?.[slug] || seoData[language]?.services;
    } else if (page === 'boiler' && slug) {
      seo = seoData[language]?.boilerPages?.[slug] || seoData[language]?.home;
    } else if (page === 'blog-article' && slug) {
      seo = seoData[language]?.blogArticles?.[slug] || seoData[language]?.blog;
    } else {
      seo = seoData[language]?.[page] || seoData[language]?.home;
    }
    
    // Update document title
    document.title = seo.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seo.description);
    }
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', seo.keywords);
    }
    
    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', seo.title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', seo.description);
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = language;
    
  }, [page, slug, language]);
  
  return null; // This component doesn't render anything
};

export default SEOHead;
