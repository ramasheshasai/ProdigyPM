import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App: React.FC = () => {
  const isAuthenticated = localStorage.getItem("authToken"); // or use context later

  return (
    <Router>
      <Routes>
        {/* Default route — redirect to login if not authenticated */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <LandingPage onNavigate={() => {}} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Optional: Catch-all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
