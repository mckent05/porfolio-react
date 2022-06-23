import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { makeStyles } from '@mui/styles'
import Portfolio from "./Components/Portfolio";
import "./App.css"

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    Width: '100vw',
  }

}))

function App() {
  return (
    <div className="App">
      <Portfolio />
    </div>
  );
}

export default App;
