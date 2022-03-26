import React from 'react';
import { Card, Button } from "react-bootstrap";

const News = (props) => {

 const {title,author,description}=props.news;


  return (
    <div>
     
      <Card>
        <Card.Header>{author}</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button variant="danger">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
