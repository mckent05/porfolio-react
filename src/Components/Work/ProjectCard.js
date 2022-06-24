import React from 'react'
import { Box } from "@mui/material"
import { makeStyles } from "@mui/styles"
import ProjectDetails from "./ProjectDetails"
import ProjectImage from "./ProjectImage"


const useStyles = makeStyles(() => ({
    root: {
        position: "relative",
        width: '30%',
        display: 'flex',
        padding: '8px 6px',
        transition: "ease-in 0.5s",
        "&:hover": {
            transform: "scale(1.2)"
        }
    }
}))

const ProjectCard = () => {
    const classes = useStyles()
  return (
    <Box className={classes.root}>
        <ProjectDetails />
        <ProjectImage />
    </Box>
  )
}

export default ProjectCard