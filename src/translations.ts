export type Language = 'TJ' | 'RU' | 'ENG';

export const translations = {
  TJ: {
    nav: {
      about: 'Дар бораи мо',
      services: 'Хизматрасониҳо',
      membership: 'Аъзогӣ',
      reviews: 'Шарҳҳо',
      join: 'Аъзо шудан',
    },
    hero: {
      subtitle: 'Беҳтарин макони фитнес дар Душанбе',
      title: 'Dorob Gym',
      titleAccent: 'Созидание',
      desc: 'Қуллаи баланди дигаргунсозии ҷисмониро эҳсос кунед. Таҷҳизоти элита, ҳавзи олимпӣ ва мураббиёни сатҳи ҷаҳонӣ дар маркази шаҳр.',
      ctaPrimary: 'Оғози сафар',
      ctaSecondary: 'Иншоотҳо',
      stats: {
        rating: 'Рейтинг',
        hours: 'Соатҳои корӣ',
        location: 'Суроға',
      }
    },
    about: {
      subtitle: 'Дар бораи мо',
      title: 'Мероси',
      titleAccent: 'Dorob Gym',
      p1: 'Dorob Gym Созидание на танҳо як толори варзишӣ аст; он макони махсус барои онҳое мебошад, ки дар ҳама паҳлӯҳои ҳаёт бартариро меҷӯянд.',
      p2: 'Бо зиёда аз 10 соли таҷриба дар Душанбе, мо стандартҳои нави фитнеси боҳашаматро муқаррар кардем, ки технологияи муосирро бо муносибати инфиродӣ муттаҳид мекунад.',
      years: 'Солҳои таҷриба',
      members: 'Аъзоёни фаъол',
      trainers: 'Мураббиёни элита',
    },
    services: {
      title: 'Иншоотҳои',
      titleAccent: 'сатҳи ҷаҳонӣ',
      desc: 'Мо на танҳо ҷой барои машқ, балки муҳити барои муваффақият тарҳрезишударо пешниҳод мекунем.',
      viewAll: 'Ҳамаи хизматрасониҳо',
      items: [
        { title: 'Толори элита', desc: 'Таҷҳизоти муосири қувва ва кардио барои натиҷаҳои баланд.' },
        { title: 'Ҳавзи олимпӣ', desc: 'Оби мусаффо барои тамрини касбӣ ва истироҳат.' },
        { title: 'Тамрини инфиродӣ', desc: 'Барномаҳои махсус аз ҷониби мураббиёни элита.' },
        { title: 'Велнес ва Спа', desc: 'Барқароршавӣ бо сауна ва минтақаҳои истироҳатии мо.' }
      ]
    },
    membership: {
      title: 'Аъзогии',
      titleAccent: 'махсус',
      desc: 'Сатҳеро интихоб кунед, ки ба ҳадафҳои шумо мувофиқ аст. Бе пардохтҳои пинҳонӣ.',
      popular: 'Маъмултарин',
      currency: 'TJS / Моҳ',
      select: 'Интихоби нақша',
      tiers: [
        { name: 'Нуқрагин', price: '499', features: ['Дастрасии пурра ба толор', 'Хонаи либосивазкунӣ', '2 корти меҳмонӣ/моҳ', 'WiFi ройгон'] },
        { name: 'Тиллоӣ', price: '899', features: ['Ҳамаи имкониятҳои Нуқрагин', 'Дастрасӣ ба ҳавз', 'Сауна ва Спа', '1 тамрини инфиродӣ/моҳ', 'Дастгирии афзалиятнок'] },
        { name: 'Платина', price: '1499', features: ['Ҳамаи имкониятҳои Тиллоӣ', 'Тамрини инфиродии номаҳдуд', 'Нақшаи ғизо', 'Ҷевони шахсӣ', 'Хизматрасонии ҷомашӯӣ'] }
      ]
    },
    reviews: {
      title: 'Аъзоёни мо',
      titleAccent: 'чӣ мегӯянд',
      rating: 'Рейтинг',
      items: [
        {
          name: 'Анвар К.',
          text: 'Маркази фитнеси олӣ бо ҷадвали фасеҳи боздид дар асоси шартҳои меҳмон.',
          date: '30 августи 2021'
        },
        {
          name: 'ибодулло ашиев',
          text: 'Олӣ',
          date: '23 феврали 2023'
        },
        {
          name: 'Олимжон Makhmudov',
          text: 'Толори хуб, аммо ба ҷадвали корӣ дар рӯзи якшанбе диққат диҳед.',
          date: '1 феврал'
        }
      ]
    },
    contact: {
      title: 'Имрӯз ба мо',
      titleAccent: 'ташриф оред',
      address: 'Суроға',
      phone: 'Телефон',
      hours: 'Соатҳои корӣ',
      monSat: 'Дш - Шн: 06:00 - 23:00',
      sun: 'Якшанбе: Баста',
      map: 'Харитаи интерактивӣ'
    },
    footer: {
      desc: 'Макони ниҳоии дӯстдорони фитнес дар Душанбе. Мо боҳашамат, технология ва мураббиёни коршиносро муттаҳид мекунем.',
      links: 'Пайвандҳои зуд',
      newsletter: 'Хабарнома',
      newsDesc: 'Маслиҳатҳои фитнес ва пешниҳодҳои махсусро дастрас кунед.',
      rights: 'Ҳамаи ҳуқуқҳо ҳифз шудаанд.',
      privacy: 'Сиёсати махфият',
      terms: 'Шартҳои истифода'
    }
  },
  RU: {
    nav: {
      about: 'О нас',
      services: 'Услуги',
      membership: 'Абонементы',
      reviews: 'Отзывы',
      join: 'Присоединиться',
    },
    hero: {
      subtitle: 'Премиальный фитнес-центр в Душанбе',
      title: 'Dorob Gym',
      titleAccent: 'Созидание',
      desc: 'Испытайте пик физической трансформации. Элитное оборудование, олимпийский бассейн и тренеры мирового класса в самом сердце города.',
      ctaPrimary: 'Начать путь',
      ctaSecondary: 'Услуги',
      stats: {
        rating: 'Рейтинг',
        hours: 'Часы работы',
        location: 'Адрес',
      }
    },
    about: {
      subtitle: 'О нас',
      title: 'Наследие',
      titleAccent: 'Dorob Gym',
      p1: 'Dorob Gym Созидание — это не просто тренажерный зал; это святилище для тех, кто стремится к совершенству во всех аспектах жизни.',
      p2: 'Имея более чем 10-летний опыт работы в Душанбе, мы установили новые стандарты роскошного фитнеса, сочетая передовые технологии с индивидуальным подходом.',
      years: 'Лет опыта',
      members: 'Активных участников',
      trainers: 'Элитных тренеров',
    },
    services: {
      title: 'Услуги',
      titleAccent: 'мирового уровня',
      desc: 'Мы предоставляем больше, чем просто место для тренировок. Мы создаем среду, ориентированную на успех.',
      viewAll: 'Все услуги',
      items: [
        { title: 'Элитный зал', desc: 'Современное силовое и кардио оборудование для пиковых результатов.' },
        { title: 'Олимпийский бассейн', desc: 'Кристально чистая вода для профессиональных тренировок и отдыха.' },
        { title: 'Личный тренер', desc: 'Индивидуальные программы, разработанные элитными тренерами.' },
        { title: 'Велнес и Спа', desc: 'Восстанавливайтесь как профи в нашей сауне и зонах отдыха.' }
      ]
    },
    membership: {
      title: 'Эксклюзивные',
      titleAccent: 'абонементы',
      desc: 'Выберите уровень, который соответствует вашим амбициям. Без скрытых платежей.',
      popular: 'Популярный',
      currency: 'TJS / Месяц',
      select: 'Выбрать план',
      tiers: [
        { name: 'Серебро', price: '499', features: ['Полный доступ в зал', 'Раздевалка', '2 гостевых визита/мес', 'Бесплатный WiFi'] },
        { name: 'Золото', price: '899', features: ['Все из Серебра', 'Доступ в бассейн', 'Сауна и Спа', '1 тренировка с тренером/мес', 'Приоритетная поддержка'] },
        { name: 'Платина', price: '1499', features: ['Все из Золота', 'Безлимитные тренировки', 'План питания', 'Личный шкафчик', 'Услуги прачечной'] }
      ]
    },
    reviews: {
      title: 'Что говорят',
      titleAccent: 'наши клиенты',
      rating: 'Рейтинг',
      items: [
        {
          name: 'Анвар К.',
          text: 'Отличный фитнес центр с гибким расписанием посещений на условиях посетителя.',
          date: '30 августа 2021'
        },
        {
          name: 'ибодулло ашиев',
          text: 'Отличный',
          date: '23 февраля 2023'
        },
        {
          name: 'Олимжон Makhmudov',
          text: 'Хороший зал, но обратите внимание на график работы в воскресенье.',
          date: '1 февраля'
        }
      ]
    },
    contact: {
      title: 'Посетите нас',
      titleAccent: 'сегодня',
      address: 'Адрес',
      phone: 'Телефон',
      hours: 'Часы работы',
      monSat: 'Пн - Сб: 06:00 - 23:00',
      sun: 'Воскресенье: Выходной',
      map: 'Интерактивная карта'
    },
    footer: {
      desc: 'Лучшее место для любителей фитнеса в Душанбе. Мы объединяем роскошь, технологии и экспертный коучинг.',
      links: 'Быстрые ссылки',
      newsletter: 'Рассылка',
      newsDesc: 'Получайте советы по фитнесу и эксклюзивные предложения.',
      rights: 'Все права защищены.',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования'
    }
  },
  ENG: {
    nav: {
      about: 'About',
      services: 'Services',
      membership: 'Membership',
      reviews: 'Reviews',
      join: 'Join Now',
    },
    hero: {
      subtitle: "Dushanbe's Premier Fitness Destination",
      title: 'Dorob Gym',
      titleAccent: 'Созидание',
      desc: 'Experience the pinnacle of physical transformation. Elite equipment, olympic-sized pool, and world-class trainers in the heart of the city.',
      ctaPrimary: 'Start Your Journey',
      ctaSecondary: 'Explore Facilities',
      stats: {
        rating: 'Rating',
        hours: 'Hours',
        location: 'Location',
      }
    },
    about: {
      subtitle: 'Our Story',
      title: 'The Legacy of',
      titleAccent: 'Dorob Gym',
      p1: 'Dorob Gym Созидание is more than just a gym; it is a sanctuary for those who seek excellence in every aspect of life.',
      p2: 'With over 10 years of experience in Dushanbe, we have set new standards for luxury fitness, combining cutting-edge technology with a personalized approach.',
      years: 'Years Experience',
      members: 'Active Members',
      trainers: 'Elite Trainers',
    },
    services: {
      title: 'World-Class',
      titleAccent: 'Facilities',
      desc: 'We provide more than just a place to workout. We provide an environment engineered for success.',
      viewAll: 'View All Services',
      items: [
        { title: 'Elite Gym', desc: 'State-of-the-art strength and cardio equipment for peak performance.' },
        { title: 'Olympic Pool', desc: 'Crystal clear waters for professional training and relaxation.' },
        { title: 'Personal Training', desc: 'Customized programs designed by elite coaches to hit your goals.' },
        { title: 'Wellness & Spa', desc: 'Recover like a pro with our premium sauna and recovery zones.' }
      ]
    },
    membership: {
      title: 'Exclusive',
      titleAccent: 'Memberships',
      desc: 'Choose the tier that fits your ambition. No hidden fees, just pure performance.',
      popular: 'Most Popular',
      currency: 'TJS / Month',
      select: 'Select Plan',
      tiers: [
        { name: 'Silver', price: '499', features: ['Full Gym Access', 'Locker Room', '2 Guest Passes/mo', 'Free WiFi'] },
        { name: 'Gold', price: '899', features: ['Everything in Silver', 'Pool Access', 'Sauna & Spa', '1 PT Session/mo', 'Priority Support'] },
        { name: 'Platinum', price: '1499', features: ['Everything in Gold', 'Unlimited PT', 'Nutrition Planning', 'Private Locker', 'Laundry Service'] }
      ]
    },
    reviews: {
      title: 'What Our',
      titleAccent: 'Members Say',
      rating: 'Rating',
      items: [
        {
          name: 'Anvar K.',
          text: 'Excellent fitness center with a flexible visiting schedule on visitor terms.',
          date: 'August 30, 2021'
        },
        {
          name: 'Ibodullo Ashiev',
          text: 'Excellent',
          date: 'February 23, 2023'
        },
        {
          name: 'Olimjon Makhmudov',
          text: 'Good gym, but pay attention to the Sunday working hours.',
          date: 'February 1'
        }
      ]
    },
    contact: {
      title: 'Visit',
      titleAccent: 'Us Today',
      address: 'Address',
      phone: 'Phone',
      hours: 'Working Hours',
      monSat: 'Mon - Sat: 06:00 - 23:00',
      sun: 'Sunday: Closed',
      map: 'Interactive Map'
    },
    footer: {
      desc: 'The ultimate destination for fitness enthusiasts in Dushanbe. We combine luxury, technology, and expert coaching.',
      links: 'Quick Links',
      newsletter: 'Newsletter',
      newsDesc: 'Get fitness tips and exclusive offers.',
      rights: 'All Rights Reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  }
};
