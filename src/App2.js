import React, { Component } from "react";
import Blog2 from "./containers/Blog/Blog2";
import { BrowserRouter } from "react-router-dom";
import FullPost from "./containers/Blog/FullPost/FullPost";
import Courses from "./components/Courses";

const App2 = () => (
  <BrowserRouter>
    <div className="App">
      <Blog2 />
    </div>
  </BrowserRouter>
);

export default App2;
