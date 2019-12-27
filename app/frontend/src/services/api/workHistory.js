class WorkHistory {
  async getList() {
    return [
      {
        companyName: 'AUTOLOGYX LLC',
        position: 'Full Stack Developer',
        workedFromTo: 'Apr. 2018 - Present',
        aboutTheCompany: [
          {
            type: 'paragraph',
            content:
              'Autologyx is a SaaS company (Software as a Service) that provides process automation for complex operations in the compliance and legal sector.'
          }
        ],
        workSummary: [
          {
            type: 'paragraph',
            content:
              "My role's primary focus was working with clients, developers and designers to partially or entirely transform the clients internal procedures to automated processes from discovery to successful launch."
          }
        ],
        keyResponsibilities: [
          {
            type: 'list',
            content: [
              'Led discovery sessions with clients to understand their internal procedures and converted them to process flows',
              'Designed and implemented relational database structures, backend services with REST API endpoints and coordinated with designers to build user interfaces',
              'Researched 3rd party services and integrated them with the Autologyx system to demonstrate its capabilities',
              'Documented and coded unit and integration tests',
              'Investigated and documented bugs for other developers with proposed solutions'
            ]
          }
        ],
        technologies: [
          {
            type: 'badge',
            content: [
              'Node.js',
              'React',
              'Docker Compose',
              'Mocha and Chai',
              'PostgreSQL',
              'Objection.js'
            ]
          }
        ],
        projects: [
          {
            title: 'INSURANCE RENEWAL DASHBOARD',
            summary: [
              {
                type: 'paragraph',
                content:
                  "One of the world's largest insurance brokerage firms wanted to automate their insurance renewal process which is one of their key operations."
              }
            ],
            tasks: [
              {
                type: 'list',
                content: [
                  "Led discovery and wrote design documentation for the project's technical implementation",
                  'Coded Dashboard UI that tracks the state of the renewal and allows interaction for the parties to do the negotiation',
                  "Coded the back-end service that stored submissions made via the dashboard until the data could be synchronized with the Autologyx system and the client's assets"
                ]
              }
            ],
            technologies: [
              {
                type: 'badge',
                content: [
                  'Node.js',
                  'React',
                  'Docker Compose',
                  'Mocha and Chai',
                  'PostgreSQL',
                  'Objection.js'
                ]
              }
            ]
          },
          {
            title: 'LEGAL MATTER PLAYBOOK',
            summary: [
              {
                type: 'paragraph',
                content:
                  'Autologyx was developing a document analysis software using machine learning which needed a front-end user interface called "Playbook" that allowed users to provide configuration of what they were looking for in a contract.'
              }
            ],
            tasks: [
              {
                type: 'list',
                content: [
                  'Worked with designer and created a front-end UI to view documents',
                  'Coordinated with machine learning developers to implement document highlights of the analysis'
                ]
              }
            ],
            technologies: [
              {
                type: 'badge',
                content: ['React', 'Node.js', 'PDFKit']
              }
            ]
          },
          {
            title: 'FORM BUILDER APPLICATION',
            summary: [
              {
                type: 'paragraph',
                content:
                  'Many of our clients wanted to have a way to easily configure and style an online form that they could send out to their customers so we decided to implement one.'
              }
            ],
            tasks: [
              {
                type: 'list',
                content: [
                  'Wrote an engine that read in a JSON object and converted a bare html structure to an interactive form with pagination, templated styling, conditional fields, validation and let the users inject custom content'
                ]
              }
            ],
            technologies: [
              {
                type: 'badge',
                content: ['jQuery', 'HTML5', 'Sass', 'Webpack']
              }
            ]
          }
        ]
      },
      {
        companyName: 'ARKENFORD LLC',
        position: 'Junior Web Developer',
        workedFromTo: 'Apr. 2016 - Apr. 2018',
        aboutTheCompany: [
          {
            type: 'paragraph',
            content:
              'Arkenford is a market research agency conducting surveys, providing research and analysis to help their clients making better decisions in communicating with their customers and developing their brands.'
          }
        ],
        workSummary: [
          {
            type: 'paragraph',
            content:
              'My role included maintaining the company’s internal administrative web applications and public websites. Provided support to the company’s clientele in both green-and brownfield projects from tender through to completion.'
          }
        ],
        keyResponsibilities: [
          {
            type: 'list',
            content: [
              "Maintained the company's internally developed tools and modules used by the data analyst team",
              'Built RESTful APIs for applications collecting and processing survey data',
              'Created new- and extended existing modules to automate tasks and scheduled processes',
              'Researched and integrated with external libraries for data visualization',
              'Designed relational database schemas, and worked on algorithms interacting with those databases to ensure quick response times'
            ]
          }
        ],
        technologies: [
          {
            type: 'badge',
            content: ['Node.js', 'jQuery', 'MySQL', 'Sequelize']
          }
        ],
        projects: [
          {
            title: 'GDPR DATABASE ENCRYPTION',
            summary: [
              {
                type: 'paragraph',
                content:
                  'In order to increase GDPR compliance the company decided to encrypt all sensitive information stored in their databases.'
              }
            ],
            tasks: [
              {
                type: 'list',
                content: [
                  'Coded one-time script to create new columns in the databases with encrypted data and delete all non-encrypted data',
                  'Deployed one-time script to encrypt all data in the databases',
                  'Extended internal custom modules and database connectors to work with encrypted data'
                ]
              }
            ],
            technologies: [
              {
                type: 'badge',
                content: ['Node.js', 'MySQL', 'Sequelize']
              }
            ]
          },
          {
            title: 'UKIE GAMES MAP',
            summary: [
              {
                type: 'paragraph',
                content:
                  'Our company won a contract to create a map of game developers and publishers and present them on a map with the ability to add and edit entries.'
              }
            ],
            tasks: [
              {
                type: 'list',
                content: [
                  'Created new- and extended existing modules to automate tasks and scheduled processes',
                  'Built RESTful APIs for applications collecting and processing survey data'
                ]
              }
            ],
            technologies: [
              {
                type: 'badge',
                content: ['Node.js', 'jQuery', 'MySQL', 'Sequelize']
              }
            ]
          },
          {
            title: 'SURVEY QUOTE ALGORITHM MODULE',
            summary: [
              {
                type: 'paragraph',
                content:
                  'Our company did conduct surveys on a regular basis and needed a custom internal module that converted an excel sheet with SQL like instructions to a programmatic input that could be read by other applications that were sending out survey invitations.'
              }
            ],
            tasks: [
              {
                type: 'list',
                content: [
                  'Coordinated with the data analyst team to compile a set of features',
                  'Coded custom module that reads in a CSV with SQL like instructions and the desired quotes and transforms it to a JSON that could be read by other applications'
                ]
              }
            ],
            technologies: [
              {
                type: 'badge',
                content: ['Node.js']
              }
            ]
          }
        ]
      }
    ];
  }
}

export default new WorkHistory();
