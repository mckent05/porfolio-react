import React from 'react'
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => ({
    underline: {
        width: '15%',
        border: '1px solid #0b0b45'
      },
}))

const Underline = () => {
  const classes = useStyles()
  return (
    <div className={classes.underline} />
  )
}

export default Underline