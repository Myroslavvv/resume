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
router.get('/task31', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('task31', {

    layout: 'basic',

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
      button: {
        text: 'Lets start',
        href: 'https://nodejs.org/en/',
      },
    },
    header: {
      title: 'Welcome to Our Website',
      description:
        'We offer innovative solutions to help grow your business. Our team of experts is committed to providing tailored strategies that deliver the best results.',
      button: {
        text: 'Learn More',
        link: 'https://www.youtube.com/',
      },
    },
    city: {
      title: 'City list',
      cards: [
        {
          picture: {
            src: 'https://picsum.photos/400/200',
            alt: 'New York',
          },
          title: 'New York City',
          description:
            'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park.',
          button: {
            text: 'Read',
            href: 'https://github.com/',
          },
        },
        {
          picture: {
            src: 'https://picsum.photos/400/200',
            alt: 'Paris',
          },
          title: 'Paris',
          description:
            "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy, and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture, haute couture fashion houses, and designer boutiques along the Rue du Faubourg Saint-Honoré.",
          button: {
            text: 'Read',
            href: 'https://github.com/',
          },
        },
        {
          picture: {
            src: 'https://picsum.photos/400/200',
            alt: 'Tokyo',
          },
          title: 'Tokyo',
          description:
            "Tokyo, Japan’s bustling capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum).",
          button: {
            text: 'Reac',
            href: 'https://github.com/',
          },
        },
        {
          picture: {
            src: 'https://picsum.photos/400/200',
            alt: 'Sydney',
          },
          title: 'Sydney',
          description:
            "Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harborfront Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby. Sydney Tower’s outdoor platform, the Skywalk, offers 360-degree views of the city and suburbs.",
          button: {
            text: 'Reac',
            href: 'https://github.com/',
          },
        },
      ],
    },
    winner: {
      title: 'Our winners',
      table: {
        head: ['#', 'name', 'surname', 'nickname'],
        user: [
          {
            place: 1,
            name: 'Ada',
            surname: 'Lovelace',
            nickname: 'The Enchantress of Numbers',
          },
          {
            place: 2,
            name: 'Grace',
            surname: 'Hopper',
            nickname: 'Amazing Grace',
          },
          {
            place: 3,
            name: 'Katherine',
            surname: 'Johnson',
            nickname: 'The Human Computer',
          },
        ],
      },
    },
    gallery: {
      title: 'Picture history',
      cards: [
        {
          name: 'The Mona Lisa',
          items: [
            'Painting',
            'Oil on poplar panel',
            '1503-1519',
          ],
        },
        {
          name: 'The Persistence of Memory',
          items: ['Painting', 'Oil on canvas', '1931'],
        },
        {
          name: 'The Starry Night',
          items: ['Painting', 'Oil on canvas', '1889'],
        },
      ],
    },
    relaxion: {
      title: 'Relax',
      cards: [
        {
          header: 'Meditation',
          title: 'The Benefits of Meditation',
          description:
            'Meditation can help reduce stress, anxiety, and depression, and improve overall well-being. Studies have also shown that regular meditation practice can enhance cognitive function and even boost the immune system.',
        },
        {
          header: 'Hydration',
          title: 'The Importance of Hydration',
          description:
            'Drinking enough water is essential for good health. Dehydration can lead to a range of symptoms, including fatigue, headaches, and constipation. It can also increase the risk of kidney stones and other health problems.',
        },
        {
          header: 'Yoga',
          title: 'The Benefits of Yoga',
          description:
            'Yoga can improve flexibility, strength, and balance, and help reduce stress and anxiety. It has also been shown to improve heart health and promote a sense of well-being.',
        },
        {
          header: 'Sunscreen',
          title: 'The Importance of Sunscreen',
          description:
            "Protecting your skin from the sun's harmful rays is crucial for reducing the risk of skin cancer and premature aging. Experts recommend using a broad-spectrum sunscreen with an SPF of at least 30 and reapplying every two hours.",
        },
      ],
    },
    rest: {
      cards: [
        {
          header: 'Cooking',
          title: 'The Joy of Cooking',
          description:
            'Cooking is a creative outlet that can bring people together over delicious food.',
          button: 'Learn More',
          footer: 'Photo by Brooke Lark on Unsplash',
        },
        {
          header: 'Travel',
          title: 'The Benefits of Traveling',
          description:
            'Traveling broadens your perspective, provides new experiences, and creates lasting memories.',
          button: 'Explore',
          footer: 'Photo by Sime Basioli on Unsplash',
        },
      ],
    },
    proposition: {
      title: 'Proposition',
      card: [
        {
          header: 'Our Approach',
          title: 'Innovative Solutions for Your Business',
          description:
            'We create effective solutions that cater to your business needs.',
        },
        {
          header: 'Our Expertise',
          title: 'Trusted and Experienced Professionals',
          description:
            'Our team of experts delivers tailored strategies for best results.',
        },
      ],
    },
    footer: {
      title: 'Navigation',
      navigation: [
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
      socialMedia: [
        {
          name: 'Facebook',
          link: 'https://www.facebook.com/',
        },
        {
          name: 'Twitter',
          link: 'https://twitter.com/',
        },
        {
          name: 'Instagram',
          link: 'https://www.instagram.com/',
        },
      ],
      partners: [
        {
          name: 'Acme Inc.',
          link: 'https://www.acme.com/',
        },
        {
          name: 'Globex Corporation',
          link: 'https://www.globex.com/',
        },
        {
          name: 'Stark Industries',
          link: 'https://www.starkindustries.com/',
        },
      ],
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================


// Підключаємо роутер до бек-енду
module.exports = router


