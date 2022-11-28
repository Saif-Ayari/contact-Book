const mongoose = require('mongoose');

const db = 'mongodb://localhost/contact-Book';
mongoose
  .connect(db, {
    useNewUrlParser: true,
  })
  .then((res) => {
    console.log('Database temchi mrigla ..');
  })
  .catch((err) => console.log(err));
