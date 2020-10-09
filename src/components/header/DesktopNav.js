import React from "react";
import { Button, Hidden } from "@material-ui/core";
import routes from "../../data/routes";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import CallToActionButton from "./CallToActionButton";

export default function DesktopNav({ classes, currPath }) {
  return (
    <Hidden smDown>
      {routes.map((route) => {
        if (!route.dropRoutes)
          return (
            <Link to={route.path} key={route.path + route.name}>
              <Button
                aria-label={`navigate to ${route.name}`}
                disableRipple
                className={`${classes.navLink} navLink ${
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
              key={route.name + route.path}
              route={route}
              classes={classes}
              currPath={currPath}
            />
          );
      })}
      <CallToActionButton classes={classes} />
    </Hidden>
  );
}
