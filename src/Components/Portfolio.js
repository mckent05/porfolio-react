import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import NavBar from "./NavBar/NavBar";
import DrawerComponent from "./NavBar/MobileNav/DrawerComponent";
import Home from "./Home/Home";
import { myData } from "../profiledata";
import About from "./About/About";
import Underline from "./Underline";
import styled from "styled-components";
import SectionHeader from "./SectionHeader";

const Div = styled.div`
  width: 100vw;
  height: auto !important;
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 25px;
  transform: translateX(${({ animate }) => (animate ? "0" : "-100vw")});
  transition: ease-out 1.5s;
`;

const useStyles = makeStyles(() => ({
  root: {
    Width: "100vw",
  },
  cont: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#b2beb5",
    display: "flex",
    flexDirection: 'column',
  },
}));

const Portfolio = () => {
  const classes = useStyles();

 

  const theme = useTheme();

  const { job, name, projects, mySkills } = myData;

  const [display, setDisplay] = useState({ services: false, skills: false });

  const [active, setActive] = useState(0)

  const services = useRef(null),
    skills = useRef(null);

  const handleActiveLink = ((index) => {
    setActive(index);
  })

  useLayoutEffect(() => {
    const topPosition = (element) => element.getBoundingClientRect().top;

    const servicesTop = topPosition(services.current),
      skillsTop = topPosition(skills.current);
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      if (servicesTop < scrollPosition) {
        setDisplay((state) => ({ ...state, services: true }));
      }
      if (skillsTop < scrollPosition) {
        setDisplay((state) => ({ ...state, skills: true }));
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    console.log(active)
  }, [active])

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


  return (
    <Grid container className={classes.root}>
      <Box className={classes.cont} id="home">
        {isMobile ? <DrawerComponent /> : <NavBar activeLink={active} handleLink={handleActiveLink} />}
        <Home name={name} jobTitle={job} />
      </Box>
      <Div animate={display.services} id="services" ref={services}>
        <SectionHeader text="What" spanText="I Do" />
        <About about={mySkills} />
      </Div>
      <Div animate={display.skills} id="skills" ref={skills}>
        <SectionHeader text="My" spanText="Skills" />
        <About about={mySkills} />
      </Div>
    </Grid>
  );
};

export default Portfolio;
