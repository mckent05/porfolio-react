import React from 'react'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
}))

const ProjectImage = ({img}) => {

    const classes = useStyles()
    
  return (
    <Box>
        <img src={img} alt='project-img' />
    </Box>
  )
}

export default ProjectImage