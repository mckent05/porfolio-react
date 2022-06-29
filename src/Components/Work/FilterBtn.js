import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles(() => ({
  filterBtn: {
    backgroundColor: "#0b0b45",
    width: "20%",
    padding: "15px 0",
    borderRadius: 4,
    cursor: "pointer",
    color: "#fff",
    border: "none",
    outline: "none",
    display: "flex",
    transition: "ease-in 0.5s",
    "&:hover": {
      color: "#0b0b45",
      backgroundColor: "#fff",
      boxShadow: "2px 2px 8px grey",
    },
  },
}));

const FilterBtn = ({ title }) => {
  const classes = useStyles();
  return (
    <Box>
      <button type="button" className={classes.filterBtn}>
        {title}
      </button>
    </Box>
  );
};

export default FilterBtn;
