// Page components
import Home from "../pages/Home";
import Team from "../pages/About/Team";
import AdvisoryBoard from "../pages/About/AdvisoryBoard";
import Events from "../pages/Events/Events";
import EconTalks from "../pages/Events/EconTalks";
import EconBowl from "../pages/Events/EconBowl";
import EconOlympiad from "../pages/Events/EconOlympiad";
import Clubs from "../pages/Clubs/Clubs";
import CurrentClubs from "../pages/Clubs/CurrentClubs";
import Programs from "../pages/Programs";

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
    path: "/about",
    name: "About",
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
  { path: "/programs", Component: Programs, name: "Programs" },
];

export default routes;
