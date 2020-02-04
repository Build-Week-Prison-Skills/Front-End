import React from "react";
import axios from "axios";
// import styled from "styled-components";
// import * as Yup from "yup";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox } from "antd";

function LogInForm(props) {
  console.log(props);
  const { getFieldDecorator } = props.form;
  function handleSubmit(values, e) {
    e.preventDefault();
    axios
      .post("https://prisonerbw.herokuapp.com/api/auth/login", values)
      .then(response => {
        console.log(response);

        localStorage.setItem("token", response.data.token);
      })
      .catch(e => console.log(e))
      .finally(() => {
        console.log("Axios request finished.");
      });
  }
  return (
    <Form onSubmit={this.handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator("username", {
          rules: [{ required: true, message: "Please input your username!" }]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Username"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("password", {
          rules: [{ required: true, message: "Please input your Password!" }]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("remember", {
          valuePropName: "checked",
          initialValue: true
        })(<Checkbox>Remember me</Checkbox>)}
        <a className="login-form-forgot" href="">
          Forgot password
        </a>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
}

export const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  LogInForm
);

const initialState = {
  username: "",
  password: ""
};

// const validationSchema = Yup.object().shape({
//   username: Yup.string().required("Please enter a username"),
//   password: Yup.string().required("Please enter a password")
// });

// <StyledLogin className="LogInForm">
//   <h1>Login</h1>
//   <Formik
//     onSubmit={() => handleSubmit(values)}
//     initialValues={initialState}
//     validationSchema={validationSchema}
//   >
//     <Form>
//       <div>
//         {/* username */}
//         <label htmlFor="user-name">username</label>
//         <Field
//           type="text"
//           id="user-name"
//           name="username"
//           placeholder="Enter your username here"
//         />
//         <ErrorMessage name="username" component="div" className="error" />
//       </div>
//       <div>
//         {/* Password */}
//         <label htmlFor="current-password">Password</label>
//         <Field
//           type="password"
//           id="current-password"
//           name="password"
//           placeholder="Enter your password here"
//         />
//         <ErrorMessage name="password" component="div" className="error" />
//       </div>
//       <div>
//         {/* //submit button */}
//         <button type="submit">Submit</button>
//       </div>
//     </Form>
//   </Formik>
//   <Link to="/register">Not Registered? Go to Registration page</Link>
// </StyledLogin>
