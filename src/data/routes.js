// Page components
import Home from "../pages/Home";
import Team from "../pages/Team";

const routes = [
  { path: "/", Component: Home, name: "Home" },
  { path: "/team", Component: Team, name: "Team" },
];

export default routes;
