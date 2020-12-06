import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  hero: {
    overflow: "hidden",
    position: "relative",
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
      background: `#012326 url(https://res.cloudinary.com/masonwang/image/upload/v1599092121/yei-website/page-bg/homepage-bg.jpg)`,
      backgroundPosition: "50% 50%",
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
    color: "white",
    fontSize: "4.4em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "4.2em",
      "& > br": {
        display: "none",
      },
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "3.2em",
    },
    fontWeight: "bold",
  },
  slogan: {
    color: "white",
    fontSize: "2.4em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.72em",
    },
  },
  ctaBtn: {
    fontSize: "1.25em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1em",
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
  featuredLogo: {
    width: "100%",
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
  about: {
    backgroundColor: theme.palette.white.secondary,
  },
  aboutHeading: {
    fontSize: "3.5em",
    [theme.breakpoints.down("md")]: {
      fontSize: "3em",
    },
  },
  aboutImage: {
    width: "100%",
    borderTopRightRadius: "4.2em",
    borderBottomLeftRadius: "4.2em",
    borderTopLeftRadius: "2.5px",
    borderBottomRightRadius: "2.5px",
  },
  asSeenOn: {
    backgroundColor: "#141a1c",
  },
  asSeenOnLogo: {
    transition: "0.2s ease-in-out",
    "&:hover": {
      filter: "grayscale(25%) brightness(1.5) !important",
    },
  },
  supporterLogo: {
    padding: "0 2em",
    width: "100%",
  },
  supporters: {
    background: theme.palette.white.dark,
  },
  partners: {
    marginTop: "-3vw",
    zIndex: 5,
    position: "relative",
    background: theme.palette.white.dark,
  },
  blackMode: {
    color: "white",
    backgroundColor: theme.palette.secondary.black,
  },
  slantUpLeft: {
    padding: "4.69em 0",
    marginTop: "-4vw",
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 4vw))",
  },
  whiteBg: {
    backgroundColor: "white",
    zIndex: 2,
    padding: "4.69em 0",
    marginTop: "-4vw",
    clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 4vw), 0 100%)",
  },
  speakerAvatar: {
    width: "166px !important",
    height: "166px !important",
  },
  slideItem: {
    textAlign: "center",
  },
}));

export default useStyles;
