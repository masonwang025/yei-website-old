import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  darkerBg: {
    background: theme.palette.white.dark,
  },
  primary: {
    color: theme.palette.primary.main,
  },
  dark: {
    color: theme.palette.secondary.darkest,
  },
  speakerDate: {
    color: "#666",
  },
  avatar: {
    height: "169px",
    width: "169px",
  },
  econbowlHeroText: {
    fontSize: 23,
    [theme.breakpoints.down("md")]: {
      fontSize: 19,
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
  eventsHero: {
    overflow: "hidden",
    position: "relative",
    background: "#ffffffdd",
    minHeight: "calc(100vh - 64px)",
    [theme.breakpoints.down("md")]: {
      minHeight: "calc(100vh - 56px)",
    },
    "&::before": {
      content: '""',
      height: "100%",
      width: "100%",
      bottom: 0,
      left: 0,
      position: "absolute",
      display: "block",
      background: `#283034 url(https://res.cloudinary.com/masonwang/image/upload/v1600145196/yei-website/page-bg/events_bg.jpg)`,
      backgroundPosition: "50% 50%",
      zIndex: -1,
      backgroundSize: "cover",
      filter: "blur(1.4px)",
    },
  },
  eventsTitle: {
    color: theme.palette.secondary.dark,
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5em",
    },
  },
  eventsSubtitle: {
    color: theme.palette.secondary.dark,
    fontSize: "1.4em",
    [theme.breakpoints.down("md")]: {
      fontSize: 18,
    },
  },
  econbowlRecap: {
    background: theme.palette.secondary.darkest,
    borderRadius: "2px",
    boxShadow: "0 0 25px rgba(0, 0, 0, 0.25)",
    [theme.breakpoints.down("lg")]: {
      width: "690px",
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
  olympiadHero: {
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
      backgroundPosition: "50% 50%",
      zIndex: -1,
      backgroundSize: "cover",
      filter: "blur(2.5px)",
    },
  },
  olympiadTitle: {
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: "4.2em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.6em",
    },
  },
  olympiadSubtitle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.78em",
    },
  },
}));

export default useStyles;
