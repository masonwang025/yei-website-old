import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import RegisterFormContextProvider from "./contexts/RegisterFormContext";
import CtaPopupContextProvider from "./contexts/CtaPopupContext";

import routes from "./data/routes/routes";
import redirectRoutes from "./data/routes/redirectRoutes";

import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

ReactGA.initialize("UA-180848278-1");

function App() {
  const location = useLocation();
  // Fired on every route change
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  // window resizing
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    let vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const debouncedHandleResize = debounce(function handleResize() {
      let wBreakpoint = 500;
      if (
        !(
          window.innerWidth === dimensions.width &&
          dimensions.width < wBreakpoint
        )
      )
        setTimeout(() => {
          setDimensions({
            height: window.innerHeight,
            width: window.innerWidth,
          });
        }, 420);
    });

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  return (
    <div className="App">
      <Switch>
        {redirectRoutes.map((redirect) => (
          <Route
            exact
            key={redirect.path}
            path={redirect.path}
            render={() => {
              window.location.href = redirect.redirectLink;
              return (
                <div
                  style={{
                    padding: "0.25em 0.3em",
                    fontSize: "1.25em",
                  }}
                >
                  Redirecting you...
                </div>
              );
            }}
          />
        ))}

        <Route path="/">
          <CtaPopupContextProvider>
            <RegisterFormContextProvider>
              <ScrollToTop />
              <Header />
              <div className="App">
                <Switch>
                  {routes.map(({ path, Component, dropRoutes }) => {
                    if (!dropRoutes)
                      return (
                        <Route key={path} exact path={path}>
                          <Component />
                        </Route>
                      );
                    else {
                      return dropRoutes.map((dropRoute) => (
                        <Route
                          key={path + dropRoute.path}
                          exact
                          path={path + dropRoute.path}
                        >
                          <dropRoute.Component />
                        </Route>
                      ));
                    }
                  })}

                  <Redirect to="/" />
                </Switch>
              </div>
              <Footer />
            </RegisterFormContextProvider>
          </CtaPopupContextProvider>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}
