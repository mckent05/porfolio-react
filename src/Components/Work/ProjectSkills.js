import React from 'react'
import { Box, Typography} from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#fff',
        border: '1px solid #0b0b45',
        borderRadius: '4px',
        order: 1,
        boxShadow: '0 2px 7px grey',
        [theme.breakpoints.up('lg')]: {
          order: 2
        }
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