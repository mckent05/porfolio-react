import React, { useState, useEffect } from "react";
import { Drawer, List, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Menu, GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import MobileLink from "./MobileLink";


const useStyles = makeStyles(() => ({
  socialDiv: {
    width: '100%',
    display: 'flex',
  },
  navCont: {
    '& .MuiDrawer-root': {
      backgroundColor: 'black'
    }
  }
}))

const DrawerComponent = ({ social }) => {
  const classes = useStyles()
  const [links] = useState([
    "home",
    "services",
    "skills",
    "projects",
    "contact",
  ]);
  const [openDrawer, setOpenDrawer] = useState(false);

  const drawerControl = () => {
    setOpenDrawer(false);
  };

  useEffect(() => {
    console.log(openDrawer)
  }, [openDrawer])

  return (
    <div className={classes.navCont}>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {links.map((el) => (
            <MobileLink
              key={el}
              linkName={el}
              control={drawerControl}
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
      <IconButton onClick={() => setOpenDrawer(true)}>
        <Menu />
      </IconButton>
    </div>
  );
};

export default DrawerComponent;
