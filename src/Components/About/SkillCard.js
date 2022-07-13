import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SkillImage from "./SkillImage";
import SkillTitle from "./SkillTitle";
import SkillDesc from "./SkillDesc";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    display: "flex",
    padding: "12px 0",
    borderRadius: 8,
    flexDirection: "column",
    rowGap: 10,
    justifyContent: "space-between",
    alignItems: "center",
    transition: "all 0.5s",
    "&:hover": {
      transform: "scale(1.02)",
    },
    [theme.breakpoints.up("lg")]: {
      width: "25%",
    },
  },
}));

const SkillCard = ({ img, name, desc }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root} component="article">
      <SkillImage image={img} />
      <SkillTitle skillName={name} />
      <SkillDesc skillDesc={desc} />
    </Box>
  );
};

export default SkillCard;
