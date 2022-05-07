import React, { useEffect } from "react";
import { Label, Table } from "semantic-ui-react";
import axios from "axios";

function Read() {
  useEffect(() => {
    axios
      .get("https://6275735215458100a6a38242.mockapi.io/Crud")
      .then((getData) => {
        console.log(getData);
      });
  });
  return (
    <div>
      <link
        async
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
      />
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Header</Table.HeaderCell>
            <Table.HeaderCell>Header</Table.HeaderCell>
            <Table.HeaderCell>Header</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Label ribbon>First</Label>
            </Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default Read;
