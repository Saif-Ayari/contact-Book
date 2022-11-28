import React from 'react';

export default function AllContact(props) {
  return (
    <div>
      {props.data.map((e, key) => (
        <div key={key} className='contact'>
          <span>{e.name}</span><br/>
          <span>{e.phone}</span><br/>
          <span>{e.email}</span><br/>
        </div>
      ))}
    </div>
  );
}
