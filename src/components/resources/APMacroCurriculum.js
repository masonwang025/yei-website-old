import React from "react";
import ResourceSection from "./ResourceSection";

const lessonPlan = [
  { time: "Week 1", event: "Basic Economic Concepts" },
  { time: "Week 2", event: "Supply and Demand Model" },
  { time: "Week 3", event: "Discipline of Economic Systems Pt. 1" },
  { time: "Week 4", event: "Discipline of Economic Systems Pt. 2" },
  { time: "Week 5", event: "Introduction to Macroeconomics" },
  { time: "Week 6", event: "Inflation and CPI" },
  { time: "Week 7", event: "Introduction to Macroeconomics Advanced" },
  { time: "Week 8", event: "Introduction to Fiscal Policy" },
  { time: "Week 9", event: "Fiscal and Monetary Policy" },
  { time: "Week 10", event: "Fiscal and Monetary Policy Advanced" },
  { time: "Week 11", event: "Macroeconomics Reviewed" },
];

const sampleLinks = [
  {
    link:
      "https://docs.google.com/presentation/d/e/2PACX-1vThX7s_eHWcA93B2wjT42hyBUYKsLk30UTujrl0Kw2zqUayhdBWIepJ-KCvx57DyBE7uUmUvj9efs17/pub?start=false&loop=false&delayms=3000",
    text: "Chapter 1 Slides",
  },
  {
    link:
      "https://drive.google.com/file/d/1iGdQ6SPEUASLZvBQrQecz5HwnciPWdUg/view",
    text: "Chapter 1 Review",
  },
  {
    link:
      "https://create.kahoot.it/share/yei-macro-1/f5ef37f2-3a2c-4fe7-9601-947be2b11d84",
    text: "Chapter 1 Kahoot",
  },
  {
    link:
      "https://docs.google.com/document/d/1I0A0D2QCE-kRDrUvFljD82tCMdlou3rh1hPab6GVx1w/edit",
    text: "Chapter 1 Solutions",
  },
];

export default function APMacroCurriculum({ classes }) {
  return (
    <ResourceSection
      classes={classes}
      id="ap-macroeconomics"
      lessonPlan={lessonPlan}
      sampleLinks={sampleLinks}
      sampleImgURL="https://res.cloudinary.com/masonwang/image/upload/v1608259157/yei-website/resources/macro-chapter1-slide.png"
      title="11 Week Full AP Macroeconomics Curriculum"
      desc="Have you ever wondered what GDP is? You can learn that and more with the YEI AP Macroeconomics curriculum! By using our tailored AP slides and worksheets, you’ll learn economics at the AP level. There are 11 pre-made modules complete with slides, worksheets, interactive activities, and lesson plans to make studying and teaching macroeconomics easy! This course is designed to be taught over a semester."
    />
  );
}
