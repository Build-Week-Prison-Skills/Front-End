import React from "react";
import styled from "styled-components";
{
  /* <div>
<Link to="/facility${id}">Facility</Link>
</div> */
}

const Facility = ({ facility }) => {
  const { id, prison_name, location, available_prisoners } = facility;
  return (
    <div>
    <StyledFacility>
      <h2>id: </h2>
      <h2>prison_name:</h2>
      <h3>location:</h3>
      <h3>available_prisoners:</h3>
    </StyledFacility>
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
