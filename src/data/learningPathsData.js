/**
 * Structured Learning Paths for each Programming Language
 * Complete roadmap from Beginner to Expert with clear progression
 */

export const languageLearningPaths = {
  javascript: {
    id: 'javascript',
    name: 'JavaScript',
    icon: '🟨',
    color: '#F7DF1E',
    estimatedTime: '6-12 months',
    
    roadmap: [
      {
        phase: 1,
        level: 'Beginner',
        title: 'JavaScript Fundamentals',
        duration: '2-3 months',
        description: 'Master the basics of JavaScript programming',
        objectives: [
          'Understand variables, data types, and operators',
          'Write functions and control flow statements',
          'Work with arrays and objects',
          'Manipulate the DOM',
          'Handle events and user input'
        ],
        modules: [
          {
            id: 'js-b1',
            title: 'Getting Started',
            lessons: [
              { id: 1, title: 'Variables & Data Types', duration: '30 min', category: 'basics' },
              { id: 2, title: 'Operators', duration: '20 min', category: 'basics' },
              { id: 3, title: 'String Methods', duration: '25 min', category: 'basics' }
            ],
            quiz: { questions: 10, passingScore: 70 }
          },
          {
            id: 'js-b2',
            title: 'Control Flow',
            lessons: [
              { id: 4, title: 'If/Else Statements', duration: '30 min', category: 'basics' },
              { id: 5, title: 'Loops (for, while)', duration: '40 min', category: 'basics' },
              { id: 6, title: 'Switch Statements', duration: '20 min', category: 'basics' }
            ],
            quiz: { questions: 8, passingScore: 70 }
          },
          {
            id: 'js-b3',
            title: 'Functions',
            lessons: [
              { id: 7, title: 'Function Basics', duration: '40 min', category: 'basics' },
              { id: 8, title: 'Arrow Functions', duration: '30 min', category: 'basics' },
              { id: 9, title: 'Scope & Closures', duration: '45 min', category: 'basics' }
            ],
            quiz: { questions: 10, passingScore: 75 }
          },
          {
            id: 'js-b4',
            title: 'Arrays & Objects',
            lessons: [
              { id: 10, title: 'Array Basics', duration: '30 min', category: 'arrays' },
              { id: 11, title: 'Array Methods', duration: '50 min', category: 'arrays' },
              { id: 12, title: 'Object Basics', duration: '40 min', category: 'objects' },
              { id: 13, title: 'Object Methods', duration: '30 min', category: 'objects' }
            ],
            quiz: { questions: 12, passingScore: 75 }
          },
          {
            id: 'js-b5',
            title: 'DOM Manipulation',
            lessons: [
              { id: 14, title: 'Selecting Elements', duration: '30 min', category: 'dom' },
              { id: 15, title: 'Modifying Elements', duration: '35 min', category: 'dom' },
              { id: 16, title: 'Events', duration: '45 min', category: 'dom' }
            ],
            quiz: { questions: 10, passingScore: 70 }
          }
        ],
        projects: [
          {
            id: 'js-bp1',
            title: 'Todo List App',
            difficulty: 'Beginner',
            skills: ['DOM', 'Events', 'Arrays', 'Local Storage'],
            estimatedTime: '2-3 hours'
          },
          {
            id: 'js-bp2',
            title: 'Calculator',
            difficulty: 'Beginner',
            skills: ['Functions', 'Events', 'Math Operations'],
            estimatedTime: '2-3 hours'
          }
        ],
        finalAssessment: {
          type: 'Project',
          title: 'Interactive Quiz App',
          requirements: [
            'Multiple choice questions',
            'Score tracking',
            'Timer',
            'Results display'
          ],
          estimatedTime: '4-6 hours'
        }
      },
      
      {
        phase: 2,
        level: 'Intermediate',
        title: 'Modern JavaScript & Async Programming',
        duration: '2-3 months',
        description: 'Learn ES6+ features and asynchronous programming',
        objectives: [
          'Use modern JavaScript syntax (ES6+)',
          'Handle asynchronous operations',
          'Work with APIs and fetch data',
          'Understand modules and imports',
          'Write clean, maintainable code'
        ],
        modules: [
          {
            id: 'js-i1',
            title: 'ES6+ Features',
            lessons: [
              { id: 17, title: 'Destructuring', duration: '35 min', category: 'modern' },
              { id: 18, title: 'Spread & Rest', duration: '30 min', category: 'modern' },
              { id: 19, title: 'Template Literals', duration: '20 min', category: 'modern' },
              { id: 20, title: 'Optional Chaining', duration: '25 min', category: 'modern' }
            ],
            quiz: { questions: 10, passingScore: 75 }
          },
          {
            id: 'js-i2',
            title: 'Asynchronous JavaScript',
            lessons: [
              { id: 21, title: 'Callbacks', duration: '30 min', category: 'async' },
              { id: 22, title: 'Promises', duration: '45 min', category: 'async' },
              { id: 23, title: 'Async/Await', duration: '50 min', category: 'async' },
              { id: 24, title: 'Error Handling', duration: '35 min', category: 'async' }
            ],
            quiz: { questions: 12, passingScore: 75 }
          },
          {
            id: 'js-i3',
            title: 'Working with APIs',
            lessons: [
              { id: 25, title: 'Fetch API', duration: '40 min', category: 'async' },
              { id: 26, title: 'RESTful APIs', duration: '45 min', category: 'async' },
              { id: 27, title: 'JSON Handling', duration: '30 min', category: 'async' }
            ],
            quiz: { questions: 10, passingScore: 75 }
          },
          {
            id: 'js-i4',
            title: 'Modules & Organization',
            lessons: [
              { id: 28, title: 'ES6 Modules', duration: '40 min', category: 'modern' },
              { id: 29, title: 'Code Organization', duration: '35 min', category: 'modern' },
              { id: 30, title: 'NPM & Package Management', duration: '30 min', category: 'modern' }
            ],
            quiz: { questions: 8, passingScore: 75 }
          }
        ],
        projects: [
          {
            id: 'js-ip1',
            title: 'Weather App',
            difficulty: 'Intermediate',
            skills: ['Fetch API', 'Async/Await', 'DOM', 'Error Handling'],
            estimatedTime: '4-5 hours'
          },
          {
            id: 'js-ip2',
            title: 'Movie Search App',
            difficulty: 'Intermediate',
            skills: ['API Integration', 'Promises', 'Modules', 'UI Design'],
            estimatedTime: '5-6 hours'
          }
        ],
        finalAssessment: {
          type: 'Project',
          title: 'Full-Stack CRUD App (Frontend)',
          requirements: [
            'Fetch data from API',
            'Create, Read, Update, Delete operations',
            'Error handling',
            'Loading states',
            'Responsive design'
          ],
          estimatedTime: '8-10 hours'
        }
      },
      
      {
        phase: 3,
        level: 'Advanced',
        title: 'Advanced JavaScript & Performance',
        duration: '2-3 months',
        description: 'Master advanced concepts and optimization techniques',
        objectives: [
          'Understand prototypes and inheritance',
          'Optimize code performance',
          'Write functional programming code',
          'Handle complex state management',
          'Build scalable applications'
        ],
        modules: [
          {
            id: 'js-a1',
            title: 'Object-Oriented JavaScript',
            lessons: [
              { id: 31, title: 'Prototypes', duration: '50 min', category: 'oop' },
              { id: 32, title: 'Classes & Inheritance', duration: '45 min', category: 'oop' },
              { id: 33, title: 'Design Patterns', duration: '60 min', category: 'oop' }
            ],
            quiz: { questions: 10, passingScore: 80 }
          },
          {
            id: 'js-a2',
            title: 'Functional Programming',
            lessons: [
              { id: 34, title: 'Pure Functions', duration: '40 min', category: 'functional' },
              { id: 35, title: 'Higher-Order Functions', duration: '45 min', category: 'functional' },
              { id: 36, title: 'Composition', duration: '50 min', category: 'functional' }
            ],
            quiz: { questions: 10, passingScore: 80 }
          },
          {
            id: 'js-a3',
            title: 'Performance Optimization',
            lessons: [
              { id: 37, title: 'Memory Management', duration: '45 min', category: 'performance' },
              { id: 38, title: 'Debouncing & Throttling', duration: '35 min', category: 'performance' },
              { id: 39, title: 'Lazy Loading', duration: '40 min', category: 'performance' }
            ],
            quiz: { questions: 8, passingScore: 80 }
          },
          {
            id: 'js-a4',
            title: 'Testing & Debugging',
            lessons: [
              { id: 40, title: 'Unit Testing', duration: '50 min', category: 'testing' },
              { id: 41, title: 'Debugging Techniques', duration: '45 min', category: 'testing' },
              { id: 42, title: 'Error Monitoring', duration: '35 min', category: 'testing' }
            ],
            quiz: { questions: 10, passingScore: 80 }
          }
        ],
        projects: [
          {
            id: 'js-ap1',
            title: 'Task Management System',
            difficulty: 'Advanced',
            skills: ['OOP', 'State Management', 'Local Storage', 'Complex UI'],
            estimatedTime: '8-10 hours'
          },
          {
            id: 'js-ap2',
            title: 'Real-time Chat Application',
            difficulty: 'Advanced',
            skills: ['WebSockets', 'Async Programming', 'Performance', 'Security'],
            estimatedTime: '10-12 hours'
          }
        ],
        finalAssessment: {
          type: 'Capstone Project',
          title: 'E-Commerce Platform (Frontend)',
          requirements: [
            'Product catalog with search/filter',
            'Shopping cart',
            'User authentication UI',
            'Order management',
            'Performance optimization',
            'Responsive design',
            'Unit tests'
          ],
          estimatedTime: '20-25 hours'
        }
      },
      
      {
        phase: 4,
        level: 'Expert',
        title: 'Framework Mastery & Architecture',
        duration: '3-4 months',
        description: 'Build production-ready applications with modern frameworks',
        objectives: [
          'Master React or Vue.js',
          'Understand application architecture',
          'Implement state management',
          'Build scalable apps',
          'Deploy to production'
        ],
        modules: [
          {
            id: 'js-e1',
            title: 'React Fundamentals',
            lessons: [
              { id: 43, title: 'Components & JSX', duration: '60 min', category: 'react' },
              { id: 44, title: 'State & Props', duration: '50 min', category: 'react' },
              { id: 45, title: 'Hooks', duration: '60 min', category: 'react' },
              { id: 46, title: 'Context API', duration: '45 min', category: 'react' }
            ],
            quiz: { questions: 15, passingScore: 85 }
          },
          {
            id: 'js-e2',
            title: 'Advanced React',
            lessons: [
              { id: 47, title: 'Custom Hooks', duration: '50 min', category: 'react' },
              { id: 48, title: 'Performance Optimization', duration: '55 min', category: 'react' },
              { id: 49, title: 'React Router', duration: '45 min', category: 'react' }
            ],
            quiz: { questions: 12, passingScore: 85 }
          },
          {
            id: 'js-e3',
            title: 'State Management',
            lessons: [
              { id: 50, title: 'Redux Basics', duration: '60 min', category: 'state' },
              { id: 51, title: 'Redux Toolkit', duration: '50 min', category: 'state' },
              { id: 52, title: 'Zustand/Jotai', duration: '40 min', category: 'state' }
            ],
            quiz: { questions: 10, passingScore: 85 }
          },
          {
            id: 'js-e4',
            title: 'Production Deployment',
            lessons: [
              { id: 53, title: 'Build Optimization', duration: '45 min', category: 'deployment' },
              { id: 54, title: 'CI/CD', duration: '50 min', category: 'deployment' },
              { id: 55, title: 'Monitoring & Analytics', duration: '40 min', category: 'deployment' }
            ],
            quiz: { questions: 10, passingScore: 85 }
          }
        ],
        projects: [
          {
            id: 'js-ep1',
            title: 'Social Media Dashboard',
            difficulty: 'Expert',
            skills: ['React', 'Redux', 'API Integration', 'Real-time Updates'],
            estimatedTime: '15-20 hours'
          },
          {
            id: 'js-ep2',
            title: 'Project Management Tool',
            difficulty: 'Expert',
            skills: ['React', 'State Management', 'Drag & Drop', 'Complex UI'],
            estimatedTime: '20-25 hours'
          }
        ],
        finalAssessment: {
          type: 'Capstone Project',
          title: 'Full-Featured SaaS Application',
          requirements: [
            'User authentication & authorization',
            'Complex data management',
            'Real-time features',
            'Payment integration',
            'Admin dashboard',
            'Mobile responsive',
            'Production deployment',
            'Comprehensive testing'
          ],
          estimatedTime: '40-50 hours'
        }
      }
    ],
    
    certifications: [
      { level: 'Beginner', title: 'JavaScript Fundamentals Certificate' },
      { level: 'Intermediate', title: 'Modern JavaScript Developer Certificate' },
      { level: 'Advanced', title: 'Advanced JavaScript Professional Certificate' },
      { level: 'Expert', title: 'Full-Stack JavaScript Expert Certificate' }
    ],
    
    careerPaths: [
      'Frontend Developer',
      'Full-Stack Developer',
      'React Developer',
      'Node.js Developer',
      'JavaScript Engineer'
    ]
  },
  
  python: {
    id: 'python',
    name: 'Python',
    icon: '🐍',
    color: '#3776AB',
    estimatedTime: '6-12 months',
    
    roadmap: [
      {
        phase: 1,
        level: 'Beginner',
        title: 'Python Fundamentals',
        duration: '2-3 months',
        description: 'Master Python basics and core concepts',
        objectives: [
          'Understand Python syntax and data types',
          'Write functions and control structures',
          'Work with lists, dictionaries, and tuples',
          'Handle files and exceptions',
          'Use Python standard library'
        ],
        modules: [
          {
            id: 'py-b1',
            title: 'Getting Started',
            lessons: [
              { id: 1, title: 'Variables & Data Types', duration: '35 min', category: 'basics' },
              { id: 2, title: 'Operators', duration: '25 min', category: 'basics' },
              { id: 3, title: 'String Operations', duration: '30 min', category: 'basics' }
            ],
            quiz: { questions: 10, passingScore: 70 }
          },
          {
            id: 'py-b2',
            title: 'Control Flow',
            lessons: [
              { id: 4, title: 'Conditionals', duration: '30 min', category: 'basics' },
              { id: 5, title: 'Loops', duration: '40 min', category: 'basics' },
              { id: 6, title: 'Comprehensions', duration: '35 min', category: 'basics' }
            ],
            quiz: { questions: 8, passingScore: 70 }
          },
          {
            id: 'py-b3',
            title: 'Functions & Modules',
            lessons: [
              { id: 7, title: 'Function Basics', duration: '40 min', category: 'functions' },
              { id: 8, title: 'Arguments & Parameters', duration: '35 min', category: 'functions' },
              { id: 9, title: 'Lambda Functions', duration: '30 min', category: 'functions' },
              { id: 10, title: 'Modules & Packages', duration: '45 min', category: 'modules' }
            ],
            quiz: { questions: 12, passingScore: 75 }
          },
          {
            id: 'py-b4',
            title: 'Data Structures',
            lessons: [
              { id: 11, title: 'Lists', duration: '40 min', category: 'data-structures' },
              { id: 12, title: 'Tuples', duration: '25 min', category: 'data-structures' },
              { id: 13, title: 'Dictionaries', duration: '45 min', category: 'data-structures' },
              { id: 14, title: 'Sets', duration: '30 min', category: 'data-structures' }
            ],
            quiz: { questions: 12, passingScore: 75 }
          },
          {
            id: 'py-b5',
            title: 'File Handling',
            lessons: [
              { id: 15, title: 'Reading Files', duration: '35 min', category: 'files' },
              { id: 16, title: 'Writing Files', duration: '30 min', category: 'files' },
              { id: 17, title: 'Exception Handling', duration: '40 min', category: 'exceptions' }
            ],
            quiz: { questions: 10, passingScore: 70 }
          }
        ],
        projects: [
          {
            id: 'py-bp1',
            title: 'Contact Manager',
            difficulty: 'Beginner',
            skills: ['Functions', 'Dictionaries', 'File I/O'],
            estimatedTime: '3-4 hours'
          },
          {
            id: 'py-bp2',
            title: 'Number Guessing Game',
            difficulty: 'Beginner',
            skills: ['Loops', 'Conditionals', 'User Input'],
            estimatedTime: '2-3 hours'
          }
        ],
        finalAssessment: {
          type: 'Project',
          title: 'Text-based Adventure Game',
          requirements: [
            'Multiple rooms/locations',
            'Inventory system',
            'Save/Load functionality',
            'Error handling'
          ],
          estimatedTime: '6-8 hours'
        }
      },
      
      {
        phase: 2,
        level: 'Intermediate',
        title: 'Object-Oriented Python',
        duration: '2-3 months',
        description: 'Learn OOP and intermediate concepts',
        objectives: [
          'Master object-oriented programming',
          'Use decorators and generators',
          'Work with external libraries',
          'Handle JSON and APIs',
          'Write clean, Pythonic code'
        ],
        modules: [
          {
            id: 'py-i1',
            title: 'Object-Oriented Programming',
            lessons: [
              { id: 18, title: 'Classes & Objects', duration: '50 min', category: 'oop' },
              { id: 19, title: 'Inheritance', duration: '45 min', category: 'oop' },
              { id: 20, title: 'Polymorphism', duration: '40 min', category: 'oop' },
              { id: 21, title: 'Encapsulation', duration: '35 min', category: 'oop' }
            ],
            quiz: { questions: 12, passingScore: 75 }
          },
          {
            id: 'py-i2',
            title: 'Advanced Features',
            lessons: [
              { id: 22, title: 'Decorators', duration: '45 min', category: 'advanced' },
              { id: 23, title: 'Generators', duration: '40 min', category: 'advanced' },
              { id: 24, title: 'Context Managers', duration: '35 min', category: 'advanced' }
            ],
            quiz: { questions: 10, passingScore: 75 }
          },
          {
            id: 'py-i3',
            title: 'Working with APIs',
            lessons: [
              { id: 25, title: 'Requests Library', duration: '40 min', category: 'apis' },
              { id: 26, title: 'JSON Handling', duration: '30 min', category: 'apis' },
              { id: 27, title: 'REST APIs', duration: '45 min', category: 'apis' }
            ],
            quiz: { questions: 10, passingScore: 75 }
          },
          {
            id: 'py-i4',
            title: 'Popular Libraries',
            lessons: [
              { id: 28, title: 'NumPy Basics', duration: '50 min', category: 'libraries' },
              { id: 29, title: 'Pandas Introduction', duration: '55 min', category: 'libraries' },
              { id: 30, title: 'Virtual Environments', duration: '30 min', category: 'tools' }
            ],
            quiz: { questions: 8, passingScore: 75 }
          }
        ],
        projects: [
          {
            id: 'py-ip1',
            title: 'Weather Data Analyzer',
            difficulty: 'Intermediate',
            skills: ['API Integration', 'Pandas', 'Data Processing'],
            estimatedTime: '5-6 hours'
          },
          {
            id: 'py-ip2',
            title: 'Web Scraper',
            difficulty: 'Intermediate',
            skills: ['BeautifulSoup', 'Requests', 'Data Storage'],
            estimatedTime: '6-7 hours'
          }
        ],
        finalAssessment: {
          type: 'Project',
          title: 'Data Dashboard Application',
          requirements: [
            'Fetch data from multiple APIs',
            'Data processing with Pandas',
            'Export to CSV/JSON',
            'Error handling',
            'OOP design'
          ],
          estimatedTime: '10-12 hours'
        }
      },
      
      {
        phase: 3,
        level: 'Advanced',
        title: 'Web Development & Data Science',
        duration: '3 months',
        description: 'Build web applications and analyze data',
        objectives: [
          'Create web applications with Flask/Django',
          'Perform data analysis',
          'Build REST APIs',
          'Work with databases',
          'Visualize data'
        ],
        modules: [
          {
            id: 'py-a1',
            title: 'Web Development',
            lessons: [
              { id: 31, title: 'Flask Basics', duration: '60 min', category: 'web' },
              { id: 32, title: 'Routing & Templates', duration: '50 min', category: 'web' },
              { id: 33, title: 'Forms & Validation', duration: '45 min', category: 'web' },
              { id: 34, title: 'REST API Creation', duration: '55 min', category: 'api' }
            ],
            quiz: { questions: 12, passingScore: 80 }
          },
          {
            id: 'py-a2',
            title: 'Database Integration',
            lessons: [
              { id: 35, title: 'SQL & SQLite', duration: '50 min', category: 'database' },
              { id: 36, title: 'SQLAlchemy ORM', duration: '60 min', category: 'database' },
              { id: 37, title: 'Migrations', duration: '35 min', category: 'database' }
            ],
            quiz: { questions: 10, passingScore: 80 }
          },
          {
            id: 'py-a3',
            title: 'Data Analysis',
            lessons: [
              { id: 38, title: 'Advanced Pandas', duration: '60 min', category: 'data-science' },
              { id: 39, title: 'Matplotlib', duration: '50 min', category: 'visualization' },
              { id: 40, title: 'Seaborn', duration: '45 min', category: 'visualization' }
            ],
            quiz: { questions: 10, passingScore: 80 }
          },
          {
            id: 'py-a4',
            title: 'Testing',
            lessons: [
              { id: 41, title: 'Unit Testing', duration: '45 min', category: 'testing' },
              { id: 42, title: 'Pytest', duration: '50 min', category: 'testing' },
              { id: 43, title: 'Test Coverage', duration: '35 min', category: 'testing' }
            ],
            quiz: { questions: 8, passingScore: 80 }
          }
        ],
        projects: [
          {
            id: 'py-ap1',
            title: 'Blog Platform',
            difficulty: 'Advanced',
            skills: ['Flask', 'SQLAlchemy', 'Authentication', 'CRUD'],
            estimatedTime: '12-15 hours'
          },
          {
            id: 'py-ap2',
            title: 'Sales Data Analysis',
            difficulty: 'Advanced',
            skills: ['Pandas', 'Visualization', 'Statistics', 'Reports'],
            estimatedTime: '10-12 hours'
          }
        ],
        finalAssessment: {
          type: 'Capstone Project',
          title: 'Full-Stack Web Application',
          requirements: [
            'User authentication',
            'Database integration',
            'REST API',
            'Data visualization',
            'Unit tests',
            'Deployment ready'
          ],
          estimatedTime: '25-30 hours'
        }
      },
      
      {
        phase: 4,
        level: 'Expert',
        title: 'Advanced Python & Specialization',
        duration: '3-4 months',
        description: 'Master advanced topics and specialize',
        objectives: [
          'Build scalable applications',
          'Understand concurrency',
          'Work with machine learning',
          'Optimize performance',
          'Deploy to production'
        ],
        modules: [
          {
            id: 'py-e1',
            title: 'Concurrency & Async',
            lessons: [
              { id: 44, title: 'Threading', duration: '50 min', category: 'concurrency' },
              { id: 45, title: 'Multiprocessing', duration: '55 min', category: 'concurrency' },
              { id: 46, title: 'Asyncio', duration: '60 min', category: 'async' }
            ],
            quiz: { questions: 12, passingScore: 85 }
          },
          {
            id: 'py-e2',
            title: 'Machine Learning Intro',
            lessons: [
              { id: 47, title: 'Scikit-learn Basics', duration: '60 min', category: 'ml' },
              { id: 48, title: 'Model Training', duration: '55 min', category: 'ml' },
              { id: 49, title: 'Model Evaluation', duration: '50 min', category: 'ml' }
            ],
            quiz: { questions: 10, passingScore: 85 }
          },
          {
            id: 'py-e3',
            title: 'Performance Optimization',
            lessons: [
              { id: 50, title: 'Profiling', duration: '45 min', category: 'performance' },
              { id: 51, title: 'Cython', duration: '50 min', category: 'performance' },
              { id: 52, title: 'Memory Management', duration: '40 min', category: 'performance' }
            ],
            quiz: { questions: 8, passingScore: 85 }
          },
          {
            id: 'py-e4',
            title: 'Deployment & DevOps',
            lessons: [
              { id: 53, title: 'Docker', duration: '60 min', category: 'devops' },
              { id: 54, title: 'CI/CD', duration: '50 min', category: 'devops' },
              { id: 55, title: 'Cloud Deployment', duration: '55 min', category: 'cloud' }
            ],
            quiz: { questions: 10, passingScore: 85 }
          }
        ],
        projects: [
          {
            id: 'py-ep1',
            title: 'ML-Powered Application',
            difficulty: 'Expert',
            skills: ['Machine Learning', 'Flask', 'Model Deployment'],
            estimatedTime: '20-25 hours'
          },
          {
            id: 'py-ep2',
            title: 'Real-time Data Pipeline',
            difficulty: 'Expert',
            skills: ['Async', 'Data Processing', 'Streaming'],
            estimatedTime: '18-22 hours'
          }
        ],
        finalAssessment: {
          type: 'Capstone Project',
          title: 'Enterprise Python Platform',
          requirements: [
            'Microservices architecture',
            'Machine learning integration',
            'Real-time processing',
            'Containerized deployment',
            'Monitoring & logging',
            'CI/CD pipeline',
            'Comprehensive testing',
            'Documentation'
          ],
          estimatedTime: '50-60 hours'
        }
      }
    ],
    
    certifications: [
      { level: 'Beginner', title: 'Python Fundamentals Certificate' },
      { level: 'Intermediate', title: 'Object-Oriented Python Developer Certificate' },
      { level: 'Advanced', title: 'Advanced Python Professional Certificate' },
      { level: 'Expert', title: 'Python Expert & Architect Certificate' }
    ],
    
    careerPaths: [
      'Backend Developer',
      'Full-Stack Developer',
      'Data Scientist',
      'ML Engineer',
      'DevOps Engineer',
      'Python Developer'
    ]
  },

  typescript: {
    id: 'typescript',
    name: 'TypeScript',
    icon: '🔷',
    color: '#3178C6',
    estimatedTime: '4-8 months',
    
    roadmap: [
      {
        phase: 1,
        level: 'Beginner',
        title: 'TypeScript Fundamentals',
        duration: '1-2 months',
        description: 'Learn TypeScript basics and type system',
        objectives: [
          'Understand TypeScript syntax and compilation',
          'Work with basic types and type inference',
          'Use interfaces and type aliases',
          'Configure TypeScript projects',
          'Migrate JavaScript to TypeScript'
        ],
        modules: [
          {
            id: 'ts-b1',
            title: 'Getting Started',
            lessons: [
              { id: 1, title: 'TypeScript Setup & Config', duration: '30 min', category: 'basics' },
              { id: 2, title: 'Basic Types', duration: '40 min', category: 'basics' },
              { id: 3, title: 'Type Inference', duration: '35 min', category: 'basics' }
            ],
            quiz: { questions: 10, passingScore: 70 }
          },
          {
            id: 'ts-b2',
            title: 'Interfaces & Types',
            lessons: [
              { id: 4, title: 'Interfaces', duration: '45 min', category: 'types' },
              { id: 5, title: 'Type Aliases', duration: '35 min', category: 'types' },
              { id: 6, title: 'Union & Intersection Types', duration: '40 min', category: 'types' },
              { id: 7, title: 'Literal Types', duration: '30 min', category: 'types' }
            ],
            quiz: { questions: 12, passingScore: 75 }
          },
          {
            id: 'ts-b3',
            title: 'Functions & Classes',
            lessons: [
              { id: 8, title: 'Function Types', duration: '40 min', category: 'functions' },
              { id: 9, title: 'Class Types', duration: '50 min', category: 'classes' },
              { id: 10, title: 'Access Modifiers', duration: '35 min', category: 'classes' }
            ],
            quiz: { questions: 10, passingScore: 75 }
          }
        ],
        projects: [
          { id: 'ts-bp1', title: 'Typed Todo App', difficulty: 'Beginner', skills: ['Types', 'Interfaces', 'Classes'], estimatedTime: '3-4 hours' }
        ],
        finalAssessment: {
          type: 'Project',
          title: 'Type-Safe API Client',
          requirements: ['Define interfaces for API responses', 'Type-safe requests', 'Error handling with custom types'],
          estimatedTime: '5-6 hours'
        }
      },
      {
        phase: 2,
        level: 'Intermediate',
        title: 'Advanced Types & Generics',
        duration: '2 months',
        description: 'Master advanced type features and generics',
        objectives: ['Use generics effectively', 'Create utility types', 'Work with conditional types', 'Type guards and narrowing'],
        modules: [
          {
            id: 'ts-i1',
            title: 'Generics',
            lessons: [
              { id: 11, title: 'Generic Functions', duration: '45 min', category: 'generics' },
              { id: 12, title: 'Generic Classes & Interfaces', duration: '40 min', category: 'generics' },
              { id: 13, title: 'Generic Constraints', duration: '50 min', category: 'generics' }
            ],
            quiz: { questions: 12, passingScore: 75 }
          },
          {
            id: 'ts-i2',
            title: 'Advanced Types',
            lessons: [
              { id: 14, title: 'Conditional Types', duration: '50 min', category: 'advanced' },
              { id: 15, title: 'Mapped Types', duration: '45 min', category: 'advanced' },
              { id: 16, title: 'Template Literal Types', duration: '40 min', category: 'advanced' }
            ],
            quiz: { questions: 10, passingScore: 75 }
          },
          {
            id: 'ts-i3',
            title: 'Type Guards & Narrowing',
            lessons: [
              { id: 17, title: 'Type Guards', duration: '40 min', category: 'types' },
              { id: 18, title: 'Discriminated Unions', duration: '45 min', category: 'types' },
              { id: 19, title: 'Type Predicates', duration: '35 min', category: 'types' }
            ],
            quiz: { questions: 10, passingScore: 75 }
          }
        ],
        projects: [
          { id: 'ts-ip1', title: 'Generic Data Store', difficulty: 'Intermediate', skills: ['Generics', 'Advanced Types', 'Type Guards'], estimatedTime: '6-8 hours' }
        ],
        finalAssessment: {
          type: 'Project',
          title: 'Type-Safe State Management Library',
          requirements: ['Generic state management', 'Type-safe actions', 'Middleware support', 'TypeScript utilities'],
          estimatedTime: '10-12 hours'
        }
      },
      {
        phase: 3,
        level: 'Advanced',
        title: 'TypeScript Patterns & Architecture',
        duration: '2 months',
        description: 'Advanced patterns and architectural best practices',
        objectives: ['Design patterns in TypeScript', 'Type safety at scale', 'Performance optimization', 'Module design'],
        modules: [
          {
            id: 'ts-a1',
            title: 'Design Patterns',
            lessons: [
              { id: 20, title: 'Factory Pattern', duration: '50 min', category: 'patterns' },
              { id: 21, title: 'Builder Pattern', duration: '45 min', category: 'patterns' },
              { id: 22, title: 'Singleton Pattern', duration: '40 min', category: 'patterns' },
              { id: 23, title: 'Observer Pattern', duration: '50 min', category: 'patterns' }
            ],
            quiz: { questions: 12, passingScore: 80 }
          },
          {
            id: 'ts-a2',
            title: 'Advanced Patterns',
            lessons: [
              { id: 24, title: 'Decorators', duration: '55 min', category: 'decorators' },
              { id: 25, title: 'Mixins', duration: '45 min', category: 'patterns' },
              { id: 26, title: 'Module Augmentation', duration: '40 min', category: 'modules' }
            ],
            quiz: { questions: 10, passingScore: 80 }
          },
          {
            id: 'ts-a3',
            title: 'Type System Mastery',
            lessons: [
              { id: 27, title: 'Branded Types', duration: '40 min', category: 'types' },
              { id: 28, title: 'Phantom Types', duration: '35 min', category: 'types' },
              { id: 29, title: 'Type-Level Programming', duration: '60 min', category: 'types' }
            ],
            quiz: { questions: 10, passingScore: 80 }
          }
        ],
        projects: [
          { id: 'ts-ap1', title: 'Enterprise Application Architecture', difficulty: 'Advanced', skills: ['Patterns', 'Clean Architecture', 'DI'], estimatedTime: '15-20 hours' }
        ],
        finalAssessment: {
          type: 'Project',
          title: 'Scalable TypeScript Framework',
          requirements: ['Clean architecture', 'Type-safe plugins', 'Comprehensive testing', 'Documentation'],
          estimatedTime: '25-30 hours'
        }
      },
      {
        phase: 4,
        level: 'Expert',
        title: 'Framework Integration & Production',
        duration: '2-3 months',
        description: 'Master framework integration and production deployment',
        objectives: ['React with TypeScript', 'Node.js with TypeScript', 'Build tooling', 'Type safety at scale'],
        modules: [
          {
            id: 'ts-e1',
            title: 'React + TypeScript',
            lessons: [
              { id: 30, title: 'Typed Components', duration: '60 min', category: 'react' },
              { id: 31, title: 'Hooks with TypeScript', duration: '50 min', category: 'react' },
              { id: 32, title: 'Context & State Management', duration: '55 min', category: 'react' }
            ],
            quiz: { questions: 15, passingScore: 85 }
          },
          {
            id: 'ts-e2',
            title: 'Node.js + TypeScript',
            lessons: [
              { id: 33, title: 'Express with TypeScript', duration: '60 min', category: 'backend' },
              { id: 34, title: 'Type-safe APIs', duration: '55 min', category: 'backend' },
              { id: 35, title: 'Database Integration', duration: '50 min', category: 'database' }
            ],
            quiz: { questions: 12, passingScore: 85 }
          },
          {
            id: 'ts-e3',
            title: 'Tooling & Build',
            lessons: [
              { id: 36, title: 'Advanced tsconfig', duration: '45 min', category: 'tooling' },
              { id: 37, title: 'Build Optimization', duration: '50 min', category: 'build' },
              { id: 38, title: 'Type Generation', duration: '40 min', category: 'tooling' }
            ],
            quiz: { questions: 10, passingScore: 85 }
          }
        ],
        projects: [
          { id: 'ts-ep1', title: 'Full-Stack TypeScript Application', difficulty: 'Expert', skills: ['React', 'Node.js', 'End-to-end Types'], estimatedTime: '30-40 hours' }
        ],
        finalAssessment: {
          type: 'Capstone',
          title: 'Enterprise TypeScript Platform',
          requirements: ['Full-stack application', 'Type safety across stack', 'Production-ready', 'CI/CD', 'Monitoring'],
          estimatedTime: '50-60 hours'
        }
      }
    ],
    certifications: [
      { level: 'Beginner', title: 'TypeScript Fundamentals Certificate' },
      { level: 'Intermediate', title: 'Advanced TypeScript Developer Certificate' },
      { level: 'Advanced', title: 'TypeScript Architect Certificate' },
      { level: 'Expert', title: 'TypeScript Expert Certificate' }
    ],
    careerPaths: ['Frontend Developer', 'Full-Stack Developer', 'TypeScript Engineer', 'Software Architect']
  },

  java: {
    id: 'java',
    name: 'Java',
    icon: '☕',
    color: '#007396',
    estimatedTime: '8-12 months',
    roadmap: [
      { phase: 1, level: 'Beginner', title: 'Java Fundamentals', duration: '2-3 months', description: 'Master Java basics and OOP', objectives: ['Java syntax', 'OOP concepts', 'Exception handling', 'Collections'], modules: [{ id: 'java-b1', title: 'Java Basics', lessons: [{ id: 1, title: 'Variables & Types', duration: '40 min', category: 'basics' }, { id: 2, title: 'Control Flow', duration: '45 min', category: 'basics' }, { id: 3, title: 'Methods', duration: '50 min', category: 'basics' }], quiz: { questions: 12, passingScore: 70 } }, { id: 'java-b2', title: 'OOP', lessons: [{ id: 4, title: 'Classes & Objects', duration: '60 min', category: 'oop' }, { id: 5, title: 'Inheritance', duration: '50 min', category: 'oop' }, { id: 6, title: 'Polymorphism', duration: '55 min', category: 'oop' }, { id: 7, title: 'Interfaces', duration: '60 min', category: 'oop' }], quiz: { questions: 15, passingScore: 75 } }], projects: [{ id: 'java-bp1', title: 'Banking System', difficulty: 'Beginner', skills: ['OOP', 'Classes'], estimatedTime: '5-7 hours' }], finalAssessment: { type: 'Project', title: 'Library Management System', requirements: ['OOP design', 'Exception handling', 'Collections'], estimatedTime: '10-12 hours' } },
      { phase: 2, level: 'Intermediate', title: 'Advanced Java & Collections', duration: '2-3 months', description: 'Advanced features and data structures', objectives: ['Collections Framework', 'Streams API', 'Concurrency'], modules: [{ id: 'java-i1', title: 'Collections', lessons: [{ id: 8, title: 'Lists & Sets', duration: '50 min', category: 'collections' }, { id: 9, title: 'Maps', duration: '45 min', category: 'collections' }, { id: 10, title: 'Streams API', duration: '60 min', category: 'functional' }], quiz: { questions: 12, passingScore: 75 } }], projects: [{ id: 'java-ip1', title: 'Data Processing App', difficulty: 'Intermediate', skills: ['Streams', 'Collections'], estimatedTime: '8-10 hours' }], finalAssessment: { type: 'Project', title: 'E-Commerce Backend', requirements: ['Collections', 'Streams', 'File I/O'], estimatedTime: '15-18 hours' } },
      { phase: 3, level: 'Advanced', title: 'Enterprise Java', duration: '3 months', description: 'Spring Framework and microservices', objectives: ['Spring Boot', 'REST APIs', 'JPA'], modules: [{ id: 'java-a1', title: 'Spring Boot', lessons: [{ id: 11, title: 'Spring Basics', duration: '60 min', category: 'spring' }, { id: 12, title: 'REST APIs', duration: '70 min', category: 'spring' }, { id: 13, title: 'JPA & Hibernate', duration: '80 min', category: 'database' }], quiz: { questions: 15, passingScore: 80 } }], projects: [{ id: 'java-ap1', title: 'RESTful Microservice', difficulty: 'Advanced', skills: ['Spring Boot', 'JPA'], estimatedTime: '20-25 hours' }], finalAssessment: { type: 'Project', title: 'Microservices Architecture', requirements: ['Multiple services', 'Database', 'API Gateway'], estimatedTime: '35-40 hours' } },
      { phase: 4, level: 'Expert', title: 'Cloud & Architecture', duration: '3-4 months', description: 'Cloud deployment and system design', objectives: ['Cloud deployment', 'Scalable systems', 'Performance tuning'], modules: [{ id: 'java-e1', title: 'Cloud', lessons: [{ id: 14, title: 'Docker & Kubernetes', duration: '90 min', category: 'devops' }, { id: 15, title: 'AWS/Azure', duration: '80 min', category: 'cloud' }], quiz: { questions: 12, passingScore: 85 } }], projects: [{ id: 'java-ep1', title: 'Cloud-Native App', difficulty: 'Expert', skills: ['Spring Cloud', 'Docker', 'K8s'], estimatedTime: '40-50 hours' }], finalAssessment: { type: 'Capstone', title: 'Enterprise Platform', requirements: ['Microservices', 'Cloud', 'CI/CD'], estimatedTime: '60-80 hours' } }
    ],
    certifications: [{ level: 'Beginner', title: 'Java Fundamentals' }, { level: 'Intermediate', title: 'Java Professional' }, { level: 'Advanced', title: 'Spring Boot Developer' }, { level: 'Expert', title: 'Java Architect' }],
    careerPaths: ['Java Developer', 'Backend Engineer', 'Enterprise Architect', 'Android Developer']
  },

  c: {
    id: 'c',
    name: 'C',
    icon: '🔵',
    color: '#555555',
    estimatedTime: '6-10 months',
    roadmap: [
      { phase: 1, level: 'Beginner', title: 'C Fundamentals', duration: '2 months', description: 'Learn C basics and memory management', objectives: ['C syntax', 'Pointers', 'Memory management', 'Functions'], modules: [{ id: 'c-b1', title: 'Basics', lessons: [{ id: 1, title: 'Variables & Types', duration: '40 min', category: 'basics' }, { id: 2, title: 'Control Flow', duration: '35 min', category: 'basics' }, { id: 3, title: 'Functions', duration: '45 min', category: 'functions' }], quiz: { questions: 10, passingScore: 70 } }, { id: 'c-b2', title: 'Pointers', lessons: [{ id: 4, title: 'Pointer Basics', duration: '60 min', category: 'pointers' }, { id: 5, title: 'Pointer Arithmetic', duration: '50 min', category: 'pointers' }], quiz: { questions: 12, passingScore: 75 } }], projects: [{ id: 'c-bp1', title: 'Calculator Program', difficulty: 'Beginner', skills: ['Functions', 'Input/Output'], estimatedTime: '3-4 hours' }], finalAssessment: { type: 'Project', title: 'Dynamic Array Implementation', requirements: ['Pointers', 'Memory allocation'], estimatedTime: '6-8 hours' } },
      { phase: 2, level: 'Intermediate', title: 'Data Structures in C', duration: '2-3 months', description: 'Implement data structures', objectives: ['Arrays', 'Linked Lists', 'Stacks & Queues'], modules: [{ id: 'c-i1', title: 'Data Structures', lessons: [{ id: 6, title: 'Arrays', duration: '40 min', category: 'data-structures' }, { id: 7, title: 'Linked Lists', duration: '60 min', category: 'data-structures' }, { id: 8, title: 'Stacks', duration: '45 min', category: 'data-structures' }], quiz: { questions: 12, passingScore: 75 } }], projects: [{ id: 'c-ip1', title: 'Data Structure Library', difficulty: 'Intermediate', skills: ['Pointers', 'Memory', 'Algorithms'], estimatedTime: '10-12 hours' }], finalAssessment: { type: 'Project', title: 'Custom Memory Allocator', requirements: ['Memory management', 'Pointers'], estimatedTime: '15-18 hours' } },
      { phase: 3, level: 'Advanced', title: 'Systems Programming', duration: '2-3 months', description: 'File I/O and system calls', objectives: ['File operations', 'Processes', 'Threads'], modules: [{ id: 'c-a1', title: 'System Programming', lessons: [{ id: 9, title: 'File I/O', duration: '50 min', category: 'files' }, { id: 10, title: 'Process Management', duration: '60 min', category: 'systems' }], quiz: { questions: 10, passingScore: 80 } }], projects: [{ id: 'c-ap1', title: 'Shell Implementation', difficulty: 'Advanced', skills: ['Processes', 'Files'], estimatedTime: '20-25 hours' }], finalAssessment: { type: 'Project', title: 'Multi-threaded Application', requirements: ['Threads', 'Synchronization'], estimatedTime: '25-30 hours' } },
      { phase: 4, level: 'Expert', title: 'Advanced C & Optimization', duration: '3 months', description: 'Performance and low-level programming', objectives: ['Optimization', 'Assembly integration', 'Debugging'], modules: [{ id: 'c-e1', title: 'Optimization', lessons: [{ id: 11, title: 'Performance Tuning', duration: '60 min', category: 'performance' }, { id: 12, title: 'Profiling', duration: '50 min', category: 'performance' }], quiz: { questions: 10, passingScore: 85 } }], projects: [{ id: 'c-ep1', title: 'High-Performance Library', difficulty: 'Expert', skills: ['Optimization', 'Assembly'], estimatedTime: '30-40 hours' }], finalAssessment: { type: 'Capstone', title: 'Operating System Component', requirements: ['Low-level programming', 'Performance'], estimatedTime: '50-60 hours' } }
    ],
    certifications: [{ level: 'Beginner', title: 'C Fundamentals' }, { level: 'Intermediate', title: 'C Data Structures' }, { level: 'Advanced', title: 'Systems Programmer' }, { level: 'Expert', title: 'C Expert' }],
    careerPaths: ['Systems Programmer', 'Embedded Developer', 'OS Developer', 'Performance Engineer']
  },

  csharp: {
    id: 'csharp',
    name: 'C#',
    icon: '🔷',
    color: '#239120',
    estimatedTime: '7-11 months',
    roadmap: [
      { phase: 1, level: 'Beginner', title: 'C# Fundamentals', duration: '2 months', description: 'Learn C# and .NET basics', objectives: ['C# syntax', 'OOP', 'Collections', 'LINQ'], modules: [{ id: 'cs-b1', title: 'Basics', lessons: [{ id: 1, title: 'Variables & Types', duration: '40 min', category: 'basics' }, { id: 2, title: 'Control Flow', duration: '35 min', category: 'basics' }, { id: 3, title: 'Methods', duration: '40 min', category: 'basics' }], quiz: { questions: 10, passingScore: 70 } }, { id: 'cs-b2', title: 'OOP', lessons: [{ id: 4, title: 'Classes', duration: '50 min', category: 'oop' }, { id: 5, title: 'Inheritance', duration: '45 min', category: 'oop' }, { id: 6, title: 'Interfaces', duration: '50 min', category: 'oop' }], quiz: { questions: 12, passingScore: 75 } }], projects: [{ id: 'cs-bp1', title: 'Task Manager', difficulty: 'Beginner', skills: ['OOP', 'Collections'], estimatedTime: '4-5 hours' }], finalAssessment: { type: 'Project', title: 'Inventory System', requirements: ['OOP', 'LINQ', 'File I/O'], estimatedTime: '8-10 hours' } },
      { phase: 2, level: 'Intermediate', title: 'Advanced C# & .NET', duration: '2-3 months', description: 'Advanced features and async programming', objectives: ['Async/await', 'Delegates', 'Events', 'Generics'], modules: [{ id: 'cs-i1', title: 'Advanced Features', lessons: [{ id: 7, title: 'Generics', duration: '50 min', category: 'generics' }, { id: 8, title: 'Delegates & Events', duration: '55 min', category: 'events' }, { id: 9, title: 'Async/Await', duration: '60 min', category: 'async' }], quiz: { questions: 12, passingScore: 75 } }], projects: [{ id: 'cs-ip1', title: 'Async File Processor', difficulty: 'Intermediate', skills: ['Async', 'LINQ'], estimatedTime: '8-10 hours' }], finalAssessment: { type: 'Project', title: 'Multi-threaded Application', requirements: ['Async', 'Events', 'Error handling'], estimatedTime: '15-18 hours' } },
      { phase: 3, level: 'Advanced', title: 'ASP.NET Core & Web APIs', duration: '3 months', description: 'Build web applications and APIs', objectives: ['ASP.NET Core', 'REST APIs', 'Entity Framework'], modules: [{ id: 'cs-a1', title: 'ASP.NET Core', lessons: [{ id: 10, title: 'MVC Pattern', duration: '60 min', category: 'web' }, { id: 11, title: 'Web APIs', duration: '70 min', category: 'api' }, { id: 12, title: 'Entity Framework', duration: '80 min', category: 'database' }], quiz: { questions: 15, passingScore: 80 } }], projects: [{ id: 'cs-ap1', title: 'RESTful API', difficulty: 'Advanced', skills: ['ASP.NET', 'EF Core'], estimatedTime: '20-25 hours' }], finalAssessment: { type: 'Project', title: 'E-Commerce Platform', requirements: ['Web API', 'Database', 'Authentication'], estimatedTime: '35-40 hours' } },
      { phase: 4, level: 'Expert', title: 'Enterprise .NET & Cloud', duration: '3-4 months', description: 'Enterprise patterns and cloud deployment', objectives: ['Microservices', 'Azure', 'Design patterns'], modules: [{ id: 'cs-e1', title: 'Enterprise', lessons: [{ id: 13, title: 'Microservices', duration: '80 min', category: 'architecture' }, { id: 14, title: 'Azure Deployment', duration: '70 min', category: 'cloud' }], quiz: { questions: 12, passingScore: 85 } }], projects: [{ id: 'cs-ep1', title: 'Cloud Application', difficulty: 'Expert', skills: ['Azure', 'Microservices'], estimatedTime: '40-50 hours' }], finalAssessment: { type: 'Capstone', title: 'Enterprise Platform', requirements: ['Microservices', 'Cloud', 'CI/CD'], estimatedTime: '60-80 hours' } }
    ],
    certifications: [{ level: 'Beginner', title: 'C# Fundamentals' }, { level: 'Intermediate', title: 'C# Professional' }, { level: 'Advanced', title: 'ASP.NET Developer' }, { level: 'Expert', title: 'C# Architect' }],
    careerPaths: ['C# Developer', '.NET Developer', 'Backend Engineer', 'Enterprise Architect']
  },

  go: {
    id: 'go',
    name: 'Go',
    icon: '🐹',
    color: '#00ADD8',
    estimatedTime: '5-9 months',
    roadmap: [
      { phase: 1, level: 'Beginner', title: 'Go Fundamentals', duration: '1-2 months', description: 'Learn Go basics and concurrency', objectives: ['Go syntax', 'Functions', 'Slices & Maps', 'Structs'], modules: [{ id: 'go-b1', title: 'Basics', lessons: [{ id: 1, title: 'Variables & Types', duration: '30 min', category: 'basics' }, { id: 2, title: 'Control Flow', duration: '25 min', category: 'basics' }, { id: 3, title: 'Functions', duration: '40 min', category: 'functions' }], quiz: { questions: 10, passingScore: 70 } }, { id: 'go-b2', title: 'Data Structures', lessons: [{ id: 4, title: 'Arrays & Slices', duration: '45 min', category: 'data-structures' }, { id: 5, title: 'Maps', duration: '35 min', category: 'data-structures' }, { id: 6, title: 'Structs', duration: '50 min', category: 'structs' }], quiz: { questions: 12, passingScore: 75 } }], projects: [{ id: 'go-bp1', title: 'CLI Tool', difficulty: 'Beginner', skills: ['Functions', 'Slices'], estimatedTime: '3-4 hours' }], finalAssessment: { type: 'Project', title: 'REST Client', requirements: ['HTTP', 'JSON', 'Error handling'], estimatedTime: '6-8 hours' } },
      { phase: 2, level: 'Intermediate', title: 'Concurrency & Interfaces', duration: '2 months', description: 'Master Go concurrency patterns', objectives: ['Goroutines', 'Channels', 'Interfaces'], modules: [{ id: 'go-i1', title: 'Concurrency', lessons: [{ id: 7, title: 'Goroutines', duration: '50 min', category: 'concurrency' }, { id: 8, title: 'Channels', duration: '60 min', category: 'concurrency' }, { id: 9, title: 'Select Statement', duration: '45 min', category: 'concurrency' }], quiz: { questions: 12, passingScore: 75 } }], projects: [{ id: 'go-ip1', title: 'Concurrent Web Scraper', difficulty: 'Intermediate', skills: ['Goroutines', 'Channels'], estimatedTime: '8-10 hours' }], finalAssessment: { type: 'Project', title: 'Worker Pool', requirements: ['Concurrency', 'Channels', 'Synchronization'], estimatedTime: '12-15 hours' } },
      { phase: 3, level: 'Advanced', title: 'Web Services & APIs', duration: '2 months', description: 'Build production-ready services', objectives: ['HTTP servers', 'REST APIs', 'Database integration'], modules: [{ id: 'go-a1', title: 'Web Development', lessons: [{ id: 10, title: 'HTTP Server', duration: '60 min', category: 'web' }, { id: 11, title: 'REST APIs', duration: '70 min', category: 'api' }, { id: 12, title: 'Database (SQL)', duration: '60 min', category: 'database' }], quiz: { questions: 15, passingScore: 80 } }], projects: [{ id: 'go-ap1', title: 'REST API Service', difficulty: 'Advanced', skills: ['HTTP', 'Database', 'JSON'], estimatedTime: '20-25 hours' }], finalAssessment: { type: 'Project', title: 'Microservice', requirements: ['REST API', 'Database', 'Testing'], estimatedTime: '30-35 hours' } },
      { phase: 4, level: 'Expert', title: 'Cloud-Native Go', duration: '2-3 months', description: 'Cloud deployment and scalability', objectives: ['Docker', 'Kubernetes', 'gRPC'], modules: [{ id: 'go-e1', title: 'Cloud Native', lessons: [{ id: 13, title: 'Docker', duration: '60 min', category: 'devops' }, { id: 14, title: 'Kubernetes', duration: '80 min', category: 'cloud' }, { id: 15, title: 'gRPC', duration: '70 min', category: 'api' }], quiz: { questions: 12, passingScore: 85 } }], projects: [{ id: 'go-ep1', title: 'Cloud Microservices', difficulty: 'Expert', skills: ['Docker', 'K8s', 'gRPC'], estimatedTime: '40-50 hours' }], finalAssessment: { type: 'Capstone', title: 'Distributed System', requirements: ['Microservices', 'Cloud deployment', 'Monitoring'], estimatedTime: '60-70 hours' } }
    ],
    certifications: [{ level: 'Beginner', title: 'Go Fundamentals' }, { level: 'Intermediate', title: 'Go Concurrency Expert' }, { level: 'Advanced', title: 'Go Backend Developer' }, { level: 'Expert', title: 'Go Cloud Architect' }],
    careerPaths: ['Go Developer', 'Backend Engineer', 'Cloud Developer', 'DevOps Engineer']
  },

  rust: {
    id: 'rust',
    name: 'Rust',
    icon: '🦀',
    color: '#CE422B',
    estimatedTime: '8-12 months',
    roadmap: [
      { phase: 1, level: 'Beginner', title: 'Rust Fundamentals', duration: '2-3 months', description: 'Learn Rust basics and ownership', objectives: ['Rust syntax', 'Ownership', 'Borrowing', 'Basic types'], modules: [{ id: 'rust-b1', title: 'Basics', lessons: [{ id: 1, title: 'Variables & Types', duration: '40 min', category: 'basics' }, { id: 2, title: 'Functions', duration: '35 min', category: 'basics' }, { id: 3, title: 'Control Flow', duration: '30 min', category: 'basics' }], quiz: { questions: 10, passingScore: 70 } }, { id: 'rust-b2', title: 'Ownership', lessons: [{ id: 4, title: 'Ownership Rules', duration: '60 min', category: 'ownership' }, { id: 5, title: 'References & Borrowing', duration: '70 min', category: 'ownership' }, { id: 6, title: 'Lifetimes', duration: '80 min', category: 'ownership' }], quiz: { questions: 15, passingScore: 75 } }], projects: [{ id: 'rust-bp1', title: 'CLI Calculator', difficulty: 'Beginner', skills: ['Functions', 'Ownership'], estimatedTime: '4-5 hours' }], finalAssessment: { type: 'Project', title: 'Memory-Safe Data Structure', requirements: ['Ownership', 'Borrowing'], estimatedTime: '10-12 hours' } },
      { phase: 2, level: 'Intermediate', title: 'Advanced Rust Features', duration: '2-3 months', description: 'Traits, generics, and error handling', objectives: ['Traits', 'Generics', 'Error handling', 'Iterators'], modules: [{ id: 'rust-i1', title: 'Advanced Features', lessons: [{ id: 7, title: 'Traits', duration: '60 min', category: 'traits' }, { id: 8, title: 'Generics', duration: '55 min', category: 'generics' }, { id: 9, title: 'Error Handling', duration: '50 min', category: 'errors' }], quiz: { questions: 12, passingScore: 75 } }], projects: [{ id: 'rust-ip1', title: 'Generic Data Container', difficulty: 'Intermediate', skills: ['Traits', 'Generics'], estimatedTime: '10-12 hours' }], finalAssessment: { type: 'Project', title: 'Parser Library', requirements: ['Traits', 'Error handling', 'Iterators'], estimatedTime: '18-20 hours' } },
      { phase: 3, level: 'Advanced', title: 'Systems Programming', duration: '3 months', description: 'Concurrency and unsafe Rust', objectives: ['Concurrency', 'Async/await', 'Unsafe Rust'], modules: [{ id: 'rust-a1', title: 'Concurrency', lessons: [{ id: 10, title: 'Threads', duration: '60 min', category: 'concurrency' }, { id: 11, title: 'Message Passing', duration: '55 min', category: 'concurrency' }, { id: 12, title: 'Async/Await', duration: '70 min', category: 'async' }], quiz: { questions: 15, passingScore: 80 } }], projects: [{ id: 'rust-ap1', title: 'Async Web Server', difficulty: 'Advanced', skills: ['Async', 'Tokio'], estimatedTime: '25-30 hours' }], finalAssessment: { type: 'Project', title: 'Multi-threaded Application', requirements: ['Concurrency', 'Async', 'Performance'], estimatedTime: '35-40 hours' } },
      { phase: 4, level: 'Expert', title: 'Advanced Rust & Production', duration: '3-4 months', description: 'Production-ready Rust applications', objectives: ['Advanced patterns', 'FFI', 'Performance tuning'], modules: [{ id: 'rust-e1', title: 'Expert Topics', lessons: [{ id: 13, title: 'Advanced Patterns', duration: '70 min', category: 'patterns' }, { id: 14, title: 'FFI & C Integration', duration: '80 min', category: 'ffi' }, { id: 15, title: 'Performance', duration: '60 min', category: 'performance' }], quiz: { questions: 12, passingScore: 85 } }], projects: [{ id: 'rust-ep1', title: 'High-Performance Library', difficulty: 'Expert', skills: ['Optimization', 'FFI'], estimatedTime: '40-50 hours' }], finalAssessment: { type: 'Capstone', title: 'Systems Tool', requirements: ['Performance', 'Safety', 'Production quality'], estimatedTime: '60-80 hours' } }
    ],
    certifications: [{ level: 'Beginner', title: 'Rust Fundamentals' }, { level: 'Intermediate', title: 'Rust Developer' }, { level: 'Advanced', title: 'Systems Programmer' }, { level: 'Expert', title: 'Rust Expert' }],
    careerPaths: ['Systems Programmer', 'Backend Developer', 'Performance Engineer', 'Embedded Developer']
  },

  swift: {
    id: 'swift',
    name: 'Swift',
    icon: '🍎',
    color: '#FA7343',
    estimatedTime: '6-10 months',
    roadmap: [
      { phase: 1, level: 'Beginner', title: 'Swift Fundamentals', duration: '2 months', description: 'Swift basics and iOS intro', objectives: ['Swift syntax', 'Optionals', 'Collections', 'Functions'], modules: [{ id: 'swift-b1', title: 'Basics', lessons: [{ id: 1, title: 'Variables & Types', duration: '35 min', category: 'basics' }, { id: 2, title: 'Optionals', duration: '45 min', category: 'basics' }, { id: 3, title: 'Functions', duration: '40 min', category: 'functions' }], quiz: { questions: 10, passingScore: 70 } }], projects: [{ id: 'swift-bp1', title: 'Calculator App', difficulty: 'Beginner', skills: ['Swift Basics'], estimatedTime: '4-5 hours' }], finalAssessment: { type: 'Project', title: 'Todo List', requirements: ['Swift basics', 'Collections'], estimatedTime: '8-10 hours' } },
      { phase: 2, level: 'Intermediate', title: 'iOS Development', duration: '2-3 months', description: 'UIKit and SwiftUI basics', objectives: ['UIKit', 'SwiftUI', 'Navigation'], modules: [{ id: 'swift-i1', title: 'UI Development', lessons: [{ id: 4, title: 'SwiftUI Basics', duration: '60 min', category: 'ui' }, { id: 5, title: 'Views & Modifiers', duration: '50 min', category: 'swiftui' }], quiz: { questions: 12, passingScore: 75 } }], projects: [{ id: 'swift-ip1', title: 'Weather App', difficulty: 'Intermediate', skills: ['SwiftUI', 'API'], estimatedTime: '10-12 hours' }], finalAssessment: { type: 'Project', title: 'Social Media Feed', requirements: ['SwiftUI', 'Networking'], estimatedTime: '18-20 hours' } },
      { phase: 3, level: 'Advanced', title: 'Advanced iOS', duration: '3 months', description: 'Data persistence and architecture', objectives: ['Core Data', 'MVVM', 'Combine'], modules: [{ id: 'swift-a1', title: 'Data & Architecture', lessons: [{ id: 6, title: 'Core Data', duration: '70 min', category: 'data' }, { id: 7, title: 'MVVM Pattern', duration: '60 min', category: 'architecture' }], quiz: { questions: 15, passingScore: 80 } }], projects: [{ id: 'swift-ap1', title: 'Note Taking App', difficulty: 'Advanced', skills: ['Core Data', 'MVVM'], estimatedTime: '25-30 hours' }], finalAssessment: { type: 'Project', title: 'Full-Featured iOS App', requirements: ['Core Data', 'Architecture', 'API'], estimatedTime: '40-45 hours' } },
      { phase: 4, level: 'Expert', title: 'Professional iOS', duration: '3 months', description: 'App Store deployment', objectives: ['Performance', 'Testing', 'App Store'], modules: [{ id: 'swift-e1', title: 'Production', lessons: [{ id: 8, title: 'Performance Optimization', duration: '60 min', category: 'performance' }, { id: 9, title: 'Testing', duration: '70 min', category: 'testing' }], quiz: { questions: 12, passingScore: 85 } }], projects: [{ id: 'swift-ep1', title: 'Production App', difficulty: 'Expert', skills: ['All iOS concepts'], estimatedTime: '50-60 hours' }], finalAssessment: { type: 'Capstone', title: 'App Store Application', requirements: ['Full iOS app', 'Production ready'], estimatedTime: '80-100 hours' } }
    ],
    certifications: [{ level: 'Beginner', title: 'Swift Fundamentals' }, { level: 'Intermediate', title: 'iOS Developer' }, { level: 'Advanced', title: 'Advanced iOS Developer' }, { level: 'Expert', title: 'iOS Expert' }],
    careerPaths: ['iOS Developer', 'Mobile Developer', 'Swift Developer']
  },

  kotlin: {
    id: 'kotlin',
    name: 'Kotlin',
    icon: '🔶',
    color: '#7F52FF',
    estimatedTime: '6-10 months',
    roadmap: [
      { phase: 1, level: 'Beginner', title: 'Kotlin Fundamentals', duration: '2 months', description: 'Kotlin basics and OOP', objectives: ['Kotlin syntax', 'Null safety', 'Functions', 'Classes'], modules: [{ id: 'kotlin-b1', title: 'Basics', lessons: [{ id: 1, title: 'Variables & Types', duration: '35 min', category: 'basics' }, { id: 2, title: 'Null Safety', duration: '45 min', category: 'basics' }, { id: 3, title: 'Functions', duration: '40 min', category: 'functions' }], quiz: { questions: 10, passingScore: 70 } }], projects: [{ id: 'kotlin-bp1', title: 'Console Game', difficulty: 'Beginner', skills: ['Kotlin basics'], estimatedTime: '4-5 hours' }], finalAssessment: { type: 'Project', title: 'Data Manager', requirements: ['OOP', 'Collections'], estimatedTime: '8-10 hours' } },
      { phase: 2, level: 'Intermediate', title: 'Android Development', duration: '2-3 months', description: 'Android app development', objectives: ['Android basics', 'Activities', 'Layouts'], modules: [{ id: 'kotlin-i1', title: 'Android', lessons: [{ id: 4, title: 'Activities & Intents', duration: '60 min', category: 'android' }, { id: 5, title: 'Layouts', duration: '50 min', category: 'ui' }], quiz: { questions: 12, passingScore: 75 } }], projects: [{ id: 'kotlin-ip1', title: 'Note App', difficulty: 'Intermediate', skills: ['Android', 'UI'], estimatedTime: '12-15 hours' }], finalAssessment: { type: 'Project', title: 'Multi-Screen App', requirements: ['Navigation', 'Data persistence'], estimatedTime: '20-25 hours' } },
      { phase: 3, level: 'Advanced', title: 'Modern Android', duration: '3 months', description: 'Jetpack Compose and architecture', objectives: ['Compose', 'MVVM', 'Room'], modules: [{ id: 'kotlin-a1', title: 'Jetpack', lessons: [{ id: 6, title: 'Compose UI', duration: '70 min', category: 'compose' }, { id: 7, title: 'Room Database', duration: '60 min', category: 'database' }], quiz: { questions: 15, passingScore: 80 } }], projects: [{ id: 'kotlin-ap1', title: 'Compose App', difficulty: 'Advanced', skills: ['Compose', 'Room'], estimatedTime: '30-35 hours' }], finalAssessment: { type: 'Project', title: 'Full Android App', requirements: ['Compose', 'Architecture', 'Database'], estimatedTime: '45-50 hours' } },
      { phase: 4, level: 'Expert', title: 'Professional Android', duration: '3 months', description: 'Production deployment', objectives: ['Performance', 'Testing', 'Play Store'], modules: [{ id: 'kotlin-e1', title: 'Production', lessons: [{ id: 8, title: 'Testing', duration: '70 min', category: 'testing' }, { id: 9, title: 'CI/CD', duration: '60 min', category: 'devops' }], quiz: { questions: 12, passingScore: 85 } }], projects: [{ id: 'kotlin-ep1', title: 'Production App', difficulty: 'Expert', skills: ['Full Android stack'], estimatedTime: '60-70 hours' }], finalAssessment: { type: 'Capstone', title: 'Play Store App', requirements: ['Production ready', 'Published'], estimatedTime: '100-120 hours' } }
    ],
    certifications: [{ level: 'Beginner', title: 'Kotlin Fundamentals' }, { level: 'Intermediate', title: 'Android Developer' }, { level: 'Advanced', title: 'Jetpack Compose Developer' }, { level: 'Expert', title: 'Kotlin Expert' }],
    careerPaths: ['Android Developer', 'Mobile Developer', 'Kotlin Developer']
  },

  ruby: {
    id: 'ruby',
    name: 'Ruby',
    icon: '💎',
    color: '#CC342D',
    estimatedTime: '6-10 months',
    roadmap: [
      { phase: 1, level: 'Beginner', title: 'Ruby Fundamentals', duration: '2 months', description: 'Ruby basics and OOP', objectives: ['Ruby syntax', 'Blocks', 'OOP', 'Iterators'], modules: [{ id: 'ruby-b1', title: 'Basics', lessons: [{ id: 1, title: 'Variables & Types', duration: '35 min', category: 'basics' }, { id: 2, title: 'Methods', duration: '40 min', category: 'basics' }, { id: 3, title: 'Blocks & Procs', duration: '50 min', category: 'blocks' }], quiz: { questions: 10, passingScore: 70 } }], projects: [{ id: 'ruby-bp1', title: 'Text Processor', difficulty: 'Beginner', skills: ['Strings', 'Files'], estimatedTime: '4-5 hours' }], finalAssessment: { type: 'Project', title: 'CLI Game', requirements: ['OOP', 'Files'], estimatedTime: '8-10 hours' } },
      { phase: 2, level: 'Intermediate', title: 'Ruby on Rails', duration: '2-3 months', description: 'Web development with Rails', objectives: ['Rails basics', 'MVC', 'Routing'], modules: [{ id: 'ruby-i1', title: 'Rails', lessons: [{ id: 4, title: 'Rails Setup', duration: '40 min', category: 'rails' }, { id: 5, title: 'MVC Pattern', duration: '60 min', category: 'rails' }, { id: 6, title: 'Active Record', duration: '70 min', category: 'database' }], quiz: { questions: 12, passingScore: 75 } }], projects: [{ id: 'ruby-ip1', title: 'Blog Application', difficulty: 'Intermediate', skills: ['Rails', 'Database'], estimatedTime: '15-18 hours' }], finalAssessment: { type: 'Project', title: 'CRUD Application', requirements: ['Rails', 'ActiveRecord'], estimatedTime: '25-30 hours' } },
      { phase: 3, level: 'Advanced', title: 'Advanced Rails', duration: '3 months', description: 'Advanced features and APIs', objectives: ['API development', 'Testing', 'Authentication'], modules: [{ id: 'ruby-a1', title: 'Advanced Rails', lessons: [{ id: 7, title: 'REST APIs', duration: '70 min', category: 'api' }, { id: 8, title: 'Authentication', duration: '60 min', category: 'auth' }], quiz: { questions: 15, passingScore: 80 } }], projects: [{ id: 'ruby-ap1', title: 'REST API', difficulty: 'Advanced', skills: ['API', 'Auth'], estimatedTime: '30-35 hours' }], finalAssessment: { type: 'Project', title: 'Full Stack App', requirements: ['Rails API', 'Frontend'], estimatedTime: '45-50 hours' } },
      { phase: 4, level: 'Expert', title: 'Production Rails', duration: '3 months', description: 'Deployment and scaling', objectives: ['Performance', 'Deployment', 'Scaling'], modules: [{ id: 'ruby-e1', title: 'Production', lessons: [{ id: 9, title: 'Performance', duration: '70 min', category: 'performance' }, { id: 10, title: 'Deployment', duration: '80 min', category: 'devops' }], quiz: { questions: 12, passingScore: 85 } }], projects: [{ id: 'ruby-ep1', title: 'Production App', difficulty: 'Expert', skills: ['Rails', 'DevOps'], estimatedTime: '60-70 hours' }], finalAssessment: { type: 'Capstone', title: 'Scalable Platform', requirements: ['Production', 'Monitoring'], estimatedTime: '100-120 hours' } }
    ],
    certifications: [{ level: 'Beginner', title: 'Ruby Fundamentals' }, { level: 'Intermediate', title: 'Rails Developer' }, { level: 'Advanced', title: 'Advanced Rails Developer' }, { level: 'Expert', title: 'Ruby Expert' }],
    careerPaths: ['Ruby Developer', 'Rails Developer', 'Backend Engineer']
  },

  php: {
    id: 'php',
    name: 'PHP',
    icon: '🐘',
    color: '#777BB4',
    estimatedTime: '6-10 months',
    roadmap: [
      { phase: 1, level: 'Beginner', title: 'PHP Fundamentals', duration: '2 months', description: 'PHP basics and web development', objectives: ['PHP syntax', 'Forms', 'Sessions', 'MySQL'], modules: [{ id: 'php-b1', title: 'Basics', lessons: [{ id: 1, title: 'Variables & Types', duration: '35 min', category: 'basics' }, { id: 2, title: 'Functions', duration: '40 min', category: 'basics' }, { id: 3, title: 'Arrays', duration: '45 min', category: 'basics' }], quiz: { questions: 10, passingScore: 70 } }], projects: [{ id: 'php-bp1', title: 'Contact Form', difficulty: 'Beginner', skills: ['Forms', 'Validation'], estimatedTime: '4-5 hours' }], finalAssessment: { type: 'Project', title: 'User Registration', requirements: ['Forms', 'Database', 'Sessions'], estimatedTime: '10-12 hours' } },
      { phase: 2, level: 'Intermediate', title: 'OOP & MVC', duration: '2-3 months', description: 'Object-oriented PHP', objectives: ['OOP', 'MVC', 'PDO'], modules: [{ id: 'php-i1', title: 'OOP', lessons: [{ id: 4, title: 'Classes', duration: '50 min', category: 'oop' }, { id: 5, title: 'Inheritance', duration: '45 min', category: 'oop' }, { id: 6, title: 'PDO', duration: '60 min', category: 'database' }], quiz: { questions: 12, passingScore: 75 } }], projects: [{ id: 'php-ip1', title: 'MVC Blog', difficulty: 'Intermediate', skills: ['MVC', 'OOP'], estimatedTime: '18-20 hours' }], finalAssessment: { type: 'Project', title: 'CMS System', requirements: ['MVC', 'Database', 'Auth'], estimatedTime: '30-35 hours' } },
      { phase: 3, level: 'Advanced', title: 'Modern PHP & Laravel', duration: '3 months', description: 'Laravel framework', objectives: ['Laravel', 'Eloquent', 'API development'], modules: [{ id: 'php-a1', title: 'Laravel', lessons: [{ id: 7, title: 'Laravel Basics', duration: '70 min', category: 'laravel' }, { id: 8, title: 'Eloquent ORM', duration: '80 min', category: 'database' }], quiz: { questions: 15, passingScore: 80 } }], projects: [{ id: 'php-ap1', title: 'REST API', difficulty: 'Advanced', skills: ['Laravel', 'API'], estimatedTime: '35-40 hours' }], finalAssessment: { type: 'Project', title: 'E-Commerce Platform', requirements: ['Laravel', 'Payment'], estimatedTime: '50-60 hours' } },
      { phase: 4, level: 'Expert', title: 'Enterprise PHP', duration: '3 months', description: 'Production and scaling', objectives: ['Performance', 'Testing', 'Deployment'], modules: [{ id: 'php-e1', title: 'Production', lessons: [{ id: 9, title: 'Performance', duration: '70 min', category: 'performance' }, { id: 10, title: 'Testing', duration: '80 min', category: 'testing' }], quiz: { questions: 12, passingScore: 85 } }], projects: [{ id: 'php-ep1', title: 'Production System', difficulty: 'Expert', skills: ['Laravel', 'DevOps'], estimatedTime: '70-80 hours' }], finalAssessment: { type: 'Capstone', title: 'Enterprise Application', requirements: ['Production', 'Scalable'], estimatedTime: '120-140 hours' } }
    ],
    certifications: [{ level: 'Beginner', title: 'PHP Fundamentals' }, { level: 'Intermediate', title: 'PHP Developer' }, { level: 'Advanced', title: 'Laravel Developer' }, { level: 'Expert', title: 'PHP Expert' }],
    careerPaths: ['PHP Developer', 'Laravel Developer', 'Backend Engineer', 'Full-Stack Developer']
  },

  sql: {
    id: 'sql',
    name: 'SQL',
    icon: '🗄️',
    color: '#CC2927',
    estimatedTime: '4-6 months',
    roadmap: [
      { phase: 1, level: 'Beginner', title: 'SQL Fundamentals', duration: '1-2 months', description: 'Basic queries and operations', objectives: ['SELECT', 'WHERE', 'JOINS', 'Basic functions'], modules: [{ id: 'sql-b1', title: 'Basics', lessons: [{ id: 1, title: 'SELECT & WHERE', duration: '40 min', category: 'basics' }, { id: 2, title: 'JOINS', duration: '50 min', category: 'joins' }, { id: 3, title: 'Aggregations', duration: '45 min', category: 'functions' }], quiz: { questions: 12, passingScore: 70 } }], projects: [{ id: 'sql-bp1', title: 'Data Analysis', difficulty: 'Beginner', skills: ['Queries', 'JOINs'], estimatedTime: '5-6 hours' }], finalAssessment: { type: 'Project', title: 'Database Queries', requirements: ['Complex queries', 'JOINs'], estimatedTime: '8-10 hours' } },
      { phase: 2, level: 'Intermediate', title: 'Advanced SQL', duration: '1-2 months', description: 'Complex queries and optimization', objectives: ['Subqueries', 'Window functions', 'Indexing'], modules: [{ id: 'sql-i1', title: 'Advanced', lessons: [{ id: 4, title: 'Subqueries', duration: '50 min', category: 'advanced' }, { id: 5, title: 'Window Functions', duration: '60 min', category: 'advanced' }], quiz: { questions: 12, passingScore: 75 } }], projects: [{ id: 'sql-ip1', title: 'Data Warehouse', difficulty: 'Intermediate', skills: ['Complex queries'], estimatedTime: '12-15 hours' }], finalAssessment: { type: 'Project', title: 'Analytics Database', requirements: ['Advanced SQL', 'Optimization'], estimatedTime: '20-25 hours' } },
      { phase: 3, level: 'Advanced', title: 'Database Design', duration: '1-2 months', description: 'Schema design and administration', objectives: ['Normalization', 'Indexes', 'Transactions'], modules: [{ id: 'sql-a1', title: 'Design', lessons: [{ id: 6, title: 'Normalization', duration: '60 min', category: 'design' }, { id: 7, title: 'Indexes', duration: '70 min', category: 'performance' }], quiz: { questions: 15, passingScore: 80 } }], projects: [{ id: 'sql-ap1', title: 'Schema Design', difficulty: 'Advanced', skills: ['Design', 'Optimization'], estimatedTime: '25-30 hours' }], finalAssessment: { type: 'Project', title: 'Enterprise Database', requirements: ['Full schema', 'Optimized'], estimatedTime: '40-45 hours' } },
      { phase: 4, level: 'Expert', title: 'DBA & Performance', duration: '2 months', description: 'Database administration', objectives: ['Performance tuning', 'Backup', 'Security'], modules: [{ id: 'sql-e1', title: 'Administration', lessons: [{ id: 8, title: 'Performance Tuning', duration: '80 min', category: 'performance' }, { id: 9, title: 'Backup & Recovery', duration: '70 min', category: 'admin' }], quiz: { questions: 12, passingScore: 85 } }], projects: [{ id: 'sql-ep1', title: 'DBA Tasks', difficulty: 'Expert', skills: ['Administration'], estimatedTime: '50-60 hours' }], finalAssessment: { type: 'Capstone', title: 'Production Database', requirements: ['Full administration'], estimatedTime: '80-100 hours' } }
    ],
    certifications: [{ level: 'Beginner', title: 'SQL Fundamentals' }, { level: 'Intermediate', title: 'SQL Developer' }, { level: 'Advanced', title: 'Database Designer' }, { level: 'Expert', title: 'Database Administrator' }],
    careerPaths: ['Database Administrator', 'Data Analyst', 'Backend Developer', 'Data Engineer']
  },

  dart: {
    id: 'dart',
    name: 'Dart',
    icon: '🎯',
    color: '#0175C2',
    estimatedTime: '5-8 months',
    roadmap: [
      { phase: 1, level: 'Beginner', title: 'Dart Fundamentals', duration: '1-2 months', description: 'Dart basics and Flutter intro', objectives: ['Dart syntax', 'OOP', 'Async', 'Collections'], modules: [{ id: 'dart-b1', title: 'Basics', lessons: [{ id: 1, title: 'Variables & Types', duration: '35 min', category: 'basics' }, { id: 2, title: 'Functions', duration: '40 min', category: 'basics' }, { id: 3, title: 'Classes', duration: '50 min', category: 'oop' }], quiz: { questions: 10, passingScore: 70 } }], projects: [{ id: 'dart-bp1', title: 'CLI App', difficulty: 'Beginner', skills: ['Dart basics'], estimatedTime: '3-4 hours' }], finalAssessment: { type: 'Project', title: 'Data Processor', requirements: ['OOP', 'Collections'], estimatedTime: '6-8 hours' } },
      { phase: 2, level: 'Intermediate', title: 'Flutter Basics', duration: '2 months', description: 'Flutter UI development', objectives: ['Widgets', 'State management', 'Navigation'], modules: [{ id: 'dart-i1', title: 'Flutter', lessons: [{ id: 4, title: 'Widgets', duration: '60 min', category: 'flutter' }, { id: 5, title: 'State Management', duration: '70 min', category: 'state' }], quiz: { questions: 12, passingScore: 75 } }], projects: [{ id: 'dart-ip1', title: 'Mobile App UI', difficulty: 'Intermediate', skills: ['Flutter', 'UI'], estimatedTime: '12-15 hours' }], finalAssessment: { type: 'Project', title: 'Multi-Screen App', requirements: ['Navigation', 'State'], estimatedTime: '20-25 hours' } },
      { phase: 3, level: 'Advanced', title: 'Advanced Flutter', duration: '2 months', description: 'Data persistence and APIs', objectives: ['Databases', 'APIs', 'Animations'], modules: [{ id: 'dart-a1', title: 'Advanced', lessons: [{ id: 6, title: 'Local Storage', duration: '60 min', category: 'data' }, { id: 7, title: 'REST APIs', duration: '70 min', category: 'api' }], quiz: { questions: 15, passingScore: 80 } }], projects: [{ id: 'dart-ap1', title: 'Full Flutter App', difficulty: 'Advanced', skills: ['Database', 'API'], estimatedTime: '30-35 hours' }], finalAssessment: { type: 'Project', title: 'Production App', requirements: ['Full features'], estimatedTime: '45-50 hours' } },
      { phase: 4, level: 'Expert', title: 'Professional Flutter', duration: '2-3 months', description: 'App Store deployment', objectives: ['Performance', 'Testing', 'Deployment'], modules: [{ id: 'dart-e1', title: 'Production', lessons: [{ id: 8, title: 'Performance', duration: '70 min', category: 'performance' }, { id: 9, title: 'Testing', duration: '80 min', category: 'testing' }], quiz: { questions: 12, passingScore: 85 } }], projects: [{ id: 'dart-ep1', title: 'Published App', difficulty: 'Expert', skills: ['Full Flutter'], estimatedTime: '60-70 hours' }], finalAssessment: { type: 'Capstone', title: 'Cross-Platform App', requirements: ['iOS', 'Android'], estimatedTime: '100-120 hours' } }
    ],
    certifications: [{ level: 'Beginner', title: 'Dart Fundamentals' }, { level: 'Intermediate', title: 'Flutter Developer' }, { level: 'Advanced', title: 'Advanced Flutter Developer' }, { level: 'Expert', title: 'Flutter Expert' }],
    careerPaths: ['Flutter Developer', 'Mobile Developer', 'Cross-Platform Developer']
  },

  scala: {
    id: 'scala',
    name: 'Scala',
    icon: '⚙️',
    color: '#DC322F',
    estimatedTime: '7-11 months',
    roadmap: [
      { phase: 1, level: 'Beginner', title: 'Scala Fundamentals', duration: '2 months', description: 'Scala basics and functional programming', objectives: ['Scala syntax', 'Functions', 'Collections', 'Pattern matching'], modules: [{ id: 'scala-b1', title: 'Basics', lessons: [{ id: 1, title: 'Variables & Types', duration: '40 min', category: 'basics' }, { id: 2, title: 'Functions', duration: '50 min', category: 'functions' }, { id: 3, title: 'Collections', duration: '60 min', category: 'collections' }], quiz: { questions: 12, passingScore: 70 } }], projects: [{ id: 'scala-bp1', title: 'Functional Calculator', difficulty: 'Beginner', skills: ['Functions'], estimatedTime: '5-6 hours' }], finalAssessment: { type: 'Project', title: 'Data Processing', requirements: ['Collections', 'Functions'], estimatedTime: '10-12 hours' } },
      { phase: 2, level: 'Intermediate', title: 'OOP & Functional', duration: '2-3 months', description: 'Mixed paradigms', objectives: ['Classes', 'Traits', 'Case classes', 'For comprehensions'], modules: [{ id: 'scala-i1', title: 'OOP & FP', lessons: [{ id: 4, title: 'Classes & Traits', duration: '60 min', category: 'oop' }, { id: 5, title: 'Case Classes', duration: '50 min', category: 'oop' }], quiz: { questions: 12, passingScore: 75 } }], projects: [{ id: 'scala-ip1', title: 'Type-Safe Application', difficulty: 'Intermediate', skills: ['OOP', 'FP'], estimatedTime: '15-18 hours' }], finalAssessment: { type: 'Project', title: 'Domain Model', requirements: ['ADTs', 'Pattern matching'], estimatedTime: '25-30 hours' } },
      { phase: 3, level: 'Advanced', title: 'Advanced Scala', duration: '3 months', description: 'Type system and concurrency', objectives: ['Type classes', 'Implicits', 'Futures'], modules: [{ id: 'scala-a1', title: 'Advanced', lessons: [{ id: 6, title: 'Type Classes', duration: '80 min', category: 'types' }, { id: 7, title: 'Futures & Async', duration: '70 min', category: 'async' }], quiz: { questions: 15, passingScore: 80 } }], projects: [{ id: 'scala-ap1', title: 'Concurrent System', difficulty: 'Advanced', skills: ['Futures', 'Types'], estimatedTime: '35-40 hours' }], finalAssessment: { type: 'Project', title: 'Type-Safe Library', requirements: ['Advanced types'], estimatedTime: '50-60 hours' } },
      { phase: 4, level: 'Expert', title: 'Scala Ecosystem', duration: '3-4 months', description: 'Akka, Spark, and production', objectives: ['Akka', 'Spark basics', 'Production'], modules: [{ id: 'scala-e1', title: 'Ecosystem', lessons: [{ id: 8, title: 'Akka Basics', duration: '90 min', category: 'akka' }, { id: 9, title: 'Spark Introduction', duration: '80 min', category: 'spark' }], quiz: { questions: 12, passingScore: 85 } }], projects: [{ id: 'scala-ep1', title: 'Distributed System', difficulty: 'Expert', skills: ['Akka', 'Spark'], estimatedTime: '60-80 hours' }], finalAssessment: { type: 'Capstone', title: 'Production Platform', requirements: ['Akka', 'Scalability'], estimatedTime: '100-120 hours' } }
    ],
    certifications: [{ level: 'Beginner', title: 'Scala Fundamentals' }, { level: 'Intermediate', title: 'Scala Developer' }, { level: 'Advanced', title: 'Advanced Scala Developer' }, { level: 'Expert', title: 'Scala Expert' }],
    careerPaths: ['Scala Developer', 'Backend Engineer', 'Data Engineer', 'Distributed Systems Engineer']
  },

  perl: {
    id: 'perl',
    name: 'Perl',
    icon: '🐪',
    color: '#39457E',
    estimatedTime: '4-6 months',
    roadmap: [
      { phase: 1, level: 'Beginner', title: 'Perl Fundamentals', duration: '1-2 months', description: 'Perl basics and text processing', objectives: ['Perl syntax', 'Regular expressions', 'File handling'], modules: [{ id: 'perl-b1', title: 'Basics', lessons: [{ id: 1, title: 'Variables & Types', duration: '40 min', category: 'basics' }, { id: 2, title: 'Regex', duration: '60 min', category: 'regex' }], quiz: { questions: 10, passingScore: 70 } }], projects: [{ id: 'perl-bp1', title: 'Text Parser', difficulty: 'Beginner', skills: ['Regex'], estimatedTime: '4-5 hours' }], finalAssessment: { type: 'Project', title: 'Log Analyzer', requirements: ['Regex', 'Files'], estimatedTime: '8-10 hours' } },
      { phase: 2, level: 'Intermediate', title: 'Advanced Perl', duration: '1-2 months', description: 'OOP and modules', objectives: ['OOP', 'Modules', 'CPAN'], modules: [{ id: 'perl-i1', title: 'OOP', lessons: [{ id: 3, title: 'Objects', duration: '50 min', category: 'oop' }, { id: 4, title: 'Modules', duration: '60 min', category: 'modules' }], quiz: { questions: 12, passingScore: 75 } }], projects: [{ id: 'perl-ip1', title: 'OOP Application', difficulty: 'Intermediate', skills: ['OOP', 'Modules'], estimatedTime: '12-15 hours' }], finalAssessment: { type: 'Project', title: 'System Tool', requirements: ['OOP', 'CPAN'], estimatedTime: '20-25 hours' } },
      { phase: 3, level: 'Advanced', title: 'Web & Databases', duration: '1-2 months', description: 'CGI and database integration', objectives: ['CGI', 'DBI', 'Web development'], modules: [{ id: 'perl-a1', title: 'Web', lessons: [{ id: 5, title: 'CGI Programming', duration: '60 min', category: 'web' }, { id: 6, title: 'DBI', duration: '70 min', category: 'database' }], quiz: { questions: 15, passingScore: 80 } }], projects: [{ id: 'perl-ap1', title: 'Web Application', difficulty: 'Advanced', skills: ['CGI', 'Database'], estimatedTime: '25-30 hours' }], finalAssessment: { type: 'Project', title: 'Database Web App', requirements: ['CGI', 'DBI'], estimatedTime: '40-45 hours' } },
      { phase: 4, level: 'Expert', title: 'Modern Perl', duration: '2 months', description: 'Modern practices and deployment', objectives: ['Mojolicious', 'Testing', 'Deployment'], modules: [{ id: 'perl-e1', title: 'Modern', lessons: [{ id: 7, title: 'Mojolicious', duration: '80 min', category: 'web' }, { id: 8, title: 'Testing', duration: '70 min', category: 'testing' }], quiz: { questions: 12, passingScore: 85 } }], projects: [{ id: 'perl-ep1', title: 'Modern Web App', difficulty: 'Expert', skills: ['Mojolicious'], estimatedTime: '50-60 hours' }], finalAssessment: { type: 'Capstone', title: 'Production Application', requirements: ['Modern Perl'], estimatedTime: '80-100 hours' } }
    ],
    certifications: [{ level: 'Beginner', title: 'Perl Fundamentals' }, { level: 'Intermediate', title: 'Perl Developer' }, { level: 'Advanced', title: 'Perl Web Developer' }, { level: 'Expert', title: 'Perl Expert' }],
    careerPaths: ['Perl Developer', 'Systems Administrator', 'DevOps Engineer']
  },

  lua: {
    id: 'lua',
    name: 'Lua',
    icon: '🌙',
    color: '#000080',
    estimatedTime: '3-5 months',
    roadmap: [
      { phase: 1, level: 'Beginner', title: 'Lua Fundamentals', duration: '1 month', description: 'Lua basics and tables', objectives: ['Lua syntax', 'Tables', 'Functions', 'Metatables'], modules: [{ id: 'lua-b1', title: 'Basics', lessons: [{ id: 1, title: 'Variables & Types', duration: '30 min', category: 'basics' }, { id: 2, title: 'Tables', duration: '50 min', category: 'tables' }, { id: 3, title: 'Functions', duration: '40 min', category: 'functions' }], quiz: { questions: 10, passingScore: 70 } }], projects: [{ id: 'lua-bp1', title: 'Calculator', difficulty: 'Beginner', skills: ['Functions', 'Tables'], estimatedTime: '3-4 hours' }], finalAssessment: { type: 'Project', title: 'Data Manager', requirements: ['Tables', 'Metatables'], estimatedTime: '6-8 hours' } },
      { phase: 2, level: 'Intermediate', title: 'Advanced Lua', duration: '1-2 months', description: 'Metatables and modules', objectives: ['Metatables', 'Modules', 'Coroutines'], modules: [{ id: 'lua-i1', title: 'Advanced', lessons: [{ id: 4, title: 'Metatables', duration: '60 min', category: 'metatables' }, { id: 5, title: 'Coroutines', duration: '50 min', category: 'coroutines' }], quiz: { questions: 12, passingScore: 75 } }], projects: [{ id: 'lua-ip1', title: 'Module Library', difficulty: 'Intermediate', skills: ['Metatables', 'Modules'], estimatedTime: '10-12 hours' }], finalAssessment: { type: 'Project', title: 'Advanced Application', requirements: ['Metatables', 'Coroutines'], estimatedTime: '18-20 hours' } },
      { phase: 3, level: 'Advanced', title: 'Game Development', duration: '1-2 months', description: 'Lua for games and embedding', objectives: ['Game scripting', 'C integration', 'Performance'], modules: [{ id: 'lua-a1', title: 'Games', lessons: [{ id: 6, title: 'Game Scripting', duration: '70 min', category: 'games' }, { id: 7, title: 'C API', duration: '80 min', category: 'embedding' }], quiz: { questions: 15, passingScore: 80 } }], projects: [{ id: 'lua-ap1', title: 'Game Script', difficulty: 'Advanced', skills: ['Scripting'], estimatedTime: '25-30 hours' }], finalAssessment: { type: 'Project', title: 'Embedded Lua', requirements: ['C API', 'Performance'], estimatedTime: '40-45 hours' } },
      { phase: 4, level: 'Expert', title: 'Professional Lua', duration: '1 month', description: 'Production Lua applications', objectives: ['Optimization', 'Tools', 'Best practices'], modules: [{ id: 'lua-e1', title: 'Production', lessons: [{ id: 8, title: 'Optimization', duration: '70 min', category: 'performance' }, { id: 9, title: 'Testing', duration: '60 min', category: 'testing' }], quiz: { questions: 12, passingScore: 85 } }], projects: [{ id: 'lua-ep1', title: 'Production Tool', difficulty: 'Expert', skills: ['Optimization'], estimatedTime: '40-50 hours' }], finalAssessment: { type: 'Capstone', title: 'Professional Application', requirements: ['Performance', 'Quality'], estimatedTime: '60-80 hours' } }
    ],
    certifications: [{ level: 'Beginner', title: 'Lua Fundamentals' }, { level: 'Intermediate', title: 'Lua Developer' }, { level: 'Advanced', title: 'Lua Game Developer' }, { level: 'Expert', title: 'Lua Expert' }],
    careerPaths: ['Game Developer', 'Embedded Developer', 'Scripting Engineer']
  },

  r: {
    id: 'r',
    name: 'R',
    icon: '📊',
    color: '#276DC3',
    estimatedTime: '5-8 months',
    roadmap: [
      { phase: 1, level: 'Beginner', title: 'R Fundamentals', duration: '1-2 months', description: 'R basics and data manipulation', objectives: ['R syntax', 'Data frames', 'Basic statistics', 'Visualization'], modules: [{ id: 'r-b1', title: 'Basics', lessons: [{ id: 1, title: 'Variables & Vectors', duration: '40 min', category: 'basics' }, { id: 2, title: 'Data Frames', duration: '50 min', category: 'data' }, { id: 3, title: 'Functions', duration: '45 min', category: 'functions' }], quiz: { questions: 10, passingScore: 70 } }], projects: [{ id: 'r-bp1', title: 'Data Analysis', difficulty: 'Beginner', skills: ['Data frames', 'Statistics'], estimatedTime: '4-5 hours' }], finalAssessment: { type: 'Project', title: 'Statistical Report', requirements: ['Data analysis', 'Visualization'], estimatedTime: '8-10 hours' } },
      { phase: 2, level: 'Intermediate', title: 'Data Analysis', duration: '2 months', description: 'Advanced data manipulation', objectives: ['dplyr', 'tidyr', 'ggplot2'], modules: [{ id: 'r-i1', title: 'Tidyverse', lessons: [{ id: 4, title: 'dplyr', duration: '70 min', category: 'tidyverse' }, { id: 5, title: 'ggplot2', duration: '80 min', category: 'visualization' }], quiz: { questions: 12, passingScore: 75 } }], projects: [{ id: 'r-ip1', title: 'Data Pipeline', difficulty: 'Intermediate', skills: ['dplyr', 'ggplot2'], estimatedTime: '15-18 hours' }], finalAssessment: { type: 'Project', title: 'Data Dashboard', requirements: ['Tidyverse', 'Visualization'], estimatedTime: '25-30 hours' } },
      { phase: 3, level: 'Advanced', title: 'Statistical Modeling', duration: '2 months', description: 'Machine learning and modeling', objectives: ['Regression', 'ML models', 'Model validation'], modules: [{ id: 'r-a1', title: 'Modeling', lessons: [{ id: 6, title: 'Regression', duration: '80 min', category: 'stats' }, { id: 7, title: 'Machine Learning', duration: '90 min', category: 'ml' }], quiz: { questions: 15, passingScore: 80 } }], projects: [{ id: 'r-ap1', title: 'Predictive Model', difficulty: 'Advanced', skills: ['ML', 'Statistics'], estimatedTime: '30-35 hours' }], finalAssessment: { type: 'Project', title: 'ML Pipeline', requirements: ['Modeling', 'Validation'], estimatedTime: '45-50 hours' } },
      { phase: 4, level: 'Expert', title: 'Professional R', duration: '2-3 months', description: 'Production and Shiny apps', objectives: ['Shiny', 'Package development', 'Deployment'], modules: [{ id: 'r-e1', title: 'Production', lessons: [{ id: 8, title: 'Shiny Apps', duration: '90 min', category: 'shiny' }, { id: 9, title: 'Package Development', duration: '80 min', category: 'packages' }], quiz: { questions: 12, passingScore: 85 } }], projects: [{ id: 'r-ep1', title: 'Shiny Dashboard', difficulty: 'Expert', skills: ['Shiny', 'ML'], estimatedTime: '50-60 hours' }], finalAssessment: { type: 'Capstone', title: 'Data Science Platform', requirements: ['Shiny', 'Production'], estimatedTime: '80-100 hours' } }
    ],
    certifications: [{ level: 'Beginner', title: 'R Fundamentals' }, { level: 'Intermediate', title: 'Data Analyst' }, { level: 'Advanced', title: 'Data Scientist' }, { level: 'Expert', title: 'R Expert' }],
    careerPaths: ['Data Analyst', 'Data Scientist', 'Statistical Analyst', 'ML Engineer']
  },

  elixir: {
    id: 'elixir',
    name: 'Elixir',
    icon: '💧',
    color: '#4B275F',
    estimatedTime: '6-9 months',
    roadmap: [
      { phase: 1, level: 'Beginner', title: 'Elixir Fundamentals', duration: '2 months', description: 'Elixir basics and functional programming', objectives: ['Elixir syntax', 'Pattern matching', 'Immutability', 'Recursion'], modules: [{ id: 'elixir-b1', title: 'Basics', lessons: [{ id: 1, title: 'Variables & Types', duration: '40 min', category: 'basics' }, { id: 2, title: 'Pattern Matching', duration: '60 min', category: 'basics' }, { id: 3, title: 'Functions', duration: '50 min', category: 'functions' }], quiz: { questions: 12, passingScore: 70 } }], projects: [{ id: 'elixir-bp1', title: 'Functional Calculator', difficulty: 'Beginner', skills: ['Functions', 'Recursion'], estimatedTime: '5-6 hours' }], finalAssessment: { type: 'Project', title: 'Data Processor', requirements: ['Pattern matching', 'Recursion'], estimatedTime: '10-12 hours' } },
      { phase: 2, level: 'Intermediate', title: 'OTP & Concurrency', duration: '2 months', description: 'OTP principles and processes', objectives: ['Processes', 'GenServer', 'Supervision'], modules: [{ id: 'elixir-i1', title: 'OTP', lessons: [{ id: 4, title: 'Processes', duration: '70 min', category: 'concurrency' }, { id: 5, title: 'GenServer', duration: '80 min', category: 'otp' }], quiz: { questions: 15, passingScore: 75 } }], projects: [{ id: 'elixir-ip1', title: 'Concurrent System', difficulty: 'Intermediate', skills: ['Processes', 'GenServer'], estimatedTime: '18-20 hours' }], finalAssessment: { type: 'Project', title: 'Supervised Application', requirements: ['OTP', 'Supervision'], estimatedTime: '30-35 hours' } },
      { phase: 3, level: 'Advanced', title: 'Phoenix Framework', duration: '2-3 months', description: 'Web development with Phoenix', objectives: ['Phoenix basics', 'Ecto', 'LiveView'], modules: [{ id: 'elixir-a1', title: 'Phoenix', lessons: [{ id: 6, title: 'Phoenix Setup', duration: '60 min', category: 'web' }, { id: 7, title: 'Ecto ORM', duration: '80 min', category: 'database' }, { id: 8, title: 'LiveView', duration: '90 min', category: 'web' }], quiz: { questions: 15, passingScore: 80 } }], projects: [{ id: 'elixir-ap1', title: 'Phoenix Web App', difficulty: 'Advanced', skills: ['Phoenix', 'Ecto'], estimatedTime: '35-40 hours' }], finalAssessment: { type: 'Project', title: 'Real-time Application', requirements: ['Phoenix', 'LiveView'], estimatedTime: '50-60 hours' } },
      { phase: 4, level: 'Expert', title: 'Production Elixir', duration: '2 months', description: 'Distributed systems and deployment', objectives: ['Distribution', 'Performance', 'Deployment'], modules: [{ id: 'elixir-e1', title: 'Production', lessons: [{ id: 9, title: 'Distributed Elixir', duration: '90 min', category: 'distributed' }, { id: 10, title: 'Deployment', duration: '80 min', category: 'devops' }], quiz: { questions: 12, passingScore: 85 } }], projects: [{ id: 'elixir-ep1', title: 'Distributed System', difficulty: 'Expert', skills: ['Distribution', 'OTP'], estimatedTime: '60-70 hours' }], finalAssessment: { type: 'Capstone', title: 'Production Platform', requirements: ['Distributed', 'Scalable'], estimatedTime: '100-120 hours' } }
    ],
    certifications: [{ level: 'Beginner', title: 'Elixir Fundamentals' }, { level: 'Intermediate', title: 'OTP Developer' }, { level: 'Advanced', title: 'Phoenix Developer' }, { level: 'Expert', title: 'Elixir Expert' }],
    careerPaths: ['Elixir Developer', 'Backend Engineer', 'Distributed Systems Engineer']
  },

  haskell: {
    id: 'haskell',
    name: 'Haskell',
    icon: 'λ',
    color: '#5D4F85',
    estimatedTime: '8-12 months',
    roadmap: [
      { phase: 1, level: 'Beginner', title: 'Haskell Fundamentals', duration: '2-3 months', description: 'Pure functional programming basics', objectives: ['Haskell syntax', 'Types', 'Functions', 'Laziness'], modules: [{ id: 'haskell-b1', title: 'Basics', lessons: [{ id: 1, title: 'Functions & Types', duration: '60 min', category: 'basics' }, { id: 2, title: 'Pattern Matching', duration: '50 min', category: 'basics' }, { id: 3, title: 'Recursion', duration: '70 min', category: 'functions' }], quiz: { questions: 15, passingScore: 70 } }], projects: [{ id: 'haskell-bp1', title: 'Functional Library', difficulty: 'Beginner', skills: ['Functions', 'Recursion'], estimatedTime: '8-10 hours' }], finalAssessment: { type: 'Project', title: 'Type-Safe Application', requirements: ['Types', 'Functions'], estimatedTime: '15-18 hours' } },
      { phase: 2, level: 'Intermediate', title: 'Type System', duration: '2-3 months', description: 'Advanced types and type classes', objectives: ['Type classes', 'Functors', 'Applicatives', 'Monads'], modules: [{ id: 'haskell-i1', title: 'Type Classes', lessons: [{ id: 4, title: 'Type Classes', duration: '80 min', category: 'types' }, { id: 5, title: 'Functors', duration: '70 min', category: 'functors' }, { id: 6, title: 'Monads', duration: '90 min', category: 'monads' }], quiz: { questions: 15, passingScore: 75 } }], projects: [{ id: 'haskell-ip1', title: 'Monadic Application', difficulty: 'Intermediate', skills: ['Monads', 'Types'], estimatedTime: '25-30 hours' }], finalAssessment: { type: 'Project', title: 'Parser Library', requirements: ['Monads', 'Type classes'], estimatedTime: '40-45 hours' } },
      { phase: 3, level: 'Advanced', title: 'Advanced Haskell', duration: '3 months', description: 'Advanced features and patterns', objectives: ['GADTs', 'Type families', 'Lenses'], modules: [{ id: 'haskell-a1', title: 'Advanced', lessons: [{ id: 7, title: 'GADTs', duration: '100 min', category: 'types' }, { id: 8, title: 'Type Families', duration: '90 min', category: 'types' }], quiz: { questions: 15, passingScore: 80 } }], projects: [{ id: 'haskell-ap1', title: 'Type-Level Programming', difficulty: 'Advanced', skills: ['GADTs', 'Type families'], estimatedTime: '45-50 hours' }], finalAssessment: { type: 'Project', title: 'DSL Implementation', requirements: ['Advanced types'], estimatedTime: '60-70 hours' } },
      { phase: 4, level: 'Expert', title: 'Production Haskell', duration: '3-4 months', description: 'Real-world applications', objectives: ['Web frameworks', 'Performance', 'Deployment'], modules: [{ id: 'haskell-e1', title: 'Production', lessons: [{ id: 9, title: 'Web Development', duration: '100 min', category: 'web' }, { id: 10, title: 'Performance', duration: '90 min', category: 'performance' }], quiz: { questions: 12, passingScore: 85 } }], projects: [{ id: 'haskell-ep1', title: 'Web Application', difficulty: 'Expert', skills: ['Web', 'Database'], estimatedTime: '70-80 hours' }], finalAssessment: { type: 'Capstone', title: 'Production System', requirements: ['Web', 'Performance', 'Quality'], estimatedTime: '120-150 hours' } }
    ],
    certifications: [{ level: 'Beginner', title: 'Haskell Fundamentals' }, { level: 'Intermediate', title: 'Functional Programmer' }, { level: 'Advanced', title: 'Type System Expert' }, { level: 'Expert', title: 'Haskell Expert' }],
    careerPaths: ['Functional Programmer', 'Backend Engineer', 'Type System Designer', 'Compiler Engineer']
  }
};

export const getLanguageLearningPath = (languageId) => {
  return languageLearningPaths[languageId] || null;
};

export const getAllLearningPaths = () => {
  return Object.values(languageLearningPaths);
};
