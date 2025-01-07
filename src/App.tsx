import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import DetailPage from "./pages/detail";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/detail" element={<DetailPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
