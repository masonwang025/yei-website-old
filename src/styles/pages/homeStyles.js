import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  hero: {
    overflow: "hidden",
    position: "relative",
    background: "#f7f5f5dd",
    "&::before": {
      content: '""',
      height: "100%",
      width: "100%",
      bottom: 0,
      left: 0,
      position: "absolute",
      display: "block",
      background: `#D6DCE2 url(https://res.cloudinary.com/masonwang/image/upload/v1599092121/yei-website/page-bg/homepage-bg.jpg)`,
      backgroundPosition: "0% 25%",
      backgroundAttachment: "fixed",
      zIndex: -1,
      backgroundSize: "cover",
      filter: "blur(2.5px)",
    },
  },
  numbers: {
    color: "white",
    overflow: "hidden",
    position: "relative",
    background: "#174A5Add",
    "&::before": {
      content: '""',
      height: "100%",
      width: "100%",
      bottom: 0,
      left: 0,
      position: "absolute",
      display: "block",
      background: `#174A5A url(https://res.cloudinary.com/masonwang/image/upload/v1599092121/yei-website/page-bg/homepage-bg.jpg)`,
      backgroundPosition: "0% 25%",
      backgroundAttachment: "fixed",
      zIndex: -1,
      backgroundSize: "cover",
      filter: "blur(2.5px)",
    },
  },

  logoImg: {
    width: "500px",
    marginBottom: "5.5px",
    [theme.breakpoints.down("md")]: {
      width: "400px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  title: {
    [theme.breakpoints.up("md")]: {
      fontSize: "3em",
    },
    fontWeight: "bold",
  },
  slogan: {
    fontSize: "2em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.69em",
    },
  },
  ctaBtn: {
    fontSize: "1.25em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1em",
    },
  },
  heroGrid: {
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      "& > *": {
        textAlign: "center",
      },
    },
  },
  aboutContainer: {
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      "& > *": {
        textAlign: "center",
      },
    },
  },
  mainCta: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    "&:hover, &:focus, &:active": {
      backgroundColor: theme.palette.primary.darker,
    },
  },
}));

export default useStyles;
