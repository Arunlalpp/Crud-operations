import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";
import {Link} from 'react-router-dom';

function Read() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get("https://6276c27b2f94a1d70606e859.mockapi.io/Crud")
      .then((getData) => {
        setApiData(getData.data);
      });
  }, [])

  const setID = (id) => {
    console.log(id)
    localStorage.setItem('ID' , id)
  }
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
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {apiData.map((data) => {
            console.log(apiData)
            return (
              <Table.Row>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  <Link to= '/update'>
                  <Button color="green" onClick={()=>setID(data.id)}>Update</Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Link to= '/delete'>
                  <Button color="red">Delete</Button>
                  </Link>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}

export default Read;
