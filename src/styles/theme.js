import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  shadows: ["none"],
  palette: {
    primary: {
      main: "#279361",
    },
    secondary: {
      main: "#174A5A",
      darkest: "#0d242b",
    },
    text: {
      primary: "#0d242b",
    },
    background: { default: "#f7f5f5" },
  },
});

export default theme;
