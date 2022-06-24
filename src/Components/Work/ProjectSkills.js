import React from 'react'
import { Box, Typography} from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#fff',
        border: '1px solid #0b0b45',
        borderRadius: '4px',
        boxShadow: '0 2px 7px grey'
    }
}))

const ProjectSkills = ({ skills }) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
        <Typography>{skills.join('/')}</Typography>
    </Box>
  )
}

export default ProjectSkills