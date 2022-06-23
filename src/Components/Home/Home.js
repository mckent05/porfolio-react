import React from 'react'
import { Grid, Box } from '@mui/material'
import { makeStyles } from "@mui/styles"
import Greeting from './Greeting'
import TechImage from './TechImage'
import img from "../../Images/Javascript.png"
import img2 from "../../Images/python.png"
import img3 from "../../Images/rails.jpg"
import img4 from "../../Images/react.png"

const useStyles = makeStyles(() => ({
  techImage: {
    width: '100%',
  },
  js: {
    position: 'absolute',
    top: '20%',
    display: 'none'
  }


}))

const Home = ({name, jobTitle}) => {
  const classes = useStyles()

  return (
    <Grid container id="Home">
        <Box className={classes.techImage}>
          <TechImage img={img} />
          <TechImage img={img2} />
          <TechImage img={img3} />
          <TechImage img={img4} />
        </Box>
        <Greeting text={`Hi! I am ${name}`} jobTitle={jobTitle} />
    </Grid>
  )
}

export default Home