import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Templates from "./components/Templates";
import Dashboard from "./components/Dashboard";
import PRDGenerator from "./components/PRDGenerator";
import DashboardContainer from "./components/DashboardContainer";

const LandingWrapper: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (page: "landing" | "generator" | "templates" | "dashboard") => {
    if (page === "templates") navigate("/templates");
    else if (page === "dashboard") navigate("/dashboard");
    else if (page === "generator") navigate("/generator");
  };

  return <LandingPage onNavigate={handleNavigate} />;
};

// ✅ Proper wrapper for Templates page (so hooks like useNavigate work)
const TemplatesWrapper: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Templates
      onSelectTemplate={(template) => navigate("/generator", { state: { template } })}
      onBack={() => navigate("/landing")}
    />
  );
};

// ✅ Wrapper for PRDGenerator (to handle navigation)
const PRDGeneratorWrapper: React.FC = () => {
  const navigate = useNavigate();
  const state = history.state?.usr || {}; // fallback for React Router 6.x
  const template = state?.template;

  return (
    <PRDGenerator
      template={template}
      onSave={(prd) => console.log("✅ Saved PRD:", prd)}
      onBack={() => navigate("/landing")}
    />
  );
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

        {/* Landing Page */}
        <Route path="/landing" element={<LandingWrapper />} />

        
        <Route path="/dashboard" element={<DashboardContainer />} />
        {/* Templates Page */}
        <Route path="/templates" element={<TemplatesWrapper />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <Dashboard
              prds={[]} // your data array here
              onBack={() => window.history.back()}
            />
          }
        />

        {/* PRD Generator Page */}
        <Route path="/generator" element={<PRDGeneratorWrapper />} />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/signup" />} />
      </Routes>
    </Router>
  );
};

export default App;
