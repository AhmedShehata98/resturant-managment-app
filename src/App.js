import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

//components
import Routes from "./Routes/Routes";

import "./scss/custom.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
