import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import ColorList from "./components/ColorList";

const App = () => {
  return (
    <div className="container">
      <ColorList colorList={['#122f37', '#2595c2', '#f7dc6f', '#6495ed', '#16a085', '#34495e', '#f39c12', '#f53b57', '#e67e22']} />
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
