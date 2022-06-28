import React from 'react'
import { Box } from "@mui/material"
import { makeStyles } from "@mui/styles"
import ProjectDetails from "./ProjectDetails"
import ProjectImage from "./ProjectImage"


const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        width: "90%",
        display: 'flex',
        flexDirection: 'column',
        padding: '8px 6px',
        transition: "ease-in 0.5s",
        "&:hover": {
            transform: "scale(1.2)"
        },
        [theme.breakpoints.up('lg')] : {
            width: '30%',
            flexDirection: 'row',
        }
    }
}))

const ProjectCard = ({title, details, img, skills, live, github}) => {
    const classes = useStyles()
  return (
    <Box className={classes.root}>
        <ProjectDetails title={title} skills={skills} details={details}/>
        <ProjectImage image={img} liveLink={live} gitHubLink={github} />
    </Box>
  )
}

export default ProjectCard