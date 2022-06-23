import React from 'react'
import { Grid, Box, Typography } from "@mui/material"
import { useTheme, useMediaQuery } from "@mui/material";
import { makeStyles } from '@mui/styles'
import NavBar from "./NavBar/NavBar";
import DrawerComponent from "./NavBar/MobileNav/DrawerComponent";
import Home from "./Home/Home"
import { myData } from "../profiledata";
import About from "./About/About";
import Underline from "./Underline";

const useStyles = makeStyles(() => ({
  root: {
    Width: '100vw',
  }, 
  cont: {
    width: '100%',
    height: '100vh',
    backgroundColor: "#b2beb5",
    // backgroundImage: `url(${backg}) `,
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: "cover/center",
    // backgroundSize: "cover",
  },
  services: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    rowGap: 25
  },
  servicesHeader: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 10,
    "& .MuiTypography-root": {
      fontSize: 35,
      fontWeight: 800
    }
  },
  text: {
    color: "#0b0b45"
  }


}))


const Portfolio = () => {
  const classes = useStyles()
  const theme = useTheme();
  const {job, name, projects, skills } = myData
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container className={classes.root}>
        {isMobile ? <DrawerComponent /> : <NavBar />}
        <Box className={classes.cont} >
          <Home name={name} jobTitle={job}/>
        </Box>
        <section className={classes.services} id="services">
          <div className={classes.servicesHeader}>
            <Underline/>
            <Typography>What <span className={classes.text}>I Do</span></Typography>
            <Underline />
          </div>
          <About about={skills} />
        </section>
        

    </Grid>
  )
}

export default Portfolio