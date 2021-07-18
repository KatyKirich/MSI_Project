import React from "react";
import { Card } from "react-bootstrap";

const CarouselBG = () => {
  return (
    <div
      className=" d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundImage: "url(background/BG2.jpg)",
        backgroundSize: "cover",
      }}
    >
      <Card
        className="text-white bg-primary mb-3 h-50"
        style={{ maxWidth: "40rem" }}
      >
        <Card.Body>
          <Card.Title className="mb-4">ООО "МедиаСтройИмидж"</Card.Title>
          <Card.Subtitle className="mb-3 text-muted">
            Интегратор аудиовизуальных решений №1 в Беларуси*
          </Card.Subtitle>
          <Card.Text>
            Компания МедиаСтройИмидж специализируется на интеграции современных,
            инновационных и функциональных систем аудиовизуального оборудования
            для коммерческих, развлекательных и образовательных объектов, таких
            как: переговорные комнаты, конференц-залы, учебные аудитории,
            спортивные объекты, клубы и концертные площадки, торговые объекты,
            сегмент HoReCa (гостиницы, рестораны, кафе), DigitalSignage
            различного назначения.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CarouselBG;
