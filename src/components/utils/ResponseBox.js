import React from "react";
import { FormControl } from "react-bootstrap";

const boxStyle = {
  boarder: "1px solid lightgray",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative"
};

class ResponseBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <FormControl
        style={boxStyle}
        name="code"
        type="textarea"
        componentclass="textarea"
        rows="8"
        readOnly
        value={this.props.message}
      />
    );
  }
}

export default ResponseBox;
