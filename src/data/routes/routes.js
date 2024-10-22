// Page components
import Home from "../../pages/Home";
import Team from "../../pages/About/Team";
import AdvisoryBoard from "../../pages/About/AdvisoryBoard";
import Events from "../../pages/Events/Events";
import EconTalks from "../../pages/Events/EconTalks";
import EconBowl from "../../pages/Events/EconBowl";
import EconOlympiad from "../../pages/Events/EconOlympiad";
import Clubs from "../../pages/Clubs/Clubs";
import CurrentClubs from "../../pages/Clubs/CurrentClubs";
import FLIP from "../../pages/Programs/FLIP";
import EARN from "../../pages/Programs/EARN";
import Resources from "../../pages/Resources";

const routes = [
  { path: "/", Component: Home, name: "Home" },
  {
    path: "/clubs",
    name: "EconClubs",
    dropRoutes: [
      { path: "/", Component: Clubs, name: "Overview" },
      {
        path: "/current-clubs",
        Component: CurrentClubs,
        name: "Current Clubs",
      },
    ],
  },
  {
    path: "/people",
    name: "People",
    dropRoutes: [
      { path: "/team", Component: Team, name: "Team" },
      {
        path: "/advisory-board",
        Component: AdvisoryBoard,
        name: "Advisory Board",
      },
    ],
  },
  {
    path: "/events",
    name: "Events",
    dropRoutes: [
      { path: "/", Component: Events, name: "Overview" },
      { path: "/econbowl", Component: EconBowl, name: "EconBowl" },
      { path: "/econolympiad", Component: EconOlympiad, name: "EconOlympiad" },
      {
        path: "/econtalks",
        Component: EconTalks,
        name: "EconTalks",
      },
    ],
  },
  {
    path: "/programs",
    name: "Programs",
    dropRoutes: [
      { path: "/flip", Component: FLIP, name: "FLIP" },
      { path: "/earn", Component: EARN, name: "EARN" },
    ],
  },
  { path: "/resources", Component: Resources, name: "Resources" },
];

export default routes;
