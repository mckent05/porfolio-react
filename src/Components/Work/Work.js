import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FilterBtn from "./FilterBtn";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles((theme) => ({
container: {
    position: 'relative',
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    rowGap: 25,
},
btnContainer: {
    position: 'relative',
    width: "90%",
    display: "flex",
    justifyContent: 'space-around',
    margin: '0 auto',
    border: "2px solid red"
},
  root: {
    position: "relative",
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    rowGap: 15,
    [theme.breakpoints.up("lg")]: {
      flexWrap: "wrap",
      flexDirection: "row",
      alignSelf: "center",
      columnGap: 15,
      rowGap: 15,
      border: "2px solid blue"
    },
  },
}));

const Work = ({ projects }) => {
  const classes = useStyles();

  const [filterTech, setFilterTech] = useState([]);

  const getFilterButtons = (projectsArray) => {
    const getTech = projectsArray.reduce(
      (acc, value) => {
        value.tech.forEach((skill) => {
          if (!acc.includes(skill)) {
            acc.push(skill);
          }
        });
        return acc;
      },
      ["all"]
    );
    setFilterTech(getTech);
  };

  useEffect(() => {
    getFilterButtons(projects);
  }, [projects]);

  return (
    <Grid className={classes.container}>
      <Box className={classes.btnContainer}>
          {
              filterTech.map((tech) => (<FilterBtn title={tech} />))
          }
      </Box>
      <Box className={classes.root}>
        {projects.map((project) => (
          <ProjectCard
            title={project.title}
            details={project.description}
            img={project.image}
            skills={project.tech}
            live={project.live}
            github={project.source}
          />
        ))}
      </Box>
    </Grid>
  );
};

export default Work;
