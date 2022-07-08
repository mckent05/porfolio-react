import { ListItem, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";

const MobileLink = ({ linkName, control }) => {
  return (
    <ListItem>
      <ListItemText>
      <Link
        to={`${linkName}`}
        spy={true}
        smooth={true}
        onClick={() => control() }
      >
        {" "}
        {linkName}
      </Link>
      </ListItemText>
    </ListItem>
  );
};

export default MobileLink;
