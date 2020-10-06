import React, { useState } from "react";
import { List, ListItem, ListItemText, Collapse } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function NestedListNav({
  currPath,
  route,
  classes,
  setDrawerOpen,
}) {
  const [nestedOpen, setNestedOpen] = useState(currPath.startsWith(route.path));

  return (
    <div>
      <ListItem
        button
        onClick={() => setNestedOpen(!nestedOpen)}
        className={`${classes.listItem} ${
          currPath.startsWith(route.path) && !nestedOpen && "active"
        }`}
      >
        <ListItemText primary={route.name} />
        {nestedOpen ? <ExpandLess /> : <ExpandMore />}
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
