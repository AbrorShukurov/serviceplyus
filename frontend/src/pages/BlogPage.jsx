import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import EnhancedLeadForm from '../components/EnhancedLeadForm';

const BlogPage = () => {
  const { t, language } = useLanguage();
  
  const blogData = t.blog || {
    title: "Blog",
    heroTitle: language === 'uz' ? "Foydali maqolalar" : "Полезные статьи",
    heroSubtitle: language === 'uz' ? "Katyol haqida bilishingiz kerak bo'lgan hamma narsa" : "Всё, что вам нужно знать о котлах",
    readMore: language === 'uz' ? "Batafsil o'qish" : "Читать далее",
    categories: {
      tips: language === 'uz' ? "Maslahatlar" : "Советы",
      maintenance: language === 'uz' ? "Texnik xizmat" : "Обслуживание",
      repair: language === 'uz' ? "Ta'mirlash" : "Ремонт",
      selection: language === 'uz' ? "Tanlash" : "Выбор"
    },
    articles: [],
    comingSoon: language === 'uz' ? "Tez orada yangi maqolalar qo'shiladi!" : "Скоро будут добавлены новые статьи!"
  };

  // Category colors
  const categoryColors = {
    tips: 'bg-green-100 text-green-700',
    maintenance: 'bg-blue-100 text-blue-700',
    repair: 'bg-orange-100 text-orange-700',
    selection: 'bg-purple-100 text-purple-700'
  };

  // Placeholder articles if none provided
  const articles = blogData.articles?.length > 0 ? blogData.articles : [
    {
      id: 1,
      slug: "katyolni-qanday-saqlash",
      title: language === 'uz' ? "Katyolni qanday to'g'ri saqlash kerak?" : "Как правильно обслуживать котел?",
      excerpt: language === 'uz' 
        ? "Katyolning uzoq va xavfsiz ishlashi uchun muntazam texnik xizmat ko'rsatish zarur. Bu maqolada asosiy qoidalarni o'rganasiz."
        : "Для долгой и безопасной работы котла необходимо регулярное техническое обслуживание.",
      category: "maintenance",
      date: "2024-12-15",
      image: "https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg"
    },
    {
      id: 2,
      slug: "katyol-tanlash",
      title: language === 'uz' ? "Yangi katyol qanday tanlash kerak?" : "Как выбрать новый котел?",
      excerpt: language === 'uz'
        ? "Uy uchun katyol tanlashda nimalarni e'tiborga olish kerak? Brendlar, quvvat va boshqa muhim omillar."
        : "На что обратить внимание при выборе котла для дома? Бренды, мощность и другие важные факторы.",
      category: "selection",
      date: "2024-12-10",
      image: "https://images.pexels.com/photos/7736158/pexels-photo-7736158.jpeg"
    },
    {
      id: 3,
      slug: "qish-tayyorgarlik",
      title: language === 'uz' ? "Qishga tayyorgarlik: katyolni tekshirish" : "Подготовка к зиме: проверка котла",
      excerpt: language === 'uz'
        ? "Qish mavsumidan oldin katyolni qanday tekshirish va tayyorlash kerak? Professional maslahatlar."
        : "Как проверить и подготовить котел перед зимним сезоном? Профессиональные советы.",
      category: "tips",
      date: "2024-12-05",
      image: "https://images.pexels.com/photos/6471911/pexels-photo-6471911.jpeg"
    }
  ];

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
      <SEOHead page="blog" />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-blue-200 mb-8 text-sm">
            <Link to="/" className="hover:text-white transition-colors">{t.nav.home}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{blogData.title}</span>
          </nav>
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="blog-hero-title">
              {blogData.heroTitle}
            </h1>
            <p className="text-xl text-blue-100">
              {blogData.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(blogData.categories || {}).map(([key, value]) => (
              <button
                key={key}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 ${categoryColors[key] || 'bg-gray-100 text-gray-700'}`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.slug}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group block"
                data-testid={`blog-article-${article.slug}`}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image || `https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg`}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[article.category] || 'bg-gray-100 text-gray-700'}`}>
                      {blogData.categories?.[article.category] || article.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(article.date)}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  {/* Read More */}
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                    <span>{blogData.readMore}</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Coming Soon Message */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-3 bg-blue-100 text-blue-700 px-6 py-3 rounded-full">
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">{blogData.comingSoon}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {language === 'uz' ? "Savolingiz bormi?" : "Есть вопросы?"}
          </h2>
          <p className="text-gray-600 mb-8">
            {language === 'uz' 
              ? "Katyol haqida savolingiz bo'lsa, biz bilan bog'laning. Bepul maslahat beramiz!"
              : "Если у вас есть вопросы о котлах, свяжитесь с нами. Бесплатная консультация!"}
          </p>
          
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg"
            data-testid="blog-contact-btn"
          >
            <span>{t.common?.freeConsultation || 'Bepul konsultatsiya'}</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Lead Form */}
      <EnhancedLeadForm />
    </div>
  );
};

export default BlogPage;
