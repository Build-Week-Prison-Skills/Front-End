import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import InmateList from "./components/InmateList";
import FacilityList from "./components/FacilityList";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

const App = () => (
  <div>
    <header>
      
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/InmateList">
          <InmateList />
        </Route>
        <Route exact path="/FacilityList">
          <FacilityList />
        </Route>
      </Switch>
    </header>
     </div>
);

export default App;
