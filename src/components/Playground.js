import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Editor from "./Editor";
import Info from "./Info";
import ResponseBox from "./ResponseBox";
import RunApi from "./utils/RunApi";

import "../styles.css";

class PlayGround extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "//1 + 1;",
      res: {
        runStatus: "0",
        message: ""
      }
    };
    this.handleCodeChange = this.handleCodeChange.bind(this);
    this.handleRun = this.handleRun.bind(this);
  }

  handleCodeChange(newCode) {
    var { code } = this.state;
    code = newCode;
    console.log(code);
    return this.setState({ code });
  }

  handleRun(event) {
    event.preventDefault();
    const { code } = this.state;
    console.log("Running code: " + code);

    RunApi.run(code)
      .then((response) => {
        console.log(`status: ${response.runStatus}`);
        console.log(`msg:\n ${response.message}`);
        this.setState({ res: response });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container fluid className="run-page">
        <Row>
          <Col className="editor-panel">
            <Card className="editor-card">
              <Card.Body>
                <Editor
                  onChange={this.handleCodeChange}
                  code={this.state.code}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col className="view-panel">
            <Card className="view-card">
              <Card.Body>
                <Info />
                <Button
                  className="view-run-button"
                  type="button"
                  sz="sm"
                  onClick={this.handleRun}
                >
                  Run
                </Button>
                <ResponseBox
                  className="view-result"
                  res={this.state.res.message}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
/*
  render() {
    return (
      <Container>
        <div className="editor-panel">
          <div className="editor">
            <Editor onChange={this.handleCodeChange} code={this.state.code} />
          </div>
        </div>
        <div className="result-panel">
          <div className="info-box">
            <Form>
              <Form.Group controlId="info">
                <Form.Label>Info</Form.Label>
              </Form.Group>
            </Form>
          </div>
          <div className="run-button">
            <Button type="button" onClick={this.handleRun}>
              Run
            </Button>
          </div>
          <div className="result-box">
            <ResponseBox res={this.state.res.message} />
          </div>
        </div>
      </Container>
    );
  }
}
*/
export default PlayGround;
