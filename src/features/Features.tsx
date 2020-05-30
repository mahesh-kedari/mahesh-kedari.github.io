import React, { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "../framework/components/headers/Header";
import ContentPane from "../framework/components/content-pane/ContentPane";
import About from "./about/About";
import Home from "./home/Home";
import Portfolio from "./portfolio/Portfolio";
import Blogs from "./blogs/Blogs";
import ContactMe from "./contact-me/ContactMe";
import Skills from "./skills/Skills";
interface Props {}

export default function Features({}: Props): ReactElement {
  return (
    <>
      <Router>
        <Header />
        <ContentPane>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/blogs">
              <Blogs />
            </Route>
            <Route path="/contact">
              <ContactMe />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Redirect from="*" to="/" />
          </Switch>
        </ContentPane>
      </Router>
    </>
  );
}
