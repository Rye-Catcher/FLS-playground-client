import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import Editor from "./Editor";
import ResponseBox from "./ResponseBox";
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
            <ResponseBox res={this.state.res.message} />
          </div>
        </div>
      </Container>
    );
  }
}

export default PlayGround;
