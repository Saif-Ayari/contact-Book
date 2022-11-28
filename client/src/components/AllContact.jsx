import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import { Route, Routes, Link } from 'react-router-dom';
// import Update from './Update';
import { Link } from 'react-router-dom';

export default function AllContact(props) {
  return (
    <center>
      <Card style={{ width: '18rem', backgroundColor: '#B7E0F2' }}>
        {props.data.map((e, key) => (
          <Card.Body key={key}>
            <Card.Img
            style={{borderRadius: 999 , padding: '3rem'}}
              variant="top"

              src="https://e7.pngegg.com/pngimages/889/832/png-clipart-google-contacts-mobile-app-contact-manager-app-store-android-application-package-email-miscellaneous-blue.png"

            />
            <Card.Title>{e.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{e.phone}</Card.Subtitle>
            <Card.Text>{e.email}</Card.Text>
            <Link to={'/update'}>
              <Button
                variant="warning"
                onClick={() => {
                  props.getId(e._id);
                }}
              >
                change
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
    </center>
  );
}
