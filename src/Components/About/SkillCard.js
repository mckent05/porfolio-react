import React from 'react'
import { Grid, Box } from "@mui/material"
import { makeStyles } from "@mui/styles"
import SkillImage from "./SkillImage"
import SkillTitle from "./SkillTitle"
import SkillDesc from "./SkillDesc"

const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
        width: '25%',
        display: 'flex',
        padding: '12px 0',
        borderRadius: 8,
        flexDirection: 'column',
        rowGap: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.5s',
        "&:hover": {
            boxShadow: '0 1px 8px grey',
            transform: 'scale(1.02)'
        }
    }
}))

const SkillCard = ({img, name, desc}) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
        <SkillImage image={img} />
        <SkillTitle skillName={name} />
        <SkillDesc skillDesc={desc} />
    </Box>
  )
}

export default SkillCard