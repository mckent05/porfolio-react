import React from "react";
import { Box, Typography } from "@mui/material"
import { makeStyles} from "@mui/styles";
import Underline from "./Underline";

const useStyles = makeStyles(() => ({
    sectionHeader: {
        width: "100%",
        display: "flex",
        marginTop: 25,
        justifyContent: "center",
        alignItems: "center",
        columnGap: 10,
        "& .MuiTypography-root": {
          fontSize: 35,
          fontWeight: 800,
        },
    },
    text: {
        color: "#0b0b45",
    },
}))

const SectionHeader = ({text, spanText}) => {
  const classes = useStyles()
  return (
    <Box className={classes.sectionHeader}>
      <Underline />
      <Typography>
        {text} <span className={classes.text}>{spanText}</span>
      </Typography>
      <Underline />
    </Box>
  );
};

export default SectionHeader;
