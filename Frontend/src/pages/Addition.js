import React, { useState, useEffect } from "react";
import { Button, Card, Container, Form, Stack } from "react-bootstrap";

const Addition = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [resultFromFrontend, setResultFromFrontend] = useState(null);
  const [resultFromServer, setResultFromServer] = useState(null);
  const [addedValues, setAddedValues] = useState([]);

  const handleServerResponse = async () => {
    try {
      const response = await fetch('http://ec2-34-228-37-113.compute-1.amazonaws.com:9000/api/addition', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstNumber, secondNumber }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json();
      setResultFromServer(data.result);
      setAddedValues(data.addedValues);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const fetchAddedValues = async () => {
    try {
      const response = await fetch('http://ec2-34-228-37-113.compute-1.amazonaws.com:9000/api/added-values');

      if (!response.ok) {
        throw new Error('Failed to fetch added values');
      }

      const data = await response.json();
      setAddedValues(data.addedValues);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    fetchAddedValues();
  }, []); // Fetch added values on component mount

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Calculate result on the frontend
    const resultFrontend = firstNumber + secondNumber;
    setResultFromFrontend(resultFrontend);
    
    // Send request to server and handle server response
    await handleServerResponse();
  };

  return (
    <Container className="my-3">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Addition Form</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Enter first number</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setFirstNumber(Number(e.target.value))}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Enter second number</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setSecondNumber(Number(e.target.value))}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <Stack className="my-3">
        {resultFromFrontend !== null && (
          <p>
            Your addition result (from frontend) is: {resultFromFrontend}
          </p>
        )}

        {resultFromServer !== null && (
          <p>
            Your addition result (from server) is: {resultFromServer}
          </p>
        )}
      </Stack>
    </Container>
  );
};

export default Addition;
