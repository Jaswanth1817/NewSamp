import React, { useState } from "react";
import { Container, Row, Col, Image, Stack } from "react-bootstrap";
import { PencilSquare } from 'react-bootstrap-icons';
import jaswanthLogo from '../pages/Jaswanth_Logo.jpg';

const Profile = () => {
  const [name, setName] = useState("Jaswanth Kongara");
  const [description, setDescription] = useState("Jaswanth is a Computer Science master's student at the University at Albany, demonstrating a strong academic commitment and practical skills in areas such as algorithms, artificial intelligence, and software engineering.");
  const [isNameEditing, setIsNameEditing] = useState(false);
  const [isDescriptionEditing, setIsDescriptionEditing] = useState(false);

  const handleNameEditClick = () => {
    setIsNameEditing(true);
  };

  const handleNameBlur = (e) => {
    setName(e.target.innerText);
    setIsNameEditing(false);
  };

  const handleDescriptionEditClick = () => {
    setIsDescriptionEditing(true);
  };

  const handleDescriptionBlur = (e) => {
    setDescription(e.target.innerText);
    setIsDescriptionEditing(false);
  };

  return (
    <Container className="my-3">
      <Row>
        <Col xs={6} md={4}>
          <Image
            src={jaswanthLogo}
            thumbnail
            height={300}
            width={300}
          />
        </Col>
        <Col xs={12} md={8}>
          <Stack>
            <div className="p-2">
              {/* Editable h3 tag with Bootstrap styling and an edit icon */}
              {isNameEditing ? (
                <h3
                  className="d-inline"
                  contentEditable={true}
                  onBlur={handleNameBlur}
                >
                  {name}
                </h3>
              ) : (
                <>
                  <span>{name}</span>
                  <PencilSquare
                    className="ms-2"
                    size={20}
                    style={{ cursor: 'pointer' }}
                    onClick={handleNameEditClick}
                  />
                </>
              )}
            </div>
            <div className="p-2">
              {/* Editable div tag with Bootstrap styling and an edit icon */}
              {isDescriptionEditing ? (
                <div
                  contentEditable={true}
                  onBlur={handleDescriptionBlur}
                >
                  {description}
                </div>
              ) : (
                <>
                  <span>{description}</span>
                  <PencilSquare
                    className="ms-2"
                    size={20}
                    style={{ cursor: 'pointer' }}
                    onClick={handleDescriptionEditClick}
                  />
                </>
              )}
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
