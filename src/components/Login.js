import React from "react";
import axios from "axios";
import styled from "styled-components";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

export default function LogInForm(props) {
  function handleSubmit(values, actions) {
    axios
      .post("https://prisonerbw.herokuapp.com/api/auth/login", values)
      .then(response => {
        console.log(response);
       
        localStorage.setItem("token", response.data.token);
        // actions.props.history.push("/");
        console.log(response.data.token);
        actions.resetForm();
      })
      .catch(e => console.log(e))
      .finally(() => {
        console.log("Axios request finished.");
      });
  }
  return (
    <StyledLogin className="LogInForm">
      <h1>Login</h1>
      <Formik
          onSubmit={handleSubmit}
        initialValues={initialState}
        validationSchema={validationSchema}
      >
        <Form>
          <div>
            {/* username */}
            <label htmlFor="user-name">username</label>
            <Field
              type="text"
              id="user-name"
              name="username"
              placeholder="Enter your username here"
            />
            <ErrorMessage name="username" component="div" className="error" />
          </div>
          <div>
            {/* Password */}
            <label htmlFor="current-password">Password</label>
            <Field
              type="password"
              id="current-password"
              name="password"
              placeholder="Enter your password here"
            />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <div>
            {/* //submit button */}
            <button type="submit">Submit</button>
          </div>

        </Form>
      </Formik>
          <Link to="/register">Not Registered? Go to Registration page</Link>
    </StyledLogin>
  );
}
const initialState = {
  username: "",
  password: ""
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Please enter a username"),
  password: Yup.string().required("Please enter a password")
});

const StyledLogin = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
  /* border: 1px blue solid; */
  height: 300px;
  margin: 20px auto;
  padding-bottom:20px;
  border: blueviolet 2px solid;
border-radius: 4px;
box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);


  form{
      height:60%;
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
 

  }
`;