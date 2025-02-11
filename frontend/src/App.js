import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SuccessPage from "./components/SuccessPage";
import StoryPage from "./components/StoryPage"
import InstaInfo from "./components/InstaLinkingInfo"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/instainfo" element={<InstaInfo />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
//comment to redeploy