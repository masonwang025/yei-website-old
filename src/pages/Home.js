import React, { useContext, useEffect } from "react";
import HomeHero from "../components/home/HomeHero";
import { Helmet } from "react-helmet";

import useStyles from "../styles/pages/homeStyles";
import HomeAsSeenOn from "../components/home/HomeAsSeenOn";
import HomeNumbers from "../components/home/HomeNumbers";
import OpenForm from "../components/clubs/OpenForm";
import HomeAbout from "../components/home/HomeAbout";
import HomeCtaModal from "../components/home/HomeCtaModal";
import HomeEconClubs from "../components/home/HomeEconClubs";
import HomeEventsAndIniatives from "../components/home/HomeEventsAndInitiatives";
import HomeSupporters from "../components/home/HomeSupporters";
import HomePartners from "../components/home/HomePartners";
import { CtaPopupContext } from "../contexts/CtaPopupContext";

export default function Home() {
  const classes = useStyles();

  const { popupShown, updatePopupShown, setOpen } = useContext(CtaPopupContext);

  useEffect(() => {
    if (!popupShown) {
      setTimeout(() => {
        setOpen(true);
        updatePopupShown(true);
      }, 3000);
    } else {
      setOpen(false);
    } // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Youth Economics Initiative (YEI) | Launchpad for Student Economists
        </title>
        <link rel="icon" href="../assets/favicon.ico" />
        <meta
          name="description"
          content="Exploring economics. Empowering leaders. Official page for the Youth Economics Intitiative (YEI)."
        />
      </Helmet>
      <OpenForm />
      <HomeHero classes={classes} />
      <HomeCtaModal />
      <HomeAbout classes={classes} />
      <HomeAsSeenOn classes={classes} />
      <HomeEconClubs classes={classes} />
      <HomeNumbers classes={classes} />
      <HomeEventsAndIniatives classes={classes} />
      <HomePartners classes={classes} />
      <HomeSupporters classes={classes} />
    </div>
  );
}
