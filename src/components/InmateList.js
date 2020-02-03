import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Inmate from "./Inmate";

export default function InmateList(props) {
  const [inmates, setInmates] = useState([]);

  useEffect(() => {
    const getInmates = () => {
      axios
        .get("https://prisonerbw.herokuapp.com/api/prisoners")
        .then(response => {
            console.log(response.data);
                   setInmates(response.data);
          console.log(inmates);
        })
        .catch(error => {
          console.log("the data was not returned", error);
        });
    };
    getInmates();
  },[]);
  return (
    <div className="inmate-list">
      {inmates.map((inmate, index) => (
        <Inmate key={inmate.index} inmate={inmate} />
      ))}
    </div>
  );
}

// <Link to={`/inmate/${inmate.id}`}></Link>
