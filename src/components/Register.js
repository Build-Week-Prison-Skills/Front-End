import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

const initialVal = {
  username: "",
  password: "",
  prison_id: ""
};

export default function Register(props) {
  const [registeredStaff, setRegStaff] = useState([]);

  function submitHandler(values, actions) {
    axios
      .post("https://prisonerbw.herokuapp.com/api/auth/register", values)
      .then(response => {
        console.log(response);
        console.log(props);
        setRegStaff([...registeredStaff, values]);
        console.log(registeredStaff);
        actions.resetForm();
      })
      .catch(e => console.log(e))
      .finally(() => {
        console.log("Axios request finished.");
      });
  }
  return (
    <StyledReg>
      <h1>Register</h1>
      <Formik
        initialValues={initialVal}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
      >
        <Form>
          {/* Name */}
          <div className="username">
            <label htmlFor="current_username">username</label>
            <Field
              type="text"
              id="current_username"
              name="username"
              placeholder="Enter username here"
            />
            <ErrorMessage name="username" component="div" className="error" />
          </div>
          <div className="password">
            {/* //Password */}
            <label htmlFor="current_password">Password</label>
            <Field
              type="password"
              id="current_password"
              name="password"
              placeholder="Enter your password here"
            />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <div className="prison-id">
            <label htmlFor="prison_id">Prison id</label>
            <Field
              type="text"
              id="prison_id"
              name="prison_id"
              placeholder="Enter facility ID here"
            />
            <ErrorMessage name="prison_id" component="div" className="error" />
          </div>

          {/* //submit button */}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <div>
        <Link to="/login">Already Registered? Go to login page</Link>
      </div>
    </StyledReg>
  );
}

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Please enter a username")
    .min(2, "Too Short!")
    .max(25, "Too Long!"),
  password: Yup.string()
    .required("Please enter a password")
    .min(5, "Too Short!")
    .max(25, "Too Long!")
    .matches(/(?=.*[0-9])/, "Must contain at least one number")
});

const StyledReg = styled.div`
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
