import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Inmate from "./Inmate";

export default function InmateList({inmates, setInmates}) {
 

  useEffect(() => {
    const getInmates = () => {
      axios
        .get("https://prisonerbw.herokuapp.com/api/prisoners")
        .then(response => {
            console.log(response.data);
                   setInmates(response.data);
         
        })
        .catch(error => {
          console.log("the data was not returned", error);
        });
    };
    getInmates();
    console.log(inmates);
  },[]);
  return (
    <div className="inmate-list">
      {inmates.map((inmate,index) => (
        <Inmate key={inmates[index]} inmate={inmate} />
      ))}
    </div>
  );
}

// <Link to={`/inmate/${inmate.id}`}></Link>
