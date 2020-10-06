import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Container,
  Fab,
  Zoom,
} from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Link, useLocation } from "react-router-dom";
import useStyles from "../../styles/components/headerStyles.js";
import { Image } from "cloudinary-react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();
  const currPath = useLocation().pathname;

  return (
    <React.Fragment>
      <AppBar id="appbar" className={classes.navbar} elevation={3}>
        <Container fixed>
          <Toolbar disableGutters>
            <div className={classes.title}>
              <Link to="/">
                <Image
                  alt="YEI - Youth Economics Initiative"
                  cloudName="masonwang"
                  publicId="https://res.cloudinary.com/masonwang/image/upload/v1599113467/yei-website/yeilogo-full.png"
                  height={36}
                  style={{ marginBottom: "-5px" }}
                  className={classes.logoImg}
                />
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

function BackTop() {
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
