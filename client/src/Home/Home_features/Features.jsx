import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import features from './HomeData'; 
import './Features.css';

const FeatureCard = () => {
  return (
    <div className="features-container">
      <h3 className="fs-6 mb-3 mb-xl-4 text-uppercase text-center">&ndash; &ndash;&ndash; &ndash;&ndash;&ndash; Our Features &ndash; &ndash;&ndash; &ndash;&ndash;&ndash;</h3>
      <Row className="justify-content-center">
        {features.map((feature) => (
          <Col key={feature.id} sm={6} lg={3} className="mb-4">
            <Card className="feature-card">
              <Card.Img variant="top" src={feature.pic} className="small-image" />
              <Card.Body>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>{feature.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default FeatureCard;
