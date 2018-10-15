import React from "react";
import ReactDOM from "react-dom";
import Playground from 'component-playground';

import Modal from '../src/index';
import modalExample from "raw!./examples/modal.example";

import "./styles/syntax.css";
import "./styles/codemirror.css";
import "./styles/demo.css";

const Index = () => (
  <div>
    <Playground
      codeText={modalExample}
      scope={{React: React, Modal: Modal}}
    />
  </div>
);

ReactDOM.render(<Index />, document.getElementById("content"));
