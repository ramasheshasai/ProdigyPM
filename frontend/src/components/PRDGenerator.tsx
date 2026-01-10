import React, { useState, useEffect } from "react";
import { ArrowLeft, Zap } from "lucide-react";
import { PRD } from "../types/prd";
import PRDOutput from "./PRDOutput";

interface PRDGeneratorProps {
  onSave: (prd: PRD) => void;
  template?: any;
  onBack: () => void;
}

const PRDGenerator: React.FC<PRDGeneratorProps> = ({
  onSave,
  template,
  onBack,
}) => {
  const [formData, setFormData] = useState({
    problemStatement: "",
    targetAudience: "",
    goals: "",
    features: "",
    constraints: "",
    userPersonas: "",
    painPoints: "",
    overview: "",
    userFlow: "",
    solution: "",
    technicalFeasibility: "",
    keyMetrics: "",
    futureScope: "",
  });

  const [generatedPRD, setGeneratedPRD] = useState<PRD | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (template) {
      setFormData(template({
        ...template.template,
      });
    }
  }, [template]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const generatePRD = async () => {
    setIsGenerating(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const prd: PRD = {
      title: extractTitle(formData.problemStatement),
      problemStatement: formData.problemStatement,
      targetAudience: formData.targetAudience,
      goals: formData.goals,
      features: formData.features,
      constraints: formData.constraints,
      objectives: generateObjectives(formData.goals),
      userStories: generateUserStories(
        formData.targetAudience,
        formData.features
      ),
      requirements: generateRequirements(formData.features),
     acceptanceCriteria: generateAcceptanceCriteria(),
metrics: generateMetrics(),
risks: generateRisks(formData.constraints),

      createdAt: new Date(),
    };

    setGeneratedPRD(prd);
    setIsGenerating(false);
  };

  const extractTitle = (problemStatement: string): string => {
    const words = problemStatement.split(" ").slice(0, 6);
    return words.length
      ? `PRD: ${words.join(" ")}...`
      : "Product Requirement Document";
  };

  const generateObjectives = (goals: string): string[] => [
    `Deliver a solution that addresses: ${goals}`,
    "Ensure user adoption meets target metrics",
    "Maintain system performance and reliability",
    "Provide measurable business value",
  ];

  const generateUserStories = (
    audience: string,
    features: string
  ): string[] => [
    `As a ${audience}, I want to use ${features} so that I can achieve my goal.`,
    `As a ${audience}, I want intuitive design so that I can use it easily.`,
    "As a stakeholder, I want measurable metrics to track progress.",
  ];

  const generateRequirements = (features: string): string[] => [
    "Functional Requirements:",
    `- Implement ${features}`,
    "- Responsive UI design",
    "- User authentication and authorization",
    "",
    "Non-Functional Requirements:",
    "- 99.9% uptime",
    "- Accessibility compliance",
    "- Secure data handling",
  ];

  const generateAcceptanceCriteria = (): string[] => [
    "✓ Feature works as described",
    "✓ All user stories are satisfied",
    "✓ UI responsive on all devices",
    "✓ Performance benchmarks met",
  ];

  const generateMetrics = (): string[] => [
    "User Adoption: 80% of target users within 30 days",
    "Performance: Task time reduced by 40%",
    "Quality: Less than 2% error rate",
    "Satisfaction: 4.5+ star user feedback",
  ];

  const generateRisks = (constraints: string): string[] => [
    `Technical Risk: ${constraints || "Integration challenges"}`,
    "Timeline Risk: External dependencies",
    "User Adoption Risk: Training requirements",
    "Security Risk: Data privacy and compliance",
  ];

  // ================= SAVE PRD (FIXED FOR PRODUCTION) =================
  if (generatedPRD) {
    const handleSave = async () => {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        alert("User not found — please log in again.");
        return;
      }

      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/prds`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...generatedPRD, userId }),
          }
        );

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
        onSave={handleSave}
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
              className="flex items-center space-x-2 text-beige-300 hover:text-white"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </button>
            <h1 className="text-xl font-semibold text-white">Create PRD</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 border">
          <form className="space-y-6">
            <Textarea label="Problem Statement" field="problemStatement" value={formData.problemStatement} placeholder="Describe the problem..." onChange={handleInputChange} />
            <Input label="Target Audience" field="targetAudience" value={formData.targetAudience} placeholder="Who will use this?" onChange={handleInputChange} />
            <Input label="Goals" field="goals" value={formData.goals} placeholder="What do you want to achieve?" onChange={handleInputChange} />
            <Textarea label="Features" field="features" value={formData.features} placeholder="Key features..." onChange={handleInputChange} />
            <Textarea label="Constraints" field="constraints" value={formData.constraints} placeholder="Constraints..." onChange={handleInputChange} />

            <button
              type="button"
              onClick={generatePRD}
              disabled={isGenerating}
              className="w-full bg-olive-700 hover:bg-olive-800 text-white py-4 rounded-lg flex items-center justify-center space-x-2"
            >
              {isGenerating ? "Creating..." : <><Zap className="h-5 w-5" /><span>Create PRD</span></>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// ================= REUSABLE INPUTS =================

interface FieldProps {
  label: string;
  field: string;
  value: string;
  placeholder: string;
  onChange: (field: string, value: string) => void;
}

const Input: React.FC<FieldProps> = ({
  label,
  field,
  value,
  placeholder,
  onChange,
}) => (
  <div>
    <label className="block font-semibold mb-2">{label}</label>
    <input
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
  onChange(field, e.target.value)
}

      className="w-full border rounded-lg px-4 py-3"
      placeholder={placeholder}
    />
  </div>
);

const Textarea: React.FC<FieldProps> = ({
  label,
  field,
  value,
  placeholder,
  onChange,
}) => (
  <div>
    <label className="block font-semibold mb-2">{label}</label>
    <textarea
      value={value}
      onChange={(e) => onChange(field, e.target.value)}
      rows={3}
      className="w-full border rounded-lg px-4 py-3"
      placeholder={placeholder}
    />
  </div>
);

export default PRDGenerator;
