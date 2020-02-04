import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import Facility from "./Facility";

export default function FacilityList(props) {
  const [facilities, setFacilities] = useState([
      {prison_name:"Shawshank"},
      {prison_name:"Litchfield"},
      {prison_name:"Alcatraz"},
      {prison_name:"Azkaban"},
      {prison_name:"Dartmoor"}

  ]);

  useEffect(() => {
    const getInmates = () => {
      axios
        .get("https://prisonerbw.herokuapp.com/api/prisons")
        .then(response => {
          console.log(response.data);
          setFacilities(response.data);
          console.log(facilities);
        })
        .catch(error => {
          console.log("the data was not returned", error);
        });
    };
    getInmates();
  }, [facilities]);

  return (
    <div className="inmate-list">
      {facilities.map(facility => (
          <Facility  facility={facility}/>
        
      ))}
    </div>
  );
}
