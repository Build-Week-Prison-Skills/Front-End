import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox, Alert } from "antd";

import styled from "styled-components";

const initialLoginValues = {
  username: "",
  password: ""
};

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

function LoginForm(props) {
  const [loginValues, setLoginValues] = useState(initialLoginValues);
  const [loadingUser, setLoadingUser] = useState(false);
  const [loginError, setLoginError] = useState("");
  //console.log(loginError);
  //antd form dependency
  const {
    getFieldDecoratorconst,
    getFieldDecorator,
    getFieldsError,
    isFieldTouched,
    getFieldError,
    validateFields
  } = props.form;

  useEffect(() => {
    validateFields();
  }, []);
  const usernameError = isFieldTouched("username") && getFieldError("username");
  const passwordError = isFieldTouched("password") && getFieldError("password");
  const handleChange = e => {
    setLoginValues({
      ...loginValues,
      [e.target.name]: e.target.value
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    validateFields((err, loginValues) => {
      if (!err) {
        // console.log("Received values of form: ", loginValues);
        doLogIn(loginValues);
        props.history.push("/");
      }
    });
  }

  const doLogIn = () => {
    setLoadingUser(true);
    axios
      .post("https://prisonerbw.herokuapp.com/api/auth/login", loginValues)
      .then(response => {
        setLoadingUser(false);
        localStorage.setItem("token", response.data.token);
      })
      .catch(error => {
        let { message } = error.response.data;
        setLoadingUser(false);
        setLoginError(message);
      });
  };
  return (
    <StyledContainer>
      <StyledForm onSubmit={e => handleSubmit(e)} className="login-form">
        {loginError && (
          <Alert
            style={{ marginBottom: "1rem" }}
            message="Failed Login"
            description={loginError}
            type="error"
          />
        )}
        <Form.Item
          validateStatus={usernameError ? "error" : ""}
          help={usernameError || ""}
        >
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
              onChange={e => handleChange(e)}
            />
          )}
        </Form.Item>
        <Form.Item
          validateStatus={passwordError ? "error" : ""}
          help={passwordError || ""}
        >
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                min: 6,
                message: "Password must be 6 characters or more"
              }
            ]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
              onChange={e => handleChange(e)}
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <Button
            style={{ width: "100%" }}
            disabled={hasErrors(getFieldsError())}
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={props.startLoading}
            size="large"
            type="primary"
            loading={loadingUser}
          >
            {loadingUser ? "Logging in" : "Log in"}
          </Button>
          Or <Link to="/register">Register now!</Link>
        </Form.Item>
      </StyledForm>
    </StyledContainer>
  );
}

export const Login = Form.create({ name: "normal_login" })(LoginForm);

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;
const StyledForm = styled(Form)`
  max-width: 25rem;
  padding: 2.5rem !important;
  margin: 2.5rem !important;
  background: #fbfbfb;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  @media only screen and (max-width: 600px) {
    padding: 2.5rem 1.5rem !important;
    margin: 1.5rem !important;
  }
`;
