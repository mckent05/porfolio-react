import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "90%",
    "& .MuiTypography-root": {
      fontSize: 15,
      color: "#0b0b45",
      fontFamily: 'Source Sans Pro sanSerif',
    },
  },
}));

const SkillDesc = ({ skillDesc }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.text}>{skillDesc}</Typography>
    </Box>
  );
};

export default SkillDesc;
