import React, { useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import GetToken from "./GetToken";

export default function InmateForm(props) {
  const [inmate, setInmate] = useState({
    Name: "",
    Prison_id: "",
    day_release: "",
    skills: ""
  });

  const resetTo = {
    Name: "",
    Prison_id: "",
    day_release: "",
    skills: ""
  };
  function handleSubmitPrisoner(values, actions) {
    axios
      .post("https://prisonerbw.herokuapp.com/api/prisoners", values)
      .then(event => {
        console.log(event);
        console.log(props);
        console.log(values);
        // setInmate([...inmate,values ]);

        actions.resetForm();
      })
      .catch(e => console.log(e))
      .finally(() => {
        console.log("Axios request finished.");
      });
  }

  // GetToken()
  //   .post("https://prisonerbw.herokuapp.com/api/prisoners")
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });

  return (
    <StyledAddInmate>
      <h1>Add an inmate</h1>
      <Formik onSubmit={handleSubmitPrisoner} initialValues={resetTo}>
        <Form>
          {/* username */}
          <div>
            <label htmlFor="user-name">Name</label>
            <Field
              type="text"
              id="Name"
              name="Name"
              placeholder="Enter your username here"
            />
            <ErrorMessage name="Name" component="div" className="error" />
          </div>
          {/*Prison_id*/}
          <div>
            <label htmlFor="user-name">Prison id</label>
            <Field
              type="text"
              id="PrisonId"
              name="Prison_id"
              placeholder="Prison id"
            />
            <ErrorMessage name="Name" component="div" className="error" />
          </div>

          {/* skills */}
          <div>
            <label htmlFor="user-name">skills</label>
            <Field
              type="text"
              id="current-skills"
              name="skills"
              placeholder="comma seperated list of skills"
            />
            <ErrorMessage name="skills" component="div" className="error" />
          </div>
          {/*day_release*/}
          <div>
            <label htmlFor="user-name">day release?</label>
            <Field type="checkbox" id="dayRelease" name="day_release" />
            <ErrorMessage name="Name" component="div" className="error" />
          </div>

          <div>
            {/* //submit button */}
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </StyledAddInmate>
  );
}

const StyledAddInmate = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 300px;
  margin: 20px auto;
  padding-bottom: 20px;
  border: blueviolet 2px solid;
  border-radius: 4px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  form {
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;
