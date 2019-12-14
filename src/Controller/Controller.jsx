import React from "react";
import {
  Accordion,
  Card,
  ButtonGroup,
  Button,
  Form,
  Col
} from "react-bootstrap";
const axios = require("axios");

export default class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.removeAllCards = this.removeAllCards.bind(this);
    this.setTheTimeToOpenTheLock = this.setTheTimeToOpenTheLock.bind(this);
    this.switchToLockMode = this.switchToLockMode.bind(this);
    this.switchToAcceptMode = this.switchToAcceptMode.bind(this);
    this.state = { time: "" };
    this.link = () => this.removeAllCards();
  }

  removeAllCards() {
    axios.delete(`/api/v1.0/controller/removeallcards/`).then(response => {
      console.log(response);
    });
  }

  setTheTimeToOpenTheLock(time) {
    axios
      .put(`/api/v1.0/controller/setthetimetoopenthelock/${time}`)
      .then(response => {
        console.log(response);
      });
  }

  switchToLockMode() {
    axios.get(`/api/v1.0/controller/switchtolockmode/`).then(response => {
      console.log(response);
    });
  }

  switchToAcceptMode() {
    axios.get(`/api/v1.0/controller/switchtoacceptmode/`).then(response => {
      console.log(response);
    });
  }

  setTime(time) {
    this.setState({ time });
  }

  render() {
    return (
      <div>
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey={"i"}>
              Удалить все карты
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={"i"}>
              <Card.Body>
                <div className="d-flex flex-column">
                  <ButtonGroup aria-label="Basic example">
                    <Button variant="light" onClick={this.link}>
                      Подтвердить
                    </Button>
                  </ButtonGroup>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey={4}>
              Установить время открывания замка
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={4}>
              <Card.Body>
                <div className="d-flex flex-column">
                  <Form>
                    <Form.Row>
                      <Col>
                        <Form.Control
                          placeholder="Количество секунд"
                          value={this.state.time}
                          onChange={e => this.setTime(e.target.value)}
                        />
                      </Col>
                      <Col>
                        <ButtonGroup aria-label="Basic example">
                          <Button
                            variant="light"
                            onClick={() =>
                              this.setTheTimeToOpenTheLock(this.state.time)
                            }
                          >
                            Установить
                          </Button>
                        </ButtonGroup>
                      </Col>
                    </Form.Row>
                  </Form>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey={5}>
              Режимы
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={5}>
              <Card.Body>
                <div className="d-flex flex-column">
                  <ButtonGroup aria-label="Basic example">
                    <Button
                      variant="light"
                      onClick={() => this.switchToLockMode()}
                    >
                      Блокировка
                    </Button>
                    <Button
                      variant="light"
                      onClick={() => this.switchToAcceptMode()}
                    >
                      Accept
                    </Button>
                  </ButtonGroup>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}
//55 line -- <Accordion.Collapse eventKey={'i'}> что это/ удалить /разобраться
//translate i18next-react вынести все текстовки для переключения языка
