import { ListItem, ListItemText } from "@mui/material";
import React from "react";
import Links from "../Links";

const MobileLink = ({ linkName, control, handle, activeLink, index }) => {
  return (
    <ListItem onClick={() => control()}>
      <ListItemText>
        <Links
          linkName={linkName}
          index={index}
          handle={handle}
          activeLink={activeLink}
        />
      </ListItemText>
    </ListItem>
  );
};

export default MobileLink;
