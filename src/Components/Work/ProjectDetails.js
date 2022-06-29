import React from 'react'
import { Box, Typography } from '@mui/material'
import { makeStyles } from "@mui/styles"
import ProjectSkills from "./ProjectSkills"

const useStyles = makeStyles((theme) => ({
  root: {
      position: "relative",
      width: '65%',
      display: 'flex',
      order: 2,
      flexDirection: "column",
      justifyContent: 'space-between',
      "& .MuiTypography-root": {
        order: 2
      },
      [theme.breakpoints.up('lg')]: {
        order: 1,
        "& .MuiTypography-root": {
          order: 1
        }
      },
     
  }
}))

const ProjectDetails = ({details, title, skills}) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
        <Typography>{title}</Typography>
        <Typography>{details}</Typography>
        <ProjectSkills skills={skills}/>
    </Box>
  )
}

export default ProjectDetails