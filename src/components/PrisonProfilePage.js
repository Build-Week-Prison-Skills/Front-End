import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import facility from "/components/facility";
// const fakeData = {
//   id: 1,
//   prison_name: "Big Prison",
//   location: "123 Bad Street",
//   available_prisoners: 101
// };

const initialPrisonState = {
  id: null,
  prison_name: "",
  location: "",
  available_prisoners: null
};
export default function PrisonProfilePage(props) {
  const [prison, setPrison] = useState(initialPrisonState);

  useEffect(() => {
    axios
      .get("https://prisonerbw.herokuapp.com/api/auth/prisons/:1")
      .then(response => {
        console.log(response.data);
        //setPrisons(response.data);
      })
      .catch(error => {
        console.log("the data was not returned", error);
      });

    //setPrison(fakeData);
  }, []);

  return (
    <div className="prisons">
      
      <p>id</p>
        <p>{prison.id}</p>
        <p>Prison Name:</p>
        <p>{prison.prison_name}</p>
        <p>Location:</p>
        <p>{prison.location}</p>
        <p>Available Prisoners:</p>
        <p>{prison.available_prisoners}</p>
    </div>
  )
};
  