import React from 'react';
import { Switch, Route } from 'react-router-dom'
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Projects from './projects';
import Cv from './cv';
import Contact from './contact';



const Main = () => (
  <Switch>
  <Route exact path="/" component={LandingPage} />
  <Route path="/aboutme" component={AboutMe} />
  <Route path="/projects" component={Projects} />
  <Route path="/cv" component={Cv} />
  <Route path="/contact" component={Contact} />
  </Switch>
)

export default Main;
