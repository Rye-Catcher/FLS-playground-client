import React from "react";
import { Card } from "react-bootstrap";

const Info = () => (
  <Card className="view-info">
    <Card.Body className="view-info-body">
      <Card.Text>
        This website is a playground to try FLite# programming language.
        <br />
        FLite# is a subset of F# programming language developed by Team
        Salamanca as their project for CS4215 module in NUS. You can check it
        out on
        <a href="https://github.com/Rye-Catcher/FLiteSharp"> GitHub </a>
        <br />
        <br />
        Currently this platform is only able to parse and evaluate simple calculator
        language. More specifically, it supports basic arithmetic operations{" "}
        <code>+, -, *, /, **</code> and boolean operations <code>and, or</code>{" "}
        .
        <br />
        <br />
        The first response sent from server may be slow. Please wait.
      </Card.Text>
    </Card.Body>
  </Card>
);

export default Info;
