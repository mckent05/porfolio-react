import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Input from "./Input";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    width: "80%",
    height: '80vh',
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    alignItem: "center",
    justifyContent: "center",
    border: '2px solid red'
  },
  name: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  submitBtn: {
      backgroundColor: "#0b0b45",
      width: '30%',
      padding: "15px 0",
      borderRadius: 4,
      cursor: 'pointer',
      color: "#fff",
      fontSize: 20,
      border: 'none',
      outline: 'none',
      display: "flex",
      justifyContent: 'center',
      alignContent: 'center',
      alignSelf: 'center',
      transition: "ease-in 0.5s",
      "&:hover" : {
          color: "#0b0b45",
          backgroundColor: "#fff",
          boxShadow: "2px 2px 8px grey"

      }
  }
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <form className={classes.root}>
      <Box className={classes.name}>
        <Input
          ariaLabel="firstName"
          label="firstName"
          type="text"
          name="firstName"
        />
        <Input
          ariaLabel="secondName"
          label="secondName"
          type="text"
          name="secondName"
        />
      </Box>
      <Input
        ariaLabel="message"
        label="message"
        type="textfield"
        name="message"
      />
      <button type="submit" className={classes.submitBtn}>
      Send Message
    </button>
    </form>
  );
};

export default Contact;
