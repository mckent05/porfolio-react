import React from 'react'
import { Box } from "@mui/material"
import TechImage from "../Home/TechImage"

const TechSkill = ({ image, techName }) => {
  return (
    <Box>
        <TechImage img={image} />
        <h3>{techName}</h3>
    </Box>
  )
}

export default TechSkill