import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillMediumCircle,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let year = 2021;
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Mabel Oza</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/moza88"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/insatiableminds"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/mabeloza/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a
                  href="https://medium.com/insatiableminds"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <AiFillMediumCircle />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
