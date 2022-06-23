import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles"
import SkillCard from "./SkillCard";

const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
        width: '90%',
        display: 'flex',
        justifyContent: 'space-around',
        alignContent: 'center'
    }
}))

const About = ({ about }) => {
  const classes= useStyles()
  return (
    <Grid container className={classes.root}>
      {about.map((skills) => (
        <SkillCard
          id={skills.name}
          name={skills.name}
          desc={skills.description}
          img={skills.image}
        />
      ))}
    </Grid>
  );
};

export default About;
