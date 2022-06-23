import React from "react";
import { useStyles } from "../../styles";
import {
    Grid,
    Button,
  } from "@mui/material";

const FilterBtn = ({ title }) => {
  const classes = useStyles()
  return (
    <Grid className={classes.btnCont}>
      <Button
        type="button"
        className={classes.FilterBtn}
        variant="contained"
        size="small"
      >
        {title}
      </Button>
    </Grid>
  );
};

export default FilterBtn;