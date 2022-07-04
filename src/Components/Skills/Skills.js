import React from 'react'
import { Box } from '@mui/material'
import TechSkill from "./TechSkill"

const Skills = ({ skills }) => {
  return (
    <Box>
        <Box>
            {
                skills.map((skill) => (<TechSkill image={skill.logo} techName={skill.name} />))
            }
        </Box>
        <h3></h3>
    </Box>
  )
}

export default Skills