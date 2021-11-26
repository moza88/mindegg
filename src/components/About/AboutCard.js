import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Blockchain engineer at Wells Fargo making the financial world more secure, accessible, and transparent.
            Wore many hats in the past with Solution Engineering, Machine Learning (Decision Tree Algorithms), Java,
            Microservices, and Rule Engine Development.

          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
