import React from "react";
import ResourceSection from "./ResourceSection";

const lessonPlan = [
  { time: "Week 1", event: "Basic Economic Concepts" },
  { time: "Week 2", event: "Supply and Demand Model" },
  { time: "Week 3", event: "Elasticity and Consumer Choice" },
  { time: "Week 4", event: "Cost of Production" },
  { time: "Week 5", event: "Perfect Competition" },
  { time: "Week 6", event: "Monopoly" },
  { time: "Week 7", event: "Imperfect Competition" },
  { time: "Week 8", event: "Resources Market with Applications to Labor" },
  {
    time: "Week 9",
    event: "Market Failure, Public/Private Goods, Social Efficiency",
  },
  { time: "Week 10", event: "Microeconomics Reviewed" },
  { time: "Week 11", event: "AP Exam Prep" },
];

const sampleLinks = [
  {
    link:
      "https://docs.google.com/presentation/d/e/2PACX-1vRRq65XqRVM4VcUGsl-HmI6G-DHR8B-wQajemrucE_XDSb06124Y3WSu3w7ow4rtOzLAHKlrgOpvyj3/pub?start=false&loop=false&delayms=3000",
    text: "Chapter 1 Slides",
  },
  {
    link:
      "https://drive.google.com/file/d/18-F7tn38j_azIqGRjwSAyWIGH5t2_NAS/view",
    text: "Chapter 1 Review",
  },
  {
    link:
      "https://create.kahoot.it/details/yei-micro-chapter-1/5eddb85f-5f66-46f6-a765-9f3f4905272e",
    text: "Chapter 1 Kahoot",
  },
  {
    link:
      "https://docs.google.com/document/d/1nCQSF-C6AqEztpnx4BWAQvyN1tEm5XB9zL0jAq_Gc-c/edit",
    text: "Chapter 1 Solutions",
  },
];

export default function APMicroCurriculum({ classes }) {
  return (
    <ResourceSection
      classes={classes}
      id="ap-microeconomics"
      lessonPlan={lessonPlan}
      sampleLinks={sampleLinks}
      darker
      sampleImgURL="https://res.cloudinary.com/masonwang/image/upload/v1608259157/yei-website/resources/micro-chapter1-slide.png"
      title="11 Week Full AP Microeconomics Curriculum"
      desc="Is Monopoly a board game or an economic concept? Use the YEI AP Microeconics curriculum to learn this and more! By using our tailored AP slides and worksheets, you’ll learn economics at the AP level. There are 11 pre-made modules complete with slides, worksheets, interactive activities, and lesson plans to make studying and teaching macroeconomics easy! This course is designed to be taught over a semester."
    />
  );
}
