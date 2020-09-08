import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  hero: {
    width: "100%",
    position: "relative",
    background: theme.palette.white.dark,
  },
  heroContainer: {
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      "& > *": {
        textAlign: "center",
      },
    },
  },
  smallParagraph: {
    fontSize: "1.42em",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.269em",
    },
  },
  image: {
    maxWidth: "69%",
    [theme.breakpoints.up("lg")]: {
      maxHeight: "300px",
    },
    [theme.breakpoints.down("md")]: {
      width: "72%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "60%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "76.9%",
    },
  },
}));

export default useStyles;
