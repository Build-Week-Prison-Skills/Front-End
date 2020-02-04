import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const Navigation = () => {
  return (
    <>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/inmateList">Inmates</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/facilityList">Facilities </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/addInmate">Add an Inmate </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/addPrison">Add a Prison </Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to="/login">Login </Link>
        </Menu.Item>
        <Menu.Item key="7">
          <Link to="/register">Register </Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Navigation;
