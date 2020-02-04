import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import LogInForm from "./components/LogInForm";

function App() {
  return (
    <div className="App">
      <LogInForm />
      <nav>
        <Link to="/">
          <h1 className="log-in">Log In</h1>
        </Link>
      </nav>

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/LogIn"></Route>
      </Switch>
    </div>
  );
}

export default App;
