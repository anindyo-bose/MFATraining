import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import Header from "./Header";

import "./index.scss";

const App = () => (
  <div >
    <Header/>
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
