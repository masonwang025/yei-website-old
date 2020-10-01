import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  darkMode: {
    color: "white",
    backgroundColor: theme.palette.secondary.brighter,
  },
  appNumbers: {
    background: theme.palette.secondary.main,
    border: `100% solid ${theme.palette.secondary.main}`,
    borderRadius: "50%",
    MozBorderRadius: "50%",
    WebkitBorderRadius: "50%",
    display: "inline-block",
    fontWeight: "bold",
    lineHeight: "45px",
    fontSize: "0.95em",
    marginRight: "6.9px",
    textAlign: "center",
    color: "white",
    width: "45px",
  },
}));

export default useStyles;
