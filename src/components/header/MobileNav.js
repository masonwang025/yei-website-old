import React from "react";
import {
  IconButton,
  Hidden,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import routes from "../../data/routes/routes";
import { Link } from "react-router-dom";
import CallToActionButton from "./CallToActionButton";
import NestedListNav from "./NestedListNav";

export default function MobileNav({
  classes,
  currPath,
  drawerOpen,
  setDrawerOpen,
}) {
  return (
    <Hidden mdUp>
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

      <SwipeableDrawer
        anchor="right"
        open={drawerOpen}
        onOpen={() => setDrawerOpen(true)}
        onClose={() => setDrawerOpen(false)}
      >
        <div role="presentation" onKeyDown={() => setDrawerOpen(false)}>
          <List className={classes.list}>
            {routes.map((route, index) => {
              if (!route.dropRoutes && route.name)
                return (
                  <Link key={index + route.path} to={route.path}>
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
              else if (route.name)
                return (
                  <NestedListNav
                    key={route.path + index}
                    route={route}
                    classes={classes}
                    currPath={currPath}
                    setDrawerOpen={setDrawerOpen}
                  />
                );
              else return <span key={index}></span>;
            })}
          </List>
        </div>
        <Box mb={2}>
          <CallToActionButton classes={classes} />
        </Box>
      </SwipeableDrawer>
    </Hidden>
  );
}
