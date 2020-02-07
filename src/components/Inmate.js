import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Modal, Form } from "antd";
import { withAuth } from "./WithAuth";
import headpic from "../img/headpic.jpeg";

const Inmate = ({
  inmate,
  deletePrisoner,
  showModal,
  handleEditSubmit,
  visible,
  setVisible
}) => {
  const { Name, Prison_id, day_release, skills } = inmate;

  const [editInmate, setEditInmate] = useState(inmate);
  const handleNameChange = event => {
    console.log(event.target);
    setEditInmate({ ...editInmate, [event.target.name]: event.target.value });
  };
  const handleModalCancel = e => {
    // setEditInmate({...editInmate, Name:""});
    setVisible(false);
  };
  return (
    <StyledDiv>
      <div>
        <img src={headpic} alt="headpic" />
      </div>
      <h3>{Name}</h3>
      <h3>id: {Prison_id}</h3>
      <h3>Day Release?: {day_release}</h3>
      <h3>skills: {skills}</h3>
      <div>
        <Button type="primary" onClick={event => showModal(inmate)}>
          Edit{" "}
        </Button>
        <Button
          type="danger"
          onClick={event => deletePrisoner(event, inmate.id)}
        >
          {" "}
          Delete{" "}
        </Button>
      </div>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={() => handleEditSubmit(editInmate)}
        onCancel={handleModalCancel}
        destroyOnClose={true} 
      >
        `;
<form>
          <label>
            Name:
            <input
              type="text"
              value={inmate.Name}
              onChange={event => handleNameChange(event)}
            />
          </label>
        </form>
         {/* <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
        <Form.Item label="Note">
          {getFieldDecorator('note', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(<Input />)}
        </Form.Item>
       
        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form> */}
      </Modal>
    </StyledDiv>
  );
};
// const InmateWrapped=Form.create({name:"coordinated"})(App);
export default Inmate;

// styling
const StyledDiv = styled.div`
  margin: 20px auto;
  width: 60%;
  border: #003366 2px solid;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  overflow: hidden;
  &:hover {
    background-color: #0099ff;
    color: white;
  }
`