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
        Feel free to run examples provided in
        <a href="https://github.com/Rye-Catcher/FLiteSharp/tree/master/app/src/main/resources"> this link </a>
        <br />
        Some interesting features of FLite# are: units of measure and pattern matching. 
        You can check it
        <a href="https://github.com/Rye-Catcher/FLiteSharp/blob/master/documentation"> here </a>
        <br />
        <br />
        The first response sent from server may be slow. Please wait.
      </Card.Text>
    </Card.Body>
  </Card>
);

export default Info;
