import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Facility from "./Facility";
import { Button } from "antd";
import { Link } from "react-router-dom";

export default function FacilityList(props) {
  const [facilities, setFacilities] = useState([]);
  useEffect(() => {
    getInmates();
  }, []);
  
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
        <Button type="primary"  className="add-prison">
          Add a Prison
        </Button>
        <div></div>
      </Link>
    </StyledFacilityList>
  );
}

const StyledFacilityList = styled.div`
  display: flex;
  flex-direction: column-reverse;

`;
const StyledTopDiv=styled.div`
  div { 
  background: lightgrey;
  border: 1px solid #0088DD;
  padding: 20px;
  height: 200px;
  background-image:  url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYNxGWOLyzDUMSx1DQLopS0tHGfGZslMmPj2MhtFc_Ck-gwXWP") 
}
`