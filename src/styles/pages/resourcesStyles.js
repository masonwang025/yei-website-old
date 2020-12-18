import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  darkMode: {
    color: "white",
    backgroundColor: theme.palette.secondary.brighter,
  },
  hero: {
    overflow: "hidden",
    position: "relative",
    background: "#ffffffdd",
    "&::before": {
      content: '""',
      height: "100%",
      width: "100%",
      bottom: 0,
      left: 0,
      position: "absolute",
      display: "block",
      background: `#283034 url(https://res.cloudinary.com/masonwang/image/upload/v1600127326/yei-website/page-bg/general-bg.jpg)`,
      backgroundPosition: "50% 50%",
      zIndex: -1,
      backgroundSize: "cover",
      filter: "blur(1.4px)",
    },
  },
  title: {
    fontSize: "4em",
  },
  image: {
    width: "100%",
    borderRadius: "25px",
    boxShadow: "0 0 11px rgba(33,33,33, .25)",
  },
  heroText: {
    fontSize: 26,
    [theme.breakpoints.down("md")]: {
      fontSize: 22,
    },
  },
  firstOrder: {
    [theme.breakpoints.up("md")]: {
      order: 0,
    },
  },
  secondOrder: {
    [theme.breakpoints.up("md")]: {
      order: 10,
    },
  },
  darkerBg: {
    background: theme.palette.white.dark,
  },
}));

export default useStyles;
