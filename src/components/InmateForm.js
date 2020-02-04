import React, { useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withAuth } from "./WithAuth";

export default function InmateForm(props) {
  const [inmateFormValues, setInmateFormValues] = useState({
    Name: "",
    Prison_id: "",
    day_release: "",
    skills: []
  });
  console.log(inmateFormValues);

  const resetTo = {
    Name: "",
    Prison_id: "",
    day_release:false,
    skills: [],
  };

  const handleChange = event => {
    console.log(event.target)
    if (event.target.type === "checkbox") {
          setInmateFormValues({
            ...inmateFormValues,
            [event.target.name]: event.target.checked
          });
        } else {
          setInmateFormValues({
            ...inmateFormValues,
            [event.target.name]: event.target.value
          });
        }
  };

  // const handleChange = event => {
  //   if (event.target.name === "skills") {
  //     setInmateFormValues({
  //       ...inmateFormValues,
  //       [event.target.name]: [...inmateFormValues.skills, event.target.value]
  //     });
  //   } else {
  //     setInmateFormValues({
  //       ...inmateFormValues,
  //       [event.target.name]: event.target.value
  //     });
  //   }
  // };
  function handleSubmitPrisoner(values, e) {
    e.preventDefault();
    withAuth()
      .post("https://prisonerbw.herokuapp.com/api/auth/prisoners", values)
      .then(event => {
        console.log(event);
        console.log(props);
        console.log(values);
        setInmateFormValues(resetTo);
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
      <Formik
        onSubmit={e => handleSubmitPrisoner(inmateFormValues, e)}
        // initialValues={resetTo}
      >
        <Form>
          {/* username */}
          <div>
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              id="name"
              name="Name"
              placeholder="Enter your username here"
              onChange={e => handleChange(e)}
            />
            <ErrorMessage name="Name" component="div" className="error" />
          </div>
          {/*Prison_id*/}
          <div>
            <label htmlFor="PrisonId">Prison id</label>
            <Field
              type="text"
              id="PrisonId"
              name="Prison_id"
              placeholder="Prison id"
              onChange={e => handleChange(e)}
            />
            <ErrorMessage name="Name" component="div" className="error" />
          </div>

          {/* skills */}
          <div>
            <label htmlFor="current-skills">skills</label>
            <Field
              type="text"
              id="current-skills"
              name="skills"
              placeholder="comma seperated list of skills"
              onChange={e => handleChange(e)}
            />
            <ErrorMessage name="skills" component="div" className="error" />
          </div>
          {/*day_release*/}
          <div>
            <label htmlFor="dayRelease">day release?</label>
            <Field
              type="checkbox"
              id="dayRelease"
              name="day_release"
              checked={inmateFormValues.check}
              onPress={() => setInmateFormValues('check', !inmateFormValues.check)}
              onChange={e => handleChange(e)}
            />
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
