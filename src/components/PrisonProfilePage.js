import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

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
    

    <StyledPrisonProfile className="save-wrapper">
      <StyledPrison>

  <h3>{id}</h3>
      <h1>{Prison_Name} </h1>
      <h3>{Location}</h3>
      </StyledPrison>
<StyledPrisonInmates>
 <h1>Prisoner</h1>

</StyledPrisonInmates>
    </StyledPrisonProfile>

  );
};
export default PrisonProfilePage;
  // styling
  const StyledPrisonProfile = styled.div`
  display:flex;
  margin: 20px auto;
  width: 90%;
  border: #003366 2px solid;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  overflow: hidden;

  }
  `;
  const StyledPrison = styled.div`
  margin: 20px auto;
  width: 45%;
  border: #003366 2px solid;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  overflow: hidden;
  
  }
  `;
    const StyledPrisonInmates = styled.div`
    margin: 20px auto;
    width: 45%;
    border: #003366 2px solid;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    overflow: hidden;
    
    }
    `;
