export const projects = [
  {
    "title": "AI Embassy Assistant",
    "category": "Applied AI / NLP",
    "featured": true,
    "description": "A conversational assistant in development for accessing embassy service information.",
    "problem": "Visitors need a straightforward way to find information about consular services.",
    "solution": "Developing a Django application with a Telegram interface and locally hosted language models through Ollama. Basic message handling and model integration are working; service-answer reliability remains a development goal.",
    "technologies": [
      "Python",
      "Django",
      "Telegram",
      "Ollama"
    ],
    "status": "Working prototype · in development"
  },
  {
    "title": "NetWatch",
    "category": "Software / Automation",
    "featured": true,
    "description": "A Django application for infrastructure monitoring and attendance workflows.",
    "problem": "Availability checks and attendance records need a consistent workflow and accessible reporting.",
    "solution": "Implemented host and service checks, a dashboard, scheduled jobs, notification workflows, and attendance exports. Worked on deployment automation with GitHub Actions and Windows services.",
    "technologies": [
      "Python",
      "Django",
      "PostgreSQL",
      "APScheduler",
      "GitHub Actions"
    ],
    "status": "Implemented features · ongoing development"
  },
  {
    "title": "Product Feature Extraction & Sentiment Analysis",
    "category": "Academic / NLP",
    "featured": true,
    "description": "My 2023 B.Sc. final project on product features and sentiment in review text.",
    "problem": "Unstructured reviews make it difficult to identify which product attributes users discuss and how they feel about them.",
    "solution": "Investigated product feature extraction and sentiment analysis as an undergraduate NLP project. This work provides the academic foundation for my current interest in language applications.",
    "technologies": [
      "Python",
      "NLP",
      "Sentiment analysis"
    ],
    "status": "B.Sc. final project · 2023"
  },
  {
    "title": "Employee Inquiry Portal",
    "category": "Web applications / Deployment",
    "featured": false,
    "description": "Deployment and maintenance work on an employee inquiry and identification-card application.",
    "problem": "Employee inquiries and identification workflows require a working application and reliable database connectivity.",
    "solution": "Configured the application and PostgreSQL connectivity, investigated API and access issues, and worked on employee data import and card-related workflows.",
    "technologies": [
      "Next.js",
      "PostgreSQL",
      "IIS",
      "Windows Server"
    ],
    "status": "Professional implementation work"
  }
];
