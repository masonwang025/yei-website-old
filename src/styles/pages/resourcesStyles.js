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
    width: "calc(100% - 26px)",
    boxShadow: "-13px 13px #0d242aaa, 13px -13px #279361aa",
  },
  heroText: {
    fontSize: 26,
    [theme.breakpoints.down("md")]: {
      fontSize: 22,
    },
  },
  image2: {
    width: "calc(100% - 26px)",
    boxShadow: "-13px -13px #279361aa, 13px 13px #0d242aaa",
  },
}));

export default useStyles;
