// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
    name: {
        firstname:'ivan',
        lastname: 'Ivanov',
      },
  
    position: 'Junior Fullstack JS Developer',
    salary: '600$ в місяць',
    address: 'Українa, 03110, м. Київ, вул.Шевченка, 3',
}

var footer = {
        social: {

            email: {
              text: 'ivanov@mail.com',
              href: 'mailto:ivanov@mail.com',
            },
            phone: {
              text: "tel:+380670000123",
              href: "tel:+380670000123",
            },
            linkedin: {
              href: "https://www.linkedin.com/in/dmytro-testa",
              text: "LinkedIn",
            },
       },
    }
    

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані

})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
	
	page: {
		title: 'Resume | summary',
	},

    header,
	
	main: {
		summary: {
			title: 'Summary',
			text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to      work on a new project I learn the domain and try to understand the idea of the project. Good teamplayer, every colleague is a friend to me.',	  
		 },
	  
		 experience: {
			title: 'Other experience',
			text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple athematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
		  },
	},

    footer,
  })
})

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
	
	page: {
		title: 'Resume | skills',
	},

    header,

	main: {
        skills: [
            {
            name: 'HTML',
            points: 10,
            isTop: true,
            },
            {
            name: 'Handlebars',
            points: 8,
            isTop: true,
            },
            {
            name: 'VS Code',
            points: 9,
            isTop: false,
            },
            {
            name: 'Git',
            points: 5,
            },
            {
            name: 'php',
            points: null,
            },
            {
            name: 'NPM',
            points: 0,
            },
        ],

        hobbies: [
          {
            name: 'run',
            isMain: true,
          },
          {
            name: 'books',
            isMain: true,
          },
          {
            name: 'dance',
            isMain: false,
          },
        ],
    },

    footer,
  })
})

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('education', { 
      // ↙ сюди вводимо JSON дані
      
      page: {
          title: 'Resume | education',
      },
  
      header,
  
      main: {
        educations:  [
            {
            name: 'nursery school',
            points: 7,
            isEnd: true,
            },
            {
            name: 'secondary school',
            points: 5,
            isEnd: true,
            },
            {
            name: 'state school',
            points: 9,
            isEnd: true,
            },
            {
            name: 'private school ',
            points: 8,
            isEnd: false,
            },
            {
            name: 'boarding school',
            points: 10,
            isEnd: false,
            },
        ],

        certificates: [
            {
              name: 'slow',
              id: 11,
            },
            {
              name: 'middle',
              id: 22,
            },
            {
              name: 'fast',
              id: 33,
            },
        ],
      },
  
      footer,
    })
  })
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('work', { 
      // ↙ сюди вводимо JSON дані

      layout: 'big',
      
      page: {
          title: 'Resume | work',
      },
  
      header,
  
      main: {
        works: [
          {
            position: 'Junior fullstack',
            company: {
            name: 'IT Brains',
            // url: 'https://it-brains.com.ua',
            url: null,
            },
            duration: {
              from: '10.10.2022',
              to: null,
            },
            projectAmount: 3,

            projects: [
              {
                name: 'Resume',
                url: 'https://resume.com.ua',
                about: 'Airbnb competitor',
                stacks: [
                  {
                    name: 'React.js',
                  },
                  {
                    name: 'HTML / CSS',
                  },
                  {
                    name: 'Node.js',
                  },
                ],
                awards: [
                  {
                    name: 'Background verification',
                  },
                  {
                    name: 'Preparing seo pages',
                  },
                ],
                stackAmount: 3,
                awardAmount: 2,
              },
            ],
          },
        ],
      },
  
      footer,
    })
  })
  
// ================================================================


// router.get Створює нам один ентпоїнт

router.get('/facebook', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('facebook', {

    layout: 'basic',
    
    name: 'Facebook',
    users: [
      {
        id: 1,
        name: 'John Doe',
        gender: 'Male',
        age: 30,
        friends: [
          {
            id: 2,
            name: 'Jane Smith',
            gender: 'Female',
            age: 27,
            mutual_friends: [
              {
                id: 4,
                name: 'Samantha Lee',
                gender: 'Female',
                age: 25,
              },
            ],
          },
          {
            id: 5,
            name: 'Mike Williams',
            gender: 'Male',
            age: 28,
            mutual_friends: [
              {
                id: 7,
                name: 'David Kim',
                gender: 'Male',
                age: 29,
              },
            ],
          },
        ],
        groups: [
          {
            id: 1,
            name: 'Hiking Enthusiasts',
            description:
              'A group for people who love hiking and the great outdoors',
            members: [
              {
                id: 8,
                name: 'Sarah Johnson',
                gender: 'Female',
                age: 25,
              },
            ],
          },
          {
            id: 2,
            name: 'Foodies United',
            description:
              'A group for food lovers to share recipes and restaurant recommendations',
            members: [
              {
                id: 5,
                name: 'Mike Williams',
                gender: 'Male',
                age: 28,
              },
              {
                id: 8,
                name: 'Sarah Johnson',
                gender: 'Female',
                age: 25,
              },
            ],
          },
        ],
      },
      {
        id: 16,
        name: 'Amy Lee',
        gender: 'Female',
        age: 30,
        friends: [
          {
            id: 15,
            name: 'Peter Kim',
            gender: 'Male',
            age: 32,
            mutual_friends: [
              {
                id: 17,
                name: 'David Chen',
                gender: 'Male',
                age: 33,
              },
              {
                id: 19,
                name: 'Erica Wong',
                gender: 'Female',
                age: 29,
                mutual_friends: [
                  {
                    id: 20,
                    name: 'Alex Lee',
                    gender: 'Male',
                    age: 31,
                  },
                ],
              },
            ],
            groups: [
              {
                id: 3,
                name: 'Travel Addicts',
                description:
                  'A group for people who love to travel and explore new places',
                members: [
                  {
                    id: 22,
                    name: 'Jackie Chen',
                    gender: 'Female',
                    age: 26,
                  },
                ],
              },
              {
                id: 4,
                name: 'Pet Lovers',
                description:
                  'A group for people who love their furry friends',
                members: [
                  {
                    id: 16,
                    name: 'Amy Lee',
                    gender: 'Female',
                    age: 30,
                  },
                  {
                    id: 25,
                    name: 'John Smith',
                    gender: 'Male',
                    age: 33,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  })
})

  // ================================================================  
  

  
router.get('/bootstrap', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('bootstrap', {

layout: 'bootstrap',

  })
 
})

  // ================================================================  


  // router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/task21', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('task21', {

    layout: 'basic',
    
    heading: {
      main: {
        title: 'JavaScript',
        text: 'JavaScript is a popular high-level, dynamic, and interpreted programming language.',
        button_text: {
          solid: 'Open page',
          outline: 'Add to cart',
        },
      },
      second: {
        title: 'Stack Overflow',
        text: 'First-class functions',
        button_text: {
          solid: 'Open page',
          outline: 'Add to cart',
        },
      },
      subblock: {
        title: 'JavaScript Weekly',
        text: 'Prototype-based inheritance newsletter',
        button_text: {
          solid: 'Open page',
          outline: 'Add to cart',
        },
      },
    },
    nested_display: {
      title: 'HTML',
      children_display: {
        title: 'Outdated HTML tags',
        text: 'tags that have been identified as deprecated and not recommended for use in HTML version 5',
        button: {
          text: 'Орen',
        },
      },
      header_text: 'Sections',
      button: {
        text: 'Learn more',
      },
    },
    paragraph: {
      title: 'About modules',
      text: 'Modules with import/export statements',

      button: {
        text: 'Open link page',
        url: 'https://google.com',
      },
      list_name: [
        {
          text: 'Github',
          url: 'https://github.com/',
        },
        {
          text: 'Bootstrap',
          url: 'https://getbootstrap.com/',
        },
      ],
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/task22', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('task22', {

    layout: 'basic',

    page_header: {
      title: 'InnovaMind',
      description: 'Welcome to our wonderful community',
    },
    section: {
      about_us: {
        title_list: {
          main: 'InnovaMind',
          sub: 'InnovaMind is a forward-thinking startup focused on innovation. We are dedicated to creating efficient and powerful software through the use of first-class functions.',
        },
        button: { text: 'Show more' },
      },
      advantage: {
        title: 'Advantage',
        efficiency: {
          title: 'Efficiency',
          sub_title: 'Streamline your software development',
          description:
            'Streamline your software development with our innovative platform...',
          button: 'Show more',
        },
        innovation: {
          title: 'Innovation',
          sub_title:
            'Forward-thinking approach to programming',
          description:
            ' Stay ahead of the curve with our forward-thinking approach to programming...',
          button: 'Show more',
        },
        collaboration: {
          title: 'Collaboration',
          sub_title: 'Connect with like-minded developers',
          description:
            'Connect with a community of like-minded developers to share knowledge and insights...',
          button: 'Show more',
        },
      },
      agreement: {
        title: 'Terms of use',
        info: {
          sub_title: 'Check out our requirements',
          detail: {
            text: 'By using or accessing the service, you agree to be bound by the terms and conditions outlined in the agreement.',
            button: 'Аccept',
          },
        },
      },
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки

router.get('/shophome', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shophome', {
    layout: 'shop',

    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
      ],

    },

    newsBlock: {
      title: 'Latest News',
      cards: [
        {
          title: 'COVID-19 Vaccinations Begin in Europe',
          description:
            'As the world continues to grapple with the ongoing COVID-19 pandemic, Europe begins its vaccination rollout, with healthcare workers and the elderly among the first to receive the vaccine.',
          isTop: false,
          isNew: false,
        },
        {
          title: 'Tesla Stock Surges After Record Sales',
          description:
            "Tesla's stock price jumps 10% following the company's announcement of record sales in the last quarter, thanks in part to strong demand for its electric vehicles.",
          isTop: true,
          isNew: true,
        },
        {
          title:
            'New Study Shows Benefits of Meditation for Mental Health',
          description:
            'A new study published in the Journal of the American Medical Association finds that practicing mindfulness meditation can lead to improved mental health outcomes for people struggling with depression and anxiety.',
          isTop: false,
          isNew: false,
        },
        {
          title: 'NASA Launches New Mars Rover',
          description:
            "NASA's Perseverance rover successfully launches on a mission to explore Mars, with the goal of collecting samples of the planet's surface and searching for signs of ancient microbial life.",
          isTop: false,
          isNew: true,
        },
        {
          title:
            'GameStop Shares Soar as Reddit Traders Rally',
          description:
            'Shares of GameStop surge as amateur traders on the social media platform Reddit rally to drive up the price, in what some are calling a battle between Wall Street and Main Street.',
          isTop: false,
          isNew: false,
        },
        {
          title:
            'UK Announces Plan to Ban Sale of Gas-Powered Cars by 2030',
          description:
            'In an effort to combat climate change, the UK government announces a plan to ban the sale of new gas-powered cars and vans by 2030, with hybrid vehicles to follow in 2035.',
          isTop: true,
          isNew: false,
        },
        {
          title:
            'New Study Shows Link Between Exercise and Longevity',
          description:
            'A new study published in the Journal of the American Medical Association suggests that regular exercise can help people live longer, with participants who exercised regularly having a lower risk of premature death.',
          isTop: false,
          isNew: false,
        },
        {
          title: 'Amazon Expands Grocery Delivery Service',
          description:
            'Amazon announces an expansion of its grocery delivery service, with plans to offer free delivery to Prime members on orders over $35 and to expand its selection of fresh and organic produce.',
          isTop: false,
          isNew: true,
        },
      ],
    },

    goodsBlock: {
      tabs: [
        {
          isActive: true,
          isDisabled: false,
          text: 'Electronics',
        },
        {
          isActive: false,
          isDisabled: false,
          text: 'Home & Kitchen',
        },
        {
          isActive: false,
          isDisabled: false,
          text: 'Clothing & Accessories',
        },
        {
          isActive: false,
          isDisabled: true,
          text: 'Toys & Games',
        },
      ],
      cards: [
        {
          image: 'https://picsum.photos/400/200',
          title: 'iPhone 13',
          description:
            'The latest iPhone model features a new A15 Bionic chip, improved camera system, and longer battery life.',
          isHot: false,
          isNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'MacBook Pro',
          description:
            "Apple's high-end laptop features a 16-inch Retina display, powerful M1 Pro or M1 Max chip, and up to 64GB of RAM.",
          isHot: true,
          isNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'AirPods Pro',
          description:
            "Apple's premium wireless earbuds feature active noise cancellation, a customizable fit, and up to 4.5 hours of listening time.",
          isHot: false,
          isNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'Sony Bravia XR A90J',
          description:
            'This OLED TV boasts a 4K resolution, HDR support, and a high refresh rate for smooth motion handling.',
          isHot: false,
          isNew: true,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'Nintendo Switch OLED Model',
          description:
            'The latest iteration of the popular gaming console features a larger OLED screen and improved audio quality.',
          isHot: false,
          isNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'Bose SoundLink Revolve+',
          description:
            'This portable Bluetooth speaker features 360-degree sound, water-resistant construction, and up to 16 hours of battery life.',
          isHot: true,
          isNew: true,
        },
      ],
    },
    subscribe: {
      header: 'Unlock Premium Content',
      description:
        'Subscribe to access exclusive content and features.',
      buttons: [
        {
          text: 'Register Now',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Buy Subscription',
          link: 'https://www.youtube.com/',
        },
      ],
    },
    service: {
      title: 'Our Services',
      description:
        'We offer a variety of services to meet your needs, including web design, content creation, and social media management.',
      buttons: [
        {
          text: 'Show More',
          link: 'https://www.youtube.com/',
        },
      ],
    },

    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
        },
      ],
    ],

  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки

router.get('/shopcart', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shopcart', {

    layout: 'shop',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
      ],
    },

    header: {
      title: 'Кошик',
      button: {
        text: 'Продовжити покупки',
        link: 'https://www.youtube.com/',
      },
    },

    goodsBlock: [
      {
        image: 'https://picsum.photos/110/110',
        name: 'Samsung Galaxy S21 Ultra ',
        description:
          'екран 6.8", процесор Exynos 2100/Snapdragon 888, 12 ГБ ОЗУ, камера 108 МП, акумулятор 5000 мАг',
        price: { title: 'Ціна', value: '25 000 ₴' },
        amount: '1 шт.',
        buttons: [
          { text: 'Додати', isPrimary: true },
          { text: 'Видалити', isDanger: true },
        ],
      },
      {
        image: 'https://picsum.photos/110/110',
        name: 'Ноутбук Dell XPS 13',
        description:
          'екран 13.3", процесор Intel Core i7-1165G7, 16 ГБ ОЗУ, SSD на 512 ГБ, вага 1.2 кг.',
        price: { title: 'Ціна', value: '25 000 ₴' },

        amount: '1 шт.',
        buttons: [
          { text: 'Додати', isPrimary: true },
          { text: 'Видалити', isDanger: true },
        ],
      },
      {
        image: 'https://picsum.photos/110/110',
        name: 'Телевізор LG OLED CX',
        description:
          'екран 55", роздільна здатність 4K, Smart TV, HDR, звук Dolby Atmos, 4 HDMI порти, 3 USB порти.',
        price: { title: 'Ціна', value: '25 000 ₴' },

        amount: '1 шт.',
        buttons: [
          { text: 'Додати', isPrimary: true },
          { text: 'Видалити', isDanger: true },
        ],
      },
      {
        image: 'https://picsum.photos/110/110',
        name: 'Навушники Sony WH-1000XM4',
        description:
          'Bluetooth 5.0, активне шумозаглушення, 30 годин автономної роботи, сенсорне управління, вага 254 г.',
        price: { title: 'Ціна', value: '25 000 ₴' },

        amount: '1 шт.',
        buttons: [
          { text: 'Додати', isPrimary: true },
          { text: 'Видалити', isDanger: true },
        ],
      },
    ],

    total: {
      title: 'Сума замовлення',
      amount: '75 000 ₴',
      delivery: 'Без доставки',
      buttons: [
        {
          text: 'Оформити замовлення',
          link: 'https://www.youtube.com/',
          isSuccess: true,
        },
        {
          text: 'Офрмити кредит',
          link: 'https://www.youtube.com/',
          isOutline: true,
        },
      ],
    },


    goodsOtherBlock: {
      title: 'See other products',
      cards: [
        {
          image: 'https://picsum.photos/400/200',
          title: 'iPhone 13',
          description:
            'The latest iPhone model features a new A15 Bionic chip, improved camera system, and longer battery life.',
          isHot: false,
          idNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'MacBook Pro',
          description:
            "Apple's high-end laptop features a 16-inch Retina display, powerful M1 Pro or M1 Max chip, and up to 64GB of RAM.",
          isHot: true,
          idNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'AirPods Pro',
          description:
            "Apple's premium wireless earbuds feature active noise cancellation, a customizable fit, and up to 4.5 hours of listening time.",
          isHot: false,
          idNew: false,
        },
      ],
    },

    subscribe: {
      header: 'Unlock Premium Content',
      description:
        'Subscribe to access exclusive content and features.',
      buttons: [
        {
          text: 'Register Now',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Buy Subscription',
          link: 'https://www.youtube.com/',
        },
      ],
    },


    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
        },
      ],
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/shopprofile', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shopprofile', {
    layout: 'shop',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
      ],
    },

    header: 'Мої замовлення',

    purchase: {
      tabs: ['Всі замовлення', 'Гарантія та повернення'],
      actionBlock: {
        input: { placeholder: 'Placeholder' },
        buttons: [
          {
            text: 'Знайти',
            link: 'https://www.youtube.com/',
            isSuccess: true,
          },
          {
            text: 'Виділити все',
            link: 'https://www.youtube.com/',
            isOutline: true,
          },
          {
            text: 'Очистити все',
            link: 'https://www.youtube.com/',
            isDanger: true,
          },
        ],
      },
      itemList: [
        {
          number: '№12587463 від 01.01.2023',
          status: 'Виконано',
          amount: { title: 'Сума', value: '25 000 ₴' },
          images: ['https://picsum.photos/110/100'],
          button: {
            text: 'Детальніше',
            link: 'https://www.youtube.com/',
            isPrimary: true,
          },
        },
        {
          number: '№12587463 від 01.01.2023',
          status: 'Виконано',
          amount: { title: 'Сума', value: '25 000 ₴' },
          images: [
            'https://picsum.photos/110/100',
            'https://picsum.photos/110/100',
            'https://picsum.photos/110/100',
          ],
          button: {
            text: 'Детальніше',
            link: 'https://www.youtube.com/',
            isPrimary: true,
          },
        },
        {
          number: '№12587463 від 01.01.2023',
          status: 'Виконано',
          amount: { title: 'Сума', value: '25 000 ₴' },
          images: [
            'https://picsum.photos/110/100',
            'https://picsum.photos/110/100',
          ],
          button: {
            text: 'Детальніше',
            link: 'https://www.youtube.com/',
            isPrimary: true,
          },
        },
      ],
    },
    userInfo: {
      title: 'Особиста інформація',
      profileData: {
        title: 'Особисті дані',
        fullName: {
          surname: {
            title: 'Прізвище',
            value: 'Іванов',
          },
          name: {
            title: 'Ім’я',
            value: 'Іван',
          },
          middleName: {
            title: 'По-батькові',
            value: 'Іванович',
          },
        },
        otherInfo: {
          birthday: {
            title: 'Дата народження',
            value: '01.01.2000',
          },
          sex: {
            title: 'Стать',
            value: 'Чоловіча',
          },
          language: {
            title: 'Мова',
            value: 'Українська',
          },
        },
      },
      buttons: [
        {
          text: 'Редагувати',
          link: 'https://www.youtube.com/',
          isPrimary: true,
        },
        {
          text: 'Очистити',
          link: 'https://www.youtube.com/',
          isSecondary: true,
        },
        {
          text: 'Видалити',
          link: 'https://www.youtube.com/',
          isDanger: true,
        },
      ],
      recipients: {
        title: 'Отримувачі',
        users: [
          {
            name: 'Іванов Іван Іванович',
            phone: '+38 (098) 222 22 22',
            button: {
              text: 'Редагувати',
              link: 'https://www.youtube.com/',
            },
          },
          {
            name: 'Петров Петро Петрович',
            phone: '+38 (098) 111 11 11',
            button: {
              text: 'Редагувати',
              link: 'https://www.youtube.com/',
            },
          },
        ],
      },
      contacts: {
        title: 'Контакти',
        contactData: [
          {
            title: 'Номер телефону',
            value: '+38 (098) 222 22 22',
            button: {
              text: 'Редагувати',
              link: 'https://www.youtube.com/',
              isPrimary: true,
            },
          },
          {
            title: 'Додатковий номер телефону',
            value: '+38 (098) 111 11 11',
            button: {
              text: 'Очистити',
              link: 'https://www.youtube.com/',
              isSecondary: true,
            },
          },
          {
            title: 'Електронна адреса',
            value: 'ivanivanov@ukr.net',
            button: {
              text: 'Видалити',
              link: 'https://www.youtube.com/',
              isDanger: true,
            },
          },
        ],
      },
    },

    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
        },
      ],
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router


