// Page components
import Home from "../pages/Home";
import Team from "../pages/Team";
import SpeakerSeries from "../pages/Events/SpeakerSeries";
import EconBowl from "../pages/Events/EconBowl";
import Clubs from "../pages/Clubs";
import Programs from "../pages/Programs";

const routes = [
  { path: "/", Component: Home, name: "Home" },
  { path: "/team", Component: Team, name: "Team" },
  { path: "/clubs", Component: Clubs, name: "Clubs" },
  {
    path: "/events",
    name: "Events",
    dropRoutes: [
      { path: "/econ-bowl", Component: EconBowl, name: "Econ Bowl" },
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
