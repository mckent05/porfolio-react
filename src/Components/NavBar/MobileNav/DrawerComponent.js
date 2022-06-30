import React, { useState } from "react";
import { Drawer, List, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Menu, GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import MobileLink from "./MobileLink";


const useStyles = makeStyles(() => ({
  socialDiv: {
    width: '100%',
    display: 'flex',
  }
}))

const DrawerComponent = ({ handle, activeLink, social }) => {
  const classes = useStyles()
  const [links] = useState([
    "home",
    "services",
    "projects",
    "skills",
    "contact",
  ]);
  const [openDrawer, setOpenDrawer] = useState(false);

  const drawerControl = () => {
    setOpenDrawer(false);
  };

  return (
    <div>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {links.map((el, index) => (
            <MobileLink
              key={el}
              linkName={el}
              control={drawerControl}
              handle={handle}
              activeLink={activeLink}
              index={index}
            />
          ))}
        </List>
        <div className={classes.socialDiv}>
          <a href={social.gitHub} target="_blank" rel="noreferrer">
            <IconButton>
              <GitHub />
            </IconButton>
          </a>
          <a href={social.linkedIn} target="_blank" rel="noreferrer">
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
          <a href={social.twitter} target="_blank" rel="noreferrer">
            <IconButton>
              <Twitter />
            </IconButton>
          </a>
        </div>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <Menu />
      </IconButton>
    </div>
  );
};

export default DrawerComponent;
