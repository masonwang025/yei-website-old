import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  light: {
    backgroundColor: theme.palette.white.secondary,
  },
  sectionContainer: {
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      "& > *": {
        textAlign: "center !important",
      },
    },
  },
  forceCenter: {
    alignItems: "center",
    "& > *": {
      textAlign: "center",
    },
  },
  image: {
    width: "75%",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "65%",
    },
  },
}));

export default useStyles;
