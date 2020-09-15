import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const events = [
  {
    title: "EconBowl",
    content:
      "EconBowl takes place annually, every Fall.  Students compete, in teams of 3-4, for two rounds, one Written Examination and one Quiz Bowl round for over $1500 in prizes. YEI’s EconBowl, allows students who are exploring an interest in economics, to apply their knowledge to help build a stronger network and win prizes and awards.  This day long competition is free and open to all students ages 13-18.",
    ctaBtn: (
      <Link to="/events/econbowl">
        <Button aria-label="button" variant="contained" color="secondary">
          Learn More
        </Button>
      </Link>
    ),
    imgURL:
      "https://res.cloudinary.com/masonwang/image/upload/v1600056211/yei-website/home/econbowl.png",
  },
  {
    title: "EconOlympiad",
    content:
      "YEI’s flagship competition, EconOlympiad, gives students the opportunity to apply what they’ve learned in a critical thinking and application focused environment. Over 3 weeks, students work to answer free response questions and create complex and in-depth solutions to economic problems in the fields of Macroeconomics, Microeconomics, and Global Trade. EconOlympiad is exclusively available to members of YEI EconClubs and takes place every spring.  ",
    ctaBtn: (
      <Link to="/events/econolympiad">
        <Button aria-label="button" variant="contained" color="secondary">
          Learn More
        </Button>
      </Link>
    ),
  },
  {
    title: "EconTalks",
    content:
      "Every year, YEI invites dozens of leading economists, professors, industry professionals, and business and political leaders to give talks.  Students have an opportunity to gain valuable insight and build a stronger understanding of economics through these workshops and talks.  YEI EconTalks are open to the public and 100% free.  Past Speakers have included professors at NYU & UPenn, senior executives at Fortune 500 companies, business owners, and policymakers.",
    ctaBtn: (
      <Link to="/events/econtalks">
        <Button aria-label="button" variant="contained" color="secondary">
          Learn More
        </Button>
      </Link>
    ),
    imgURL:
      "https://res.cloudinary.com/masonwang/image/upload/v1600147890/yei-website/home/speakers.jpg",
    firstOnDesktop: true,
  },
  {
    title: "Summer & Winter Economics Leadership Conferences",
    content:
      "YEI’s hosts two leadership conferences every year, one in the Summer and the other in the Winter.  Each conference offers our student leaders the opportunity to connect with other motivated students in the YEI family, attend leadership workshops from industry professionals, and better understand YEI and the resources we offer.  SELC & WELC are also home to our Semi Annual Keynotes which outline new opportunities and initiatives YEI is launching.",
    ctaBtn: (
      <a
        href="https://www.youtube.com/watch?v=sRZ1_yXDw7Q&feature=youtu.be"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button aria-label="button" variant="contained" color="secondary">
          Watch SELC 2020
        </Button>
      </a>
    ),
  },
  {
    title: "Career Exploration Conferences",
    content:
      "YEI Career Exploration Conferences offer members to connect with professionals and professors to build stronger networks and foster meaningful relationships. Through Career Exploration Conferences, students are able to better understand the professional world and develop a strong idea of the pathways they have to future careers in economics, business, and finance.",
  },
];

export default events;
