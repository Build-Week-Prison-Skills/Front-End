import React from "react";

const Inmate = ({inmate}) => {
    const { id, Name, Prison_id, day_release, skills } = inmate;
    return (
        <div>
                 {/* <img src={props.image} alt={props.name} /> */}
          <h3>id: {id}</h3>
          <h3>name: {Name}</h3>
          <h3>Prison_id: {Prison_id}</h3>
          <h3>Day Release?: {day_release}</h3>
          <h3>skills: {skills}</h3>
         
        </div>
      );
};

export default Inmate;
