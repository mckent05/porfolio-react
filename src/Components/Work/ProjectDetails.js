import React from 'react'
import { Box, Typography } from '@mui/material'
import { makeStyles } from "@mui/styles"
import ProjectSkills from "./ProjectSkills"

const useStyles = makeStyles((theme) => ({
  root: {
      position: "relative",
      width: '90%',
      display: 'flex',
      alignItems: 'center',
      rowGap: 5,
      order: 2,
      height: '40%',
      flexDirection: "column",
      justifyContent: 'space-around',
      "& .MuiTypography-root": {
        order: 2
      },
      [theme.breakpoints.up('lg')]: {
        order: 1,
        "& .MuiTypography-root": {
          order: 1
        }
      },
     
  },
  title: {
    fontSize: 22,
    fontWeight: 800,
    textAlign: 'center',
    color: 'black',
    width: '100%',
    textTransform: 'capitalize'
  },
  details: {
    height: '80%',
    textAlign:'left',
    display: 'flex',
    alignItems: 'center',
  }

}))

const ProjectDetails = ({details, title, skills}) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
        <h1  className={classes.title}>{title}</h1>
        <p className={classes.details}>{details}</p>
        <ProjectSkills skills={skills}/>
    </Box>
  )
}

export default ProjectDetails