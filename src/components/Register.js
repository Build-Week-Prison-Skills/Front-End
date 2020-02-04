import React, { useState, useEffect } from "react";
import axios from "axios";
import { Alert, Form, Icon, Input, Button } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

function RegisterForm(props) {
  const [loadingUser, setLoadingUser] = useState(false);
  const [registerError, setRegisterError] = useState("");

  const {
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
  const prisonIdError =
    isFieldTouched("prison_id") && getFieldError("prison_id");

  function handleSubmit(e) {
    e.preventDefault();
    validateFields((err, values) => {
      console.log(values);
      if (!err) {
        doRegister(values);
      }
    });
  }

  const doRegister = values => {
    setLoadingUser(true);
    axios
      .post("https://prisonerbw.herokuapp.com/api/auth/register", values)
      .then(response => {
        setLoadingUser(false);
        props.history.push("/login");
      })
      .catch(error => {
        let { message } = error.response.data;
        setLoadingUser(false);
        setRegisterError(message);
      });
  };
  return (
    <StyledContainer>
      <StyledForm onSubmit={e => handleSubmit(e)}>
        {registerError && (
          <Alert
            style={{ marginBottom: "1rem" }}
            message="Failed to Register"
            description={registerError}
            type="error"
          />
        )}
        <Form.Item
          validateStatus={usernameError ? "error" : ""}
          help={usernameError || ""}
        >
          {getFieldDecorator("username", {
            rules: [
              {
                required: true,
                type: "string",
                message:
                  "Please add an alphanumeric username with at least 2 characters long.!"
              }
            ]
          })(
            <Input
              size="large"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
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
            />
          )}
        </Form.Item>
        <Form.Item
          validateStatus={prisonIdError ? "error" : ""}
          help={prisonIdError || ""}
        >
          {getFieldDecorator("prison_id", {
            rules: [
              {
                required: true,
                min: 1,
                pattern: /^-?[0-9]*(\.[0-9]*)?$/,
                message: "Enter your Prison ID number"
              }
            ]
          })(
            <Input
              prefix={
                <Icon type="number" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              type="text"
              placeholder="Prison Id"
            />
          )}
        </Form.Item>
        <Form.Item>
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
            {loadingUser ? "Registering" : "Register"}
          </Button>
          Or <Link to="/login">Already have an account?</Link>
        </Form.Item>
      </StyledForm>
    </StyledContainer>
  );
}

export const Register = Form.create({ name: "normal_login" })(RegisterForm);

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
