import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  link: {
    color: "#fff",
    fontSize: 23,
    textDecoration: "none",
    paddingBottom: 8,
    transition: "all 0.5s",
    "&:hover": {
      color: "#0b0b45",
    },
    "&.active": {
      borderBottom: "2px solid #0b0b45",
    }
  },
}));

const Links = ({ linkName, index }) => {
  const classes = useStyles();

  return (
    <div>
      <NavLink
        activeClass="active"
        className={classes.link}
        to={`${linkName}`}
      >
        {" "}
        {linkName}
      </NavLink>
    </div>
  );
};

export default Links;
