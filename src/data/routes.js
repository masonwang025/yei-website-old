// Page components
import Home from "../pages/Home";
import Team from "../pages/Team";
import SpeakerSeries from "../pages/Events/SpeakerSeries";
import EconBowl from "../pages/Events/EconBowl";

const routes = [
  { path: "/", Component: Home, name: "Home" },
  { path: "/team", Component: Team, name: "Team" },
  {
    type: "dropdown",
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
];

export default routes;
