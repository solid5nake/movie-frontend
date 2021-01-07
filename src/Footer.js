import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faAddressCard, } from "@fortawesome/free-solid-svg-icons";

// function Footer() {
//   return (
//     <div className="Footer">
//       <h1>Verplicht NET-01 Footer</h1>
//       <p>
//         Wat moet er in verwerkt worden: - Social media icons. Facebook,
//         Instagram, Twitter, Youtube - Verschillende links: - Audio en
//         ondertiteling - Mediacenter - Privacy - Contact opnemen -
//         Audiodescriptie - Relaties met investeerders - Wettelijke bepalingen -
//         Helpcentrum - Vacatures - Cookievoorkeuren - Cadeaubonnen -
//         Gebruiksvoorwaarden - Bedrijfsgegevens
//       </p>
//     </div>
//   );
// }

// export default Footer;

function Footer() {

  return (
      <footer className="mt-0 color-headerBg">
          <Container fluid={true}>
              <Row className="border-top justify-content-between p-3">
                  <Col className="p-0 Link" md={3} sm={12}>
                  <h1>Verplicht NET-01 Footer</h1>
                  </Col>
                      <Router>
                      </Router>
                  <Col className="p-0 d-flex justify-content-end Link" md={3}> This site was made by BingeWatch HCRBD Team.
                  </Col>    


              </Row>
          </Container>
      </footer>

  );


}

export default Footer;
