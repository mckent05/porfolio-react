import React, { useState } from "react";
import { Grid, Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Links from "./Links";
import icon from "../../Images/profilepicture.jpeg";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    Width: "100%",
    positon: "relative",
    height: "10vh",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  imageCont: {
    position: "relative",
    width: 30,
    height: 30,
    display: "flex",
    justifyContent: "center",
    borderRadius: "100%",
    [theme.breakpoints.up("lg")]: {
      width: 30,
      height: 30,
    },
  },
  img: {
    position: "relative",
    width: "100%",
    height: "100%",
    objectFit: "contain",
    borderRadius: "100%",
  },

  btnCont: {
    "& .MuiButton-root": {
      backgroundColor: "#fff",
      color: "#0b0b45",
      border: "1px solid #0b0b45",
      transition: "ease-in 0.5s",
      "&:hover": {
        backgroundColor: "#0b0b45",
        color: "#fff",
      },
    },
  },

  links: {
    width: "55%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  linkedIn: {
    textDecoration: "none",
    textTransform: "capitalize",
  },
}));

const NavBar = ({ activeLink, handleLink, fixedNav }) => {
  const classes = useStyles();
  const [links] = useState([
    "home",
    "services",
    "skills",
    "projects",
    "contact",
  ]);

  return (
    <Grid
      container
      className={fixedNav ? `${classes.root} fixed` : classes.root}
    >
      <Box className={classes.imageCont}>
        <img className={classes.img} src={icon} alt="profile-icon" />
      </Box>
      <Box className={classes.links}>
        {links.map((el, index) => (
          <Links
            linkName={el}
            key={el}
            index={index}
            handle={handleLink}
            activeLink={activeLink}
          />
        ))}
      </Box>
      <Box className={classes.btnCont}>
        <a
          className={classes.linkedIn}
          href="https://www.linkedin.com/in/akinladetemitope"
          rel="noreferrer"
          target="_blank"
        >
          <Button type="button" className={classes.FilterBtn} size="medium">
            LinkedIn
          </Button>
        </a>
      </Box>
    </Grid>
  );
};

export default NavBar;
