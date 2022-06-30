import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FilterBtn from "./FilterBtn";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    rowGap: 25,
  },
  btnContainer: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    rowGap: 10,
    justifyContent: "space-around",
    margin: "0 auto 50px auto",
    [theme.breakpoints.up("lg")]: {
      width: "70%",
    },
  },
  root: {
    position: "relative",
    width: "98%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "20px 0",
    margin: "0 auto",
    rowGap: 15,
    transition: "ease-in 0.5s",
    [theme.breakpoints.up("lg")]: {
      flexWrap: "wrap",
      flexDirection: "row",
      alignSelf: "center",
      columnGap: 15,
      rowGap: 25,
    },
  },
}));

const Work = ({ allProjects }) => {
  const classes = useStyles();

  const [filterTech, setFilterTech] = useState([]);

  const [projects, setProjects] = useState(allProjects);

  const [ activeButton, setActiveButton ] =useState('all')

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

  const filterProjects = (techName) => {
    if (techName !== "all") {
      const filteredProjects = allProjects.filter((project) =>
        project.tech.includes(techName)
      );
      setProjects(filteredProjects);
    } else {
      setProjects(allProjects);
    }
    setActiveButton(techName)
  };

  useEffect(() => {
    getFilterButtons(allProjects);
  }, [allProjects]);

  return (
    <Box>
      <Box className={classes.btnContainer}>
        {filterTech.map((tech) => (
          <FilterBtn title={tech} filter={filterProjects} active={activeButton} />
        ))}
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
    </Box>
  );
};

export default Work;
