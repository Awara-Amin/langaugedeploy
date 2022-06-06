import React from "react";
import Card from "react-bootstrap/Card";

// import logo from "../images/logoSm.png";

const SingleCard = ({ data }) => {
  return (
    <Card style={{ width: "18rem" }} className="projectCard">
      <Card.Img variant="top" src={data.project_img} />
      <Card.Body>
        <Card.Title>{data.projectName}</Card.Title>
        <span>{data.created_at.split("T")[0]} </span>
        <Card.Text>{data.description}</Card.Text>
      </Card.Body>

      <Card.Body>
        <Card.Link href={data.gitHub_Url}>Github</Card.Link>
        <Card.Link href={data.homepage}>Live</Card.Link>
      </Card.Body>
    </Card>
  );
};
export default SingleCard;
