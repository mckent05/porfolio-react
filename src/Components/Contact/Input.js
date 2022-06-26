import React from "react";
import { Grid, FormControl, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  input: {
    position: "relative",
    width: '30vw',
    padding: 8
  },
  textField: {
    position: "relative",
    width: "100%",
  },
}));

const Input = ({ ariaLabel, label, name, type }) => {
  const classes = useStyles();
  return (
    <Grid>
      <FormControl margin="normal" required>
        <TextField
          aria-label={ariaLabel}
          label={label}
          name={name}
          type={type}
          required
          className={type === "textfield" ? classes.textField : classes.input}
        />
      </FormControl>
    </Grid>
  );
};

export default Input;
