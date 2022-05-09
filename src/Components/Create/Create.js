import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Create() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const sendDataToAPI = () => {
    axios
      .post("https://6276c27b2f94a1d70606e859.mockapi.io/Crud", {
        firstName,
        lastName,
      })
      .then(() => {
        navigate("/Read");
      });
  };
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
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            name="lname"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
        </Form.Field>
        <Button type="submit" onClick={sendDataToAPI}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Create;
