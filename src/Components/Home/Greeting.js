import React from 'react'
import { Box, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    margin: 0,
    width: '50%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    "& .MuiTypography-root": {
      width: '100%',
      color: "#fff",
      fontSize: 50,
      fontFamily: 'Open Sans'
    },
  },

  jobTitle: {
    width: '100%',
    color: "#fff",
    fontSize: 25,
  }
}))

const Greeting = ({text, jobTitle}) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
        <Typography>{text}</Typography>
        <p className={classes.jobTitle}>A Professional {jobTitle}</p>
    </Box>
  )
}

export default Greeting