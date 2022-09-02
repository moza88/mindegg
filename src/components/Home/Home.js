import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import logo from "../../Assets/MindEgg_Logo_small.png"
import IDVerify from "../IDVerify";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">

              <img src={logo} alt="mindegg_logo"/>
              <h4 style={{ padding: 100, textAlign: "left" }}><Type /></h4>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
