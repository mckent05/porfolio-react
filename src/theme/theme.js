import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  //   typography: {
  //     fontFamily: "Open Sans, sans-serif",
  //     fontSize: 14,
  //     button: {
  //       textTransform: "none",
  //       letterSpacing: 0,
  //       fontWeight: "bold"
  //     }
  //   },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold",
      },
    },
  },
  palette: {
    primary: { main: "#0b0b45" },
    secondary: { main: "#B0B0B0" },
  },
});
