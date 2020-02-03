import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialVal = {
  username: "",
  password: "",
  prison_id: ""
};

//   { "username": "Admin",
//   "password": "1234",
//   "prison_id": 1 }
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
    <div>
      <Formik
        initialValues={initialVal}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
      >
        <Form>
          {/* Name */}
          <label htmlFor="current_username">username</label>
          <Field
            type="text"
            id="current_username"
            name="username"
            placeholder="Enter username here"
          />
          <ErrorMessage name="username" component="div" className="error" />

          {/* //Password */}
          <label htmlFor="current_password">Password</label>
          <Field
            type="password"
            id="current_password"
            name="password"
            placeholder="Enter your password here"
          />
          <ErrorMessage name="password" component="div" className="error" />

          <label htmlFor="prison_id">Prison id</label>
          <Field
            type="text"
            id="prison_id"
            name="prison_id"
            placeholder="Enter facility ID here"
          />
          <ErrorMessage name="prison_id" component="div" className="error" />

          {/* //submit button */}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
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
