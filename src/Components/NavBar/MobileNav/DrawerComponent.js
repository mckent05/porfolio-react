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

  return (
    <div className={classes.navCont}>
      <Drawer PaperProps= {{
        sx: {
          backgroundColor: '#f2f2f2',
          color: "#0b0b45",
          width: '50%',
          display: 'flex',
          flexDirection:'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }
      }} open={openDrawer} onClose={() => setOpenDrawer(false)}>
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
