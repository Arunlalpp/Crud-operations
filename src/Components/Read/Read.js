import React, { useEffect,useState } from "react";
import { Table,Button } from "semantic-ui-react";
import axios from "axios";

function Read() {
  const[apiData,setApiData] = useState([]);
  useEffect(() => {
    axios
      .get("https://6275783915458100a6a3fb27.mockapi.io/Crud")
      .then((getData) => {
       setApiData(getData.data)
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
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>first Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {apiData.map((data) => {
            return(
              
          <Table.Row>
          <Table.Cell>{data.id}</Table.Cell>
          <Table.Cell>{data.firstName}</Table.Cell>
          <Table.Cell>{data.lastName}</Table.Cell>
          <Table.Cell>
            <Button color="green">Update</Button>
          </Table.Cell>
          <Table.Cell>
            <Button color="red">Delete</Button>
          </Table.Cell>
        </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  )
}

export default Read;
