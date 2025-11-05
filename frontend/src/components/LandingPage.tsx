import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Zap, Users, Download, ArrowRight, LogOut, Workflow } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: 'landing' | 'generator' | 'templates' | 'dashboard') => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9FAFB] to-[#F0F4F8] font-sans">
      {/* ======================== NAVBAR ======================== */}
      <nav className="bg-primary-900 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FileText className="h-8 w-8 text-olive-400" />
            <span className="text-2xl font-semibold text-white tracking-wide">
              ProdigyPM
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => onNavigate('templates')}
              className="text-beige-300 hover:text-white transition-colors"
            >
              Templates
            </button>
            <button
              onClick={() => onNavigate('dashboard')}
              className="text-beige-300 hover:text-white transition-colors"
            >
              Dashboard
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-beige-300 hover:text-red-400 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </nav>

      {/* ======================== HERO ======================== */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl font-extrabold text-primary-900 mb-6 leading-tight">
          Simplify Your Product Documentation with
          <span className="text-olive-700"> ProdigyPM</span>
        </h1>
        <p className="text-lg text-primary-700 mb-10 max-w-2xl mx-auto leading-relaxed">
          Empower your product team with structured, insightful, and collaborative PRDs.
          Turn ideas into well-defined product requirements — faster, clearer, and smarter.
        </p>
        <button
          onClick={() => onNavigate('generator')}
          className="bg-olive-700 hover:bg-olive-800 text-white px-10 py-4 rounded-xl text-lg font-semibold 
                     shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300
                     flex items-center justify-center mx-auto space-x-2"
        >
          <span>Create New PRD</span>
          <ArrowRight className="h-5 w-5" />
        </button>
      </section>

      {/* ======================== FEATURES ======================== */}
      <section className="max-w-7xl mx-auto px-6 pt-13 pb-10">
        <h2 className="text-3xl font-bold text-center text-primary-900 mb-14">
          Everything You Need to Build Clear, Impactful PRDs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <FeatureCard
            icon={<Zap className="h-8 w-8 text-olive-700" />}
            title="Structured Templates"
            description="Choose from ready-to-use PRD frameworks designed by product experts. Focus on strategy, not formatting."
          />
          <FeatureCard
            icon={<Workflow className="h-8 w-8 text-orange-600" />}
            title="Smart Workflow"
            description="Follow guided prompts to ensure every key section — from vision to KPIs — is covered with clarity."
          />
          <FeatureCard
            icon={<Users className="h-8 w-8 text-primary-600" />}
            title="Collaborate & Share"
            description="Export in multiple formats or share directly with stakeholders to align vision across teams."
          />
          <FeatureCard
            icon={<Download className="h-8 w-8 text-olive-600" />}
            title="PRD Library"
            description="Store, version, and revisit your documents — all your product requirements in one organized space."
          />
        </div>
      </section>

      {/* ======================== STATS ======================== */}
      <section className="bg-white py-16 border-t border-primary-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <Stat number="85%" label="Time Saved per PRD" />
          <Stat number="10+" label="Predefined Sections" />
          <Stat number="4+" label="Expert Templates" />
        </div>
      </section>

      {/* ======================== CTA ======================== */}
      <section className="bg-primary-900 py-20 mt-10">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-5">
            Document with Confidence and Clarity
          </h2>
          <p className="text-beige-300 text-lg mb-9">
            From discovery to delivery — ProdigyPM helps teams define, structure, and communicate product goals effectively.
          </p>
          <button
            onClick={() => onNavigate('generator')}
            className="bg-olive-700 hover:bg-olive-800 text-white px-10 py-3 rounded-xl text-lg font-semibold 
                       shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            Start Creating
          </button>
        </div>
      </section>
    </div>
  );
};

/* ======================== FEATURE CARD ======================== */
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-primary-100">
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-primary-900 mb-3">{title}</h3>
    <p className="text-primary-700 leading-relaxed text-sm">{description}</p>
  </div>
);

/* ======================== STAT CARD ======================== */
interface StatProps {
  number: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ number, label }) => (
  <div className="flex flex-col items-center">
    <div className="text-5xl font-extrabold text-olive-700 mb-3">{number}</div>
    <div className="text-primary-600 text-lg">{label}</div>
  </div>
);

export default LandingPage;
