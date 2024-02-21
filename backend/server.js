const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 9000;

// Allow requests from the specified AWS EC2 instance
const corsOptions = {
  origin: 'http://ec2-18-215-175-163.compute-1.amazonaws.com',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const addedValues = [];

app.post('/api/addition', (req, res) => {
  const { firstNumber, secondNumber } = req.body;
  const result = firstNumber + secondNumber;

  addedValues.push(result);

  res.json({ result, addedValues });
});

app.get('/api/added-values', (req, res) => {
  res.json({ addedValues });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
