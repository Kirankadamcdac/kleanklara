export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Gen AI & LLM' | 'Computer Vision' | 'ML & Analytics' | 'AI Agents & Automation';
  description: string;
  features: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  architecture: {
    title: string;
    nodes: { id: string; label: string; type: 'client' | 'gateway' | 'model' | 'db' | 'service' }[];
    connections: { from: string; to: string; label?: string }[];
  };
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  image: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: number; icon: string; highlight?: boolean }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Lead';
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verifyUrl: string;
  badgeColor: string;
  skills: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  slug: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export const PERSONAL_INFO = {
  name: "Dr. Alex Vance",
  title: "Principal AI Engineer | Machine Learning Specialist",
  tagline: "Building scalable GenAI systems, autonomous agent networks, and production-grade LLM architectures.",
  roles: [
    "Generative AI Engineer",
    "Machine Learning Specialist",
    "LLM Architect",
    "Autonomous AI Agents Developer",
    "Computer Vision Engineer",
    "MLOps Systems Architect"
  ],
  bio: "I am a Senior AI & Machine Learning Engineer with 7+ years of experience designing and deploying state-of-the-art intelligent systems. Specialized in Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Fine-Tuning, Autonomous AI Agents, and High-Throughput Computer Vision pipelines. I bridge the gap between cutting-edge AI research and production-grade Cloud infrastructure.",
  location: "San Francisco, CA (Open to Remote Worldwide)",
  email: "alex.vance.ai@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com",
  stats: [
    { label: "Years Experience", value: "7+" },
    { label: "Models in Production", value: "35+" },
    { label: "Inference Latency Reduction", value: "65%" },
    { label: "GitHub Stars Earned", value: "2.4k+" }
  ],
  resumeUrl: "#"
};

export const ABOUT_DOMAINS = [
  {
    id: "genai",
    title: "Generative AI & LLMs",
    description: "Designing multi-agent frameworks, fine-tuning Llama/Claude/OpenAI models, and deploying low-latency LLM inference pipelines.",
    icon: "Sparkles"
  },
  {
    id: "rag",
    title: "Enterprise RAG Architectures",
    description: "Hybrid vector search, dense/sparse retrieval, reranking algorithms, and graph RAG for deterministic enterprise knowledge grounding.",
    icon: "Database"
  },
  {
    id: "ml",
    title: "Core Machine Learning",
    description: "Predictive modeling, gradient boosting, time-series forecasting, custom loss functions, and feature engineering at scale.",
    icon: "Brain"
  },
  {
    id: "cv",
    title: "Computer Vision & Edge AI",
    description: "Real-time object detection (YOLO), facial biometric security, segmentation, and ONNX/TensorRT quantization for Edge hardware.",
    icon: "Eye"
  },
  {
    id: "nlp",
    title: "Natural Language Processing",
    description: "Transformers, BERT/RoBERTa fine-tuning, sentiment analysis, entity recognition, semantic clustering, and multilingual embeddings.",
    icon: "MessageSquareText"
  },
  {
    id: "agents",
    title: "Autonomous AI Agents",
    description: "Multi-agent orchestration (LangGraph, CrewAI, AutoGen) with tool calling, memory stores, self-correction, and human-in-the-loop validation.",
    icon: "Bot"
  },
  {
    id: "mlops",
    title: "MLOps & Cloud Infrastructure",
    description: "Kubeflow, MLflow, Docker/K8s clusters, Triton Inference Server, vLLM, and automated CI/CD evaluation benchmarks on AWS/GCP.",
    icon: "Server"
  },
  {
    id: "production",
    title: "Production AI Systems",
    description: "High-availability FastAPI microservices, Redis caching, streaming response architecture, and real-time monitoring via Prometheus/Grafana.",
    icon: "Zap"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core algorithms, distributed data processing, and performant systems development.",
    skills: [
      { name: "Python", level: 98, icon: "Terminal", highlight: true },
      { name: "TypeScript", level: 90, icon: "Code2", highlight: true },
      { name: "JavaScript", level: 88, icon: "FileCode" },
      { name: "SQL", level: 92, icon: "Database" },
      { name: "C++", level: 82, icon: "Cpu" }
    ]
  },
  {
    title: "AI & Machine Learning Frameworks",
    description: "Deep learning, tensor computation, and statistical modeling.",
    skills: [
      { name: "PyTorch", level: 96, icon: "Flame", highlight: true },
      { name: "TensorFlow", level: 88, icon: "Layers" },
      { name: "Scikit-Learn", level: 94, icon: "Activity" },
      { name: "OpenCV", level: 90, icon: "Eye" },
      { name: "XGBoost / LightGBM", level: 92, icon: "TrendingUp" },
      { name: "Pandas & NumPy", level: 98, icon: "Table" }
    ]
  },
  {
    title: "LLM, GenAI & Vector Ecosystem",
    description: "State-of-the-art Foundation Models, Agentic frameworks, and Vector DBs.",
    skills: [
      { name: "OpenAI GPT-4o / O1", level: 96, icon: "Sparkles", highlight: true },
      { name: "Claude 3.5 Sonnet", level: 95, icon: "Cpu", highlight: true },
      { name: "Llama 3 / Mistral", level: 92, icon: "Terminal" },
      { name: "LangChain & LangGraph", level: 94, icon: "GitFork", highlight: true },
      { name: "LlamaIndex", level: 90, icon: "BookOpen" },
      { name: "Hugging Face", level: 92, icon: "Smile" },
      { name: "Pinecone / Weaviate / ChromaDB", level: 94, icon: "Search" },
      { name: "Prompt Engineering & Guardrails", level: 95, icon: "ShieldCheck" }
    ]
  },
  {
    title: "Cloud & MLOps Infrastructure",
    description: "Containerized deployment, scalable GPU clusters, and continuous evaluation.",
    skills: [
      { name: "AWS (SageMaker, Bedrock, EC2)", level: 90, icon: "Cloud", highlight: true },
      { name: "Google Cloud (Vertex AI)", level: 88, icon: "CloudRain" },
      { name: "Azure AI", level: 84, icon: "Box" },
      { name: "Docker & Kubernetes", level: 90, icon: "Container" },
      { name: "vLLM & Triton Server", level: 88, icon: "Zap" },
      { name: "FastAPI & AsyncIO", level: 96, icon: "Server" },
      { name: "GitHub Actions / CI-CD", level: 88, icon: "GitCommit" }
    ]
  },
  {
    title: "Databases & Storage",
    description: "High-performance relational, key-value, and vector data stores.",
    skills: [
      { name: "PostgreSQL / pgvector", level: 92, icon: "Database" },
      { name: "Redis", level: 90, icon: "HardDrive" },
      { name: "MongoDB", level: 86, icon: "FileText" },
      { name: "Pinecone", level: 94, icon: "Share2" },
      { name: "Qdrant / Milvus", level: 88, icon: "Layers" }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Lead AI Engineer & LLM Architect",
    company: "Apex Neuro Dynamics",
    location: "San Francisco, CA",
    period: "2023 - Present",
    type: "Lead",
    description: "Leading the enterprise Generative AI engineering unit. Built high-throughput agentic workflows and fine-tuned open-weight LLMs serving over 2M daily API queries.",
    achievements: [
      "Architected multi-agent RAG system reducing hallucination rates by 78% across 500,000 corporate documents.",
      "Spearheaded model quantization (vLLM, AWQ, FP8) on AWS EC2 P4d instances, slashing GPU inference costs by $420k annually.",
      "Engineered real-time streaming agent pipeline supporting custom tool calls and human approval checkpoints.",
      "Mentored a team of 8 AI/ML engineers in production evaluation (Ragas, TruLens) and safety guardrails."
    ],
    technologies: ["PyTorch", "vLLM", "Llama 3", "LangGraph", "AWS Bedrock", "Pinecone", "FastAPI", "Docker"]
  },
  {
    id: "exp-2",
    role: "Senior Machine Learning Engineer",
    company: "Cognitive Scale Labs",
    location: "Palo Alto, CA",
    period: "2021 - 2023",
    type: "Full-time",
    description: "Designed multi-modal computer vision and predictive analytics platforms for industrial automation and healthcare diagnostic clients.",
    achievements: [
      "Developed high-speed facial recognition attendance system with 99.7% accuracy and liveness detection on NVIDIA Jetson Edge devices.",
      "Built time-series predictive anomaly detection models processing 100k events/sec with XGBoost and PyTorch.",
      "Reduced model training iteration time by 60% through distributed Kubeflow pipelines on GCP."
    ],
    technologies: ["Python", "TensorFlow", "OpenCV", "TensorRT", "GCP Vertex AI", "Kubeflow", "PostgreSQL"]
  },
  {
    id: "exp-3",
    role: "AI & NLP Research Specialist",
    company: "Veritas AI Solutions",
    location: "Boston, MA",
    period: "2019 - 2021",
    type: "Full-time",
    description: "Focused on Natural Language Processing, transformer fine-tuning, automated text categorization, and sentiment analytics.",
    achievements: [
      "Fine-tuned BERT and RoBERTa models for multi-lingual legal document summarization, achieving state-of-the-art ROUGE scores.",
      "Deployed scalable search indexing infrastructure connecting Elasticsearch with dense vector embeddings.",
      "Published 2 internal whitepapers on domain-specific transfer learning strategies for biomedical text."
    ],
    technologies: ["Python", "PyTorch", "Hugging Face", "Elasticsearch", "FastAPI", "Docker", "Redis"]
  },
  {
    id: "exp-4",
    role: "Machine Learning Software Engineer",
    company: "Nexus Data Intelligence",
    location: "Seattle, WA",
    period: "2017 - 2019",
    type: "Full-time",
    description: "Engineered core data pipelines, recommendation algorithms, and statistical ML algorithms for e-commerce personalization.",
    achievements: [
      "Engineered hybrid collaborative filtering recommendation engine boosting user conversion by 24%.",
      "Automated feature extraction pipelines handling 50TB+ clickstream data using PySpark and AWS EMR."
    ],
    technologies: ["Python", "Scikit-Learn", "PySpark", "AWS S3", "Redshift", "Docker"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "ai-recruitment",
    title: "AI Recruitment Assistant",
    tagline: "Autonomous candidate resume parsing, semantic matching, and interactive voice screening agent.",
    category: "Gen AI & LLM",
    description: "An end-to-end recruitment intelligence platform using LLMs and semantic embeddings to automatically analyze candidate resumes, rank them against complex Job Descriptions, and initiate conversational screening calls.",
    features: [
      "Multi-format document parsing (PDF, DOCX, LaTeX) with structured JSON extraction",
      "Semantic skill-gap matching powered by OpenAI text-embedding-3-large & Pinecone",
      "Conversational AI screening bot with low-latency WebRTC streaming audio",
      "Automated interview scoring rubrics and bias mitigation guardrails"
    ],
    technologies: ["Next.js 15", "Python", "FastAPI", "OpenAI GPT-4o", "Pinecone", "LangChain", "TailwindCSS"],
    metrics: [
      { label: "Screening Speed", value: "10x Faster" },
      { label: "Matching Accuracy", value: "94.8%" },
      { label: "Resumes Processed", value: "250k+" }
    ],
    architecture: {
      title: "Recruitment Agent Architecture",
      nodes: [
        { id: "client", label: "Recruiter Web App", type: "client" },
        { id: "api", label: "FastAPI Gateway", type: "gateway" },
        { id: "llm", label: "GPT-4o & Parser Engine", type: "model" },
        { id: "vector", label: "Pinecone Vector DB", type: "db" },
        { id: "voice", label: "TTS / Whisper Voice Service", type: "service" }
      ],
      connections: [
        { from: "client", to: "api", label: "Upload Resume / JD" },
        { from: "api", to: "llm", label: "Extract & Evaluate" },
        { from: "llm", to: "vector", label: "Store & Query Embeddings" },
        { from: "api", to: "voice", label: "Screening Call Session" }
      ]
    },
    liveUrl: "https://example.com/recruitment-ai",
    githubUrl: "https://github.com/alexvance/ai-recruitment-assistant",
    featured: true,
    image: "/projects/recruitment.jpg"
  },
  {
    id: "rag-knowledge",
    title: "RAG Knowledge Assistant",
    tagline: "Enterprise Multi-modal Search over 1M+ internal documents with Graph RAG hybrid retrieval.",
    category: "Gen AI & LLM",
    description: "Enterprise Knowledge Retrieval-Augmented Generation platform integrating hybrid BM25 + Dense Vector search with Knowledge Graph grounding for zero-hallucination document Q&A.",
    features: [
      "Hybrid Retrieval using Qdrant (Dense vectors) + Elasticsearch (BM25 sparse)",
      "Cohere Rerank v3 integration for precision context re-ordering",
      "GraphRAG ontology extraction linking entity relationships automatically",
      "Real-time citation tracking linking back to exact page numbers in source PDFs"
    ],
    technologies: ["Python", "LlamaIndex", "Qdrant", "Cohere", "Neo4j", "Streamlit", "Docker"],
    metrics: [
      { label: "Retrieval Recall", value: "98.2%" },
      { label: "Response Latency", value: "< 850ms" },
      { label: "Docs Indexed", value: "1.2 Million" }
    ],
    architecture: {
      title: "Graph-Augmented RAG Pipeline",
      nodes: [
        { id: "user", label: "Enterprise User UI", type: "client" },
        { id: "query", label: "Query Expansion Engine", type: "gateway" },
        { id: "vector", label: "Qdrant Vector Engine", type: "db" },
        { id: "graph", label: "Neo4j Knowledge Graph", type: "db" },
        { id: "rerank", label: "Cohere Reranker", type: "model" },
        { id: "llm", label: "Claude 3.5 Sonnet", type: "model" }
      ],
      connections: [
        { from: "user", to: "query", label: "Natural Language Query" },
        { from: "query", to: "vector", label: "Dense Retrieval" },
        { from: "query", to: "graph", label: "Entity Path Graph Lookup" },
        { from: "vector", to: "rerank", label: "Top-50 Chunks" },
        { from: "rerank", to: "llm", label: "Top-5 Grounded Chunks" }
      ]
    },
    liveUrl: "https://example.com/rag-assistant",
    githubUrl: "https://github.com/alexvance/rag-knowledge-assistant",
    featured: true,
    image: "/projects/rag.jpg"
  },
  {
    id: "ai-chatbot-agents",
    title: "Autonomous AI Chatbot Network",
    tagline: "Multi-agent LangGraph platform orchestrating code execution, web search, and data analysis.",
    category: "AI Agents & Automation",
    description: "State-of-the-art multi-agent framework where specialized AI agents (Coder, Researcher, Validator, Executive) collaborate to execute complex workflow goals autonomously with sandboxed code execution.",
    features: [
      "LangGraph graph state machines with cycle detection & human human-in-the-loop state interrupts",
      "Sandboxed Python & Bash code execution using Pyodide and Docker containers",
      "Tavily real-time web search and live web scraping integration",
      "Persistent state memory backed by PostgreSQL & Redis session storage"
    ],
    technologies: ["TypeScript", "Python", "LangGraph", "Docker", "PostgreSQL", "Redis", "Next.js 15"],
    metrics: [
      { label: "Task Success Rate", value: "92.4%" },
      { label: "Agent Speedup", value: "4.5x" },
      { label: "Active Workflows", value: "50,000+" }
    ],
    architecture: {
      title: "Multi-Agent LangGraph Network",
      nodes: [
        { id: "orchestration", label: "LangGraph Router Node", type: "gateway" },
        { id: "researcher", label: "Web Search Agent", type: "service" },
        { id: "coder", label: "Python Sandbox Agent", type: "service" },
        { id: "critic", label: "Verification Agent", type: "model" },
        { id: "memory", label: "Redis State Store", type: "db" }
      ],
      connections: [
        { from: "orchestration", to: "researcher", label: "Delegate Search" },
        { from: "orchestration", to: "coder", label: "Execute Code" },
        { from: "coder", to: "critic", label: "Submit Artifact" },
        { from: "critic", to: "memory", label: "Save Validated State" }
      ]
    },
    liveUrl: "https://example.com/ai-agents",
    githubUrl: "https://github.com/alexvance/autonomous-agent-network",
    featured: true,
    image: "/projects/agents.jpg"
  },
  {
    id: "doc-intelligence",
    title: "Document Intelligence System",
    tagline: "Vision-LLM invoice & contract extraction engine with automated validation rules.",
    category: "Computer Vision",
    description: "Multimodal document understanding pipeline combining LayoutLMv3, Tesseract OCR, and GPT-4-Vision to extract key-value data from scanned financial invoices, receipts, and complex legal contracts.",
    features: [
      "Zero-shot table & key-value schema extraction for noisy scanned PDFs",
      "Bounding box spatial grounding highlighting exact evidence locations on document renders",
      "Automated cross-check validation against ERP databases (SAP / Salesforce)",
      "High throughput batch queue backed by Celery and Redis"
    ],
    technologies: ["Python", "PyTorch", "LayoutLMv3", "GPT-4-Vision", "FastAPI", "Celery", "OpenCV"],
    metrics: [
      { label: "Extraction Accuracy", value: "99.1%" },
      { label: "Processing Time", value: "1.2s / Page" },
      { label: "Documents Saved", value: "1M+" }
    ],
    architecture: {
      title: "Multimodal Vision Document Pipeline",
      nodes: [
        { id: "pdf", label: "PDF Document Stream", type: "client" },
        { id: "ocr", label: "OpenCV + LayoutLM OCR", type: "service" },
        { id: "vlm", label: "GPT-4 Vision Extraction", type: "model" },
        { id: "rules", label: "Schema Validation Engine", type: "gateway" },
        { id: "db", label: "Enterprise Postgres DB", type: "db" }
      ],
      connections: [
        { from: "pdf", to: "ocr", label: "Preprocess & Segment" },
        { from: "ocr", to: "vlm", label: "BBox Image + Text Prompts" },
        { from: "vlm", to: "rules", label: "Structured JSON" },
        { from: "rules", to: "db", label: "Verified Record Insertion" }
      ]
    },
    liveUrl: "https://example.com/doc-intel",
    githubUrl: "https://github.com/alexvance/doc-intelligence-system",
    featured: false,
    image: "/projects/doc-intel.jpg"
  },
  {
    id: "face-recognition",
    title: "Face Recognition Attendance",
    tagline: "Real-time edge biometric security & anti-spoofing system deployed on NVIDIA Jetson.",
    category: "Computer Vision",
    description: "Industrial-grade edge Computer Vision system conducting high-speed multi-face identification, 3D passive liveness verification (anti-spoofing), and instant cloud attendance sync.",
    features: [
      "Real-time 60 FPS face detection via RetinaFace and ArcFace vector embeddings",
      "Infrared & RGB dual-stream liveness detection against print & digital screen spoofing",
      "Edge acceleration using TensorRT FP16 quantization on Jetson Orin Nano",
      "Offline cache resilience syncing attendance data over MQTT when reconnected"
    ],
    technologies: ["C++", "Python", "PyTorch", "TensorRT", "OpenCV", "MQTT", "SQLite"],
    metrics: [
      { label: "Match Speed", value: "18ms / face" },
      { label: "Anti-Spoof Rate", value: "99.9%" },
      { label: "Edge FPS", value: "60 FPS" }
    ],
    architecture: {
      title: "Edge Vision Biometric Pipeline",
      nodes: [
        { id: "cam", label: "Dual RGB+IR Camera", type: "client" },
        { id: "det", label: "RetinaFace Detector", type: "service" },
        { id: "embed", label: "ArcFace TensorRT Model", type: "model" },
        { id: "liveness", label: "3D Liveness Classifier", type: "model" },
        { id: "mqtt", label: "MQTT Cloud Sync", type: "gateway" }
      ],
      connections: [
        { from: "cam", to: "det", label: "Video Frame Stream" },
        { from: "det", to: "embed", label: "Cropped Face Bounding Box" },
        { from: "det", to: "liveness", label: "IR Stream Verification" },
        { from: "embed", to: "mqtt", label: "Match & Broadcast Event" }
      ]
    },
    liveUrl: "https://example.com/face-rec",
    githubUrl: "https://github.com/alexvance/edge-face-recognition",
    featured: false,
    image: "/projects/face-rec.jpg"
  },
  {
    id: "ai-email-gen",
    title: "AI Email Generator & Assistant",
    tagline: "Context-aware automated sales outreach & customer support email synthesizer.",
    category: "Gen AI & LLM",
    description: "Smart email automation system that analyzes incoming customer inquiries, extracts sentiment & intent, checks CRM database context, and drafts hyper-personalized responses.",
    features: [
      "Intent classification & priority tagging using fine-tuned DistilBERT",
      "Dynamic tone adjustment (Formal, Friendly, Concise, Urgent)",
      "HubSpot & Salesforce CRM synchronization via GraphQL webhooks",
      "One-click browser extension overlay for Gmail & Outlook"
    ],
    technologies: ["TypeScript", "Next.js", "OpenAI API", "FastAPI", "TailwindCSS", "PostgreSQL"],
    metrics: [
      { label: "Reply Time", value: "85% Faster" },
      { label: "Open Rate Boost", value: "+32%" },
      { label: "Monthly Emails", value: "400,000" }
    ],
    architecture: {
      title: "Email Synthesizer Pipeline",
      nodes: [
        { id: "inbox", label: "Gmail / Outlook Webhook", type: "client" },
        { id: "parser", label: "Intent Classifier (BERT)", type: "model" },
        { id: "crm", label: "Salesforce / CRM Data", type: "db" },
        { id: "gen", label: "Claude 3.5 Draft Engine", type: "model" },
        { id: "ui", label: "User Review Extension", type: "client" }
      ],
      connections: [
        { from: "inbox", to: "parser", label: "New Message Ingest" },
        { from: "parser", to: "crm", label: "Fetch Customer History" },
        { from: "crm", to: "gen", label: "Combine Context & Intent" },
        { from: "gen", to: "ui", label: "Render One-Click Response" }
      ]
    },
    liveUrl: "https://example.com/email-gen",
    githubUrl: "https://github.com/alexvance/ai-email-generator",
    featured: false,
    image: "/projects/email-gen.jpg"
  },
  {
    id: "medical-diagnosis",
    title: "Medical Diagnosis AI",
    tagline: "Pathology & X-Ray vision ensemble model with grad-CAM explainability maps.",
    category: "Computer Vision",
    description: "Deep learning medical imaging decision support platform that identifies pulmonary lesions in chest X-rays and dermatological anomalies with visual Grad-CAM heatmaps for radiologist validation.",
    features: [
      "Ensemble of EfficientNet-B7 and DenseNet-121 trained on 100k+ NIH Chest X-ray dataset",
      "Grad-CAM visual attribution highlighting exactly which pixel regions contributed to diagnostic score",
      "HIPAA-compliant encrypted data pipeline with DICOM format parsing",
      "Radiologist feedback loop continuously refining model predictions"
    ],
    technologies: ["Python", "PyTorch", "Monai Framework", "OpenCV", "DICOM", "Docker", "AWS S3"],
    metrics: [
      { label: "Diagnostic AUC", value: "0.964" },
      { label: "False Positive Rate", value: "< 2.1%" },
      { label: "Radiologist Time Saved", value: "45%" }
    ],
    architecture: {
      title: "HIPAA Medical Vision Pipeline",
      nodes: [
        { id: "dicom", label: "DICOM PACS Server", type: "client" },
        { id: "preprocess", label: "Image Normalization Engine", type: "service" },
        { id: "model", label: "DenseNet-121 Ensemble", type: "model" },
        { id: "cam", label: "Grad-CAM Heatmap Generator", type: "service" },
        { id: "viewer", label: "Radiologist Dashboard", type: "client" }
      ],
      connections: [
        { from: "dicom", to: "preprocess", label: "Secure Scan Transfer" },
        { from: "preprocess", to: "model", label: "Normalized Tensors" },
        { from: "model", to: "cam", label: "Feature Maps" },
        { from: "cam", to: "viewer", label: "Overlay Heatmap & Score" }
      ]
    },
    liveUrl: "https://example.com/medical-ai",
    githubUrl: "https://github.com/alexvance/medical-diagnosis-ai",
    featured: true,
    image: "/projects/medical.jpg"
  },
  {
    id: "voice-assistant",
    title: "Real-time Voice AI Assistant",
    tagline: "Ultra low-latency (<400ms) full-duplex speech-to-speech conversational bot.",
    category: "AI Agents & Automation",
    description: "Full-duplex conversational voice agent capable of natural interruptions, emotion synthesis, and real-time tool calling during live phone or web calls.",
    features: [
      "Streaming Whisper speech recognition with Voice Activity Detection (VAD)",
      "Fast LLM streaming response generation using vLLM quantized weights",
      "ElevenLabs & Deepgram streaming neural Text-to-Speech",
      "WebSockets / WebRTC transport layer maintaining sub-400ms roundtrip audio latency"
    ],
    technologies: ["Python", "WebSockets", "Whisper AI", "vLLM", "Deepgram", "ElevenLabs", "React"],
    metrics: [
      { label: "Latency", value: "380ms" },
      { label: "VAD Accuracy", value: "98.9%" },
      { label: "Concurrent Calls", value: "1,500" }
    ],
    architecture: {
      title: "Realtime WebRTC Audio Pipeline",
      nodes: [
        { id: "mic", label: "WebRTC Audio Stream", type: "client" },
        { id: "vad", label: "Silero VAD Filter", type: "service" },
        { id: "stt", label: "Deepgram / Whisper STT", type: "model" },
        { id: "llm", label: "Streaming vLLM Engine", type: "model" },
        { id: "tts", label: "ElevenLabs Neural TTS", type: "service" }
      ],
      connections: [
        { from: "mic", to: "vad", label: "Audio Chunks" },
        { from: "vad", to: "stt", label: "Speech Detected" },
        { from: "stt", to: "llm", label: "Text Stream" },
        { from: "llm", to: "tts", label: "Token Stream" },
        { from: "tts", to: "mic", label: "Playback Audio Stream" }
      ]
    },
    liveUrl: "https://example.com/voice-ai",
    githubUrl: "https://github.com/alexvance/voice-assistant-realtime",
    featured: false,
    image: "/projects/voice.jpg"
  },
  {
    id: "rec-engine",
    title: "Hybrid Recommendation Engine",
    tagline: "Vector similarity & two-tower neural network for real-time personalization.",
    category: "ML & Analytics",
    description: "Scalable recommendation infrastructure using Two-Tower DNN architecture to serve personalized product candidate sets to millions of users in under 15ms.",
    features: [
      "Two-Tower Neural Network separating User Tower and Item Tower representations",
      "HNSW vector indexing for approximate nearest neighbor retrieval in Milvus",
      "Real-time item re-ranking considering inventory levels and margin optimization",
      "A/B testing framework measuring conversion lift and click-through rates"
    ],
    technologies: ["Python", "TensorFlow Recommenders", "Milvus", "Redis", "Kafka", "PostgreSQL"],
    metrics: [
      { label: "Inference Time", value: "12ms" },
      { label: "CTR Increase", value: "+28.4%" },
      { label: "Items Indexed", value: "5 Million" }
    ],
    architecture: {
      title: "Two-Tower Vector Rec Engine",
      nodes: [
        { id: "user", label: "User Action Stream (Kafka)", type: "client" },
        { id: "utower", label: "User Context Tower", type: "model" },
        { id: "milvus", label: "Milvus Item Embedding Index", type: "db" },
        { id: "rerank", label: "LightGBM Final Ranker", type: "model" },
        { id: "app", label: "Frontend Recommendation Carousels", type: "client" }
      ],
      connections: [
        { from: "user", to: "utower", label: "Recent Clicks & Profile" },
        { from: "utower", to: "milvus", label: "User Vector Embedding" },
        { from: "milvus", to: "rerank", label: "Top 100 Candidates" },
        { from: "rerank", to: "app", label: "Top 10 Personalized Items" }
      ]
    },
    liveUrl: "https://example.com/rec-engine",
    githubUrl: "https://github.com/alexvance/recommendation-engine-vector",
    featured: false,
    image: "/projects/rec-engine.jpg"
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics Dashboard",
    tagline: "Time-series forecasting & enterprise customer churn prediction platform.",
    category: "ML & Analytics",
    description: "Interactive analytics suite providing enterprise leadership with automated revenue forecasting, anomaly detection in sensor metrics, and proactive churn risk scores.",
    features: [
      "Prophet & Temporal Fusion Transformer models for complex seasonal trend forecasting",
      "SHAP (SHapley Additive exPlanations) values providing clear feature importance drivers",
      "Automated alerting triggers sending Slack & PagerDuty notifications for metric anomalies",
      "Dynamic interactive charting with real-time websocket data feeds"
    ],
    technologies: ["Python", "PyTorch Forecasting", "SHAP", "FastAPI", "React", "Recharts", "PostgreSQL"],
    metrics: [
      { label: "Forecast Accuracy", value: "95.1%" },
      { label: "Churn Reduction", value: "19.5%" },
      { label: "Data Points/Day", value: "50M+" }
    ],
    architecture: {
      title: "Predictive Analytics Pipeline",
      nodes: [
        { id: "dw", label: "Snowflake / Redshift DW", type: "db" },
        { id: "etl", label: "Feature Store Engine", type: "service" },
        { id: "tft", label: "Temporal Fusion Transformer", type: "model" },
        { id: "shap", label: "SHAP Explainability Engine", type: "service" },
        { id: "dash", label: "Next.js Executive Dashboard", type: "client" }
      ],
      connections: [
        { from: "dw", to: "etl", label: "Raw Event Log Stream" },
        { from: "etl", to: "tft", label: "Calculated Features" },
        { from: "tft", to: "shap", label: "Model Predictions" },
        { from: "shap", to: "dash", label: "Forecast + Driver Explanations" }
      ]
    },
    liveUrl: "https://example.com/predictive-dash",
    githubUrl: "https://github.com/alexvance/predictive-analytics-dashboard",
    featured: true,
    image: "/projects/predictive.jpg"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-aws-ml",
    title: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued Nov 2024 · Valid thru Nov 2027",
    credentialId: "AWS-MLS-98431024",
    verifyUrl: "https://aws.amazon.com/verification",
    badgeColor: "from-amber-500 to-orange-600",
    skills: ["SageMaker", "AWS Bedrock", "Distributed Training", "Feature Store", "Cloud MLOps"]
  },
  {
    id: "cert-tf-dev",
    title: "TensorFlow Developer Certificate",
    issuer: "Google / DeepLearning.AI",
    date: "Issued Aug 2023 · Valid thru Aug 2026",
    credentialId: "TF-DEV-872105",
    verifyUrl: "https://www.tensorflow.org/certificate",
    badgeColor: "from-amber-600 to-yellow-500",
    skills: ["Deep Neural Networks", "CNNs", "NLP", "Time-Series", "Model Optimization"]
  },
  {
    id: "cert-genai-llm",
    title: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI & AWS",
    date: "Issued Jan 2024",
    credentialId: "DL-GENAI-441298",
    verifyUrl: "https://coursera.org/verify",
    badgeColor: "from-purple-600 to-indigo-600",
    skills: ["LLM Architecture", "RLHF", "PEFT / LoRA", "RAG Systems", "Quantization"]
  },
  {
    id: "cert-azure-ai",
    title: "Microsoft Certified: Azure AI Engineer Associate",
    issuer: "Microsoft",
    date: "Issued Mar 2024 · Valid thru Mar 2026",
    credentialId: "MSFT-AI-902187",
    verifyUrl: "https://learn.microsoft.com/credentials",
    badgeColor: "from-cyan-600 to-blue-600",
    skills: ["Azure OpenAI Service", "Cognitive Services", "Form Recognizer", "Vector Search"]
  },
  {
    id: "cert-nvidia-cv",
    title: "NVIDIA Certified Computer Vision Specialist",
    issuer: "NVIDIA Deep Learning Institute",
    date: "Issued Oct 2023",
    credentialId: "NV-DLI-773091",
    verifyUrl: "https://www.nvidia.com/dli",
    badgeColor: "from-emerald-500 to-teal-600",
    skills: ["TensorRT", "Jetson Edge SDK", "DeepStream", "CUDA acceleration"]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    title: "Building Production-Grade RAG Systems: Beyond Basic Vector Search",
    excerpt: "Why standard naive RAG fails in enterprise settings and how Hybrid Search, Graph Grounding, and Cohere Reranking eliminate hallucinations.",
    category: "LLM Engineering",
    readTime: "8 min read",
    date: "Jan 24, 2026",
    author: "Dr. Alex Vance",
    image: "/blog/rag-production.jpg",
    slug: "building-production-grade-rag-systems",
    content: `
### The Limitations of Naive RAG

Most early-stage Retrieval-Augmented Generation (RAG) tutorials teach a simple recipe: chunk your documents, generate embeddings via OpenAI, store them in a vector database, and query top-k results to pass into an LLM context.

While this works for simple QA demos, **it breaks down completely in production enterprise environments**.

#### Key Failure Modes of Naive RAG:
1. **Loss of Keyword Precision**: Vector embeddings capture semantic intent but struggle with specific part numbers, serial codes, or exact match queries.
2. **Context Fragmentation**: Chunking documents into static 500-token blocks often severs crucial sentences, losing core context.
3. **Suboptimal Chunk Ranking**: Vector similarity distance does not equal relevance to the LLM's prompt.

---

### The Production RAG Stack

To achieve zero-hallucination accuracy in enterprise applications, we implement a **4-tier hybrid pipeline**:

\`\`\`
User Query -> Dense + Sparse Hybrid Search -> Cohere Rerank v3 -> Graph Ontology -> LLM Response
\`\`\`

#### 1. Hybrid Retrieval (BM25 + Dense Vectors)
By combining dense vector embeddings with sparse BM25 keyword matching via Reciprocal Rank Fusion (RRF), we get the best of both worlds: semantic understanding AND exact phrase matching.

\`\`\`python
# Example RRF Fusion
def reciprocal_rank_fusion(dense_results, sparse_results, k=60):
    scores = {}
    for rank, doc in enumerate(dense_results):
        scores[doc.id] = scores.get(doc.id, 0) + 1 / (k + rank + 1)
    for rank, doc in enumerate(sparse_results):
        scores[doc.id] = scores.get(doc.id, 0) + 1 / (k + rank + 1)
    return sorted(scores.items(), key=lambda x: x[1], reverse=True)
\`\`\`

#### 2. Cross-Encoder Reranking
Vector search retrieves candidates quickly (e.g. top 50), but passing 50 chunks into an LLM causes the "Lost in the Middle" context degradation. Using a Cross-Encoder like Cohere Rerank v3 re-scores candidate chunks with high accuracy, selecting the top 5 true matches.

#### 3. Knowledge Graph Grounding (GraphRAG)
Integrating a Neo4j knowledge graph allows the model to traverse entity relationships (e.g. *Component A is manufactured by Vendor B which has Warranty terms C*), ensuring multi-hop reasoning is deterministically verified.

---

### Key Metrics to Monitor
- **Faithfulness Score**: Evaluated using Ragas / TruLens framework.
- **Answer Relevance**: Semantic similarity between output and original user intent.
- **End-to-End Latency**: Target < 900ms for conversational stream starts.
    `
  },
  {
    id: "post-2",
    title: "Optimizing LLM Quantization & Fine-Tuning with LoRA & vLLM",
    excerpt: "A practical guide to slashing GPU inference costs by 70% using AWQ 4-bit quantization and high-throughput vLLM serving.",
    category: "MLOps & Optimization",
    readTime: "12 min read",
    date: "Feb 10, 2026",
    author: "Dr. Alex Vance",
    image: "/blog/llm-quantization.jpg",
    slug: "optimizing-llm-quantization-vllm",
    content: `
### The Challenge of Large Model Serving

Serving an unquantized Llama-3-70B model in FP16 requires 140 GB of GPU VRAM just to store weights—demanding at least two NVIDIA A100 (80GB) GPUs. At high concurrency, memory bandwidth quickly becomes the primary bottleneck.

In this guide, we walk through how to quantize Llama 3 models to 4-bit using AWQ (Activation-aware Weight Quantization) and deploy them on **vLLM with PagedAttention**.

---

### Why AWQ over Traditional GPTQ?

AWQ protects the top 1% salient weights that contain the most information, quantizing only non-critical weights to 4-bit. This results in virtually **zero degradation in perplexity** compared to raw FP16, while reducing VRAM memory footprint from 140GB down to ~40GB.

#### Step 1: Quantizing Weights with AutoAWQ
\`\`\`bash
pip install autoawq
python -m awq.entry --model_path meta-llama/Meta-Llama-3-70B-Instruct \
  --quant_output_path ./llama-3-70b-awq \
  --w_bit 4 --q_group_size 128
\`\`\`

#### Step 2: High-Performance Serving with vLLM
vLLM utilizes **PagedAttention**, an algorithm inspired by virtual memory management in OS kernels. By allocating KV cache memory dynamically in fixed-size blocks, vLLM eliminates memory fragmentation and increases throughput by **2.5x to 4x**.

\`\`\`bash
python -m vllm.entrypoints.openai.api_server \
  --model ./llama-3-70b-awq \
  --quantization awq \
  --tensor-parallel-size 1 \
  --max-model-len 8192 \
  --port 8000
\`\`\`

---

### Benchmark Results

| Model Format | VRAM Required | Tokens/Sec/User | Max Concurrent Users |
| :--- | :--- | :--- | :--- |
| Llama-3-70B FP16 | 142 GB (2x A100) | 24 t/s | 12 |
| Llama-3-70B AWQ 4-bit | 38 GB (1x A100) | 68 t/s | 64 |

By implementing AWQ + vLLM, we successfully reduced hardware costs by **73%** while tripling user concurrency capacity.
    `
  },
  {
    id: "post-3",
    title: "Designing Autonomous AI Agent Systems with LangGraph & State Machines",
    excerpt: "How to transition from brittle prompt chains to deterministic, loopable multi-agent graph state architectures with human approval nodes.",
    category: "AI Agents",
    readTime: "10 min read",
    date: "Mar 02, 2026",
    author: "Dr. Alex Vance",
    image: "/blog/ai-agents-langgraph.jpg",
    slug: "designing-autonomous-ai-agent-systems",
    content: `
### Moving Beyond Linear Prompt Chains

Linear chains (e.g. Prompt A -> Prompt B -> Output) fail when agents encounter edge cases, missing data, or code execution errors. Autonomous agents require **stateful loops, branching conditions, and error recovery strategies**.

Enter **LangGraph**: a framework for building cyclical multi-agent graph architectures where agents communicate through shared state objects.

---

### Core Concepts of LangGraph

1. **State Schema**: A strongly typed TypedDict shared among all agents in the graph.
2. **Nodes**: Independent Python functions or agents that process state and return updates.
3. **Conditional Edges**: Decision boundaries that route execution dynamically based on validation results.

\`\`\`python
from typing import TypedDict, List
from langgraph.graph import StateGraph, END

class AgentState(TypedDict):
    messages: List[str]
    code: str
    error: str
    iteration: int

# Define Node
def code_generator(state: AgentState):
    # LLM generates code based on goal
    return {"code": "print('Hello World')", "iteration": state["iteration"] + 1}

def python_executor(state: AgentState):
    # Execute code in sandbox
    try:
        exec(state["code"])
        return {"error": None}
    except Exception as e:
        return {"error": str(e)}

# Build Graph
workflow = StateGraph(AgentState)
workflow.add_node("coder", code_generator)
workflow.add_node("executor", python_executor)

workflow.set_entry_point("coder")
workflow.add_edge("coder", "executor")

def should_retry(state: AgentState):
    if state["error"] and state["iteration"] < 3:
        return "coder" # Loop back for self-correction
    return END

workflow.add_conditional_edges("executor", should_retry)
app = workflow.compile()
\`\`\`

---

### Human-in-the-Loop Interruption Points

In enterprise systems, granting AI agents full autonomous permission to execute database writes or email sends is risky. LangGraph allows setting **breakpoints before critical action nodes**, presenting a human supervisor with the exact tool arguments for one-click Approval or Rejection.

This deterministic safety mechanism makes multi-agent workflows ready for real-world enterprise adoption.
    `
  },
  {
    id: "post-4",
    title: "Edge Computer Vision Acceleration: From PyTorch to TensorRT 10",
    excerpt: "Step-by-step optimization tutorial converting custom PyTorch object detection models to low-latency TensorRT engine files on Jetson hardware.",
    category: "Computer Vision",
    readTime: "9 min read",
    date: "Apr 18, 2026",
    author: "Dr. Alex Vance",
    image: "/blog/edge-cv-tensorrt.jpg",
    slug: "edge-computer-vision-acceleration-tensorrt",
    content: `
### High-Performance Vision at the Edge

Deploying deep neural networks to resource-constrained edge hardware (like the NVIDIA Jetson Orin Nano) requires squeezing every microsecond of performance out of CUDA cores and Tensor Cores.

Standard PyTorch models exhibit latency overhead due to Python dynamic runtime checks. Converting models to **TensorRT engines** compiles the graph into optimized GPU kernel instructions.

---

### The Conversion Pipeline: PyTorch -> ONNX -> TensorRT

\`\`\`
[PyTorch Model .pt] -> (torch.onnx.export) -> [ONNX Intermediate .onnx] -> (trtexec tool) -> [TensorRT Engine .engine]
\`\`\`

#### Step 1: Export PyTorch to ONNX
\`\`\`python
import torch

model = MyCustomYOLOv8().eval().cuda()
dummy_input = torch.randn(1, 3, 640, 640, device='cuda')

torch.onnx.export(
    model, dummy_input, "model.onnx",
    opset_version=17,
    input_names=["images"],
    output_names=["output"],
    dynamic_axes={"images": {0: "batch_size"}}
)
\`\`\`

#### Step 2: Build TensorRT Engine with FP16 Precision
\`\`\`bash
trtexec --onnx=model.onnx \
        --saveEngine=model_fp16.engine \
        --fp16 \
        --workspace=4096
\`\`\`

---

### Results Breakdown

Converting to TensorRT FP16 yields a **4.2x speedup** in frame throughput while maintaining 99.4% mean Average Precision (mAP@0.5).

- **PyTorch FP32 CPU**: 14 ms (71 FPS)
- **PyTorch FP32 GPU**: 4.8 ms (208 FPS)
- **TensorRT FP16 Engine**: 1.1 ms (900 FPS peak batching)
    `
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Marcus Vance",
    role: "VP of AI Engineering",
    company: "Apex Neuro Dynamics",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    content: "Alex is hands-down one of the sharpest AI engineers I have worked with. His work on our multi-agent RAG system reduced hallucination rates dramatically while cutting GPU cloud infrastructure costs by over $400k in a single year.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Dr. Elena Rostova",
    role: "Principal Data Scientist",
    company: "Cognitive Scale Labs",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    content: "Alex's ability to bridge deep mathematical AI research with robust production-grade software engineering is exceptional. His real-time edge computer vision pipeline set a new benchmark for accuracy and speed in our team.",
    rating: 5
  },
  {
    id: "test-3",
    name: "David Chen",
    role: "CTO & Co-founder",
    company: "Veritas AI Solutions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    content: "Working with Alex was a game-changer for our GenAI stack. He architected our autonomous agent network with impressive attention to latency, fault-tolerance, and clean, maintainable TypeScript & Python code.",
    rating: 5
  },
  {
    id: "test-4",
    name: "Sarah Jenkins",
    role: "Head of Product",
    company: "Nexus Intelligence",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    content: "Alex delivers world-class results consistently. He doesn't just build models; he thinks deeply about user experience, system architecture, security guardrails, and real business metrics.",
    rating: 5
  }
];

export const GITHUB_STATS = {
  username: "alexvance",
  publicRepos: 48,
  stars: 2480,
  followers: 342,
  contributionsThisYear: 1840,
  topLanguages: [
    { name: "Python", percentage: 62, color: "#3572A5" },
    { name: "TypeScript", percentage: 24, color: "#3178C6" },
    { name: "C++", percentage: 8, color: "#f34b7d" },
    { name: "SQL & Shell", percentage: 6, color: "#e34c26" }
  ],
  recentCommits: [
    { repo: "alexvance/rag-knowledge-assistant", message: "feat: add Cohere Rerank v3 cross-encoder hybrid pipeline", date: "2 hours ago" },
    { repo: "alexvance/autonomous-agent-network", message: "fix: update LangGraph state persistence checkpoint memory", date: "Yesterday" },
    { repo: "alexvance/vllm-quantization-benchmarks", message: "docs: add AWQ 4-bit vs FP16 perplexity evaluation matrix", date: "3 days ago" },
    { repo: "alexvance/edge-face-recognition", message: "perf: optimize TensorRT FP16 CUDA stream concurrency", date: "5 days ago" }
  ]
};
