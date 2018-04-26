const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('../database/data.js');

const app = express();
const port = 3004;

app.use('/:id/', express.static(`${__dirname}/../client/public`));
app.use('/q-and-a/bundle.js', express.static(`${__dirname}/../client/public/bundle.js`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/q-and-a/:id', (req, res) => {
  const requestId = Number(req.params.id);

  database.getById(requestId, (err, data) => {
    if (err) {
      res.status(404).json({ message: 'No attraction' });
    }
    res.json(data);
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));
