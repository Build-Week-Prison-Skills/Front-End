import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withAuth } from "./WithAuth";

const initialFormValues = {
  Prison_Name: "",
  Location: "",
  available_prisoners: 0
};
export default function PrisonForm(props) {




  function handleSubmitPrison(values, actions) {
  
    withAuth()
      .post("https://prisonerbw.herokuapp.com/api/auth/prisons", values)
      .then(response => {
        console.log(response);
        props.history.push("/facilityList/");
        actions.resetForm();
      })
      .catch(e => console.log(e))
      .finally(() => {
        console.log("Axios request finished.");
      });
  }

  return (
    <StyledAddPrison>
      <h1>Add a Prison or correctional facility</h1>
      <Formik onSubmit={handleSubmitPrison} initialValues={initialFormValues}>
        <Form>
          {/*Prison_Name*/}
          <div>
            <label className="left" htmlFor="PrisonName">
              Prison name{" "}
            </label>
            <Field
              className="right"
              type="text"
              id="PrisonName"
              name="Prison_Name"
              placeholder="Prison/Facility Name"
            />
            <ErrorMessage
              name="Prison_Name"
              component="div"
              className="error"
            />
          </div>
          {/* Location */}
          <div>
            <label className="left" htmlFor="prison-location">
              Location
            </label>
            <Field
              className="right"
              type="text"
              id="prison-location"
              name="Location"
              placeholder="Enter prison address"
            />
            <ErrorMessage name="Location" component="div" className="error" />
          </div>

          {/*available_prisoners */}
          <div>
            <label className="left" htmlFor="availablePrisoners">
              Prisoners available
            </label>
            <Field
              className="right"
              type="number"
              id="availablePrisoners"
              name="available_prisoners"
              placeholder="number"
            />
            <ErrorMessage
              name="available_prisoners"
              component="div"
              className="error"
            />
          </div>

          <div>
            {/* //submit button */}
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </StyledAddPrison>
  );
}

const StyledAddPrison = styled.div`
  width: 650px;
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: space-between;
  height: auto;
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
  .left {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
  }
`;
