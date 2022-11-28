import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function Update(props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Update Name..."
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Update name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Update Phone Number..."
            rows={3}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="success"
          onClick={() => {
            return props.updateContact({ name, phone, email });
          }}
        >
          Update
        </Button>
      </Form>
    </div>
  );
}
