import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Card className="text-white bg-primary">
        <Row>
          <Col>
            <Card.Title className="m-4">CONTACTS</Card.Title>
            <Card.Subtitle className="m-3  text-muted">
              ООО «МедиаСтройИмидж»
            </Card.Subtitle>
          </Col>
          <Col>
            <Card.Title className="my-4">Офис</Card.Title>
            <Card.Subtitle className="mb-3 text-muted">
              +375 (17) 236-13-43
            </Card.Subtitle>
            <Card.Text className="mb-3">
              г. Минск, ул. Бирюзова, 4/5, офис 5004 (3 подъезд, 5 этаж) <br />
              Время работы офиса: 09.00 - 18.00
            </Card.Text>
          </Col>
          <Col>
            <Card.Title className="my-4">Склад</Card.Title>
            <Card.Subtitle className="mb-3 text-muted">
              +375 (29) 686-77-97
            </Card.Subtitle>
            <Card.Text className="mb-3">
              г. Минск, ул.Бирюзова 4/3 <br />
              Время работы склада: 10.00 - 17.00
            </Card.Text>
          </Col>
        </Row>
      </Card>

      <Container>
        <Row>
          <Col className="text-center py-3"> Copyright &copy; MSI</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
