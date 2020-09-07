import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundColor: "red",
  },
  sectionContainer: {
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      "& > *": {
        textAlign: "center",
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
