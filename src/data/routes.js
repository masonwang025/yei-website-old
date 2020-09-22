// Page components
import Home from "../pages/Home";
import Team from "../pages/Team";
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
  { path: "/team", Component: Team, name: "Team" },
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

export const redirectRoutes = [
  {
    path: "/google",
    redirectLink: "https://www.google.com", // must have https:// or http://
  },
  {
    path: "/linkedin",
    redirectLink: "https://www.linkedin.com", // must have https:// or http://
  },
];

export default routes;
