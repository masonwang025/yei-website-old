import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
      backgroundPosition: "0% 50%",
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
    fontSize: "1.5em",
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
    marginTop: "0.5em",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    paddingTop: "6.9px",
    background: theme.palette.secondary.main,
    border: `100% solid ${theme.palette.secondary.main}`,
    color: "white",
    textAlign: "center",
    fontSize: "1.5em",
    fontWeight: 800,
  },
  earnBg: {
    backgroundColor: "#efefef",
  },
  flipBg: {
    backgroundColor: "white",
  },
}));

export default useStyles;
