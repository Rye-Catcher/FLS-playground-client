import React from "react";
import { FormControl } from "react-bootstrap";

class ResponseBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <FormControl
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
