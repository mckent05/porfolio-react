import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TechSkill from "./TechSkill";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative",
    flexDirection: "column-reverse",
    rowGap: 20,
    width: "80%",
    margin: "0 auto",
    paddingBottom: 50,
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
  },
  skillCont: {
    positon: "relative",
    width: "90%",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    rowGap: 30,
    justifyContent: "space-around",
    alignItems: "space-around",
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
  },
  exp: {
    positon: "relative",
    width: "90%",
    margin: "0 auto",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 22.5,
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
  },
}));

const Skills = ({ skills }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.skillCont}>
        {skills.map((skill) => (
          <TechSkill
            image={skill.logo}
            techName={skill.name}
            key={skill.name}
          />
        ))}
      </Box>
      <h3 className={classes.exp}>
        {" "}
        An electrical engineer, who has spent the last few months in a remote
        enviroment, building real-world projects and collaborating with other
        developers around the world. My background as an electrical enginer has
        helped me with the challenges that come with being a software engineer,
        it has helped me come up with innovative solutions whilst thinking
        criticially. Also, as a former field engineer in the renewable energy
        sector who has also always put customer satisfaction first, my
        expereince here has ensured that I thrive to build software that gives
        users the best experience.{" "}
      </h3>
    </Box>
  );
};

export default Skills;
