import React, { useState } from "react";
import { Grid, Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Links from "./Links";

const useStyles = makeStyles(() => ({
  root: {
    Width: "100%",
    height: "10vh",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  fixed: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    zIndex: 10,
    boxShadow: "0 2px 8px #b2beb5",
  },
  logo: {
    display: "flex",
    justifyContent: "flex-start",
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
    "projects",
    "skills",
    "contact",
  ]);

  return (
    <Grid
      container
      className={fixedNav ? `${classes.root} ${classes.fixed}` : classes.root}
    >
      <Box>
        <p>My logo</p>
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
