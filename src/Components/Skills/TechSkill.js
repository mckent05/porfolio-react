import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    width: "30%",
    rowGap: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageCont: {
    position: "relative",
    width: 50,
    height: 50,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#fff",
    boxShadow: "0 2px 2px grey",
    borderRadius: "100%",
    [theme.breakpoints.up("lg")]: {
      width: 80,
      height: 80,
    },
  },
  img: {
    position: "relative",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "100%",
  },

  techName: {
    fontFamily: "Satisfy",
  }
}));

const TechSkill = ({ image, techName }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.imageCont}>
        <img className={classes.img} src={image} alt={techName} />
      </Box>
      <h3 className={classes.techName}>{techName}</h3>
    </Box>
  );
};

export default TechSkill;
