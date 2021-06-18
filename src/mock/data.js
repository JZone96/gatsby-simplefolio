import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: 'it', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hi, I'm`,
  name: 'Jason Liberti',
  subtitle: `I'm a Web Developer`,
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I'm a self-taught web developer. I've studied HTML and CSS at school, but I've discovered
  the React library by my self. I also have experience with NodeJS and PostgreSQL`,
  paragraphTwo: `Actually I'm warehouse manager and I actually care about logistic`,
  paragraphThree: `When I'm not coding, I love playing videogames, spend time with my amazing girlfriend Alessia `,
  resume: 'https://drive.google.com/file/d/1ahmt1BCgColfay0AFJnKhLmTFo7F9HRI/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'robofriends.png',
    title: 'Robofriends',
    info:
      'A simple project Build with ReactJS to search a list of robots. The robots are taken from robohash API.',
    info2: 'It builds card based on the JSON return. The user can search through the robots',
    url: 'https://jzone96.github.io/robofriends/',
    repo: 'https://github.com/JZone96/robofriends', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'smart-brain.png',
    title: 'Smart Brain App',
    info:
      'This is a project that detects faces in a image, using the Clarifai API, and tells you how many there are. You can also modify you user information in the Modify section ',
    info2: `It's build with ReactJS `,
    url: 'https://jzone96.github.io/smart-brain/',
    repo: 'https://github.com/JZone96/smart-brain', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pentolbress.png',
    title: 'Pentolbress (WIP)',
    info: 'A project created for a fake company of pans. ',
    info2: `It's build with ReactJS and React Router for routing. in the future, I will need to add Redux for state management`,
    url: '',
    repo: 'https://github.com/JZone96/pentolbress', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Open to web developement opportunities',
  btn: '',
  email: 'jason.liberti@live.it',
};

// FOOTER DATA
export const footerData = {
  networks: [
    /* {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    }, */
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/JZone96',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
