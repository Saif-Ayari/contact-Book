import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AllContact from './AllContact.jsx';
import CreateContact from './CreateContact.jsx';

export default function App() {
  const [contact, setContact] = useState([]);
//   const [view, setView] = useState('allContact');
  console.log('contacts', contact);
  useEffect(() => {
    axios.get('http://localhost:5000/get').then((res) => {
      setContact(res.data.data.allContact);
    });
  }, []);

  return (
    <div>
        
      <AllContact data={contact} />
      <CreateContact />
    </div>
  );
}
