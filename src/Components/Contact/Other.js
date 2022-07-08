import React from 'react'
import { Box } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        width: '100%',
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.up('lg')]: {
            width: '25%',
        }
    },
    title: {
        fontSize: 20,
    },
    contact: {
        fontSize: 22,
        fontFamily: 'Source Sans Pro san-serif',
        fontWeight: 800,
        color: "#0b0b45"
    }

}))

const Other = ({title, contact}) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.contact}>{contact}</p>
    </Box>
  )
}

export default Other