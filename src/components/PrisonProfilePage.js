import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Inmate from "./Inmate";
import { Button } from 'antd';
import { Link } from "react-router-dom";

const PrisonProfilePage = (props, { inmates }) => {
  console.log(props);
  console.log(inmates);
  const [prison, setPrison] = useState();
  const [prisoners, setPrisoners] = useState([]);

  useEffect(() => {
    const id = props.match.params.id;

    const getPrisonById = () => {
      axios
        .get(`https://prisonerbw.herokuapp.com/api/auth/prisons/${id}`)
        .then(response => {
          console.log(response.data);
          setPrison(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    };
    getPrisonById();

    const getAllPrisoners = () => {
      axios
        .get("https://prisonerbw.herokuapp.com/api/prisoners")
        .then(res => {
          setPrisoners(...prisoners, res.data);
        })
        .catch(error => {
          console.error(error);
        });
    };
    getAllPrisoners();
  }, []);

  if (!prison) {
    return <div>Loading prison information...</div>;
  }
  console.log(prisoners);
  let filteredPrisoners = prisoners.filter(
    prisoner => prisoner.Prison_id === prison.id
  );
  console.log(filteredPrisoners);

  console.log(prison);
  console.log(prison.id);
  // console.log(prisoners.Prison_id[]);

  const { id, Prison_Name, Location, available_prisoners } = prison;
  return (
    <StyledPrisonProfile className="save-wrapper">
   
      <StyledPrison>
        <h1>{Prison_Name} </h1>
        <h3>{Location}</h3>
        <h3>{id}</h3>
        <Link to="/addInmate">
        <Button type="primary" className="add-prisoner">Add Prisoner</Button>
        </Link> 
      </StyledPrison>
      <StyledPrisoner>
        {filteredPrisoners.map((inmate, index) => (
          <Inmate key={inmate.index} inmate={inmate} />
        ))}
      </StyledPrisoner>
    </StyledPrisonProfile>
  );
};
export default PrisonProfilePage;

// styling
const StyledPrisonProfile = styled.div`
  display: flex;
  margin: 20px auto;
  width: 100%;
  border: #003366 2px solid;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  overflow: hidden;
`;
const StyledPrison = styled.div`
  margin: 20px auto;
  width: 48%;
  height: 1000px;
  border: #003366 2px solid;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  overflow: hidden;
`;
const StyledPrisoner = styled.div`
  margin: 20px auto;
  width: 48%;
  border: #003366 2px solid;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  overflow: hidden;
`;

