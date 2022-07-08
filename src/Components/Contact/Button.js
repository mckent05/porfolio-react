import React from "react";
import { makeStyles } from "@mui/styles";
import { IconButton } from "@mui/material";
import { GitHub, Twitter } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '30%',
    margin: '0 auto',
    backgroundColor: '#0b0b45',
    color: '#fff',
    textDecoration: 'none',
    textTransform: 'capitalize',
    borderRadius: 5,
    '&:hover': {
      color: '#0b0b45',
      backgroundColor: '#fff',
    },
    [theme.breakpoints.up('lg')]: {
      width: '20%'
    }
  },

  cont: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent:'space-around',
    alignItems: 'center',
    fontFamily: 'Source Sans Pro san-serif',
  }
}));

const Input = ({ title, link }) => {
  const classes = useStyles()
  return (
    <a className={classes.root} href={link} rel="noreferrer" target="_blank">
      <span className={classes.cont}>
        <p>{title}</p>
        {title === "gitHub" ? (
          <IconButton>
            <GitHub />
          </IconButton>
        ) : (
          <IconButton>
            <Twitter />
          </IconButton>
        )}
      </span>
    </a>
  );
};

export default Input;
