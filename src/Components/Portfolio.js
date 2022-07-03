import React, { useState, useLayoutEffect, useRef } from "react";
import { Grid, Box } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import NavBar from "./NavBar/NavBar";
import DrawerComponent from "./NavBar/MobileNav/DrawerComponent";
import Home from "./Home/Home";
import { myData } from "../profiledata";
import About from "./About/About";
import styled from "styled-components";
import SectionHeader from "./SectionHeader";
import Contact from "./Contact/Contact";
import Work from "./Work/Work";

const createDiv = ((hexColor) => {
  const Div = styled.div`
    width: 100vw;
    height: auto !important;
    background-color: #${hexColor};
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 25px;
    transform: translateX(${({ animate }) => (animate ? "0" : "-100vw")});
    transition: ease-out 1.5s;
  `;
  return Div;
});

const ServiceDiv = createDiv("fff"),
  ProjectDiv = createDiv("b0b25b");

const useStyles = makeStyles(() => ({
  root: {
    Width: "100vw",
  },
  cont: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#b2beb5",
    display: "flex",
    flexDirection: "column",
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  const theme = useTheme();

  const { job, name, projects, mySkills, socialLinks } = myData;

  const [display, setDisplay] = useState({
    services: false,
    skills: false,
    work: false,
    contact: false,
  });

  const [active, setActive] = useState(0);

  const [navFixed, setNavFixed] = useState(false);

  const [featuredProjects] = useState(projects);

  const services = useRef(null),
    skills = useRef(null),
    work = useRef(null),
    contactForm = useRef(null);

  const handleActiveLink = (index) => {
    setActive(index);
  };

  useLayoutEffect(() => {
    const topPosition = (element) => element.offsetTop;
    
    const displayElement = (element, elementIndex) => {
      setDisplay((state) => ({ ...state, [element]: true }));
      setActive(elementIndex);
    };

    const servicesTop = topPosition(services.current),
      skillsTop = topPosition(skills.current),
      workTop = topPosition(work.current),
      contactFormTop = topPosition(contactForm.current);

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      console.log(scrollPosition, servicesTop);

      if (scrollPosition > 1000) {
        setNavFixed(true);
      }

      if (scrollPosition <= window.innerHeight) {
        setNavFixed(false);
        setActive(0);
      }

      if (servicesTop + 300 < scrollPosition) {
        displayElement("services", 1);
      }

      if (workTop + 300 < scrollPosition) {
        displayElement("work", 2);
      }

      if (skillsTop + 200 < scrollPosition) {
        displayElement("skills", 3);
      }
      if (contactFormTop + 200 < scrollPosition) {
        displayElement("contact", 4);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container className={classes.root}>
      <Box className={classes.cont} id="home">
        {isMobile ? (
          <DrawerComponent social={socialLinks} active={active} handle={handleActiveLink} />
        ) : (
          <NavBar
            activeLink={active}
            handleLink={handleActiveLink}
            fixedNav={navFixed}
          />
        )}
        <Home name={name} jobTitle={job} />
      </Box>
      <ServiceDiv animate={display.services} id="services" ref={services}>
        <SectionHeader text="What" spanText="I Do" />
        <About about={mySkills} />
      </ServiceDiv>
      <ProjectDiv animate={display.work} id="projects" ref={work}>
        <SectionHeader text="" spanText="Projects" />
        <Work allProjects={featuredProjects} isMobile={isMobile} />
      </ProjectDiv>
      <ServiceDiv animate={display.skills} id="skills" ref={skills}>
        <SectionHeader text="My" spanText="Skills" />
        <About about={mySkills} />
      </ServiceDiv>
      <ProjectDiv animate={display.contact} id="contact" ref={contactForm}>
        <SectionHeader text="Contact" spanText="Me" />
        <Contact />
      </ProjectDiv>
    </Grid>
  );
};

export default Portfolio;
