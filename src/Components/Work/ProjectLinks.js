import React from 'react'
import { Link } from "react-router-dom"
import { Box, IconButton } from '@mui/material'

const ProjectLinks = ({liveLink, githubLink}) => {
  return (
    <Box>
        <Link to={liveLink}>
            <IconButton>

            </IconButton>
        </Link>
        <Link to={githubLink}>
            <IconButton>

            </IconButton>
        </Link>
    </Box>
  )
}

export default ProjectLinks