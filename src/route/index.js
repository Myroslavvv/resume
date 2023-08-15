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

router.get('/js', function (req, res) {
	// res.render генерує нам HTML сторінку
  
	//            ↙ cюди вводимо назву файлу з сontainer
	res.render('js', {

		layout: 'basic',

	  name: 'JavaScript',
	  description:
		'JavaScript is a popular high-level, dynamic, and interpreted programming language.',
	  history: {
		year: 1995,
		founder: 'Brendan Eich',
	  },
	  types: [
		'Number',
		'String',
		'Boolean',
		'Null',
		'Undefined',
		'Symbol',
		'Object',
	  ],
	  syntax: {
		variables: ['var', 'let', 'const'],
		functions: ['function'],
		conditionals: ['if', 'else', 'switch'],
		loops: ['for', 'while', 'do-while'],
		classes: ['class'],
	  },
	  features: [
		'First-class functions',
		'Closures',
		'Dynamic typing',
		'Prototype-based inheritance',
		'Asynchronous programming with Promises and async/await',
		'Modules with import/export statements',
	  ],
	  libraries: [
		'jQuery',
		'React',
		'Angular',
		'Vue',
		'Node.js',
		'Express.js',
		'Lodash',
		'Moment.js',
	  ],
	  tools: [
		'Babel',
		'Webpack',
		'ESLint',
		'Jest',
		'Mocha',
		'Chai',
		'Selenium',
		'Cypress',
	  ],
	  community: [
		{
		  name: 'Stack Overflow',
		  type: 'forum',
		},
		{
		  name: 'JavaScript Weekly',
		  type: 'newsletter',
		},
		{
		  name: 'The Changelog',
		  type: 'podcast',
		},
		{
		  name: 'CSS-Tricks',
		  type: 'blog',
		},
	  ],
	})
	//                  ↑↑ сюди вводимо JSON дані
  })
  
  // ================================================================

  // router.get Створює нам один ентпоїнт

router.get('/car', function (req, res) {
	// res.render генерує нам HTML сторінку
  
	//            ↙ cюди вводимо назву файлу з сontainer
	res.render('car', {

		layout: 'basic',

	  make: 'Toyota',
	  model: 'Camry',
	  year: 2022,
	  color: 'silver',
	  features: {
		interior: {
		  seats: {
			material: 'leather',
			color: 'black',
			heated: true,
			ventilated: true,
		  },
		  dashboard: {
			material: 'plastic',
			color: 'black',
			display: {
			  type: 'LCD',
			  size: 10.1,
			  resolution: '1280x720',
			  touchscreen: true,
			},
		  },
		  audio: {
			system: 'JBL',
			speakers: 8,
			subwoofer: true,
			bluetooth: true,
			USB: true,
		  },
		},
		exterior: {
		  wheels: {
			size: 18,
			type: 'alloy',
			color: 'silver',
		  },
		  headlights: {
			type: 'LED',
			brightness: 'high',
			automatic: true,
		  },
		  sunroof: {
			type: 'panoramic',
			size: 'large',
			automatic: true,
		  },
		},
		safety: {
		  airbags: {
			front: 2,
			side: 2,
			knee: 2,
			rear: 2,
		  },
		  assistance: {
			blind_spot_monitoring: true,
			rear_cross_traffic_alert: true,
			lane_departure_warning: true,
			adaptive_cruise_control: true,
			collision_warning: true,
		  },
		},
	  },
	  engine: {
		type: 'gasoline',
		displacement: 2.5,
		horsepower: 206,
		torque: 186,
		transmission: {
		  type: 'automatic',
		  gears: 8,
		},
	  },
	  fuel_economy: {
		city: 28,
		highway: 39,
		combined: 32,
	  },
	  price: {
		base: 25900,
		destination: 995,
		options: {
		  navigation: 1200,
		  moonroof: 800,
		  premium_paint: 595,
		},
		total: 28990,
	  },
	})
	//                  ↑↑ сюди вводимо JSON дані
  })
  
  // ================================================================

// router.get Створює нам один ентпоїнт

router.get('/mac', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('mac', {
    
		layout: 'basic',
    
    name: 'Apple MacBook Pro',
    description: 'The ultimate notebook for power users',
    price: 1999.99,
    category: 'Computers & Tablets',
    features: {
      processor: {
        brand: 'Intel',
        model: 'Core i9',
        speed: '2.3 GHz',
        cores: 8,
        cache: '16 MB',
      },
      memory: {
        type: 'DDR4',
        size: '32 GB',
        speed: '2666 MHz',
      },
      storage: {
        type: 'SSD',
        size: '1 TB',
      },
      display: {
        size: '16 inches',
        resolution: '3072x1920',
        technology: 'Retina',
        color_space: 'P3',
        brightness: '500 nits',
        refresh_rate: '60 Hz',
      },
      graphics: {
        brand: 'AMD',
        model: 'Radeon Pro 5500M',
        memory: '4 GB GDDR6',
      },
      ports: [
        {
          type: 'Thunderbolt 3',
          count: 4,
          features: [
            'Charging',
            'DisplayPort',
            'Thunderbolt (up to 40 Gbps)',
            'USB 3.1 Gen 2 (up to 10 Gbps)',
          ],
        },
        {
          type: 'HDMI',
          count: 1,
        },
      ],
      battery: {
        type: 'Lithium Polymer',
        capacity: '100 Wh',
        life: 'Up to 11 hours',
      },
      weight: '4.3 pounds',
      dimensions: {
        height: '0.64 inch',
        width: '14.09 inches',
        depth: '9.68 inches',
      },
      operating_system: 'macOS',
      accessories: [
        {
          name: 'Apple Magic Keyboard',
          price: 99.99,
        },
        {
          name: 'Apple Magic Mouse 2',
          price: 79.99,
        },
        {
          name: 'USB-C to USB Adapter',
          price: 19.99,
        },
      ],
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router


