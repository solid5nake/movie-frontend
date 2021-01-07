import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faAddressCard, } from "@fortawesome/free-solid-svg-icons";



function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer">
          <Col className="footer">
            <h1>Verplicht NET-01 Footer</h1>
            <p>
              Wat moet er in verwerkt worden: - Social media icons. Facebook,
              Instagram, Twitter, Youtube - Verschillende links: - Audio en
              ondertiteling - Mediacenter - Privacy - Contact opnemen -
              Audiodescriptie - Relaties met investeerders - Wettelijke
              bepalingen - Helpcentrum - Vacatures - Cookievoorkeuren -
              Cadeaubonnen - Gebruiksvoorwaarden - Bedrijfsgegevens
            </p>
          </Col>
          <Router></Router>
          <Col className="footer">
            
            This site was made by BingeWatch HCRBD Team.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
