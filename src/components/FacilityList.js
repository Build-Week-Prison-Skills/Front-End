import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import Facility from "./Facility";

export default function FacilityList(props) {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    const getInmates = () => {
      axios
        .get("https://prisonerbw.herokuapp.com/api/prisons")
        .then(response => {
          setFacilities(response.data);
        })
        .catch(error => {
          console.log("the data was not returned", error);
        });
    };
    getInmates();
  }, []);

  return (
    <div className="inmate-list">
      {facilities.map(facility => (
        <Facility
          key={facility.id}
          id={facility.id}
          Prison_Name={facility.Prison_Name}
          Location={facility.Location}
          available_prisoners={facility.available_prisoners}
        />
      ))}
    </div>
  );
}
