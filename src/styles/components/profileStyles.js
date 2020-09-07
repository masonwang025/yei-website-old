import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
