import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";

function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  console.log(firstName);
  console.log(lastName);

  const sendDataToAPI = () => {
    axios.post("https://6275735215458100a6a38242.mockapi.io/Crud", {
      firstName,
      lastName,
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
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default Create;
