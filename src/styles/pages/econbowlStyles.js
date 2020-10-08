import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heroBlack: {
    color: "white",
    overflow: "hidden",
    position: "relative",
    background: "#232323cc",
    "&::before": {
      content: '""',
      height: "100%",
      width: "100%",
      bottom: 0,
      left: 0,
      position: "absolute",
      display: "block",
      background: `#101B27 url(https://res.cloudinary.com/masonwang/image/upload/v1600185246/yei-website/home/hero.png)`,
      backgroundPosition: "50% 50%",
      zIndex: -1,
      backgroundSize: "cover",
    },
  },
  blackMode: {
    color: "white",
    backgroundColor: theme.palette.secondary.black,
  },
  darkMode: {
    color: "white",
    backgroundColor: theme.palette.secondary.brighter,
  },
  lightMode: {
    backgroundColor: theme.palette.white.dark,
  },
  heroLogo: {
    width: "100%",
  },
  mobileFull: {
    [theme.breakpoints.down("xs")]: {
      minHeight: "calc(100vh - 56px)",
    },
  },
  dark: {
    color: theme.palette.secondary.darkest,
  },
  darkGreen: {
    color: "rgb(27, 102, 67)",
  },
  econbowlSpeaker: {
    borderRadius: "13%",
  },
  econbowlRecap: {
    background: theme.palette.secondary.darkest,
    borderRadius: "2px",
    boxShadow: "0 0 25px rgba(0, 0, 0, 0.25)",
    width: "725px",
    height: "408px",
    [theme.breakpoints.down("lg")]: {
      width: "699px",
      height: "393px",
    },
    [theme.breakpoints.down("md")]: {
      width: "640px",
      height: "360px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "525px",
      height: "295px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "300px",
      height: "169px",
    },
  },
  econbowlHeroLogo: {
    maxWidth: "100%",
  },
  econbowlSupporter: {
    marginTop: "-10px",
    width: "100%",

    [theme.breakpoints.up("md")]: {
      paddingBottom: 36,
    },
  },
  econbowlProspectusLogo: {
    width: "100%",
    boxShadow: "0 0 13px rgba(0, 0, 0, 0.25)",
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
}));

export default useStyles;
