import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Templates from "./components/Templates";

// ✅ A wrapper for LandingPage to handle navigation properly
const LandingWrapper: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (page: "landing" | "generator" | "templates" | "dashboard") => {
    if (page === "templates") navigate("/templates");
    else if (page === "dashboard") navigate("/dashboard");
    else if (page === "generator") navigate("/generator");
  };

  return <LandingPage onNavigate={handleNavigate} />;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Default route → Signup */}
        <Route path="/" element={<Navigate to="/signup" />} />

        {/* Signup Page */}
        <Route path="/signup" element={<Signup />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* ✅ Landing Page with routing */}
        <Route path="/landing" element={<LandingWrapper />} />

        {/* ✅ Templates Page */}
        <Route
          path="/templates"
          element={
            <Templates
              onSelectTemplate={() => {}}
              onBack={() => window.history.back()}
            />
          }
        />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/signup" />} />
      </Routes>
    </Router>
  );
};

export default App;
