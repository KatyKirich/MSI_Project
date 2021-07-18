import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

const CompanyInfo = () => {
  return (
    <div>
      <h1 className="my-4 text-center">ABOUT US</h1>
      <Container className="w-75">
        <Row>
          <Col>
            <Card
              className="border-light my-3 h-50 rounded"
              style={{ maxWidth: "30rem" }}
            >
              <Card.Body>
                <Card.Title className="mb-4">
                  Ориентация на потребности клиента
                </Card.Title>

                <Card.Text>
                  В своей работе мы ориентируемся в первую очередь на требования
                  бизнеса наших клиентов, предлагая наиболее выгодное и
                  соответствующее этим требованиям решение. Благодаря прямым
                  контактам с ведущими поставщиками и производителями мы
                  обеспечиваем техническое, ценовое и ассортиментное
                  превосходство компании на рынке.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="text-white bg-primary my-3 h-50 rounded"
              style={{ maxWidth: "30rem" }}
            >
              <Card.Body>
                <Card.Title className="mb-4">Комплексный подход</Card.Title>

                <Card.Text>
                  ООО «МедиаСтройИмидж» работает одновременно с несколькими
                  наиболее авторитетными на мировом рынке производителями. Это
                  дает нам возможность наиболее полно решать задачи поставленные
                  клиентом.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card
              className="text-white bg-primary my-3 h-50 rounded"
              style={{ maxWidth: "30rem" }}
            >
              <Card.Body>
                <Card.Title className="mb-4">Постоянное развитие</Card.Title>

                <Card.Text>
                  С целью максимального соответствия запросам наших клиентов мы
                  изучаем потребности рынка и постоянно дополняем и улучшаем
                  ассортимент своей продукции. ООО «МедиаСтройИмидж» каждый день
                  работает над повышением эффективности и качества работы, чтобы
                  превосходить ожидания наших клиентов и партнеров.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="border-light my-3 h-50 rounded"
              style={{ maxWidth: "30rem" }}
            >
              <Card.Body>
                <Card.Title className="mb-4">
                  Открытость, честность, обязательность
                </Card.Title>

                <Card.Text>
                  ООО «МедиаСтройИмидж» открытая компания. Наши партнеры могут
                  обращаться как к менеджерам, так и к руководителям компании.
                  Мы всегда выполняем свои обещания и честно указываем на
                  возможные трудности, так как строим долгосрочный бизнес,
                  основанный на взаимном доверии и порядочности.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CompanyInfo;
