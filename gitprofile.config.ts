// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'samaypashine', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
    }
  },
  seo: {
    title: 'Portfolio of Samay Pashine',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'https://linkedin.com/in/samaypashine',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    phone: '+1 7657672457',
    email: 'samaypashine7@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/samaypashine.github.io/Samay_Pashine_Resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Machine Learning',
    'Artificial Intelligence',
    'Computer Vision',
    'Natural Language Processing',
    'Python',
    'C++',
    'Shell Script',
    'Java',
    'MySQL',
    'PostgreSQL',
    'Tensorflow',
    'Pytorch',
    'Transformers',
    'OpenCV',
    'Numpy',
    'Pandas',
    'TFLite',
    'Git',
    'Docker',
    'ROS',
  ],
  experiences: [
    {
      company: 'Tufts University',
      position: 'Graduate Teaching Assistant',
      from: 'January 2022',
      to: 'December 2023',
    },
    {
      company: 'Tufts University',
      position: 'Graduate Research Assistant',
      from: 'May 2022',
      to: 'June 2023',
    },
    {
      company: 'Indian Institute of Technology, Indore',
      position: 'Machine Learning Engineer',
      from: 'August 2021',
      to: 'December 2021',
    },
    {
      company: 'Eyecan',
      position: 'Data Scientist',
      from: 'Januray 2021',
      to: 'December 2021',
    },
    {
      company: 'Robro Systems Private Limited',
      position: 'Machine Learning Engineer Intern',
      from: 'June 2020',
      to: 'December 2020',
    },
    {
      company: 'Robro Systems Private Limited',
      position: 'Python Developer Intern',
      from: 'June 2019',
      to: 'AUgust 2019',
    },
  ],
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
  educations: [
    {
      institution: 'Tufts University',
      degree: 'Master of Science in Computer Science',
      from: '2022',
      to: '2023',
    },
    {
      institution: 'Acropolis Institute of Technology and Research',
      degree: 'Bachelor of Technology in Computer Science Engineering',
      from: '2017',
      to: '2021',
    },
  ],
  // // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 3, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'nord',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
