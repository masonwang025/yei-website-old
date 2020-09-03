import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  shadows: ["none"],
  palette: {
    primary: {
      main: "#279361",
      darker: "#208556",
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
  typography: {
    h1: {
      userSelect: "none",
    },
    h2: {
      userSelect: "none",
    },
    h3: {
      fontSize: "2.8em",
      userSelect: "none",
    },
    h4: {
      userSelect: "none",
    },
    h5: {
      userSelect: "none",
    },
    h6: {
      userSelect: "none",
    },
    body1: {
      fontSize: 18.5,
    },
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default theme;
