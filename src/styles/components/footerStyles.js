import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.darkest,
    color: "white",
  },
  gridContainer: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      "& > *:first-child": {
        paddingBottom: "5.5px",
      },
    },
  },
  socialIcon: {
    color: "white",
  },
}));

export default useStyles;
