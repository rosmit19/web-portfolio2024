import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Scraper",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Quality Assurance Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data Analyst",
    company_name: "Study Info Centre",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2020 - May 2022",
    points: [
      "Effectively compiled and extracted educational data using strategic web scraping techniques with Scrapy and Selenium.",
      "Oversaw the management and strategic direction of the entire data department.",
      "Mentored new team members on data collection processes and coding practices.",
      "Collaborated with the development team to refine and optimize the user interface of the data visualization website.",
    ],
  },
  {
    title: "IT and Network Supporter",
    company_name: "Trinity International College",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2019 - Jan 2020",
    points: [
      "Troubleshooted software components regarding OS issues",
      "Assisted lecturers with online teaching approaches.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "It was exceptional for me to see a fresh high school graduate leading a team of data engineers with such complete dedication and commitment.",
    name: "Binaya Poudel",
    designation: "Project Manager",
    company: "Study Info Centre",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met someone like Rosmit who is so genuinely interested in exploring the power of data and its impact on society.",
    name: "Ganesh Kuikel",
    designation: "Data Analyst",
    company: "LearnSIC",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Rosmit is one of those standout employees i've seen in my career- exceptionally humble and a great team player with outstanding leadership skills.",
    name: "Bijaya Poudel",
    designation: "CEO",
    company: "SIC",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },

];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
