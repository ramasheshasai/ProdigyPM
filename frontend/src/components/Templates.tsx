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
      id: "new-feature",
      name: "New Feature PRD",
      description: "Define and deliver a new capability that drives measurable user value.",
      category: "new-feature",
      template: {
        problemStatement: `Users currently face friction in accomplishing [core task], resulting in 
      reduced engagement and a decline in overall satisfaction. Current solutions are fragmented, forcing users to rely on external tools or manual steps that slow down productivity.`,
        userPersonas: `Primary: Active users who frequently engage with [core product area] and seek a faster, more intuitive experience.\nSecondary: New users evaluating the platform for
       its ease of use, discoverability, and efficiency in achieving outcomes.`,
        painPoints: `Users struggle with manual, repetitive steps that increase cognitive load. Lack of streamlined workflows leads to frustration, decreased productivity, and eventual churn.`,
        overview: `Usage analytics highlight a consistent drop-off at the [specific step or stage] of the workflow. Feedback from user interviews and surveys 
      indicates that the absence of [specific capability] is a recurring theme affecting engagement and retention.`,
        userFlow: `User launches the platform → navigates to [specific module] → initiates [task or action] → 
      encounters friction or confusion due to missing or unclear functionality → abandons task or exits session.`,
        solution: `Develop and introduce a new feature module that automates key repetitive tasks, improves clarity in navigation, and enhances task completion rates. The experience should feel natural, 
      integrated, and outcome-focused — reducing the time to value for users.`,
        features: `Core components include a unified workspace with guided interactions, contextual help, and progress feedback.
       The feature will seamlessly connect to existing modules and maintain UI/UX consistency.`,
        technicalFeasibility: `Implementation through the MERN stack leveraging modular architecture for scalability. Requires integration with existing authentication, analytics, 
      and data storage services to maintain user continuity and real-time insights.`,
        keyMetrics: `↑ Retention (x%), ↓ Task completion time (−y%), ↑ NPS (z).`,
        futureScope: `Next phase: Add personalization and AI-driven recommendations.`,
      },
    },
    {
      id: "enhancement",
      name: "Feature Enhancement PRD",
      description: "Refine and optimize an existing feature to improve usability, performance, and user satisfaction.",
      category: "enhancement",
      template: {
        problemStatement: `The current [feature] exhibits usability and performance gaps that limit its effectiveness. Users encounter friction while completing routine actions, resulting in reduced adoption and inconsistent engagement across sessions.`,

        userPersonas: `Primary: Existing customers who use [feature] as part of their daily workflow and depend on it for task completion.\nSecondary: Occasional users who engage intermittently but expect reliability and responsiveness when needed.`,

        painPoints: `Users report frequent lags during interaction, unclear navigation patterns, and unpredictable outcomes that create distrust in the system. This impacts both efficiency and user confidence.`,

        overview: `User feedback, heatmaps, and analytics indicate low engagement in critical sections of the UI. Performance tracing reveals that backend response times and client-side rendering inefficiencies contribute to slower load experiences and feature abandonment.`,

        userFlow: `User accesses [module] → initiates [task/action] → experiences delays or confusion at [specific step] → drops or retries multiple times before completion.`,

        solution: `Redesign and optimize the existing feature by introducing a cleaner layout, clearer navigation cues, and backend caching improvements. The goal is to make the feature more intuitive, faster, and consistent without altering its core functionality.`,

        features: `Enhancements include an improved layout hierarchy, optimized API calls for faster data retrieval, and accessibility improvements for inclusive usage. The update should preserve familiar patterns while elevating overall user satisfaction.`,

        technicalFeasibility: `Requires focused front-end refactoring in React for rendering optimization and lightweight backend updates for data caching. Deployment considered low-risk as changes are isolated and backward-compatible.`,

        keyMetrics: `Target outcomes: reduced page load time (x seconds), improved retention (y%), and decrease in user-reported support tickets (z%).`,

        futureScope: `Future iterations may introduce intelligent suggestions, predictive task flows, and analytics dashboards to continuously enhance user experience.`,
      },
    },

    {
      id: "bug-fix",
      name: "Bug Fix PRD",
      description: "Address and resolve a high-priority production issue impacting stability, data integrity, and user trust.",
      category: "bug-fix",
      template: {
        problemStatement: `A critical defect in [module] is leading to inconsistent data handling and frequent user disruptions. This issue directly impacts live sessions, resulting in broken workflows and loss of confidence among active users.`,

        userPersonas: `Primary: Active users operating on version [X.Y.Z] who depend on uninterrupted workflows for daily operations.\nSecondary: Support and QA teams monitoring system health and user complaints.`,

        painPoints: `Users are experiencing incorrect data synchronization, misleading error prompts, and intermittent crashes during high-load operations. These issues degrade reliability and delay key user actions.`,

        overview: `System monitoring and log reports indicate a significant spike in API call failures between [service A] and [service B], affecting roughly x% of active sessions. Root cause analysis points to improper exception handling and synchronization gaps across dependent modules.`,

        userFlow: `User triggers [specific action] → API request fails mid-operation → transaction rollback incomplete → inconsistent data stored → user receives unclear error feedback.`,

        solution: `Implement a structured patch focusing on synchronization logic, enhanced input validation, and reliable retry mechanisms. Additionally, introduce robust error handling to prevent data corruption and improve traceability for debugging.`,

        features: `Key improvements include optimized API response validation, enhanced logging middleware for better observability, and a comprehensive regression testing suite to verify stability before deployment.`,

        technicalFeasibility: `Patch implementation limited to the microservice communication layer and associated APIs. Requires end-to-end testing in staging before production rollout to ensure compatibility and performance integrity.`,

        keyMetrics: `Expected outcomes include reduced API failure rate (x%), improved crash-free session rate (y%), and lower user-reported issue count (z%).`,

        futureScope: `Future iterations aim to automate anomaly detection, integrate rollback safety nets, and implement real-time error alerting to proactively address similar issues.`,
      },
    },

    {
      id: "mvp",
      name: "MVP (Minimum Viable Product) PRD",
      description: "Define, develop, and launch the first minimal product version to validate market potential and user demand.",
      category: "mvp",
      template: {
        problemStatement: `There is an unmet need in the [idea/problem space], where users lack an efficient and accessible solution to streamline their core tasks. The MVP aims to validate the product-market fit by addressing a focused problem with measurable impact.`,

        userPersonas: `Primary: Early adopters in [industry/segment], primarily small teams or startups seeking simple, efficient tools.\nSecondary: Founders and innovators exploring lightweight alternatives to complex enterprise systems.`,

        painPoints: `Current solutions are overly complex or expensive. Users face high manual effort, fragmented workflows, and limited customization options that slow adoption and productivity.`,

        overview: `Market research and competitive analysis highlight a significant gap for an intuitive, no-frills tool offering essential capabilities with minimal setup. Early interviews confirm user interest in a lean, outcome-driven product that delivers quick value.`,

        userFlow: `User discovers product → signs up using basic credentials → completes initial setup → performs the key workflow → achieves a tangible result within x minutes of onboarding.`,

        solution: `Develop a focused MVP that includes only the essential components required for early validation. Emphasize ease of use, speed, and reliability to deliver immediate user value while collecting behavioral insights.`,

        features: `Core components include user authentication for secure access, a streamlined workflow addressing the core task, and a lightweight feedback mechanism to gather early insights for iteration.`,

        technicalFeasibility: `To be implemented using the MERN stack for rapid prototyping and scalability. Estimated development window: x weeks, handled by a small cross-functional team to accelerate delivery and feedback loops.`,

        keyMetrics: `Success measured by early adoption (x active users), repeat engagement rate (y%), and qualitative feedback indicating product-market fit (z%).`,

        futureScope: `Subsequent releases will expand functionality with analytics dashboards, advanced customization, and integrations with third-party platforms based on validated user feedback.`,
      },
    },

    {
      id: "integration",
      name: "Integration PRD",
      description: "Design and implement seamless data exchange between existing platforms to eliminate manual workflows and improve operational efficiency.",
      category: "integration",
      template: {
        problemStatement: `Current processes require teams to manually transfer data between [Tool A] and [Tool B], leading to inefficiencies, data mismatches, and operational delays. The absence of integration slows collaboration and increases the risk of human error.`,

        userPersonas: `Primary: Operations teams responsible for maintaining system consistency and data integrity.\nSecondary: Analytics teams relying on unified data for reporting and performance tracking.`,

        painPoints: `Redundant data entry, frequent synchronization issues, and manual corrections consume time and reduce productivity. Lack of real-time updates results in inconsistent insights across systems.`,

        overview: `Internal reports and user interviews indicate that teams lose approximately x hours weekly resolving sync-related issues. Streamlined integration can recover this time and significantly improve workflow accuracy and speed.`,

        userFlow: `User initiates or updates data in [Tool A] → integration automatically syncs relevant records to [Tool B] → confirmation logged and displayed via dashboard.`,

        solution: `Develop a robust bi-directional integration that enables automated, real-time data synchronization between both platforms. Include flexible sync configurations and transparent error reporting for better control and reliability.`,

        features: `Secure OAuth2 authentication for trusted access, automated synchronization scheduler to manage frequency and load, and a centralized monitoring dashboard for viewing sync history and resolving errors.`,

        technicalFeasibility: `Implementation through RESTful APIs from both platforms, adhering to authentication and rate limit policies (up to x API calls/hour). Includes logging, validation, and rollback capabilities to ensure data consistency.`,

        keyMetrics: `Data synchronization success rate above x%, reduction of manual work by y hours per user weekly, and measurable decrease in data discrepancy incidents (−z%).`,

        futureScope: `Introduce webhook-based real-time triggers for instant updates, expand integration to additional tools, and add analytics for tracking sync performance and system health.`,
      },
    },

    {
      id: "platform-redesign",
      name: "Platform Redesign PRD",
      description: "Revamp the product’s visual identity and user experience to align with modern design standards, enhance usability, and strengthen brand perception.",
      category: "redesign",
      template: {
        problemStatement: `The current platform suffers from an outdated interface, inconsistent design elements, and fragmented user flows. These issues reduce user trust, increase churn, and limit adoption among new users evaluating the product.`,

        userPersonas: `Primary: Long-term users seeking a modern, intuitive interface that improves daily usability.\nSecondary: New users forming first impressions during onboarding and evaluation phases.`,

        painPoints: `Users face cluttered layouts, inconsistent UI components, and lack of visual clarity, leading to higher cognitive load and poor task efficiency.`,

        overview: `Recent UX audits and user feedback indicate a usability score of x/100 — below industry standards. The redesign aims to address navigation inefficiencies, improve readability, and create a cohesive design language that scales with future features.`,

        userFlow: `User signs up → explores dashboard → experiences unclear navigation hierarchy → struggles to locate key functionalities.`,

        solution: `Reimagine the entire platform using a modular, responsive, and accessibility-first design system. Establish a unified visual framework that enhances brand consistency and improves user interaction quality across all devices.`,

        features: `Comprehensive design system for reusability, flexible grid-based responsive layouts, and streamlined onboarding flow that guides users intuitively through core features.`,

        technicalFeasibility: `Front-end rebuild using React and Tailwind CSS for faster iteration and component reusability. Minimal backend dependency ensures low implementation risk and phased rollout capability.`,

        keyMetrics: `Increase engagement by x%, reduce churn by y%, and elevate overall NPS by z points through improved satisfaction and perceived product quality.`,

        futureScope: `Add dark mode support, introduce micro-interactions for richer feedback, and integrate adaptive layouts that personalize user experiences based on behavior.`,
      },
    }

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