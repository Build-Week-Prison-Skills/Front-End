import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const StyledLogin = styled.div`
  border: 1px blue solid;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  margin: 20px;
`;


const initialState = {
  username: "",
  password: ""
};
const validationSchema = Yup.object().shape({
  username: Yup.string().required("Please enter a username"),
  password: Yup.string().required("Please enter a password")
});

export default function LogInForm(props) {
  function handleSubmit(values, actions) {
    axios
      .post("https://prisonerbw.herokuapp.com/api/auth/login", values)
      .then(response => {
        console.log(response);

        console.log(props);
        actions.resetForm();
      })
      .catch(e => console.log(e))
      .finally(() => {
        console.log("Axios request finished.");
      });
  }

  return (
    <StyledLogin>
      <Formik
        //onSubmit={handleSubmit}
        initialValues={initialState}
        validationSchema={validationSchema}
      >
        <Form>
          {/* username */}
          <label htmlFor="user-name">user-name</label>
          <Field
            type="text"
            id="user-name"
            name="username"
            placeholder="Enter your username here"
          />
          <ErrorMessage name="email" component="div" className="error" />
          {/* Password */}
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password here"
          />
          <ErrorMessage name="password" component="div" className="error" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      </StyledLogin>

  );
}
