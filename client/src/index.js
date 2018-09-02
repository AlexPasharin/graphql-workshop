import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <App />;
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
