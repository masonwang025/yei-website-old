import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
      backgroundPosition: "0% 25%",
      backgroundAttachment: "fixed",
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
