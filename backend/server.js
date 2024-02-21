// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

const addedValues = []; // Store added values in an array

app.post('/api/addition', (req, res) => {
  const { firstNumber, secondNumber } = req.body;
  const result = firstNumber + secondNumber;

  // Store the result in the array
  addedValues.push(result);

  // Send the result along with the response
  res.json({ result, addedValues });
});

app.get('/api/added-values', (req, res) => {
  // Retrieve all added values
  res.json({ addedValues });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
