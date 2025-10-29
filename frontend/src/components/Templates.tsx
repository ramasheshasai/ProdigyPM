import React from 'react';
import { ArrowLeft, FileText, Sparkles, Bug, Rocket } from 'lucide-react';
import { PRDTemplate } from '../types/prd';

interface TemplatesProps {
  onSelectTemplate: (template: PRDTemplate) => void;
  onBack: () => void;
}

const Templates: React.FC<TemplatesProps> = ({ onSelectTemplate, onBack }) => {
  const templates: PRDTemplate[] = [
    {
      id: 'new-feature',
      name: 'New Feature PRD',
      description: 'For defining and launching a brand-new product feature from scratch.',
      category: 'new-feature',
      template: {
        problemStatement: `Users struggle to [specific issue], limiting engagement and retention.`,
        userPersonas: `Primary users: [Persona A - job role, needs]; Secondary users: [Persona B - motivation].`,
        painPoints: `Lack of automation, complex workflows, and missing integrations.`,
        overview: `Research shows 70% of users drop off during step 3 due to poor navigation.`,
        userFlow: `User logs in → navigates to [section] → performs [task] → receives [outcome].`,
        solution: `Introduce an intuitive feature that automates repetitive tasks and improves efficiency.`,
        features: `1. Core module for [action]\n2. Notification system\n3. Analytics dashboard`,
        technicalFeasibility: `Tech stack: React + Node.js + MongoDB. Requires integration with Auth API and metrics service.`,
        keyMetrics: `Adoption rate > 40%, task completion time reduced by 30%, NPS +10 points.`,
        futureScope: `Phase 2: Add AI-powered suggestions and integrations with 3rd-party tools.`,
      },
    },
    {
      id: 'enhancement',
      name: 'Feature Enhancement PRD',
      description: 'For improving an existing feature or refining its UX and performance.',
      category: 'enhancement',
      template: {
        problemStatement: `Current [feature] has usability gaps and limited visibility in analytics.`,
        userPersonas: `Existing customers who rely on [feature] for daily operations.`,
        painPoints: `Frequent slowdowns, confusing navigation, inconsistent output.`,
        overview: `Heatmap and feedback reveal low interaction rates in 2 main UI sections.`,
        userFlow: `User enters [module] → attempts [action] → faces [bottleneck].`,
        solution: `Redesign UI with improved information hierarchy and backend caching.`,
        features: `1. Faster data rendering\n2. Simplified layout\n3. Accessibility improvements`,
        technicalFeasibility: `Minor backend updates, front-end rework in React, low-risk deployment.`,
        keyMetrics: `Page load time < 2s, 20% increase in retention, 50% fewer support tickets.`,
        futureScope: `Introduce predictive assistance for common tasks.`,
      },
    },
    {
      id: 'bug-fix',
      name: 'Critical Bug Fix PRD',
      description: 'For identifying and resolving production bugs or stability issues.',
      category: 'bug-fix',
      template: {
        problemStatement: `Bug in [module] causing data inconsistency and user frustration.`,
        userPersonas: `All active users affected by version [X.Y.Z].`,
        painPoints: `Data not syncing correctly, incorrect error messages, and crashes.`,
        overview: `Log analysis shows 30% failure rate during API calls between components.`,
        userFlow: `User performs [action] → API fails → data loss occurs.`,
        solution: `Fix data sync logic, improve validation, and introduce retry mechanisms.`,
        features: `1. Refactor API endpoints\n2. Add logging middleware\n3. QA regression suite`,
        technicalFeasibility: `Requires code patch in microservice layer; testing in staging.`,
        keyMetrics: `Error rate < 1%, crash-free sessions > 99%.`,
        futureScope: `Automate monitoring and rollback in case of future similar issues.`,
      },
    },
    {
      id: 'mvp',
      name: 'MVP (Minimum Viable Product) PRD',
      description: 'For defining and launching the first minimal version of a product.',
      category: 'mvp',
      template: {
        problemStatement: `Need to validate market demand for [idea/problem space].`,
        userPersonas: `Early adopters in [industry/segment], typically small teams or startups.`,
        painPoints: `High manual effort in [process], lack of affordable tools.`,
        overview: `Market analysis indicates a gap in lightweight, no-frills solutions.`,
        userFlow: `User signs up → completes setup → achieves value in 5 minutes.`,
        solution: `Build core functionality to address one high-impact problem.`,
        features: `1. Authentication\n2. Core workflow\n3. Feedback collection`,
        technicalFeasibility: `Tech stack: MERN. Target 4-week sprint with limited team of 3 developers.`,
        keyMetrics: `>100 active users, 40% repeat usage, qualitative feedback collected.`,
        futureScope: `Phase 2: Add advanced analytics and integrations.`,
      },
    },
    {
      id: 'integration',
      name: 'Integration PRD',
      description: 'For building integrations between existing systems or third-party APIs.',
      category: 'integration',
      template: {
        problemStatement: `Teams manually transfer data between [Tool A] and [Tool B], causing inefficiency.`,
        userPersonas: `Ops and Analytics teams needing seamless workflow automation.`,
        painPoints: `Duplicate data entries, human error, lack of synchronization.`,
        overview: `Weekly 10+ hours lost per user due to disconnected tools.`,
        userFlow: `User performs [task] in Tool A → data syncs to Tool B automatically.`,
        solution: `Develop bi-directional API integration between both platforms.`,
        features: `1. Secure OAuth2 connection\n2. Sync scheduler\n3. Error handling dashboard`,
        technicalFeasibility: `API limit 500 calls/hour; must comply with both platforms’ authentication policies.`,
        keyMetrics: `Data sync success rate > 98%, time saved 8h/week per user.`,
        futureScope: `Add webhook-triggered automation and analytics tracking.`,
      },
    },
    {
      id: 'platform-redesign',
      name: 'Platform Redesign PRD',
      description: 'For complete visual and UX redesign of an existing product platform.',
      category: 'redesign',
      template: {
        problemStatement: `Outdated design and inconsistent branding affecting user perception.`,
        userPersonas: `Long-term users expecting modern UI; new users evaluating trial experience.`,
        painPoints: `Hard navigation, inconsistent UI components, low visual hierarchy.`,
        overview: `Usability testing score 65/100 — below market benchmarks.`,
        userFlow: `User signs up → explores dashboard → confusion with feature discoverability.`,
        solution: `Redesign entire platform with modular, accessible, and responsive design.`,
        features: `1. Unified design system\n2. Responsive grid\n3. Improved onboarding UX`,
        technicalFeasibility: `Requires front-end rebuild with React + Tailwind; minimal backend changes.`,
        keyMetrics: `Improved engagement by 50%, reduced churn by 25%, higher NPS.`,
        futureScope: `Introduce dark mode, micro-interactions, and adaptive layouts.`,
      },
    },
  ];


  const getIcon = (category: string) => {
    switch (category) {
      case 'new-feature':
        return <Sparkles className="h-6 w-6 text-olive-700" />;
      case 'enhancement':
        return <FileText className="h-6 w-6 text-orange-600" />;
      case 'bug-fix':
        return <Bug className="h-6 w-6 text-primary-600" />;
      case 'mvp':
        return <Rocket className="h-6 w-6 text-olive-600" />;
      default:
        return <FileText className="h-6 w-6 text-primary-600" />;
    }
  };

  const getBorderColor = (category: string) => {
    switch (category) {
      case 'new-feature':
        return 'border-olive-200 hover:border-olive-300';
      case 'enhancement':
        return 'border-orange-200 hover:border-orange-300';
      case 'bug-fix':
        return 'border-primary-200 hover:border-primary-300';
      case 'mvp':
        return 'border-olive-200 hover:border-olive-300';
      default:
        return 'border-primary-200 hover:border-primary-300';
    }
  };

  return (
    <div className="min-h-screen bg-beige-200">
      <div className="bg-primary-900 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-beige-300 hover:text-white transition-colors font-body"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </button>
            <h1 className="text-xl font-semibold text-white font-sans">PRD Templates</h1>
            <div></div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-primary-900 mb-2 font-sans">Choose a Template</h2>
          <p className="text-primary-600 font-body">
            Start with proven PRD structures. Each template includes essential sections and
            guidance for comprehensive product documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {templates.map((template) => (
            <div
              key={template.id}
              className={`bg-white border-2 ${getBorderColor(template.category)} rounded-lg p-6 
              hover:shadow-md transition-all`}
            >

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {getIcon(template.category)}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-primary-900 mb-2 font-sans">
                    {template.name}
                  </h3>
                  <p className="text-primary-600 text-sm leading-relaxed mb-4 font-body">
                    {template.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-primary-500 uppercase tracking-wide font-body">
                      {template.category.replace('-', ' ')}
                    </span>
                    <button
                      onClick={() => onSelectTemplate(template)}
                      className="text-olive-700 hover:text-olive-800 font-medium text-sm transition-colors font-body"
                    >
                      Use Template →
                    </button>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-sm p-8 border">
          <h3 className="text-xl font-semibold text-primary-900 mb-4 font-sans">
            What's included in every PRD Template?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TemplateFeature
              title="Problem Statement"
              description="Defines the core issue or challenge being solved."
            />
            <TemplateFeature
              title="Target Audience"
              description="Describes the specific users or segments affected."
            />
            <TemplateFeature
              title="Goals & Objectives"
              description="Outlines the expected business or user outcomes."
            />
            <TemplateFeature
              title="Features Needed"
              description="Lists functional modules, enhancements, and requirements."
            />
            <TemplateFeature
              title="Constraints & Dependencies"
              description="Covers time, technical, and resource limitations."
            />
            <TemplateFeature
              title="User Stories"
              description="Provides user-centered scenarios and detailed actions."
            />
            <TemplateFeature
              title="Acceptance Criteria"
              description="Defines success conditions and completion standards."
            />
            <TemplateFeature
              title="Key Metrics"
              description="Lists KPIs or measurable indicators for validation."
            />

            <TemplateFeature
              title="Future Scope"
              description="Identifies expansion opportunities and future improvements."
            />
          </div>
        </div>

      </div>
    </div>
  );
};

interface TemplateFeatureProps {
  title: string;
  description: string;
}

const TemplateFeature: React.FC<TemplateFeatureProps> = ({ title, description }) => {
  return (
    <div>
      <h4 className="font-medium text-primary-900 mb-1 font-sans">{title}</h4>
      <p className="text-sm text-primary-600 font-body">{description}</p>
    </div>
  );
};

export default Templates;