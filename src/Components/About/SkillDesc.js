import React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => ({
  root: {
    width: '90%',
    '& .MuiTypography-root': {
       fontSize: '13px',
       color: 'grey'
    }
  },
}))

const SkillDesc = ({skillDesc}) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
        <Typography className={classes.text}>{skillDesc}</Typography>
    </Box>
  )
}

export default SkillDesc