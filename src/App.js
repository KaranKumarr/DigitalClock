import React from "react";
import Clock from "./Clock";
import "./index.css";
import Navbar from './Navbar.jsx'

const App = () => {
  return (
    <>
      <div className="content">

        <Navbar />
        <Clock />

      </div>
    </>
  );
};

export default App;
