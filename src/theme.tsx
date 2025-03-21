import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: ['"Helvetica Neue"'].join(","),
  },
  palette: {
    primary: {
      main: "#232323",
    },
    secondary: {
      main: "#4f8e3e",
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
