import React from "react";
import { Grid, FormControl, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const Input = ({ ariaLabel, label, name, type }) => {

  return (
    <Grid>
      <FormControl margin="normal" required>
        <TextField
          aria-label={ariaLabel}
          label={label}
          name={name}
          type={type}
          required
        />
      </FormControl>
    </Grid>
  );
};

export default Input;
