import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SkillCard from "./SkillCard";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignContent: "center",
    rowGap: 30,
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      height: "80vh",
    },
  },
}));

const About = ({ about }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      {about.map((skills) => (
        <SkillCard
          key={skills.name}
          name={skills.name}
          desc={skills.description}
          img={skills.image}
        />
      ))}
    </Grid>
  );
};

export default About;
