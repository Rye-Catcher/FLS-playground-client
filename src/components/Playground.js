import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import Editor from "./utils/Editor";
import ResponseBox from "./utils/ResponseBox";
import RunApi from "./utils/RunApi";

import "../styles.css";

class PlayGround extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
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
        //console.log(`res: ${JSON.stringify(response)}`);
        this.setState({ res: response });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container>
        <div className="editor">
          <Editor onChange={this.handleCodeChange} code={this.state.code} />
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
            <ResponseBox>res = {String(this.state.res.message)}</ResponseBox>
          </div>
        </div>
      </Container>
    );
  }
}

export default PlayGround;
/*
render() {
    return (
      <Container fluid>
        <Col>
          <Editor onChange={this.handleCodeChange} code={this.state.code} />
        </Col>
        <Col>
          <Row sm={6}>
            <Form>
              <Form.Group controlId="info">
                <Form.Label>Info</Form.Label>
              </Form.Group>
            </Form>
          </Row>
          <Row sm={1}>
            <Button type="button" onClick={this.handleRun}>
              Run
            </Button>
          </Row>
          <Row sm={5}>
            <ResponseBox>
              show={this.state.res.runStatus}
              message={this.state.res.message}
            </ResponseBox>
          </Row>
        </Col>
      </Container>
    );
  }
}
return (
        <div className='container'>
          <Form horizontal='true'>
            <FormGroup controlId='code'>
              <Col sm={12}>
                <Editor onChange={this.handleCodeChange} code={this.state.code} />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={2}>
                <Button type='button' onClick={this.handleRun}>
                  Run
                </Button>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={12}>
                <ResponseBox>
                  show={this.state.res.runStatus}
                  message={this.state.res.message}
                </ResponseBox>
              </Col>
            </FormGroup>
          </Form>
        </div>);
*/
