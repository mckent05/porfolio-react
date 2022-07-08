import React from "react";
import { Box, IconButton } from "@mui/material";
import { CopyrightRounded } from "@mui/icons-material";
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        display: 'flex',
        backgroundColor: "#0b0b45",
        flexDirection: 'column',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'space-around',
        [theme.breakpoints.up('lg')]: {
            width: "99.3vw",
            flexDirection: 'row',
            alignItems:'center'
        }
    },
    text: {
        fontSize: 22,
        color: "#fff"
    },
    copyright: {
        display: 'flex'
    }

}))

const Footer = () => {
  const classes= useStyles()
  return (
    <footer className={classes.root}>
      <p className={classes.text}>Akinlade Temitope A.</p>
      <Box className={classes.copyright}>
        <IconButton>
          <CopyrightRounded />
        </IconButton>
        <p className={classes.text}>All Rights Reserved 2022</p>
      </Box>
    </footer>
  );
};

export default Footer;
