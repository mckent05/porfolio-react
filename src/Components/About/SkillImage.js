import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  imageCont: {
    position: "relative",
    width: "90%",
    height: "40vh",
    backgroundColor: "#fff",
  },
  img: {
    position: "relative",
    width: "100%",
    height: "100%",
    objectFit: "center",
    borderRadius: 10,
  },
}));

const SkillImage = ({ image }) => {
  const classes = useStyles();
  return (
    <Box className={classes.imageCont}>
      <img src={image} alt="img" className={classes.img} />
    </Box>
  );
};

export default SkillImage;
