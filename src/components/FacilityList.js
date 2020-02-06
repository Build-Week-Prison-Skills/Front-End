import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Facility from "./Facility";
import { Button } from "antd";
import { Link } from "react-router-dom";

export default function FacilityList(props) {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    const getInmates = () => {
      axios
        .get("https://prisonerbw.herokuapp.com/api/prisons")
        .then(response => {
          console.log(response.data);
          setFacilities(response.data);
        })
        .catch(error => {
          console.log("the data was not returned", error);
        });
    };
    getInmates();
  }, []);

  return (
    <StyledFacilityList className="inmate-list">
      {facilities.map((facility, index) => (
        <Facility
          key={facilities[index]}
          id={facility.id}
          Prison_Name={facility.Prison_Name}
          Location={facility.Location}
          available_prisoners={facility.available_prisoners}
        />
      ))}
      <Link to="/addPrison">
        <Button  className="add-prison">
          Add a Prison
        </Button>
      </Link>
    </StyledFacilityList>
  );
}

const StyledFacilityList = styled.div`
  display: flex;
  flex-direction: column-reverse;
  
`;
