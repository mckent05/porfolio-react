import React from "react";
import { Link } from "react-scroll";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    color: '#0b0b45',
    fontSize: 23,
    textDecoration: "none",
    textTransform: "capitalize",
    cursor: "pointer",
    paddingBottom: 8,
    transition: "all 0.5s",
    [theme.breakpoints.up('lg')] : {
      color: "#fff",
      "&:hover": {
        color: "#0b0b45"
      },
    }
  },
  active: {
    borderBottom: "2px solid #0b0b45",
  },
}));

const Links = ({ linkName, index, handle, activeLink }) => {
  const classes = useStyles();

  return (
    <div
      className={
        activeLink === index
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      <Link
        to={`${linkName}`}
        spy={true}
        smooth={true}
        offset={-50}
        onClick={() => handle(index)}
      >
        {" "}
        {linkName}
      </Link>
    </div>
  );
};

export default Links;
