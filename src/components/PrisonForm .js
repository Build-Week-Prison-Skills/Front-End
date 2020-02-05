import React, { useState } from "react";
import styled from "styled-components";
// import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withAuth } from "./WithAuth";

export default function PrisonForm(props) {
  const [prisonFormValues, setPrisonFormValues] = useState({
    id: null,
    Prison_Name: "",
    Location: "",
    available_prisoners: 0
  });
  console.log(prisonFormValues);

  const resetPrisonTo = {
    id: null,
    Prison_Name: "",
    Location: "",
    available_prisoners: 0
  };

  const handleChangePrison = event => {
    console.log(event.target);
    setPrisonFormValues({
      ...prisonFormValues,
      [event.target.name]: event.target.value
    });
  };

  function handleSubmitPrison(values, e) {
    // e.preventDefault();
    console.log(prisonFormValues);
    withAuth()
      .post("https://prisonerbw.herokuapp.com/api/auth/prisons", values)
      .then(event => {
        console.log(event);
        console.log(props);
        console.log(values);
        setPrisonFormValues(resetPrisonTo);
      })
      .catch(e => console.log(e))
      .finally(() => {
        console.log("Axios request finished.");
      });
  }

  return (
    <StyledAddPrison>
      <h1>Add a Prison or correctional facility</h1>
      <Formik
        onSubmit={e => handleSubmitPrison(prisonFormValues, e)}
        // initialValues={resetPrisonTo}
      >
        <Form>
          {/* id */}
          <div>
            <label className="left" htmlFor="prison-id">
              id
            </label>
            <Field
              className="right"
              type="number"
              id="prison-id"
              name="id"
              placeholder="Enter 15 digit prison id"
              onChange={e => handleChangePrison(e)}
            />
            <ErrorMessage name="id" component="div" className="error" />
          </div>
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
              onChange={e => handleChangePrison(e)}
            />
            <ErrorMessage
              name="Prison_Name"
              component="div"
              className="error"
            />
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
              onChange={e => handleChangePrison(e)}
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
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: right;
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
  .left {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
  }
`;
//Attempt2(combined)
// const handleChange = event => {
//   console.log(event.target)
//   if (event.target.type === "checkbox") {
//         setInmateFormValues({
//           ...inmateFormValues,
//           [event.target.name]: event.target.checked
//         });
//       } else if (event.target.name === "skills") {
//             setInmateFormValues({
//               ...inmateFormValues,
//               [event.target.name]: [...inmateFormValues.skills, event.target.value]
//             });
//           } else {
//         setInmateFormValues({
//           ...inmateFormValues,
//           [event.target.name]: event.target.value
//         });
//       }
// };
//attempt1
// const handleChange = event => {
//  else if (event.target.name === "skills") {
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
