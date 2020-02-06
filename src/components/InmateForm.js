import React, { useState } from "react";
import styled from "styled-components";
// import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withAuth } from "./WithAuth";

export default function InmateForm(props) {
  const [inmateFormValues, setInmateFormValues] = useState({
    Name: "",
    Prison_id: "",
    day_release: "",
    skills: ""
  });

  console.log(inmateFormValues);

  const resetTo = {
    Name: "",
    Prison_id: "",
    day_release: false,
    skills: ""
  };

  function handleSubmitPrisoner(values, actions) {
    console.log(values);
    withAuth()
      .post("https://prisonerbw.herokuapp.com/api/auth/prisoners", values)
      .then(response => {
        console.log(response);
        actions.resetForm();
      })
      .catch(e => console.log(e))
      .finally(() => {
        console.log("Axios request finished.");
      });
  }

  return (
    <StyledAddInmate>
      <h1>Add an inmate</h1>
      <Formik onSubmit={handleSubmitPrisoner} initialValues={resetTo}>
        <Form>
          {/* username */}
          <div>
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Enter inmates name here"
            />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          {/*Prison_id*/}
          <div>
            <label htmlFor="PrisonId">I.D. </label>
            <Field
              type="text"
              id="PrisonId"
              name="prison_id"
              placeholder="Prison/Facility id"
            />
            <ErrorMessage name="prison_id" component="div" className="error" />
          </div>

          {/* skills */}
          <div>
            <label htmlFor="current-skills">Skills</label>
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
            <label htmlFor="dayRelease">day release?</label>
            <Field
              type="checkbox"
              id="dayRelease"
              name="day_release"
              checked={inmateFormValues.check}
              onClick={() =>
                setInmateFormValues("check", !inmateFormValues.check)
              }
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
  border: #003366 2px solid;
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
