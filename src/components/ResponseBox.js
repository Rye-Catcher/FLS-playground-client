import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";

const boxStyle = {
  boarder: "1px solid lightgray",
  width: "inherit",
  height: "50%"
  //overflow: "hidden",
  //position: "relative"
};

class ResponseBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //console.log(`props.res: ${this.props.res}`);
    return (
      <AceEditor
        style={boxStyle}
        mode="java"
        theme="monokai"
        readOnly
        fontSize={14}
        //showPrintMargin
        //showGutter
        highlightActiveLine
        value={this.props.res}
        editorProps={{
          $blockScrolling: true
        }}
        setOptions={{
          showLineNumbers: false,
          tabSize: 4
        }}
      />
    );
  }
}

export default ResponseBox;
