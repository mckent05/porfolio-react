import { ListItem, ListItemText } from "@mui/material";
import  { makeStyles } from "@mui/styles"
import React from "react";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  link: {
    color: '#0b0b45',
    fontSize: 23,
    textDecoration: "none",
    textTransform: "capitalize",
    cursor: "pointer",
    paddingBottom: 8,
    fontWeight: 800
  },
}))

const MobileLink = ({ linkName, control }) => {
  const classes = useStyles()
  return (
    <ListItem>
      <ListItemText>
      <Link
        to={`${linkName}`}
        spy={true}
        smooth={true}
        onClick={() => control() }
        className={classes.link}
      >
        {" "}
        {linkName}
      </Link>
      </ListItemText>
    </ListItem>
  );
};

export default MobileLink;
