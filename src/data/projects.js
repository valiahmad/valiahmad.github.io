export const projects = [
  {
    title: "AI Embassy Assistant",
    category: "AI / NLP / Software",
    featured: true,

    description:
      "An AI-powered conversational assistant designed to help embassy visitors access organizational information through a simple conversational interface.",

    problem:
      "Visitors frequently need information about services, procedures, and organizational processes. The goal is to make this information easier to access through an intelligent conversational interface.",

    solution:
      "Built a Django-based backend with a REST API and Telegram interface, with locally hosted language models through Ollama. The architecture is designed to evolve from text-based assistance toward more advanced AI capabilities.",

    technologies: [
      "Python",
      "Django",
      "REST API",
      "Telegram Bot",
      "Ollama",
      "LLM",
      "NLP",
    ],

    status: "In development",
  },

  {
    title: "NetWatch",
    category: "Monitoring / DevOps",
    featured: true,

    description:
      "A Django-based infrastructure monitoring platform for operational visibility across servers, network services, domains, SSL certificates, and critical assets.",

    problem:
      "Infrastructure failures and expiring operational assets can affect organizational services. Manual monitoring does not provide sufficient visibility or timely notification.",

    solution:
      "Developed a centralized monitoring application capable of checking host availability, service connectivity, latency, HTTP/HTTPS endpoints, SSL certificates, domain expiration, and other operational assets, with automated notification workflows.",

    technologies: [
      "Python",
      "Django",
      "PostgreSQL",
      "APScheduler",
      "REST API",
      "GitHub Actions",
    ],

    status: "Active development",
  },

  {
    title: "Product Feature Extraction & Sentiment Analysis",
    category: "AI / NLP / Research",
    featured: true,

    description:
      "An academic NLP project focused on extracting product-related features and analyzing sentiment in textual reviews.",

    problem:
      "Product reviews contain valuable information about customer opinions, but useful product attributes and sentiment must be extracted from unstructured text.",

    solution:
      "Applied Natural Language Processing and machine-learning techniques to investigate product feature extraction and sentiment analysis, building on the user's academic work in NLP and sentiment classification.",

    technologies: [
      "Python",
      "NLP",
      "Machine Learning",
      "Sentiment Analysis",
      "Naive Bayes",
    ],

    status: "Academic project",
  },

  {
    title: "Enterprise IT Infrastructure",
    category: "Systems / Networking / Security",
    featured: false,

    description:
      "Professional experience involving the operation, administration, troubleshooting, and improvement of enterprise IT infrastructure.",

    problem:
      "Organizational IT environments require reliable networking, systems, security, virtualization, monitoring, and continuous troubleshooting to maintain operational services.",

    solution:
      "Worked across network infrastructure, security systems, servers, virtualization environments, monitoring, troubleshooting, and software-based operational solutions.",

    technologies: [
      "Cisco",
      "FortiGate",
      "Windows Server",
      "VMware",
      "Linux",
      "Networking",
      "VPN",
      "Virtualization",
    ],

    status: "Professional experience",
  },
];