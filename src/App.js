import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import InmateList from "./components/InmateList";
import FacilityList from "./components/FacilityList";
import Register from "./components/Register";
import LogInForm from "./components/Login";
import InmateForm from "./components/InmateForm";
import { Route, Switch } from "react-router-dom";
// import styled from "styled-components";

const App = () => {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/inmateList">
          <InmateList />
        </Route>
        <Route exact path="/facilityList">
          <FacilityList />
        </Route>
        <Route exact path="/addInmate">
          <InmateForm />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <LogInForm />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
