import React, { useState, useEffect } from "react";
import axios from "axios";

const PrisonProfilePage = props => {
  console.log(props);
  const [prison, setPrison] = useState();
  useEffect(() => {
    const id = props.match.params.id;

    axios
      .get(`https://prisonerbw.herokuapp.com/api/auth/prisons/${id}`)
      .then(response => {
        console.log(response.data);
        setPrison(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  if (!prison) {
    return <div>Loading prison information...</div>;
  }

  const{ id, Prison_Name, Location, available_prisoners }=prison;
  return (
    <div className="save-wrapper">
  <h3>{id}</h3>
      <h1>{Prison_Name} </h1>
      <h3>{Location}</h3>
    </div>
  );
};
export default PrisonProfilePage;
