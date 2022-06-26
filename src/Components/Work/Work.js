import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "90%",
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: 15,
    [theme.breakpoints.up("lg")]: {
      flexWrap: "wrap",
      flexDirection: 'row',
      alignSelf: "center",
      columnGap: 15,
      rowGap: 15,
    },
  },
}));

const Work = () => {
  const classes = useStyles()
  return <Grid className={classes.root}>Work</Grid>
};

export default Work;
