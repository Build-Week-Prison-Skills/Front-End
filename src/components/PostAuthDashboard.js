import React from "react";
import { Link } from "react-router-dom";
import { navbar } from "materialize-css";
import styled from "styled-components";

const PostAuthDashboard = () => {
  return (
    <div className="navBar">
      <div>
        <Link to="/">Home </Link>
      </div>
          <div>
        <Link to="/facilityList">Facilities </Link>
      </div>
      <div>
        <Link to="/register">Register your facility </Link>
      </div>
    </div>
  );
};

export default PostAuthDashboard;