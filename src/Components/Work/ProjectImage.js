import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ProjectLinks from "./ProjectLinks";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "relative",
    height: "40vh",
    [theme.breakpoints.up("lg")]: {
      width: "90%",
    },
  },
  img: {
    position: "relative",
    width: "100%",
    height: "100%",
    objectFit: "center",
    borderRadius: "5px",
  },
}));

const ProjectImage = ({ image, liveLink, gitHubLink }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img className={classes.img} src={image} alt="project-img" />
      <ProjectLinks liveLink={liveLink} githubLink={gitHubLink} />
    </Box>
  );
};

export default ProjectImage;
