import './App.css';
import { MARKDOWN } from '../constants.js';
import { marked } from 'marked';

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: MARKDOWN
    }
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }
ґ
  getMarkdownText() {
    marked.use({
      breaks: true,
      gfm: true,
    });

    var rawMarkup = marked.parse(this.state.input);
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div id="main">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div>
          <div className="editorWrap">
            <div className="toolbar">
              <i className="fa fa-free-code-camp">

              </i>
              Editor
            </div>
            <textarea id="editor" type="text" value={this.state.input} onChange={this.handleChange} />
          </div>
          <div className="previewWrap">
            <div className="toolbar">
              <i className="fa fa-free-code-camp">

              </i>
              Previewer
            </div>
            <div id="preview" dangerouslySetInnerHTML={this.getMarkdownText()} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
