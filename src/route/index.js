// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

//==========================================================================

// var address = 'м.Київ, вул. Банкова, 6'

var header = {
   name: {
      firstname: 'Ivan',
      lastname: 'Ivanov',
   },
   position: 'Junior Fullstack JS Developer',
   salary: '600$ в місяць',
   address: 'м.Київ, вул. Банкова, 6',
}

var footer = {
   social: {
      email: {
         text: 'ivanov@mail.com',
         href: 'mailto:dmytro@mail.com',
      },
      phone: {
         text: '+380670000123',
         href: 'tel:+380670000123',
      },
      linkedin: {
         text: 'LinkedIn',
         href: 'https://www.linkedin.com/in/dmytro-test',
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
         title: 'Resume | Summary',
      },

      header,

      main: {
         summary: {
            title: 'Summary',
            text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good teamplayer, every colleague is a friend to me.',
         },

         experience: {
            title: 'Other experience',
            text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
         },
      },

      footer,
   })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
   //             ↙ cюди вводимо назву файлу з сontainer
   res.render('skills', {
      // ↙ сюди вводимо JSON дані
      page: {
         title: 'Resume | Skills',
      },

      header,

      main: {
         skills: [
            {
               name: 'HTML',
               point: 10,
               isTop: true,
            },
            {
               name: 'Handlebars',
               point: 10,
               isTop: true,
            },
            {
               name: 'VS Code & NPM',
               point: 9,
               isTop: false,
            },
            {
               name: 'Git & Terminal',
               point: 8,
            },
            {
               name: 'React.js',
               point: 0,
            },
            {
               name: 'PHP',
               point: null,
            },
         ],
         hobbies: [
            {
               name: 'volleyball',
               isMain: true,
            },
            {
               name: 'read',
               isMain: true,
            },
            {
               name: 'walk',
               isMain: false,
            },
         ],
      },

      footer,
   })
})

// ================================================================

router.get('/education', function (req, res) {
   res.render('education', {
      page: {
         title: 'Resume | Education',
      },

      header,

      main: {
         educations: [
            {
               name: 'КНУ',
               isEnd: true,
            },
            {
               name: 'КНЭУ',
               isEnd: false,
            },
            {
               name: 'КМА',
               isEnd: false,
            },
            {
               name: 'ЛНУ',
               isEnd: true,
            },
            {
               name: 'ХНУ',
               isEnd: false,
            },
            {
               name: 'УМСА',
               isEnd: true,
            },
         ],
         certificates: [
            {
               name: 'bachelor',
               id: '1543',
            },
            {
               name: 'expert',
               id: '1946',
            },
            {
               name: 'master',
               id: '2638',
            },
         ],
      },

      footer,
   })
})

// ==============================================

router.get('/work', function (req, res) {
   res.render('work', {
      layout: 'big',
      page: {
         title: 'Resume | Work',
      },

      header,

      main: {
         works: [
            {
               position: 'Junior Fullstack Developer',
               company: {
                  name: 'IT Brains',
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
                     url: 'http://volodymyr-about-me.mypressonline.com/',
                     about: 'Airbnb competitor. High-load application for searching apartments.',
                     stacks: [
                        {
                           name: 'React.js', 
                        }, 
                        {
                           name: 'HTML/CSS', 
                        },
                        {
                           name: 'Node.js', 
                        },
                     ],
                     awards: [
                        {
                           name: 'Background verification - is a feature that provides users to prove that they are real persons.',
                        },
                        {
                           name: 'Preparing SEO optimized pages. The automated process of getting data for the app from documents.',
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

// Підключаємо роутер до бек-енду
module.exports = router
