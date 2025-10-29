import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";
import { PRD } from "../types/prd";

const DashboardContainer: React.FC = () => {
  const [prds, setPrds] = useState<PRD[]>([]);
  const navigate = useNavigate();

 useEffect(() => {
  const fetchPRDs = async () => {
    const userId = localStorage.getItem("userId");
    const response = await fetch(`http://localhost:5000/api/prds/${userId}`);
    const data = await response.json();
    setPrds(data);
  };
  fetchPRDs();
}, []);


  return <Dashboard prds={prds} onBack={() => navigate("/landing")} />;
};

export default DashboardContainer;
