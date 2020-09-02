// Page components
import Home from "../pages/Home";
import Team from "../pages/Team";
import Events from "../pages/Events/Events";
import SpeakerSeries from "../pages/Events/SpeakerSeries";
import EconBowl from "../pages/Events/EconBowl";
import EconOlympiad from "../pages/Events/EconOlympiad";
import Clubs from "../pages/Clubs/Clubs";
import CurrentClubs from "../pages/Clubs/CurrentClubs";
import Programs from "../pages/Programs";

const routes = [
  { path: "/", Component: Home, name: "Home" },
  { path: "/team", Component: Team, name: "Team" },
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
    path: "/events",
    name: "Events",
    dropRoutes: [
      { path: "/", Component: Events, name: "Overview" },
      { path: "/econbowl", Component: EconBowl, name: "EconBowl" },
      { path: "/econolympiad", Component: EconOlympiad, name: "EconOlympiad" },
      {
        path: "/speaker-series",
        Component: SpeakerSeries,
        name: "Speaker Series",
      },
    ],
  },
  { path: "/programs", Component: Programs, name: "Programs" },
];

export default routes;
