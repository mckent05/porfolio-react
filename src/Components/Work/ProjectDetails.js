import React from 'react'
import { Box, Typography } from '@mui/material'
import { makeStyles } from "@mui/styles"
import ProjectSkills from "./ProjectSkills"

const useStyles = makeStyles(() => ({
  root: {
      position: "relative",
      width: '50%',
      display: 'flex',
      flexDirection: "column",
      justifyContent: 'space-between',
  }
}))

const ProjectDetails = ({details}) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
        <Typography>{details}</Typography>
        <ProjectSkills />
    </Box>
  )
}

export default ProjectDetails