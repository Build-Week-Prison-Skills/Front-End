import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import InmateList from "./components/InmateList";
import FacilityList from "./components/FacilityList";
import Register from "./components/Register";
import LogInForm from "./components/Login";
import InmateForm from "./components/InmateForm";
import PrisonForm from "./components/PrisonForm ";
import { Route, Switch } from "react-router-dom";
import PrisonProfilePage from "./components/PrisonProfilePage";
import { Layout } from "antd";

const { Header, Content } = Layout;

const App = () => {
  return (
    <div>
      <Layout>
        <Header>
          <Navigation />
        </Header>
        <Content>
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
            <Route exact path="/addPrison">
              <PrisonForm />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <LogInForm />
            </Route>
            <Route
          exact
          path="/facilityList/facility/:id"
          render={props => <PrisonProfilePage {...props} />}
        />
          </Switch>
        </Content>
      </Layout>
    </div>
  );
};

export default App;
