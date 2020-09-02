import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  titleText: {
    color: theme.palette.secondary.dark,
  },
  navbar: {
    backgroundColor: "white",
    "&, button": {
      color: theme.palette.secondary.dark,
    },
  },
  navLink: {
    color: "white",
    fontSize: "1.2em",
    marginLeft: "0.42em",
    "&::before": {
      transition: "0.42s ease-in-out",
      backgroundColor: theme.palette.secondary.dark,
      content: '""',
      zIndex: -10,
      display: "block",
      bottom: "0",
      position: "absolute",
      height: "9%",
      width: "0",
      borderBottomLeftRadius: "4px",
      borderBottomRightRadius: "4px",
    },
    "&:hover": {
      backgroundColor: "inherit",
      "&::before": {
        width: "100%",
      },
    },
    "&> span.MuiTouchRipple-root": {
      display: "none",
    },
    "&.active": {
      color: theme.palette.secondary.darkest,
      fontWeight: "bold",
      "&::before": {
        width: "100%",
      },
    },
  },
  list: {
    width: 250,
    alignText: "center",
  },
  listItem: {
    color: "black",
    "&.active": {
      backgroundColor: theme.palette.action.selected,
    },
  },
  backToTop: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default useStyles;
