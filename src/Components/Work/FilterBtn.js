import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles(() => ({
  filterBtn: {
    backgroundColor: "#0b0b45",
    padding: "7px 25px",
    textTransform: "capitalize",
    fontSize: 20,
    borderRadius: 4,
    cursor: "pointer",
    fontFamily: "Satisfy",
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
  active: {
    color: "#0b0b45",
    backgroundColor: "#fff",
    boxShadow: "2px 2px 8px grey",
  },
}));

const FilterBtn = ({ title, filter, active }) => {
  const classes = useStyles();
  return (
    <Box>
      <button
        onClick={() => filter(title)}
        type="button"
        className={
          active === title
            ? `${classes.filterBtn} ${classes.active}`
            : classes.filterBtn
        }
      >
        {title}
      </button>
    </Box>
  );
};

export default FilterBtn;
