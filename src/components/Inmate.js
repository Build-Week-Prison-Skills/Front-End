import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from 'antd';
import { withAuth } from "./WithAuth";

const Inmate = ({ inmate, deletePrisoner, editPrisoner }) => {
 
  const { Name, Prison_id, day_release, skills } = inmate;


  return (
    <StyledDiv>
           <h3>{Name}</h3>
      <h3>id: {Prison_id}</h3>
      <h3>Day Release?: {day_release}</h3>
      <h3>skills: {skills}</h3>
      <div>
      <Button type="primary" onClick={event => editPrisoner(event, inmate.id)} >Edit  </Button>
      <Button type="danger"   onClick={event => deletePrisoner(event, inmate.id)} > Delete </Button>
      </div>
    </StyledDiv>
  );
};

export default Inmate;

// styling
const StyledDiv = styled.div`
  margin: 20px auto;
  width: 60%;
  border: #003366 2px solid;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  overflow: hidden;
  &:hover {
    background-color: #0099ff;
    color:white;
  }
`;
