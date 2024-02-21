import React, { useState } from "react";
import { Container, Row, Col, Image, Stack } from "react-bootstrap";
import { PencilSquare } from 'react-bootstrap-icons';

const Profile = () => {
  const [name, setName] = useState("John Doe");
  const [description, setDescription] = useState("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, quod! Quam nulla dolore laboriosam sapiente, optio iure saepe totam ex accusamus voluptatibus. Architecto minima eum dolor, iusto quibusdam provident impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam alias ea est nulla vitae tenetur sequi dolore, ex quidem quos placeat nobis vero cum nisi dolores eos dignissimos. Laudantium, rem.");
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
            src="https://images.unsplash.com/photo-1579783483458-83d02161294e?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
