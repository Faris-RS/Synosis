import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Viewpage from "./pages/Viewpage";
import CreatePage from "./pages/CreatePage";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={"/view"} />} />
          <Route path="/view" element={<Viewpage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Router>
    </>
  );
}
