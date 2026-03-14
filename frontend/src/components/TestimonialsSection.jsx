import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Extended testimonials - 10 reviews
  const testimonials = [
    {
      name: language === 'uz' ? "Alisher Karimov" : "Алишер Каримов",
      role: language === 'uz' ? "Uy egasi, Sergeli tumani" : "Домовладелец, Сергелийский район",
      text: language === 'uz' 
        ? "Kompaniyaga tezkorligi va professionallik uchun minnatdorchilik bildirmoqchiman. Ish sifatli va o'z vaqtida bajarildi. Endi menda yana qulay va ishonchli isitish tizimi bor!"
        : "Хочу выразить благодарность компании за оперативность и профессионализм. Работа была выполнена качественно и в срок. Теперь у меня снова комфортное и надежное отопление!",
      rating: 5,
      service: language === 'uz' ? "Issiqlik almashinuvchi almashtirish" : "Замена теплообменника"
    },
    {
      name: language === 'uz' ? "Dilnoza Rahimova" : "Дильноза Рахимова",
      role: language === 'uz' ? "Ofis menejeri, Mirzo Ulug'bek" : "Офис-менеджер, Мирзо Улугбек",
      text: language === 'uz'
        ? "Bu kompaniyaning mijozlarga e'tiborli munosabatini ta'kidlamoqchiman. Menga katyol ta'mirlashning optimal variantini tanlashda yordam berishdi, professional maslahat berishdi."
        : "Хочу отметить внимательное отношение к клиентам этой компании. Мне помогли с выбором оптимального варианта ремонта котла, профессионально проконсультировали.",
      rating: 5,
      service: language === 'uz' ? "Diagnostika va maslahat" : "Диагностика и консультация"
    },
    {
      name: language === 'uz' ? "Sardor Usmonov" : "Сардор Усмонов",
      role: language === 'uz' ? "Tadbirkor, Chilonzor" : "Предприниматель, Чиланзар",
      text: language === 'uz'
        ? "Odatda sharh qoldirmayman, lekin bu yerda o'tib ketolmadim. Bu kompaniyada katyol ta'mirlashni buyurtma qildim va natijadan juda mamnunman. Bolalar aniq va ehtiyotkorlik bilan ishlashdi."
        : "Никогда не оставляю отзывы, но тут не мог пройти мимо. Заказывал ремонт котла и остался очень доволен результатом. Ребята работали четко и аккуратно.",
      rating: 5,
      service: language === 'uz' ? "Katyol ta'mirlash" : "Ремонт котла"
    },
    {
      name: language === 'uz' ? "Jahongir Toshmatov" : "Джахонгир Тошматов",
      role: language === 'uz' ? "Qurilish kompaniyasi direktori" : "Директор строительной компании",
      text: language === 'uz'
        ? "ServicePlyus bilan ishlash - bu haqiqiy zavq. Mutaxassislar o'z ishini mukammal biladilar, barcha ishlar o'z vaqtida va sifatli bajariladi. Katyolimiz endi mukammal ishlayapti."
        : "Работать с ServicePlyus - настоящее удовольствие. Специалисты знают свое дело на отлично, все работы выполнены в срок и качественно.",
      rating: 5,
      service: language === 'uz' ? "Yillik texnik xizmat" : "Годовое обслуживание"
    },
    {
      name: language === 'uz' ? "Madina Rahmonova" : "Мадина Рахмонова",
      role: language === 'uz' ? "Restoran egasi, Yakkasaroy" : "Владелец ресторана, Яккасарай",
      text: language === 'uz'
        ? "Restorandagi katyol buzilganda, ServicePlyus tezda yordam berdi. 24/7 xizmat - bu juda muhim. Ular kechqurun kelishdi va bir necha soatda muammoni hal qilishdi."
        : "Когда сломался котел в ресторане, ServicePlyus быстро помог. Сервис 24/7 - это очень важно. Они приехали вечером и за несколько часов решили проблему.",
      rating: 5,
      service: language === 'uz' ? "Shoshilinch ta'mirlash" : "Срочный ремонт"
    },
    {
      name: language === 'uz' ? "Bobur Ergashev" : "Бобур Эргашев",
      role: language === 'uz' ? "IT mutaxassisi, Yunusobod" : "IT специалист, Юнусабад",
      text: language === 'uz'
        ? "Baxi katyolim 5 yildan keyin muammo chiqardi. ServicePlyus ustasi kelib, tezda diagnostika qildi va turbina almashtirishni tavsiya qildi. Narx ham maqbul edi."
        : "Мой котел Baxi через 5 лет начал барахлить. Мастер ServicePlyus приехал, быстро провел диагностику и рекомендовал замену турбины. Цена тоже была приемлемой.",
      rating: 5,
      service: language === 'uz' ? "Turbina almashtirish" : "Замена турбины"
    },
    {
      name: language === 'uz' ? "Gulnora Qodirova" : "Гульнора Кадырова",
      role: language === 'uz' ? "Shifokor, Olmazor" : "Врач, Алмазар",
      text: language === 'uz'
        ? "Qish kunlarida katyol to'satdan o'chib qoldi. Ertalab qo'ng'iroq qildim, 40 daqiqada usta keldi. Manostat almashtirildi va hamma narsa ishlayapti. Juda tezkor xizmat!"
        : "В зимний день котел внезапно отключился. Позвонила утром, через 40 минут приехал мастер. Заменили маностат и всё заработало. Очень быстрый сервис!",
      rating: 5,
      service: language === 'uz' ? "Manostat almashtirish" : "Замена маностата"
    },
    {
      name: language === 'uz' ? "Rustam Nazarov" : "Рустам Назаров",
      role: language === 'uz' ? "Arxitektor, Shayxontohur" : "Архитектор, Шайхантаур",
      text: language === 'uz'
        ? "Yangi uy qurishda katyol tanlashda ServicePlyus maslahat berdi. Navien katyolini tavsiya qilishdi va o'rnatib berishdi. Bir yildan ortiq muammosiz ishlayapti."
        : "При строительстве нового дома ServicePlyus помог с выбором котла. Рекомендовали Navien и установили. Больше года работает без проблем.",
      rating: 5,
      service: language === 'uz' ? "Katyol tanlash va o'rnatish" : "Выбор и установка котла"
    },
    {
      name: language === 'uz' ? "Shaxnoza Mirzayeva" : "Шахноза Мирзаева",
      role: language === 'uz' ? "Uy bekasi, Bektemir" : "Домохозяйка, Бектемир",
      text: language === 'uz'
        ? "Katyolni tozalash uchun chaqirdik. Usta juda yaxshi ishladi - issiqlik almashinuvchini tozaladi, gaz bosimini sozladi. Endi katyol tezroq isitadi va gaz kam sarflaydi."
        : "Вызвали для чистки котла. Мастер отлично поработал - почистил теплообменник, настроил давление газа. Теперь котел быстрее греет и меньше расходует газ.",
      rating: 5,
      service: language === 'uz' ? "Katyol tozalash" : "Чистка котла"
    },
    {
      name: language === 'uz' ? "Timur Alimov" : "Тимур Алимов",
      role: language === 'uz' ? "Bank xodimi, Mirabad" : "Банковский работник, Мирабад",
      text: language === 'uz'
        ? "Ferroli katyolda bosim sensori buzilgan edi. ServicePlyus asl ehtiyot qism topib berdi va almashtirib qo'ydi. Kafolat ham berishdi. Tavsiya qilaman!"
        : "В котле Ferroli сломался датчик давления. ServicePlyus нашел оригинальную запчасть и заменил. Дали гарантию. Рекомендую!",
      rating: 5,
      service: language === 'uz' ? "Bosim sensori almashtirish" : "Замена датчика давления"
    }
  ];

  // Show 3 testimonials at a time on desktop
  const itemsPerPage = 3;
  const maxIndex = Math.ceil(testimonials.length / itemsPerPage) - 1;

  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.home.testimonialsTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.home.testimonialsSubtitle}
          </p>
          
          {/* Stats */}
          <div className="flex justify-center items-center gap-8 mt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">1000+</div>
              <div className="text-sm text-gray-500">{language === 'uz' ? 'Mamnun mijozlar' : 'Довольных клиентов'}</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <span className="text-3xl font-bold text-blue-600">4.9</span>
                <Star className="w-6 h-6 fill-orange-500 text-orange-500 ml-1" />
              </div>
              <div className="text-sm text-gray-500">{language === 'uz' ? "O'rtacha baho" : 'Средняя оценка'}</div>
            </div>
          </div>
        </div>

        {/* Desktop Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors"
            aria-label="Previous"
            data-testid="testimonial-prev"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors"
            aria-label="Next"
            data-testid="testimonial-next"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={currentIndex * itemsPerPage + index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-8 relative"
                data-testid={`testimonial-card-${index}`}
              >
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-100" />
                
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                
                {/* Service Tag */}
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                    {testimonial.service}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {[...Array(maxIndex + 1)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        
        {/* Total Reviews Info */}
        <p className="text-center text-gray-500 mt-4 text-sm">
          {language === 'uz' 
            ? `${testimonials.length} ta sharhdan ${currentIndex * itemsPerPage + 1}-${Math.min((currentIndex + 1) * itemsPerPage, testimonials.length)} ko'rsatilmoqda`
            : `Показано ${currentIndex * itemsPerPage + 1}-${Math.min((currentIndex + 1) * itemsPerPage, testimonials.length)} из ${testimonials.length} отзывов`
          }
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
