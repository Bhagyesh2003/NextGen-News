import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Business from "./pages/Business";
import Technology from "./pages/Technology";
import Health from "./pages/Health";
import Sports from "./pages/Sports";
import Science from "./pages/Science";
import Entertainment from "./pages/Entertainment";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/business" element={<Business />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/health" element={< Health />} />
        <Route path="/science" element={<Science />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

//19cdd0eaab164db7a625c6326ffe6ccb -- NewsAPI key