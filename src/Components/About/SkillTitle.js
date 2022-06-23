import React from 'react'
import { Grid, Box, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => ({
  root: {
    width: '90%',
    '& .MuiTypography-root': {
      fontSize: '18px',
      fontWeight: 600
   }
  },
}))

const SkillTitle = ({skillName}) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
        <Typography className={classes.text}> {skillName}</Typography>
    </Box>
  )
}

export default SkillTitle