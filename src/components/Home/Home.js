import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-projects_2.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                I'm
                   <strong className="main-name"> Yuxiang Kang</strong>
              </h1>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome to my Portfolio!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1> 
                          <br />
                          <br />
              <h1 style={{ paddingBottom: 15 }} className="heading">               
                   <strong className="main-name">Robotics · Mechanical Engineering</strong>
              </h1>
              
     

            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "500px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
