import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./Style.css";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import SocialPage from "./components/SocialPage";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Navigation />
      <SocialPage />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contactme" component={ContactMe} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
