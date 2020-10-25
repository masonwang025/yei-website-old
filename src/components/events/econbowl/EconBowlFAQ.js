import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

const faqs = [
  {
    q: "Does everyone on my team have to be from the same school or grade?",
    a:
      "Absolutely not. You can have people from different schools and different grade levels. ",
  },
  {
    q: "Can I register if I live outside of the U.S.?",
    a: "Yes! ",
  },
  {
    q: "Do I need to be a part of a YEI chapter to compete?",
    a: "Nope! Everyone is welcome.",
  },
  {
    q: "What is the cost to sign up?",
    a: "EconBowl is absolutely FREE to compete in. ",
  },
  {
    q: "When does registration close?",
    a: "Registration will close on November 1st at 11:59pm PDT. ",
  },
  {
    q: "Will it be online?",
    a:
      "Under normal circumstances, EconBowl would be in-person. However, it will be online this year due to the pandemic. Please make sure you have a zoom account. You will need to sign up with the email associated with your zoom account. ",
  },
  {
    q: "What do I need to compete?",
    a:
      "You'll need internet connection and Zoom installed on your computer (with a Zoom account). For the QuizBowl round, you'll need headphones/earbuds, and we suggest you also have a second device (e.g. phone).",
  },
  {
    q: "Do I have to have a zoom account to join?",
    a:
      "Yes -- please create one if you don't have one. In the sign up form, it’ll ask you for an email associated with your zoom account. We will be using the email you submit to assign breakout rooms. We will also send information about EconBowl to the same email so make sure it’s one you check often. ",
  },
  {
    q: "Any other questions, concerns, or feedback?",
    a: (
      <span>
        Email{" "}
        <a
          href="mailto:events@theyei.org"
          target="_blank"
          className="underline"
          rel="noopener noreferrer"
        >
          events@theyei.org
        </a>
      </span>
    ),
  },
];

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function EconBowlFAQ({ classes }) {
  const [expanded, setExpanded] = React.useState("panel0");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box pt={9.5} pb={9.5} className={classes.lightMode}>
      <Container>
        <Box mb={3}>
          <Typography align="center" variant="h3">
            FAQs
          </Typography>
        </Box>
        {faqs.map((faq, index) => (
          <Accordion
            key={faq + " " + index}
            expanded={expanded === "panel" + index}
            onChange={handleChange("panel" + index)}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>
                <b style={{ color: "#888" }}>Q: </b>
                {faq.q}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <b style={{ color: "#888" }}>A: </b>
                {faq.a}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
