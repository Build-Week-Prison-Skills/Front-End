import React from "react";
import { Link } from "react-router-dom";
import LogInForm from "./components/LogInForm";

const HomePage = () => (
  <div>
    <h1>Home Page></h1>

    <Link to="/LogIn">LogIn</Link>
  </div>
);

export default HomePage;
