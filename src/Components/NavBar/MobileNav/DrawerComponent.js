import React, { useState } from "react";
import { Drawer, List, IconButton } from "@mui/material"
import { Menu } from "@mui/icons-material"
import MobileLink from "./MobileLink";

const DrawerComponent = () => {
  const [links] = useState(["Home", "About", "Projects", "Skills", "Contact"]);
  const [openDrawer, setOpenDrawer] = useState(false);

  const drawerControl = (() => {
    setOpenDrawer(false)
  })

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {links.map((el) => (
            <MobileLink key={el} linkName={el} control={drawerControl} />
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <Menu />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
