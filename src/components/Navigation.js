import React from "react";
import { Link } from "react-router-dom";
import { navbar } from "materialize-css";
import styled from "styled-components";

const Navigation = () => {
  return (
    <styledNav className="navBar">
      <div>
        <Link to="/">Home </Link>
      </div>
      <div>
        <Link to="/InmateList">Inmates</Link>
      </div>
      <div>
        <Link to="/FacilityList">Facilities </Link>
      </div>
    </styledNav>
  );
};

export default Navigation;


const styledNav = styled.div`
  border: 1px solid red;
`;
