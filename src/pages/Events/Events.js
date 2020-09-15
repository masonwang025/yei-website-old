import React from "react";
import Page from "../../components/Page";
import { Helmet } from "react-helmet";
import EventsSection from "../../components/events/EventsSection";
import useStyles from "../../styles/pages/eventsStyles";
import events from "../../data/eventsSections";
import EventsHero from "../../components/events/EventsHero";

export default function Events() {
  const classes = useStyles();
  return (
    <Page>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Events - The Youth Economics Initiative</title>
      </Helmet>
      <EventsHero classes={classes} />
      <div id="events-sections"></div>
      {events.map((event, index) => (
        <EventsSection
          key={index}
          classes={classes}
          title={event.title}
          content={event.content}
          ctaBtn={event.ctaBtn}
          darkerBg={index % 2 !== 0}
        />
      ))}
    </Page>
  );
}
