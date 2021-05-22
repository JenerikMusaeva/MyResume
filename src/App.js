import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import "./Style.css";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import SocialPage from "./components/SocialPage";

function App() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: {
      opacity: 0,
      transform: "translateX(100%)",
    },
    enter: {
      opacity: 1,
      transform: "translateX(0%)",
    },
    leave: {
      opacity: 0,
      transform: "translateX(-100%)",
    },
  });
  return (
    <>
      <Sidebar />
      <Navigation />
      <SocialPage />
      {transitions(({ item, props }) => (
        <animated style={props}>
          <Switch location={item}>
            <Route exact path="/" component={About} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contactme" component={ContactMe} />
          </Switch>
        </animated>
      ))}
    </>
  );
}

export default App;
