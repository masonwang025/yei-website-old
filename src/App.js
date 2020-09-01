import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Page components
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  // routes
  const routes = [
    { path: "/", Component: Home },
    { path: "/about", Component: About },
  ];

  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <div className="App">
        <Switch>
          {routes.map(({ path, Component, props }) => (
            <Route key={path} exact path={path}>
              <Component {...props} />
            </Route>
          ))}
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
