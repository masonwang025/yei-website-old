// Page components
import Home from "../pages/Home";
import About from "../pages/About";

const routes = [
  { path: "/", Component: Home, name: "Home" },
  { path: "/about", Component: About, name: "About" },
];

export default routes;
