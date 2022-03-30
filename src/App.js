import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

// Same thing below
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams></SearchParams>
    </div>
  );
};

ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById("root"));
