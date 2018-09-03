import React from "react";
import ReactDOM from "react-dom";

import './index.css';

import App from "./App";

class Root extends React.Component {
  render() {
    return <App />;
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
