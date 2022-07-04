import React from "react";
import { Box, IconButton } from "@mui/material";
import { makeStyles  } from "@mui/styles";
import { GitHub, VisibilityOutlined } from "@mui/icons-material";
import "../App.css"

const useStyles = makeStyles(() => ({
  link: {
    position: 'relative',
    width: '40%',
    display: 'flex',
    '&:nth-of-type(1)': {
      justifyContent: 'flex-end'
    },
    "&:nth-of-type(2)": {
      justifyContent: 'flex-start'
    }
  },
  icon: {
    transform: 'scale(1.3)',
    color: '#fff',
  }
}))

const ProjectLinks = ({ liveLink, githubLink }) => {
  const classes = useStyles()
  return (
    <Box className= 'link-container'>
      <a className={classes.link} href={liveLink} target='_blank' rel="noreferrer">
        <IconButton>
          <VisibilityOutlined className={classes.icon} />
        </IconButton>
      </a>
      <a className={classes.link}  href={githubLink} target='_blank'  rel="noreferrer">
        <IconButton>
          <GitHub className={classes.icon} />
        </IconButton>
      </a>
    </Box>
  );
};

export default ProjectLinks;
