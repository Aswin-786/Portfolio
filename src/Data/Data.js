import {
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoBagSharp,
  IoSchool,
  IoLogoWhatsapp,
} from "react-icons/io5";

import {
  MarketSquare,
  NetflixR,
  MindBot,
  Fighter,
  Weather,
  NetflixJS,
  Frog,
  Booking,
  Clock,
  todo,
  summify,
  chatly
} from '../assets/index.js'

export const Experience = [
  {
    id: 1,
    date: "2022 - present",
    iconsSrc: <IoBagSharp />,
    title: "Front-End web developer",
    location: " Self-Taught",
    description:
      "React Js, Redux, Firebase, REST API, TailwindCSS, Bootstrap, JavaScript, HTML, CSS, Figma, Git, NPM, Java, C",
  },
  {
    id: 2,
    date: "2021 - 2022",
    iconsSrc: <IoBagSharp />,
    title: "Diploma Electrical Trainee",
    location: "Cochin Shipyard Ltd ",
    description:
      "Electrical Design, Project Management, Analytical Skills, Tender Preparation, Problem-Solving, Communication Skills, Attention to Detail, Time Management, Technical Proficiency, Cost Estimation ",
  },
  {
    id: 3,
    date: "2019 - 2021",
    iconsSrc: <IoBagSharp />,
    title: "Electrical Supervisor",
    location: "Palakkad, Kerala",
    description:
      "Installed and maintained electrical systems for residential and commercial properties in local town for two years. Assisted with troubleshooting and repairs",
  },
  {
    id: 4,
    date: "2016 - 2019",
    iconsSrc: <IoSchool />,
    title: "Diploma Electrical and Electronics Engineering",
    location: "GPTC Palakkad, Kerala",
    marks:
      "8.00 CGPA",
  },
];

export const Project = [
  {
    id: 1,
    name: "Chatly",
    imageSrc: chatly,
    techs: "React Js, Tailwind CSS, Firebase",
    github: "https://github.com/Aswin-786/chatly",
    live: 'https://chatly.aswinkrishna.com/',
  },
  {
    id: 1,
    name: "Summify AI",
    imageSrc: summify,
    techs: "React Js, REST API, Tailwind CSS",
    github: "https://github.com/Aswin-786/summify",
    live: 'https://summify.aswinkrishna.com/'
  },
  {
    id: 1,
    name: "Market Square",
    imageSrc: MarketSquare,
    techs: "React Js, Firebase, Tailwind CSS",
    github: "https://github.com/Aswin-786/Market-Square",
    live: 'https://marketsquare.aswinkrishna.com/'
  },
  {
    id: 2,
    name: "Netflix Clone ",
    imageSrc: NetflixR,
    techs: "React Js, Axios API, Tailwind CSS",
    github: "https://github.com/Aswin-786/Netflix-Clone-React",
    live: 'https://aswin-786.github.io/Netflix-Clone-React/'
  },
  {
    id: 3,
    name: "MindBot AI",
    imageSrc: MindBot,
    techs: "React Js, Tailwind CSS, figma",
    github: "https://github.com/Aswin-786/React-MindBot-AI-",
    live: "https://mindbot.aswinkrishna.com/"
  },
  {
    id: 4,
    name: "Fighting Game ",
    imageSrc: Fighter,
    techs: "JavaScript, OOPs",
    github: "https://github.com/Aswin-786/Fighting-Game-JS",
    live: "https://aswin-786.github.io/Fighting-Game-JS/"
  },
  {
    id: 5,
    name: "Weather App",
    imageSrc: Weather,
    techs: "JavaScript, REST API",
    github: "https://github.com/Aswin-786/Weather-App",
    live: "https://aswin-786.github.io/Weather-App/"
  },
  {
    id: 6,
    name: "Netflix Clone JS",
    imageSrc: NetflixJS,
    techs: "JavaScript, REST API",
    github: "https://github.com/Aswin-786/Netflix-JS",
    live: "https://aswin-786.github.io/Netflix-JS/"
  },
  {
    id: 7,
    name: "Frog Catch",
    imageSrc: Frog,
    techs: "JavaScript, HTML, CSS",
    github: "https://github.com/Aswin-786/Frog-Catch-JS",
    live: "https://aswin-786.github.io/Frog-Catch-JS/"
  },
  {
    id: 8,
    name: "Theater Seat Booking",
    imageSrc: Booking,
    techs: "JavaScript, Local Storage, HTML, CSS",
    github: "https://github.com/Aswin-786/Theater-Seat-Booking-JS",
    live: "https://aswin-786.github.io/Theater-Seat-Booking-JS/"
  },
  {
    id: 9,
    name: "Clock",
    imageSrc: Clock,
    techs: "JavaScript, HTML, CSS",
    github: "https://github.com/Aswin-786/Clock-JS",
    live: "https://clock-aswin.netlify.app"
  },
  {
    id: 10,
    name: "Todo",
    imageSrc: todo,
    techs: "JavaScript, Local Storage, HTML, CSS",
    github: "https://github.com/Aswin-786/ToDo2-JS",
    live: "https://aswin-786.github.io/ToDo2-JS/?"
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer transition-all" />,
    name: "GitHub",
    link: "https://github.com/Aswin-786",
  },
  {
    id: 2,
    iconSrc: (
      <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
    ),
    name: "Twitter",
    link: "https://twitter.com/aswin_786",
  },
  {
    id: 3,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aswin786/",
  },
  {
    id: 4,
    iconSrc: (
      <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
    ),
    name: "Whatsapp",
    link: "https://wa.me/919633044406",
  },
]