import React, { useState } from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ProjectDetails from "./ProjectDetails";
import ProjectImage from "./ProjectImage";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "90%",
    height: "80vh",
    display: "flex",
    rowGap: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "8px 6px",
    backgroundColor: "#ccc",
    transition: "ease-in 0.5s",
    "&:hover": {
      boxShadow: "0px 1px 2px #999999",
    },
    [theme.breakpoints.up("lg")]: {
      width: "30%",
      flexDirection: "column",
    },
  },
}));

const ProjectCard = ({ title, details, img, skills, live, github, index }) => {
  const classes = useStyles();

  const [viewLive, setViewLive] = useState("");

  const displayLink = () => {
    setViewLive(index);
  };
  return (
    <Box
      component="article"
      className={viewLive === index ? `${classes.root} display` : classes.root}
      onMouseOver={() => displayLink()}
      onMouseLeave={() => setViewLive("")}
    >
      <ProjectDetails title={title} skills={skills} details={details} />
      <ProjectImage image={img} liveLink={live} gitHubLink={github} />
    </Box>
  );
};

export default ProjectCard;
