import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Calendar, Clock, ArrowLeft, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import EnhancedLeadForm from '../components/EnhancedLeadForm';

// Full blog article content - bilingual
const blogArticlesContent = {
  uz: {
    "katyolni-qanday-saqlash": {
      title: "Katyolni qanday to'g'ri saqlash kerak?",
      category: "maintenance",
      date: "2024-12-15",
      readTime: "8 daqiqa",
      heroImage: "https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg",
      intro: "Katyolning uzoq va xavfsiz ishlashi uchun muntazam texnik xizmat ko'rsatish zarur. Bu maqolada katyolni to'g'ri saqlash bo'yicha asosiy qoidalarni o'rganasiz.",
      sections: [
        {
          title: "Nima uchun muntazam texnik xizmat kerak?",
          content: "Katyol - uyingizning eng muhim uskunalaridan biri. U to'g'ri ishlaganda, qishda issiq va qulay bo'ladi. Ammo texnik xizmat ko'rsatilmasa, katyol tez eskiradi, gaz ko'p sarflaydi va xavfli bo'lib qoladi.",
          tips: [
            "Katyolni yilda kamida 1 marta tekshirish kerak",
            "Issiqlik almashinuvchini har 2 yilda tozalash tavsiya etiladi",
            "Gaz bosimini muntazam nazorat qiling"
          ]
        },
        {
          title: "Katyolni qachon tozalash kerak?",
          content: "Issiqlik almashinuvchi vaqt o'tishi bilan qotib qoladi va katyol samaradorligi kamayadi. Quyidagi belgilar tozalash kerakligini ko'rsatadi:",
          tips: [
            "Katyol uzoq vaqt isitadi",
            "Gaz sarfi oshgan",
            "Katyoldan g'alati tovushlar chiqyapti",
            "Issiq suv yetarli emas"
          ]
        },
        {
          title: "O'zingiz tekshirishingiz mumkin bo'lgan narsalar",
          content: "Ba'zi tekshiruvlarni o'zingiz ham amalga oshirishingiz mumkin. Ammo murakkab ishlar uchun mutaxassisga murojaat qiling.",
          tips: [
            "Suv bosimini tekshiring (1-1.5 bar bo'lishi kerak)",
            "Katyol korpusida suv sizishi borligini ko'ring",
            "Chiqarish trubkasini tekshiring",
            "Ekrandagi xato kodlarini yozib oling"
          ]
        },
        {
          title: "Professional texnik xizmat nima?",
          content: "Professional texnik xizmat - bu mutaxassis tomonidan katyolni to'liq tekshirish va tozalash. Bu xizmatga quyidagilar kiradi:",
          tips: [
            "Issiqlik almashinuvchini tozalash",
            "Yonish kamerasini tekshirish",
            "Gaz bosimini sozlash",
            "Elektr ulanishlarini tekshirish",
            "Xavfsizlik tizimlarini test qilish"
          ]
        }
      ],
      warning: "Diqqat: Gaz uskunalari bilan ishlash xavfli bo'lishi mumkin. Agar katyolda muammo ko'rsangiz, o'zingiz ta'mirlamang - professional ustaga murojaat qiling!",
      conclusion: "Katyolni muntazam texnik xizmat ko'rsatish - bu xarajat emas, investitsiya. To'g'ri saqlangan katyol 15-20 yil xizmat qiladi va gaz sarfini 20-30% kamaytiradi."
    },
    "katyol-tanlash": {
      title: "Yangi katyol qanday tanlash kerak?",
      category: "selection",
      date: "2024-12-10",
      readTime: "10 daqiqa",
      heroImage: "https://images.pexels.com/photos/7736158/pexels-photo-7736158.jpeg",
      intro: "Uy uchun katyol tanlash - muhim qaror. Noto'g'ri tanlangan katyol ko'p gaz sarflaydi va tez-tez buziladi. Bu qo'llanmada to'g'ri katyol tanlash bo'yicha maslahatlar beramiz.",
      sections: [
        {
          title: "Katyol turlarini tushunish",
          content: "Katyollar ikki asosiy turga bo'linadi: devorga o'rnatiladigan va polga o'rnatiladigan. Har birining o'z afzalliklari bor.",
          tips: [
            "Devorga o'rnatiladigan - kichik uylar uchun ideal",
            "Polga o'rnatiladigan - katta uylar uchun mos",
            "Ikki konturli - isitish + issiq suv",
            "Bir konturli - faqat isitish"
          ]
        },
        {
          title: "Quvvatni qanday hisoblash?",
          content: "Katyol quvvati uyingiz maydoniga qarab tanlanadi. Umumiy formula: har 10 m² uchun 1 kVt quvvat kerak. Ammo bu ko'p omillarga bog'liq.",
          tips: [
            "100 m² uy uchun 10-12 kVt katyol kerak",
            "Yaxshi izolyatsiya bo'lmasa, 20-30% qo'shing",
            "Issiq suv ham kerak bo'lsa, 20% qo'shing",
            "Sovuq mintaqalarda 30% qo'shing"
          ]
        },
        {
          title: "Mashhur brendlar",
          content: "Toshkentda eng mashhur katyol brendlari quyidagilar. Har biri o'z narx va sifat nisbatiga ega.",
          tips: [
            "Baxi, Ferroli - Italiya (yuqori sifat)",
            "Navien, Kiturami - Koreya (zamonaviy texnologiya)",
            "Airfel, Baymak - Turkiya (maqbul narx)",
            "Viessmann - Germaniya (premium)"
          ]
        },
        {
          title: "Narxni qanday tushunish?",
          content: "Katyol narxi faqat sotib olish narxi emas. Yillik gaz sarfi va texnik xizmat xarajatlarini ham hisobga oling.",
          tips: [
            "Arzon katyol ko'p gaz sarflashi mumkin",
            "Premium katyollar gaz tejaydi",
            "Ehtiyot qismlar narxini so'rang",
            "Kafolat muddatini tekshiring"
          ]
        }
      ],
      warning: "Katyolni o'rnatishdan oldin gaz tarmog'i va chiqarish tizimini tekshirting. Bu ishlarni faqat litsenziyalangan mutaxassis bajarishi kerak.",
      conclusion: "To'g'ri tanlangan katyol - bu qulay uy va kam xarajat. Savollarga javob olish uchun bizga qo'ng'iroq qiling - bepul maslahat beramiz!"
    },
    "qish-tayyorgarlik": {
      title: "Qishga tayyorgarlik: katyolni tekshirish",
      category: "tips",
      date: "2024-12-05",
      readTime: "6 daqiqa",
      heroImage: "https://images.pexels.com/photos/6471911/pexels-photo-6471911.jpeg",
      intro: "Qish mavsumidan oldin katyolni tekshirish juda muhim. Sovuq kunlarda katyol buzilsa, tuzatish qiyin bo'ladi. Bu maqolada qishga tayyorgarlik bo'yicha maslahatlar beramiz.",
      sections: [
        {
          title: "Qachon tekshirish kerak?",
          content: "Katyolni qish boshlanishidan 1-2 oy oldin tekshirish kerak. O'zbekistonda bu odatda oktabr-noyabr oylarida bo'ladi.",
          tips: [
            "Oktabr oyida professional tekshiruv o'tkazing",
            "Noyabrda katyolni ishga tushirib ko'ring",
            "Muammolar bo'lsa, vaqtida ta'mirlang"
          ]
        },
        {
          title: "O'zingiz tekshirishingiz mumkin",
          content: "Mutaxassis kelguncha, ba'zi narsalarni o'zingiz tekshirishingiz mumkin. Bu vaqtni tejaydi.",
          tips: [
            "Suv bosimini ko'ring (manometrda)",
            "Katyol korpusida suv sizishi bormi?",
            "Chiqarish trubkasi to'siq emasmi?",
            "Radiatorlar issiyaptimi?"
          ]
        },
        {
          title: "Isitish tizimini tayyorlash",
          content: "Katyol bilan birga isitish tizimini ham tekshirish kerak. Radiatorlar va quvurlarni ham e'tiborsiz qoldirmang.",
          tips: [
            "Radiatorlardagi havoni chiqaring",
            "Termostatlarni tekshiring",
            "Quvurlarda sizish bormi?",
            "Nasosni tekshiring (agar bo'lsa)"
          ]
        },
        {
          title: "Professional tekshiruv nimalarni o'z ichiga oladi?",
          content: "Mutaxassis quyidagi ishlarni bajaradi. Bu katyolning xavfsiz va samarali ishlashini ta'minlaydi.",
          tips: [
            "To'liq diagnostika",
            "Issiqlik almashinuvchini tozalash",
            "Gaz bosimini sozlash",
            "Xavfsizlik tizimlarini test qilish",
            "Samaradorlikni tekshirish"
          ]
        }
      ],
      warning: "Qish o'rtasida katyol buzilsa, usta topish qiyin bo'lishi mumkin. Shuning uchun oldindan tayyorlaning!",
      conclusion: "Qishga tayyorgarlik - bu xotirjamlik. Hoziroq bizga qo'ng'iroq qiling va katyolingizni tekshiring!"
    }
  },
  ru: {
    "katyolni-qanday-saqlash": {
      title: "Как правильно обслуживать котел?",
      category: "maintenance",
      date: "2024-12-15",
      readTime: "8 минут",
      heroImage: "https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg",
      intro: "Для долгой и безопасной работы котла необходимо регулярное техническое обслуживание. В этой статье вы узнаете основные правила правильного обслуживания котла.",
      sections: [
        {
          title: "Зачем нужно регулярное обслуживание?",
          content: "Котел - одно из важнейших устройств вашего дома. Когда он работает правильно, зимой тепло и комфортно. Но без технического обслуживания котел быстро изнашивается, потребляет много газа и становится опасным.",
          tips: [
            "Котел нужно проверять минимум 1 раз в год",
            "Теплообменник рекомендуется чистить каждые 2 года",
            "Регулярно контролируйте давление газа"
          ]
        },
        {
          title: "Когда нужно чистить котел?",
          content: "Теплообменник со временем загрязняется и эффективность котла снижается. Следующие признаки указывают на необходимость чистки:",
          tips: [
            "Котел долго нагревает",
            "Расход газа увеличился",
            "Котел издает странные звуки",
            "Горячей воды недостаточно"
          ]
        },
        {
          title: "Что вы можете проверить сами",
          content: "Некоторые проверки вы можете провести самостоятельно. Но для сложных работ обратитесь к специалисту.",
          tips: [
            "Проверьте давление воды (должно быть 1-1.5 бар)",
            "Осмотрите корпус котла на предмет утечки воды",
            "Проверьте выпускную трубку",
            "Запишите коды ошибок на экране"
          ]
        },
        {
          title: "Что включает профессиональное обслуживание?",
          content: "Профессиональное техническое обслуживание - это полная проверка и чистка котла специалистом. В эту услугу входит:",
          tips: [
            "Чистка теплообменника",
            "Проверка камеры сгорания",
            "Регулировка давления газа",
            "Проверка электрических соединений",
            "Тестирование систем безопасности"
          ]
        }
      ],
      warning: "Внимание: Работа с газовым оборудованием может быть опасной. Если вы заметили проблему с котлом, не ремонтируйте сами - обратитесь к профессиональному мастеру!",
      conclusion: "Регулярное техническое обслуживание котла - это не расход, а инвестиция. Правильно обслуживаемый котел служит 15-20 лет и снижает расход газа на 20-30%."
    },
    "katyol-tanlash": {
      title: "Как выбрать новый котел?",
      category: "selection",
      date: "2024-12-10",
      readTime: "10 минут",
      heroImage: "https://images.pexels.com/photos/7736158/pexels-photo-7736158.jpeg",
      intro: "Выбор котла для дома - важное решение. Неправильно выбранный котел потребляет много газа и часто ломается. В этом руководстве мы дадим советы по правильному выбору котла.",
      sections: [
        {
          title: "Понимание типов котлов",
          content: "Котлы делятся на два основных типа: настенные и напольные. У каждого есть свои преимущества.",
          tips: [
            "Настенные - идеальны для небольших домов",
            "Напольные - подходят для больших домов",
            "Двухконтурные - отопление + горячая вода",
            "Одноконтурные - только отопление"
          ]
        },
        {
          title: "Как рассчитать мощность?",
          content: "Мощность котла выбирается в зависимости от площади вашего дома. Общая формула: на каждые 10 м² нужен 1 кВт мощности. Но это зависит от многих факторов.",
          tips: [
            "Для дома 100 м² нужен котел 10-12 кВт",
            "При плохой изоляции добавьте 20-30%",
            "Если нужна горячая вода, добавьте 20%",
            "В холодных регионах добавьте 30%"
          ]
        },
        {
          title: "Популярные бренды",
          content: "Самые популярные бренды котлов в Ташкенте следующие. Каждый имеет свое соотношение цены и качества.",
          tips: [
            "Baxi, Ferroli - Италия (высокое качество)",
            "Navien, Kiturami - Корея (современные технологии)",
            "Airfel, Baymak - Турция (доступная цена)",
            "Viessmann - Германия (премиум)"
          ]
        },
        {
          title: "Как понять цену?",
          content: "Цена котла - это не только стоимость покупки. Учитывайте также годовой расход газа и затраты на обслуживание.",
          tips: [
            "Дешевый котел может потреблять много газа",
            "Премиум котлы экономят газ",
            "Узнайте цены на запчасти",
            "Проверьте срок гарантии"
          ]
        }
      ],
      warning: "Перед установкой котла проверьте газовую сеть и систему вытяжки. Эти работы должен выполнять только лицензированный специалист.",
      conclusion: "Правильно выбранный котел - это комфортный дом и низкие расходы. Для получения ответов на вопросы позвоните нам - мы дадим бесплатную консультацию!"
    },
    "qish-tayyorgarlik": {
      title: "Подготовка к зиме: проверка котла",
      category: "tips",
      date: "2024-12-05",
      readTime: "6 минут",
      heroImage: "https://images.pexels.com/photos/6471911/pexels-photo-6471911.jpeg",
      intro: "Проверка котла перед зимним сезоном очень важна. Если котел сломается в холодные дни, ремонт будет сложным. В этой статье мы дадим советы по подготовке к зиме.",
      sections: [
        {
          title: "Когда нужно проверять?",
          content: "Котел нужно проверить за 1-2 месяца до начала зимы. В Узбекистане это обычно октябрь-ноябрь.",
          tips: [
            "В октябре проведите профессиональную проверку",
            "В ноябре запустите котел для проверки",
            "При обнаружении проблем отремонтируйте вовремя"
          ]
        },
        {
          title: "Что вы можете проверить сами",
          content: "Пока ждете специалиста, некоторые вещи вы можете проверить самостоятельно. Это сэкономит время.",
          tips: [
            "Посмотрите давление воды (на манометре)",
            "Есть ли утечка воды на корпусе котла?",
            "Не забита ли выпускная труба?",
            "Нагреваются ли радиаторы?"
          ]
        },
        {
          title: "Подготовка системы отопления",
          content: "Вместе с котлом нужно проверить и систему отопления. Не игнорируйте радиаторы и трубы.",
          tips: [
            "Выпустите воздух из радиаторов",
            "Проверьте термостаты",
            "Есть ли утечки в трубах?",
            "Проверьте насос (если есть)"
          ]
        },
        {
          title: "Что включает профессиональная проверка?",
          content: "Специалист выполнит следующие работы. Это обеспечит безопасную и эффективную работу котла.",
          tips: [
            "Полная диагностика",
            "Чистка теплообменника",
            "Регулировка давления газа",
            "Тестирование систем безопасности",
            "Проверка эффективности"
          ]
        }
      ],
      warning: "Если котел сломается в середине зимы, найти мастера может быть сложно. Поэтому подготовьтесь заранее!",
      conclusion: "Подготовка к зиме - это спокойствие. Позвоните нам сейчас и проверьте свой котел!"
    }
  }
};

// Category colors
const categoryColors = {
  tips: 'bg-green-100 text-green-700',
  maintenance: 'bg-blue-100 text-blue-700',
  repair: 'bg-orange-100 text-orange-700',
  selection: 'bg-purple-100 text-purple-700'
};

const BlogArticlePage = () => {
  const { slug } = useParams();
  const { t, language } = useLanguage();
  
  const article = blogArticlesContent[language]?.[slug];
  
  // If article not found
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {language === 'uz' ? 'Maqola topilmadi' : 'Статья не найдена'}
          </h1>
          <Link to="/blog" className="text-blue-600 hover:underline">
            {language === 'uz' ? 'Blogga qaytish' : 'Вернуться в блог'}
          </Link>
        </div>
      </div>
    );
  }

  const categoryName = t.blog?.categories?.[article.category] || article.category;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (language === 'uz') {
      const months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'];
      return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
    } else {
      const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
      return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <SEOHead page="blog-article" slug={slug} />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 h-96">
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-32">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-white/80 mb-8 text-sm">
            <Link to="/" className="hover:text-white transition-colors">{t.nav.home}</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/blog" className="hover:text-white transition-colors">{t.blog?.title || 'Blog'}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white truncate max-w-xs">{article.title}</span>
          </nav>
          
          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[article.category]}`}>
              {categoryName}
            </span>
            <div className="flex items-center text-white/80 text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              {formatDate(article.date)}
            </div>
            <div className="flex items-center text-white/80 text-sm">
              <Clock className="w-4 h-4 mr-1" />
              {article.readTime}
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight" data-testid="article-title">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="relative -mt-16 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Intro */}
            <p className="text-xl text-gray-700 leading-relaxed mb-10 font-medium">
              {article.intro}
            </p>
            
            {/* Sections */}
            {article.sections.map((section, index) => (
              <div key={index} className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </span>
                  {section.title}
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  {section.content}
                </p>
                
                {section.tips && section.tips.length > 0 && (
                  <ul className="space-y-2 bg-blue-50 rounded-xl p-6">
                    {section.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            
            {/* Warning */}
            {article.warning && (
              <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-xl p-6 mb-10">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" />
                  <p className="text-orange-800 font-medium">{article.warning}</p>
                </div>
              </div>
            )}
            
            {/* Conclusion */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
              <div className="flex items-start">
                <Lightbulb className="w-6 h-6 mr-3 flex-shrink-0" />
                <p className="font-medium">{article.conclusion}</p>
              </div>
            </div>
            
            {/* Back to Blog */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {language === 'uz' ? 'Barcha maqolalarga qaytish' : 'Вернуться ко всем статьям'}
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {language === 'uz' ? 'Boshqa maqolalar' : 'Другие статьи'}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(blogArticlesContent[language] || {})
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, art]) => (
                <Link
                  key={key}
                  to={`/blog/${key}`}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <img
                    src={art.heroImage}
                    alt={art.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[art.category]}`}>
                      {t.blog?.categories?.[art.category] || art.category}
                    </span>
                    <h3 className="font-bold text-gray-900 mt-2 line-clamp-2">{art.title}</h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <EnhancedLeadForm />
    </div>
  );
};

export default BlogArticlePage;
