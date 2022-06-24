import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "50%",
    position: "relative",
    height: "40vh",
  },
  img: {
    position: "relative",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "5px",
  },
}));

const ProjectImage = ({ img }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img className={classes.img} src={img} alt="project-img" />
    </Box>
  );
};

export default ProjectImage;
