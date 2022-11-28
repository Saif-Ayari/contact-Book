const express = require('express');
const cors = require('cors');
const app = express();
const contact = require('./db/model/contact');
const db = require('../server/db/index');

app.use(express.json());
app.use(cors());

app.post('/add-contact', async (req, res) => {
  const newContact = new contact(req.body);
  try {
    await newContact.save();
    res.status(200).json({
      status: 'Success',
      data: {
        newContact,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'Failed',
      message: err,
    });
  }
});
app.get('/get', async (req, res) => {
  const allContact = await contact.find({});

  try {
    res.status(200).json({
      status: 'Success',
      data: {
        allContact,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'Failed',
      message: err,
    });
  }
});

const port = 5000;
app.listen(port, () => console.log(`server yejri fel port ${port}..`));
