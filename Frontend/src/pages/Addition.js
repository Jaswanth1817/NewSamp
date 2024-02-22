// Addition.js
import React, { useState, useEffect } from "react";
import { Button, Container, Form, Stack } from "react-bootstrap";

const Addition = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [resultFromServer, setResultFromServer] = useState(null);
  const [addedValues, setAddedValues] = useState([]);

  const handleServerResponse = async () => {
    try {
      const response = await fetch('http://ec2-18-215-175-163.compute-1.amazonaws.com:9000/api/addition', {
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
      const response = await fetch('http://ec2-18-215-175-163.compute-1.amazonaws.com:9000/api/added-values');

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
    await handleServerResponse();
  };

  return (
    <Container className="my-3">
      <Form style={{ width: "max-content" }} onSubmit={handleSubmit}>
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

        <Button as="input" type="submit" value="Submit" />
      </Form>

      <Stack className="my-3">
        {resultFromServer !== null && (
          <p>
            Your addition result (from server) is: {resultFromServer}
          </p>
        )}

        <p>Added values sent to the server: {addedValues.join(', ')}</p>
      </Stack>
    </Container>
  );
};

export default Addition;
