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
    white: {
      main: "#fff",
      secondary: "#fcfcfc",
      dark: "#eaeaea",
    },
    background: { default: "#f2f2f2" },
  },
  typography: {
    button: {
      fontSize: "1.1em",
    },
    h1: {
      userSelect: "none",
    },
    h2: {
      userSelect: "none",
    },
    h3: {
      fontSize: "2.625em",
      userSelect: "none",
    },
    h4: {
      fontSize: "2.21em",
      userSelect: "none",
    },
    h5: {
      fontSize: "2.05em",
      userSelect: "none",
    },
    h6: {
      userSelect: "none",
    },
    body1: {
      fontSize: 18.5,
    },
    body2: {
      fontSize: 16,
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
