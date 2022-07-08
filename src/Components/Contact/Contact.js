import React from "react";
import { Box, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Other from "./Other";
import Button from "./Button";
import { Twitter, GitHub, LinkedIn } from "@mui/icons-material";
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "90%",
    height: "80vh",
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textLinks:{
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '40%',
    justifyContent:'space-between',
    [theme.breakpoints.up('lg')]: {
      flexDirection:'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 'auto'
    }
  },
  text: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.up('lg')]: {
     width: '40%'
    }
  },
  desc: {
    fontFamily: 'Source Sans Pro san-serif',
    color: "#0b0b45",
    fontSize: 22,
  },
  contactCont: {
    width: '100%',
    display: 'flex', 
    flexDirection: 'column',
    rowGap: 10,
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  },
  socialCont: {
    display: 'flex',
    width:'100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.up('lg')]: {
      width:'30%',
      justifyContent: 'space-around',
    }
  },
  header: {
    fontSize: 28,
  }
}));

const Contact = ({ contact }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.textLinks}>
        <Button title='gitHub' link={contact.gitHub}/>
        <Box className={classes.text}>
          <h1 className={classes.header}>Let's Collaborate</h1>
          <p className={classes.desc}>
            {" "}
            I thrive on using code to build new innovations and ensuring users
            have the best experience while using any of my software. Would you
            like us to build innovations for the future, contact me today ?{" "}
          </p>
        </Box>
        <Button title='twitter' link={contact.twitter} />
      </Box>
      <Box className={classes.contactCont}>
        <Other title='email:' contact='atemitope95@gmail.com' />
        <Other title='Phone no:' contact='+234 806 723 4915' />
        <Box className={classes.socialCont}>
          <p className={classes.desc}>Contact Me:</p>
          <Box className={classes.social}>
            <a rel="noreferrer" href={contact.twitter}>
              <IconButton>
                <Twitter />
              </IconButton>
            </a>
            <a rel="noreferrer" href={contact.linkedIn}>
              <IconButton>
                <LinkedIn />
              </IconButton>
            </a>
            <a rel="noreferrer" href={contact.gitHub}>
              <IconButton>
                <GitHub />
              </IconButton>
            </a>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Contact;
