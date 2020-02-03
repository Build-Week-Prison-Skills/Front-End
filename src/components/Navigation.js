import React from "react";
import { Link } from "react-router-dom";
// import { navbar } from "materialize-css";
import styled from "styled-components";

const Navigation = () => {
  return (
    <StyledNav className="navBar">
      <div>
        <Link to="/">Home </Link>
      </div>
      <div>
        <Link to="/inmateList">Inmates</Link>
      </div>
      <div>
        <Link to="/facilityList">Facilities </Link>
      </div>
      <div>
        <Link to="/addInmate">Add an Inmate </Link>
      </div>
      <div>
        <Link to="/register">Register </Link>
      </div>
     
      <div>
        <Link to="/login">Login </Link>
      </div>
    </StyledNav>
  );
};

export default Navigation;

const StyledNav = styled.div`
  border: 1px solid red;
  display:flex;
  justify-content:space-between;
`;
