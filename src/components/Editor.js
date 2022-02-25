import React from "react";
import PropTypes from "prop-types";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";

const editorstyle = {
  boarder: "1px solid lightgray",
  width: "inherit",
  height: "100%"
};

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
  }

  onChange(newValue) {
    this.props.onChange(newValue);
  }

  render() {
    return (
      <AceEditor
        onChange={this.onChange}
        style={editorstyle}
        mode="java"
        theme="monokai"
        fontSize={14}
        showPrintMargin
        showGutter
        highlightActiveLine
        value={this.props.code}
        editorProps={{
          $blockScrolling: true
        }}
        setOptions={{
          showLineNumbers: true,
          tabSize: 4
        }}
      />
    );
  }
}

Editor.propTypes = {
  code: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Editor;
