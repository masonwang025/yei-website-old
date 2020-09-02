import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Button,
  Container,
  Fab,
  Zoom,
  IconButton,
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemText,
  MenuList,
  MenuItem,
  Paper,
  ClickAwayListener,
  Popper,
  Grow,
  Collapse,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import MenuIcon from "@material-ui/icons/Menu";
import routes from "../data/routes";
import { Link, useLocation } from "react-router-dom";
import useStyles from "../styles/components/headerStyles.js";

export default function Header(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();
  const currPath = useLocation().pathname;

  return (
    <React.Fragment>
      <AppBar className={classes.navbar} elevation={0}>
        <Container>
          <Toolbar disableGutters>
            <div className={classes.title}>
              <Link to="/">
                <img
                  src={require("../assets/logo.png")}
                  alt="YEI logo"
                  height="26.9px"
                  style={{ marginRight: "5px", marginBottom: "-5px" }}
                />
                <div style={{ display: "inline-block" }}>
                  <Typography variant="h6" className={classes.titleText}>
                    YEI
                  </Typography>
                </div>
              </Link>
            </div>
            <DesktopNav classes={classes} currPath={currPath} />
            <MobileNav
              classes={classes}
              currPath={currPath}
              drawerOpen={drawerOpen}
              setDrawerOpen={setDrawerOpen}
            />
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <BackTop classes={classes} {...props} />
    </React.Fragment>
  );
}

function BackTop(props) {
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
        <Fab color="secondary" size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Zoom>
  );
}

// NAVIGATION COMPONENTS
function DesktopNav({ classes, currPath }) {
  return (
    <Hidden xsDown>
      {routes.map((route) => {
        if (!route.dropRoutes)
          return (
            <Link to={route.path} key={route.path + route.name}>
              <Button
                className={`${classes.navLink} ${
                  currPath === route.path && "active"
                }`}
              >
                {route.name}
              </Button>
            </Link>
          );
        else
          return (
            <DropdownMenu
              key="dropdown-menu"
              route={route}
              classes={classes}
              currPath={currPath}
            />
          );
      })}
    </Hidden>
  );
}

function MobileNav({ classes, currPath, drawerOpen, setDrawerOpen }) {
  return (
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
        <div role="presentation" onKeyDown={() => setDrawerOpen(false)}>
          <List className={classes.list}>
            {routes.map((route) => {
              if (!route.dropRoutes)
                return (
                  <Link key={route.path} to={route.path}>
                    <ListItem
                      className={`${classes.listItem} ${
                        currPath === route.path && "active"
                      }`}
                      button
                      onClick={() => setDrawerOpen(false)}
                    >
                      <ListItemText primary={route.name} />
                    </ListItem>
                  </Link>
                );
              else
                return (
                  <NestedListNav
                    key="nested-list-nav"
                    route={route}
                    classes={classes}
                    currPath={currPath}
                    setDrawerOpen={setDrawerOpen}
                  />
                );
            })}
          </List>
        </div>
      </Drawer>
    </Hidden>
  );
}

function DropdownMenu({ route, classes, currPath }) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          className={`${classes.navLink} ${
            currPath.startsWith(route.path) && "active"
          }`}
        >
          {route.name}
          <ExpandMore />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    {route.dropRoutes.map((dropRoute) => (
                      <Link
                        to={route.path + dropRoute.path}
                        key={route.path + dropRoute.path + dropRoute.name}
                      >
                        <MenuItem
                          onClick={handleClose}
                          className={`${classes.listItem} ${
                            currPath === route.path + dropRoute.path && "active"
                          }`}
                        >
                          {dropRoute.name}
                        </MenuItem>
                      </Link>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

function NestedListNav({ currPath, route, classes, setDrawerOpen }) {
  const [nestedOpen, setNestedOpen] = useState(true);

  return (
    <div>
      <ListItem button onClick={() => setNestedOpen(!nestedOpen)}>
        {nestedOpen ? <ExpandLess /> : <ExpandMore />}
        <ListItemText style={{ paddingLeft: "7.5px" }} primary={route.name} />
      </ListItem>
      <Collapse in={nestedOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {route.dropRoutes.map((r) => (
            <Link key={route.path + r.path + r.name} to={route.path + r.path}>
              <ListItem
                className={`${classes.listItem} ${
                  currPath === route.path + r.path && "active"
                }`}
                button
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText
                  style={{ paddingLeft: "31px" }}
                  primary={r.name}
                />
              </ListItem>
            </Link>
          ))}
        </List>
      </Collapse>
    </div>
  );
}
