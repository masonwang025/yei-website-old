import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#279361",
      darker: "#208556",
    },
    secondary: {
      main: "#293236",
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
      fontSize: "4.69em",
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
      fontSize: "1.42em",
      userSelect: "none",
    },
    body1: {
      fontSize: 19,
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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
