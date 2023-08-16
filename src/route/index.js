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
  
// Підключаємо роутер до бек-енду
module.exports = router


