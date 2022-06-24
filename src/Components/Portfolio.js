import React, { useState, useLayoutEffect, useRef } from "react";
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
    // backgroundImage: `url(${backg}) `,
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: "cover/center",
    // backgroundSize: "cover",
  },
  // services: {
  //   width: "100vw",
  //   height: "100vh",
  //   backgroundColor: "#fff",
  //   display: "flex",
  //   justifyContent: "center",
  //   flexDirection: "column",
  //   rowGap: 25,
  // },
  servicesHeader: {
    width: "100%",
    display: "flex",
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
    columnGap: 10,
    "& .MuiTypography-root": {
      fontSize: 35,
      fontWeight: 800,
    },
  },
  text: {
    color: "#0b0b45",
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  const theme = useTheme();

  const { job, name, projects, skills } = myData;

  const [display, setDisplay] = useState({ services: false });

  const services = useRef(null);

  useLayoutEffect(() => {
    const topPosition = (element) => element.getBoundingClientRect().top;

    const servicesTop = topPosition(services.current);

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      if (servicesTop < scrollPosition) {
        setDisplay((state) => ({ ...state, services: true }));
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container className={classes.root}>
      {isMobile ? <DrawerComponent /> : <NavBar />}
      <Box className={classes.cont}>
        <Home name={name} jobTitle={job} />
      </Box>
      <Div animate={display.services} id="services" ref={services}>
        <div className={classes.servicesHeader}>
          <Underline />
          <Typography>
            What <span className={classes.text}>I Do</span>
          </Typography>
          <Underline />
        </div>
        <About about={skills} />
      </Div>
    </Grid>
  );
};

export default Portfolio;
