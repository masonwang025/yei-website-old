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
      background: `#283034 url(https://res.cloudinary.com/masonwang/image/upload/v1600099757/yei-website/programs/hero.jpg)`,
      backgroundPosition: "50% 50%",
      zIndex: -1,
      backgroundSize: "cover",
      filter: "blur(1.4px)",
    },
  },
  title: {
    color: theme.palette.secondary.dark,
  },
  subtitle: {
    color: theme.palette.secondary.dark,
    fontSize: "1.42em",
  },
  heroImg: {
    width: "100%",
  },
  image: {
    width: "calc(100% - 26px)",
    boxShadow: "-13px 13px #0d242aaa, 13px -13px #279361aa",
  },
  image2: {
    width: "calc(100% - 26px)",
    boxShadow: "-13px -13px #279361aa, 13px 13px #0d242aaa",
  },
  appNumbers: {
    background: theme.palette.secondary.main,
    border: `100% solid ${theme.palette.secondary.main}`,
    borderRadius: "50%",
    MozBorderRadius: "50%",
    WebkitBorderRadius: "50%",
    display: "inline-block",
    fontWeight: "bold",
    lineHeight: "55px",
    textAlign: "center",
    fontSize: "1.69em",
    color: "white",
    width: "55px",
  },
  flipBg: {
    backgroundColor: "white",
  },
  candidateHeader: {
    backgroundColor: theme.palette.primary.main,
    display: "inline-block",
    padding: "2px 14.2px 2px 9px",
    borderRadius: "13px",
    color: "white",
  },
  candidateNumber: {
    backgroundColor: theme.palette.primary.dark,
    borderRadius: "50%",
    MozBorderRadius: "50%",
    WebkitBorderRadius: "50%",
    display: "inline-block",
    fontWeight: "bold",
    lineHeight: "36px",
    textAlign: "center",
    width: "36px",
  },
}));

export default useStyles;
