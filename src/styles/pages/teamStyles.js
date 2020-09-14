import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  hero: {
    overflow: "hidden",
    position: "relative",
    background: "#293236dd",
    "&::before": {
      content: '""',
      height: "100%",
      width: "100%",
      bottom: 0,
      left: 0,
      position: "absolute",
      display: "block",
      background: `#283034 url(https://res.cloudinary.com/masonwang/image/upload/v1600117291/yei-website/page-bg/team-bg.png)`,
      backgroundPosition: "50% 0%",
      zIndex: -1,
      backgroundSize: "cover",
      filter: "blur(1px)",
    },
  },
  title: {
    color: "white",
  },
  subtitle: {
    color: "#eee",
    fontSize: "1.5em",
  },
  card: {
    backgroundColor: theme.palette.white.secondary,
  },
  avatar: {
    margin: "0 auto",
    width: "125px",
    height: "125px",
    [theme.breakpoints.down("xs")]: {
      width: "100px",
      height: "100px",
    },
    backgroundColor: theme.palette.secondary.dark,
  },
  name: {
    fontWeight: "600",
    color: theme.palette.secondary.dark,
  },
  chip: {
    marginTop: "0.21em",
    marginRight: "0.21em",
    color: theme.palette.secondary.dark,

    [theme.breakpoints.down("xs")]: {
      fontSize: "0.69em",
    },
  },
}));

export default useStyles;
