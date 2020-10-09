import { Typography } from "@material-ui/core";
import React from "react";

const advisoryBoard = [
  {
    name: "George Bian",
    title: "Co-founder & Former CEO, YEI; Student, MIT",
    bio: "",
    imgURL: "",
  },
  {
    name: "Dhananjay (Dan) Gode",
    title: "Clinical Professor of Accounting, NYU Stern",
    bio: (
      <>
        <Typography variant="body1" gutterBottom>
          Dan Gode is the Clinical Professor of Accounting at the Stern School
          of Business at NYU. Before teaching at Stern, he taught at the William
          E. Simon Graduate School of Business in the University of Rochester.
          He teaches and consults extensively in the areas of business drivers,
          financial reporting and analysis, data analytics, modeling, and
          taxation. As of December 2019, he has taught 20 different courses with
          a total of 194 sections and 9,398 students at Stern. He has also
          taught in the Columbia EMBA program as a visiting faculty.
        </Typography>
        <Typography variant="body1" gutterBottom>
          He has been at Stern since 1998 and was voted “Professor of the Year”
          twice and has been nominated for the award seven times. In addition to
          winning the “Professor of the Year” award twice, he has won the
          Pedagogical Innovation Award at the Stern School of Business, New York
          University; Member of Club 6 (instructors whose ratings exceed 6 on 7)
          at Stern; and Member of the Dean's List of the Top Five instructors at
          the William E. Simon Graduate School of Business, University of
          Rochester.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Along with teaching at Stern, he also teaches training programs and
          consults extensively with corporations, investment banks, hedge funds,
          and private equity shops. Furthermore, he does research in economics,
          accounting, and finance and information systems. More specifically his
          interests are in accounting-based valuation, earnings forecasts,
          contracts, design of markets, and automated trading.
        </Typography>
      </>
    ),
    imgURL:
      "https://res.cloudinary.com/masonwang/image/upload/v1600135591/yei-website/speakers/dhanjanay-dan-gode.jpg",
  },
  {
    name: "J.D. Schramm",
    title:
      "Lecturer, Stanford University; Founder of the Mastery in Communication Initiative, Stanford’s Graduate School of Business, Author",
    bio: (
      <>
        <Typography variant="body1" gutterBottom>
          Dr. Schramm is a lecturer in organizational behavior at Stanford’s
          Graduate School of Business teaching popular communication courses. He
          joined their faculty in 2007. Before that, he was a part of Columbia
          University and NYU’s faculty as senior lecturer/faculty director and
          clinical associate professor respectively. In 2012, he co-founded the
          LOWKeynote program for students to create and deliver inspiring talks
          to enroll others in their vision to change lives, organizations, and
          the world. In 2019, he was also appointed the inaugural director of
          the King Global Leadership Program for Stanford’s Knight Hennessy
          Scholars. This february, he published his first book, Communicate with
          Mastery: Speak With Conviction and Write for Impact.
        </Typography>
        <Typography variant="body1" gutterBottom>
          He has also been a self-employed keynote speaker as well as
          communication consultant and coach for over 26 years. He has worked
          with leaders and firms in a wide variety of industries and spoken at
          large meetings with thousands of attendees. In 2011, he asked the
          audience to break the silence surrounding suicide and suicide attempts
          in his TED talk “Break the silence for suicide attempt survivors” that
          has also 2 million views on the TED website. In brief, he is a writer,
          educator, and communications coach.
        </Typography>
      </>
    ),
  },
];

export default advisoryBoard;
