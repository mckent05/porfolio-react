import React from "react";
import { Link } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import { GitHub, VisibilityOutlined } from "@mui/icons-material";

const ProjectLinks = ({ liveLink, githubLink }) => {
  return (
    <Box>
      <Link to={liveLink}>
        <IconButton>
          <VisibilityOutlined />
        </IconButton>
      </Link>
      <Link to={githubLink}>
        <IconButton>
          <GitHub />
        </IconButton>
      </Link>
    </Box>
  );
};

export default ProjectLinks;
