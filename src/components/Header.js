import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Button,
  Box,
  Container,
  Fab,
  Zoom,
  IconButton,
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import MenuIcon from "@material-ui/icons/Menu";
import routes from "../data/routes";
import { Link } from "react-router-dom";
import { useState } from "react";

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
  navLinks: {
    color: "white",
  },
  list: {
    width: 250,
    alignText: "center",
  },
  listItem: {
    color: "black",
  },
  backToTop: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function Header(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar elevation={0}>
        <Container>
          <Toolbar disableGutters>
            <Typography variant="h6" className={classes.title}>
              MUI Boilerplate
            </Typography>
            {/* for large */}
            <Hidden xsDown>
              {routes.map((route) => (
                <Link to={route.path} key={route.path + route.name}>
                  <Button className={classes.navLinks}>{route.name}</Button>
                </Link>
              ))}
            </Hidden>
            {/* for mobile */}
            <Hidden smUp>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                style={{ marginRight: 0 }}
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                elevation={0}
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <div
                  role="presentation"
                  onClick={() => setDrawerOpen(false)}
                  onKeyDown={() => setDrawerOpen(false)}
                >
                  <List className={classes.list}>
                    {routes.map((route) => (
                      <Link key={route.path} to={route.path}>
                        <ListItem className={classes.listItem} button>
                          <ListItemText primary={route.name} />
                        </ListItem>
                      </Link>
                    ))}
                  </List>
                </div>
              </Drawer>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="secondary" size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    const anchor = document.querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} className={classes.backToTop}>
        {children}
      </div>
    </Zoom>
  );
}
