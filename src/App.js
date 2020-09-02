import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

import routes from "./data/routes";

function App() {
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
