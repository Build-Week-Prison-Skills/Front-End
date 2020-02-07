import React, { useState } from "react";
import styled from "styled-components";
import { Button, Modal, Form } from "antd";
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
      <div className="prisoner-info">
        <div className="prisoner-container1">
          <img src={headpic} alt="headpic" />
        </div>
        <div>
          <h3>{Name}</h3>
          <h3>id: {Prison_id}</h3>
          <h3>Day Release?: {day_release}</h3>
          <h3>skills: {skills}</h3>
        </div>
      </div>
      <div>
        <div className="button-div">
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
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  border: #003366 2px solid;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  overflow: hidden;
  &:hover {
    background-color: #0099ff;
    color: white;
  }
  h1{
    font-size:1rem;
  }
  h2{
    font-size:1vw;
  }
  .prisoner-info{
    display: flex;
  flex-direction: row;
  font-size:3;
  }
  @media (min-width: 768px) {
    .prisoner-container1 {
      width: 90%;
      margin:10px auto;
      /* align-items:center; */
      
    }
    .prisoner-info{
      max-width: 250px;
    display: flex;
  flex-direction: column;

  max-width:
  }
  }
`;
