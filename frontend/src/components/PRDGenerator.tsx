import React, { useState, useEffect } from 'react';
import { ArrowLeft, Zap } from 'lucide-react';
import { PRD } from '../types/prd';
import PRDOutput from './PRDOutput';

interface PRDGeneratorProps {
  onSave: (prd: PRD) => void;
  template?: any;
  onBack: () => void;
}

const PRDGenerator: React.FC<PRDGeneratorProps> = ({ onSave, template, onBack }) => {
  const [formData, setFormData] = useState({
    problemStatement: '',
    targetAudience: '',
    goals: '',
    features: '',
    constraints: '',
    userPersonas: '',
    painPoints: '',
    overview: '',
    userFlow: '',
    solution: '',
    technicalFeasibility: '',
    keyMetrics: '',
    futureScope: ''
  });

  const [generatedPRD, setGeneratedPRD] = useState<PRD | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (template) {
      setFormData(template.template);
    }
  }, [template]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generatePRD = async () => {
    setIsGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 2000));

    const prd: PRD = {
      title: extractTitle(formData.problemStatement),
      problemStatement: formData.problemStatement,
      targetAudience: formData.targetAudience,
      goals: formData.goals,
      features: formData.features,
      constraints: formData.constraints,
      objectives: generateObjectives(formData.goals),
      userStories: generateUserStories(formData.targetAudience, formData.features),
      requirements: generateRequirements(formData.features),
      acceptanceCriteria: generateAcceptanceCriteria(formData.features),
      metrics: generateMetrics(formData.goals),
      risks: generateRisks(formData.constraints),
      createdAt: new Date()
    };

    setGeneratedPRD(prd);
    setIsGenerating(false);
  };

  const extractTitle = (problemStatement: string): string => {
    const words = problemStatement.split(' ').slice(0, 6);
    return words.length > 0 ? `PRD: ${words.join(' ')}...` : 'Product Requirement Document';
  };

  const generateObjectives = (goals: string): string[] => [
    `Deliver a solution that addresses: ${goals}`,
    'Ensure user adoption meets target metrics',
    'Maintain system performance and reliability',
    'Provide measurable business value'
  ];

  const generateUserStories = (audience: string, features: string): string[] => [
    `As a ${audience}, I want to use ${features} so that I can achieve my goal.`,
    `As a ${audience}, I want intuitive design so that I can use it easily.`,
    'As a stakeholder, I want measurable metrics to track progress.'
  ];

  const generateRequirements = (features: string): string[] => [
    'Functional Requirements:',
    `- Implement ${features}`,
    '- Responsive UI design',
    '- User authentication and authorization',
    '',
    'Non-Functional Requirements:',
    '- 99.9% uptime',
    '- Accessibility compliance',
    '- Secure data handling'
  ];

  const generateAcceptanceCriteria = (features: string): string[] => [
    '✓ Feature works as described',
    '✓ All user stories are satisfied',
    '✓ UI responsive on all devices',
    '✓ Performance benchmarks met'
  ];

  const generateMetrics = (goals: string): string[] => [
    'User Adoption: 80% of target users within 30 days',
    'Performance: Task time reduced by 40%',
    'Quality: Less than 2% error rate',
    'Satisfaction: 4.5+ star user feedback'
  ];

  const generateRisks = (constraints: string): string[] => [
    `Technical Risk: ${constraints || 'Integration challenges'}`,
    'Timeline Risk: External dependencies',
    'User Adoption Risk: Training requirements',
    'Security Risk: Data privacy and compliance'
  ];

  if (generatedPRD) {
  const handleSave = async () => {
    const userId = localStorage.getItem("userId"); // 🔑 Get logged-in user's ID
    if (!userId) {
      alert("User not found — please log in again.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/prds", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...generatedPRD, userId }),
      });

      if (response.ok) {
        alert("✅ PRD saved successfully!");
        onSave(generatedPRD);
      } else {
        alert("❌ Failed to save PRD.");
      }
    } catch (err) {
      console.error("Error saving PRD:", err);
      alert("⚠️ Something went wrong while saving the PRD.");
    }
  };

  return (
    <PRDOutput
      prd={generatedPRD}
      onSave={handleSave} // 👈 use the new function
      onBack={() => setGeneratedPRD(null)}
      onHome={onBack}
    />
  );
}


  return (
    <div className="min-h-screen bg-beige-200">
      <div className="bg-primary-900 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-beige-300 hover:text-white transition-colors font-body"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </button>
            <h1 className="text-xl font-semibold text-white font-sans">Create PRD</h1>
            <div></div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 border border-primary-200">
          <h2 className="text-2xl font-bold text-primary-900 mb-2 font-sans">
            Document Your Product Requirements
          </h2>
          <p className="text-primary-600 font-body mb-8">
            Complete the sections below to create a structured Product Requirement Document.
          </p>

          <form className="space-y-6">
            {/* Existing fields */}
            <Textarea label="Scenario / Problem Statement *" field="problemStatement" value={formData.problemStatement} placeholder="Describe the problem..." onChange={handleInputChange} />
            <Input label="Target Audience / Users *" field="targetAudience" value={formData.targetAudience} placeholder="Who will use this feature?" onChange={handleInputChange} />
            <Input label="Goals / Outcomes *" field="goals" value={formData.goals} placeholder="What do you want to achieve?" onChange={handleInputChange} />
            <Textarea label="Features Needed *" field="features" value={formData.features} placeholder="List the key features..." onChange={handleInputChange} />
            <Textarea label="Constraints / Dependencies" field="constraints" value={formData.constraints} placeholder="Any technical, time, or resource constraints..." onChange={handleInputChange} />

            {/* New fields */}
            <Textarea label="User Personas" field="userPersonas" value={formData.userPersonas} placeholder="Who are the types of users?" onChange={handleInputChange} />
            <Textarea label="Pain Points" field="painPoints" value={formData.painPoints} placeholder="What problems are users facing?" onChange={handleInputChange} />
            <Textarea label="Overview" field="overview" value={formData.overview} placeholder="Brief overview of the solution..." onChange={handleInputChange} />
            <Textarea label="User Flow" field="userFlow" value={formData.userFlow} placeholder="Describe the user journey..." onChange={handleInputChange} />
            <Textarea label="Solution" field="solution" value={formData.solution} placeholder="Proposed solution and benefits..." onChange={handleInputChange} />
            <Textarea label="Technical Feasibility" field="technicalFeasibility" value={formData.technicalFeasibility} placeholder="Any technical challenges or dependencies..." onChange={handleInputChange} />
            <Textarea label="Key Metrics" field="keyMetrics" value={formData.keyMetrics} placeholder="How will success be measured?" onChange={handleInputChange} />
            <Textarea label="Future Scope" field="futureScope" value={formData.futureScope} placeholder="Possible improvements or expansions..." onChange={handleInputChange} />

            {/* Submit button */}
            <button
              type="button"
              onClick={generatePRD}
              disabled={
                !formData.problemStatement ||
                !formData.targetAudience ||
                !formData.goals ||
                !formData.features ||
                isGenerating
              }
              className="w-full bg-olive-700 hover:bg-olive-800 disabled:bg-primary-400 text-white px-6 py-4 rounded-lg 
                       text-lg font-semibold transition-colors flex items-center justify-center space-x-2 font-sans"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Creating Document...</span>
                </>
              ) : (
                <>
                  <Zap className="h-5 w-5" />
                  <span>Create PRD</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// ✅ Reusable Input and Textarea components
interface FieldProps {
  label: string;
  field: string;
  value: string;
  placeholder: string;
  onChange: (field: string, value: string) => void;
}

const Input: React.FC<FieldProps> = ({ label, field, value, placeholder, onChange }) => (
  <div>
    <label className="block text-sm font-semibold text-primary-900 mb-2 font-sans">{label}</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(field, e.target.value)}
      className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-olive-500 
                 focus:border-olive-500 transition-colors font-body bg-beige-50"
      placeholder={placeholder}
    />
  </div>
);

const Textarea: React.FC<FieldProps> = ({ label, field, value, placeholder, onChange }) => (
  <div>
    <label className="block text-sm font-semibold text-primary-900 mb-2 font-sans">{label}</label>
    <textarea
      value={value}
      onChange={(e) => onChange(field, e.target.value)}
      rows={3}
      className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-olive-500 
                 focus:border-olive-500 resize-none transition-colors font-body bg-beige-50"
      placeholder={placeholder}
    />
  </div>
);

export default PRDGenerator;
