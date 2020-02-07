import React, { useState, useEffect } from "react";
import "./PrisonProfilePage.css";
import axios from "axios";
// import styled from "styled-components";
import Inmate from "./Inmate";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { withAuth } from "./WithAuth";


const PrisonProfilePage = (props, { inmates }) => {
  const [prison, setPrison] = useState();
  const [prisoners, setPrisoners] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getPrisonById();
    getAllPrisoners();
  }, []);

  const getPrisonById = () => {
    const id = props.match.params.id;
    axios
      .get(`https://prisonerbw.herokuapp.com/api/auth/prisons/${id}`)
      .then(response => {
        setPrison(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const getAllPrisoners = () => {
    axios
      .get("https://prisonerbw.herokuapp.com/api/prisoners")
      .then(res => {
        setPrisoners(...prisoners, res.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const deletePrisoner = (event, id) => {
    event.preventDefault();
    withAuth()
      .delete(`https://prisonerbw.herokuapp.com/api/auth/prisoners/${id}`)
      .then(response => {
        setPrisoners(prisoners.filter(prisoner => prisoner.id !== id));
      })
      .catch(error => console.log(error.message));
  };

  const showModal = inmate => {
    console.log(inmate);
    setVisible(true);
  };
  const handleEditSubmit = editedValues => {
    console.log(editedValues);
    console.log(editedValues.id);
    setVisible(false);
    withAuth()
      .put(
        `https://prisonerbw.herokuapp.com/api/auth/prisoners/${editedValues.id}`,
        editedValues
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error.message));
  };

  if (!prison) {
    return <div>Loading prison information...</div>;
  }

  let filteredPrisoners = prisoners.filter(
    prisoner => prisoner.Prison_id === prison.id
  );

  const { id, Prison_Name, Location } = prison;
  return (<div className="specificity">

    <div className="page-wrapper">
      <section className="prison-wrapper">
        <h1>{Prison_Name} </h1>
        <h3>{Location}</h3>
        <h3>{id}</h3>
        <Link to="/addInmate">
          <Button type="primary" className="add-prisoner">
            Add Prisoner
          </Button>
        </Link>
      </section>
      <section className="prisoners-wrapper">
        {filteredPrisoners.map(inmate => (
          <Inmate
            deletePrisoner={deletePrisoner}
            showModal={showModal}
            key={inmate.id}
            inmate={inmate}
            handleEditSubmit={handleEditSubmit}
            visible={visible}
            setVisible={setVisible}
          />
        ))}
      </section>
    </div>
  </div>
  );
};
export default PrisonProfilePage;

// styling
// const StyledPrisonProfile = styled.div`
//   display: flex;
//   margin: 20px auto;
//   width: 100%;
//   border: #003366 2px solid;
//   height: auto;
//   border-radius: 4px;
//   box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
//   overflow: hidden;
// `;
// const StyledPrison = styled.div`
//   margin: 20px auto;
//   width: 48%;
//   height: 1000px;
//   border: #003366 2px solid;
//   height: auto;
//   border-radius: 4px;
//   box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
//   overflow: hidden;
// `;
// const StyledPrisoner = styled.div`
//   margin: 20px auto;
//   width: 48%;
//   border: #003366 2px solid;
//   height: auto;
//   border-radius: 4px;
//   box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
//   overflow: hidden;
// `;
