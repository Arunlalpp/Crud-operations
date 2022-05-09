import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Update() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ID, setID] = useState(null);
  const sendDataToAPI = () => {
    axios
      .put(`https://6276c27b2f94a1d70606e859.mockapi.io/Crud/${ID}`, {
        firstName,
        lastName,
      })
      .then(() => {
        navigate("/Read");
      });
  };

  useEffect(() => {
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setID(localStorage.getItem("ID"));
  }, []);
  return (
    <div>
      <Form>
        <link
          async
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
        />
        <Form.Field>
          <label>First Name</label>
          <input
            name="fname"
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            name="lname"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" onClick={sendDataToAPI}>
          Update
        </Button>
      </Form>
    </div>
  );
}

export default Update;
