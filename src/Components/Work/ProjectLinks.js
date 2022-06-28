import React from "react";
import { Box, IconButton } from "@mui/material";
import { makeStyles  } from "@mui/styles";
import { GitHub, VisibilityOutlined } from "@mui/icons-material";

const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    top: 0,
    zIndex: 12,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}))

const ProjectLinks = ({ liveLink, githubLink }) => {
  return (
    <Box>
      <a href={liveLink} target='_blank' rel="noreferrer">
        <IconButton>
          <VisibilityOutlined />
        </IconButton>
      </a>
      <a href={githubLink} target='_blank'  rel="noreferrer">
        <IconButton>
          <GitHub />
        </IconButton>
      </a>
    </Box>
  );
};

export default ProjectLinks;
