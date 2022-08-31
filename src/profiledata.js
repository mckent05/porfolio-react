import commerce from "./Images/pdp.PNG";
import somarven from "./Images/somarven1.png";
import budget from "./Images/budget1.PNG";
import stfa from "./Images/home2.PNG";
import profiles from "./Images/Capture1.PNG";
import leaderboard from "./Images/leaderboard.PNG";
import rockets from "./Images/spacehub.PNG";
import shoppingify from "./Images/span1.PNG"
import brighttop from "./Images/BrightTop.PNG";
import bookstore from "./Images/bookstore.PNG";
import axios from "./Images/skills/axios.png";
import bootstrap from "./Images/skills/bootstrap.png";
import css3 from "./Images/skills/css3.png";
import figma from "./Images/skills/figma.png";
import github from "./Images/skills/github.png";
import heroku from "./Images/skills/heroku.png";
import html5 from "./Images/skills/html5.png";
import javascript from "./Images/Javascript.png";
import jest from "./Images/skills/jest.png";
import mui from "./Images/skills/material-ui.png";
import netlify from "./Images/skills/netlify.png";
import postgres from "./Images/skills/postgresql.png";
import postman from "./Images/skills/postman.png";
import python from "./Images/python.png";
import rails from "./Images/skills/rails.png";
import ruby from "./Images/rails.jpg";
import react from "./Images/react.png";
import redux from "./Images/skills/redux.png";
import rspec from "./Images/skills/rspec.png";
import vscode from "./Images/skills/vscode.png";

export const myData = {
  name: "Akinlade Temitope",
  job: "Full-Stack Engineer",
  socialLinks: {
    gitHub: "https://www.github.com/mckent05",
    linkedIn: "https://www.linkedin.com/in/akinladetemitope",
    twitter: "https://www.twitter.com/mckent05",
    angelList: "https://angel.co/akinlade-tope",
  },
  tools: [
    {
      name: "axios",
      logo: axios,
    },
    {
      name: "bootstrap",
      logo: bootstrap,
    },
    {
      name: "css3",
      logo: css3,
    },
    {
      name: "figma",
      logo: figma,
    },
    {
      name: "github",
      logo: github,
    },
    {
      name: "heroku",
      logo: heroku,
    },
    {
      name: "html5",
      logo: html5,
    },
    {
      name: "javascript",
      logo: javascript,
    },
    {
      name: "jest",
      logo: jest,
    },
    {
      name: "MUI",
      logo: mui,
    },
    {
      name: "netlify",
      logo: netlify,
    },
    {
      name: "postgres",
      logo: postgres,
    },
    {
      name: "python",
      logo: python,
    },
    {
      name: "postman",
      logo: postman,
    },
    {
      name: "rails",
      logo: rails,
    },
    {
      name: "react",
      logo: react,
    },
    {
      name: "redux",
      logo: redux,
    },
    {
      name: "ruby",
      logo: ruby,
    },
    {
      name: "rspec",
      logo: rspec,
    },
    {
      name: "vscode",
      logo: vscode,
    },
  ],
  projects: [
    {
      title: "Shoppingify",
      image: shoppingify,
      description:
        "A simple we app that makes shopping easy for you. This web app let's users take their shopping list wherever they go. Users can additems to their shopping list from the various items already in the app, or can add a new item if they cannot find the item they want.",
      tech:["React/Redux", "Ruby/Rails"],
      live: "https://steve-shoppingify-app.netlify.app",
      source: "https://github.com/mckent05/shoppingify-frontend",
    },
    {
      title: "E-commerce Web App",
      image: commerce,
      description:
        "Are you looking for an affordable site to buy some of your most needed products all in one place? Then this is the app you have been looking for. This web allows users shop for thier most needed items at affordable prices. Why not patronize us today. I am sure trial will convince you.",
      tech: ["React/Redux"],
      live: "https://scandi-store.netlify.app/",
      source: "https://github.com/mckent05/scandiweb-refix",
    },
    {
      title: "Somarven Arena",
      image: somarven,
      description:
        "Somarven arenas is a simple web-app that allows registered users book or make reservations for an arena, users can also add arenas. Users can cancel reservations and do much more. Check-out the cool features of this application.",
      tech: ["React/Redux", "Ruby/Rails"],
      live: "https://somarven.netlify.app/",
      source: "https://github.com/Somdotta07/Somarven-Arenas-frontend",
    },
    {
      title: "Maintenance Budget",
      image: budget,
      description:
        "This application is a simple and fun web app that lets users keep track of their equiment maintenance and repair cost.A User must be signed up in order to use this application.",
      tech: ["React/Redux", "Ruby/Rails"],
      live: "https://polar-lake-28978.herokuapp.com/",
      source: "https://github.com/mckent05/maintenance_budget",
    },
    {
      title: "steve football app",
      image: stfa,
      description:
        "A Web app for football lovers. This app consumes data from an API and displays league standings for top leagues around the world. Do you want to check the league standings for your favorite clubs? Then this is the app to do just that.",
      tech: ["React/Redux"],
      live: "https://steven-football-app.herokuapp.com/",
      source: "https://github.com/mckent05/my-football-app.git",
    },
    {
      title: "Student Profiles",
      image: profiles,
      description:
        "A simple web app that displays a list of sudent and their test scores. This app fetaches data from a RESTful api and displays a list of students and their test scores. Tags can also be added to individual student profile.",
      tech: ["React/Redux"],
      live: "https://student-test-profile.herokuapp.com/",
      source: "https://github.com/mckent05/student-profile-9359",
    },
    {
      title: "Space Rockets Hub",
      image: rockets,
      description:
        "This application is for space travellers. This application allows users book rockets to enable them travel to space. Users can also book dragons and join a space mission. This app makes use of real life data from spaceX API",
      tech: ["React/Redux"],
      live: "https://steve-rockets-hub.netlify.app/",
      source: "https://github.com/mckent05/space-travelers-hub",
    },
    {
      title: "BrightTop Cinemas",
      image: brighttop,
      description:
        "This web app helps to review some of your favorite movies. It fetches a curated list of data from an API and shows the reviews about the movie. It allows users to make comments on some of their favorite movies. This application makes use of live data from TVmaze API",
      tech: ["JavaScript", "HTML/CSS"],
      live: "https://mckent05.github.io/Javascript_Capstone/",
      source: "https://github.com/mckent05/Javascript_Capstone",
    },
    {
      title: "CMS Bookstore",
      image: bookstore,
      description:
        "A web app for book lovers. This web app allows users keep track of their progress when reading some of their favorite books. Users can add details about a new book they are about to read and add books by category. ",
      tech: ["JavaScript", "React/Redux"],
      live: "https://mckent05.github.io/bookstore_react/",
      source: "https://github.com/mckent05/bookstore_react",
    },
  ],
  mySkills: [
    {
      name: "BackEnd Development",
      image:
        "http://res.cloudinary.com/duj88gras/image/upload/v1655326985/ojabyiclltbnrmtzppzp.png",
      description:
        "I can build your server-side web application logic and integration of the work front-end developers do. I write the web services and APIs used by front-end developers using Rails and some other libraries.",
    },
    {
      name: "FrontEnd Development",
      image:
        "http://res.cloudinary.com/duj88gras/image/upload/v1655326985/mtjpugrrucbpcbyw7qzc.jpg",
      description:
        " I create websites and applications using web languages such as HTML, CSS, JavaScript, and libraries like React that allows users to access and interact with the site or app.",
    },
    {
      name: "FullStack Development",
      image:
        "http://res.cloudinary.com/duj88gras/image/upload/v1655326985/udgpkleywhwuokmrdlg5.jpg",
      description:
        "I work on both the front end and back end of a web application. I develop powerful modern web applications that form the foundation for apps and websites using React and Rails",
    },
  ],
};
