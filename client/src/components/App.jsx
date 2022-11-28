import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AllContact from './AllContact.jsx';
import CreateContact from './CreateContact.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes, Link } from 'react-router-dom';
import Update from './Update';

export default function App() {
  const [contact, setContact] = useState([]);
  const [ids, setID] = useState('');

  console.log(ids);
  useEffect(() => {
    axios.get('http://localhost:5000/get').then((res) => {
      setContact(res.data.data.allContact);
    });
  }, []);

  var add = (e) => {
    axios.post('http://localhost:5000/add-contact', e).then((res) => {
      window.location.reload();

      console.log(res.data);
    });
  };

  var getId = (e) => {
    setID(e);
  };
  var updateContact = (e) => {
    axios.put(`http://localhost:5000/delete/${ids}`, e).then((res) => {
      window.location.reload();
      console.log('tdadlet');
    });
  };
  var remove = (id) => {
    axios.delete(`http://localhost:5000/delete/${id}`).then((res) => {
      window.location.reload();
      console.log('tfas5et');
    });
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Contact-Book</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={'/'}>allContact</Link>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <Link to={'/create'}>Create-contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route>
          <Route
            path="/"
            element={
              <AllContact data={contact} remove={remove} getId={getId} />
            }
          />
          <Route path="/create" element={<CreateContact add={add} />} />
          <Route
            path="/update"
            element={<Update updateContact={updateContact} />}
          />
        </Route>
      </Routes>
    </div>
  );
}
