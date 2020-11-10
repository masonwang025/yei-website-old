import React from "react";
import { Button, Hidden } from "@material-ui/core";
import routes from "../../data/routes/routes";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import CallToActionButton from "./CallToActionButton";

export default function DesktopNav({ classes, currPath }) {
  return (
    <Hidden smDown>
      {routes.map((route, index) => {
        if (!route.dropRoutes && route.name)
          return (
            <Link to={route.path} key={index + route.path + route.name}>
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
        else if (route.name)
          return (
            <DropdownMenu
              key={route.name + route.path + index}
              route={route}
              classes={classes}
              currPath={currPath}
            />
          );
        else return <span key={index}></span>;
      })}
      <CallToActionButton classes={classes} />
    </Hidden>
  );
}
