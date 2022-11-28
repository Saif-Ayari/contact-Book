import React from 'react';
import { useState } from 'react';

export default function CreateContact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  console.log(name);
  console.log(phone);
  console.log(email);
  return (
    <div>
      <input placeholder="name" onChange={(e) => setName(e.target.value)} />
      <br />
      <input
        placeholder="Phone number"
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <button>Add Contact</button>
    </div>
  );
}
