import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import { Route, Routes, Link } from 'react-router-dom';
// import Update from './Update';
import { Link } from 'react-router-dom';

// import { useState } from 'react';
// import axios from 'axios';
export default function AllContact(props) {
  // const [newContact, setNewContact] = useState({});

  // const update = (id) => {
  //   axios.put('http://localhost:8080/update', { id, newContact });
  // };
  return (
    <div className="d-flex justify-content-start">
      <Card style={{ width: '18rem' }}>
        {props.data.map((e, key) => (
          <Card.Body key={key}>
            {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
            <Card.Title>{e.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{e.phone}</Card.Subtitle>
            <Card.Text>{e.email}</Card.Text>
            <Link to={'/update'}>
              <Button variant="warning" onClick={() => {props.getId(e._id)}}>
                Update
              </Button>
            </Link>

            <Button
              variant="danger"
              onClick={() => {
                props.remove(e._id);
              }}
            >
              Delete
            </Button>
          </Card.Body>
        ))}
      </Card>
    </div>
  );
}
