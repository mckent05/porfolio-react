import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    margin: 0,
    width: "50%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },

  header: {
    width: "100%",
    color: "#0b0b45",
    fontFamily: "Raleway sanSerif",
    fontSize: 50,
  },

  jobTitle: {
    width: "100%",
    color: "#000",
    fontSize: 25,
  },
}));

const Greeting = ({ text, jobTitle }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <h1 className={classes.header}>{text}</h1>
      <p className={classes.jobTitle}>A Professional {jobTitle}</p>
    </Box>
  );
};

export default Greeting;
