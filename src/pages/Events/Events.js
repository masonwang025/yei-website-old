import React from "react";
import Page from "../../components/Page";
import EventsSection from "../../components/events/EventsSection";
import useStyles from "../../styles/pages/eventsStyles";
import events from "../../data/components/eventsSections";
import EventsHero from "../../components/events/EventsHero";

export default function Events() {
  const classes = useStyles();
  return (
    <Page
      pageTitle="Events"
      desc="Youth Economics Initiative (YEI) offers a broad range of events, from competitions, to EconTalks, to socials and conferences."
    >
      <EventsHero classes={classes} />
      <div id="events"></div>
      {events.map((event, index) => (
        <EventsSection
          key={index}
          classes={classes}
          title={event.title}
          content={event.content}
          ctaBtn={event.ctaBtn}
          darkerBg={index % 2 !== 0}
          imgURL={event.imgURL}
          firstOnDesktop={event.firstOnDesktop}
        />
      ))}
    </Page>
  );
}
