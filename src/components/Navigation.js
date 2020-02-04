import React from "react";
import { Link } from "react-router-dom";
// import { navbar } from "materialize-css";
import styled from "styled-components";

const Navigation = () => {
  return (
    <StyledNav className="navBar">
      <div className="left">
        <Link to="/">Home</Link>
      </div>

      <div className="middle">
        <div>
          <Link to="/inmateList">Inmates</Link>
        </div>
        <div>
          <Link to="/facilityList">Facilities </Link>
        </div>
        <div>
          <Link to="/addInmate">Add an Inmate </Link>
        </div>
      </div>

      <div className="right">
        <div>
          <Link to="/register">Register </Link>
        </div>

        <div>
          <Link to="/login">Login </Link>
        </div>
      </div>
    </StyledNav>
  );
};

export default Navigation;

const StyledNav = styled.div`
  background-color: dark-navy;

  height: 10%;
  display: flex;
  justify-content: space-between;
  .middle {
    display: flex;
    justify-content: space-around;
    div {
      padding: 5px;
    }
  }
  .right {
    display: flex;
    justify-content: space-around;
    div {
      padding: 5px;
    }
  }
`;
