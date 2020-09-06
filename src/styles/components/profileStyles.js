import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: "125px",
    height: "125px",
  },
  name: {
    fontWeight: "600",
    color: theme.palette.secondary.dark,
  },
  chip: {
    marginTop: "0.21em",
    marginRight: "0.21em",
    color: theme.palette.secondary.dark,
  },
}));

export default useStyles;
