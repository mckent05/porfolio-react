import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#e5e5e5",
    width: "100%",
    borderRadius: "4px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    order: 1,
    padding: '5px 5px',
    boxShadow: "0 2px 7px grey",
    [theme.breakpoints.up("lg")]: {
      width: "80%",
    },
  },
}));

const ProjectSkills = ({ skills }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography>
        {skills.length >= 4 ? skills.slice(0, 4).join("/") : skills.join("/")}
      </Typography>
    </Box>
  );
};

export default ProjectSkills;
