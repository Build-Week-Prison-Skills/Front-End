import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"
import { reach } from "yup";



   




const Facility = ({ facility }) => {
  const { id, Prison_Name, Location, available_prisoners } = facility;
  return (
    <div>
      <Link to={`/facilityList/facility/${id}`}>
      <StyledFacility>
    <h2>id:{id} </h2>
  <h2>prison_name:{Prison_Name}</h2>
      <h3>location:{Location}</h3>
        <h3>available_prisoners:{available_prisoners}</h3>
    </StyledFacility>

      </Link>
   
    </div>
  );
};

export default Facility;

// styling
const StyledFacility = styled.div`
  margin: 20px auto;
  width: 60%;
  border: blueviolet 2px solid;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  overflow: hidden;
  &:hover {
    background-color: blueviolet;
    color: white;
  }
`;
