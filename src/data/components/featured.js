import React from "react";
import SpeakerSlider from "../../components/home/subcomponents/SpeakerSlider";

const featured = [
  {
    title: "EconBowl",
    description:
      "YEI’s Fall Competition, students compete in teams of 3 or 4 for a $1500 Prize Pool.  Competition consists of a Written Exam and Quiz Bowl Rounds. Presented with the Wen & Yung Family Foundation.",
    path: "/events/econbowl",
    imgURL:
      "https://res.cloudinary.com/masonwang/image/upload/v1602113541/yei-website/logos/econbowl-white.png",
  },
  {
    title: "EconOlympiad",
    description:
      "YEI’s Flagship Competition takes place every Spring.  Students compete in small teams to create comprehensive solutions and answer open ended questions. Exclusively available to YEI Members.",
    path: "/events/econolympiad",
    imgURL:
      "https://res.cloudinary.com/masonwang/image/upload/v1602017056/yei-website/logos/econolympiad.png",
  },
  {
    title: "EconTalks",
    description:
      "YEI offers public, free speaker events and workshops featuring industry professionals, professors at prestigious universities, business leaders, and policymakers.",
    path: "/events/econtalks",
    imgURL:
      "https://res.cloudinary.com/masonwang/image/upload/v1604989955/yei-website/logos/econtalks-white.png",
    component: <SpeakerSlider />,
  },
  {
    title: "FLIP",
    description:
      "YEI’s Financial Literacy Introduction Program (FLIP) is the service arm of our organization.  Through FLIP, our members are empowered to educate their community on Financial Literacy with our comprehensive curriculum and support network.",
    path: "/programs/flip",
    imgURL:
      "https://res.cloudinary.com/masonwang/image/upload/v1602017056/yei-website/logos/flip.png",
  },
  {
    title: "EARN",
    description:
      "YEI’s EARN program connects students with research and internship opportunities in finance, economics, and business, through a singular centralized application.",
    path: "/programs/earn",
    imgURL:
      "https://res.cloudinary.com/masonwang/image/upload/v1604989897/yei-website/logos/earn-white.png",
  },
  {
    title: "SELC/WELC",
    description:
      "Every Summer and Winter, YEI hosts a leadership conference to help our student leaders and outstanding staff members network, gain valuable leadership experience, and get the up to date information on YEI Programs.",
    path: "/events",
  },
];

export default featured;
