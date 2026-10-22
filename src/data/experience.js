// `start` (YYYY-MM) orders the timeline. Text fields are `{ en, es }`
// (read with `pick` from src/i18n); `current` marks the role held today.
export const experience = [
  {
    company: 'Seidor Analytics',
    role: {
      en: 'Senior Machine Learning Engineer — Consultant',
      es: 'Senior Machine Learning Engineer — Consultor',
    },
    period: { en: 'Jun 2025 — Present', es: 'Jun 2025 — Actualidad' },
    location: { en: 'Lima, PE (Hybrid)', es: 'Lima, PE (Híbrido)' },
    start: '2025-06',
    current: true,
    bullets: {
      en: [
        'Designed scalable data platforms and end-to-end ML systems for beverage-industry clients across LATAM (Koandina, Bodegas La Negrita, Arca Continental, Industrias San Miguel).',
        'Built real-time data architectures (AWS Kinesis, Glue, Athena, AppSync) and end-to-end MLOps pipelines in Snowflake ML with Feature Store and Model Registry.',
        'Led demand-forecasting models and BI dashboards (Streamlit, Power BI), while optimizing cloud costs via IaC (CDK/SAM).',
      ],
      es: [
        'Diseñé plataformas de datos escalables y sistemas de ML de punta a punta para clientes de la industria de bebidas en LATAM (Koandina, Bodegas La Negrita, Arca Continental, Industrias San Miguel).',
        'Construí arquitecturas de datos en tiempo real (AWS Kinesis, Glue, Athena, AppSync) y pipelines de MLOps completos en Snowflake ML con Feature Store y Model Registry.',
        'Lideré modelos de pronóstico de demanda y dashboards de BI (Streamlit, Power BI), optimizando costos de nube con IaC (CDK/SAM).',
      ],
    },
  },
  {
    company: 'Sokso',
    role: { en: 'Tech Lead', es: 'Tech Lead' },
    period: { en: 'Nov 2024 — Jun 2025', es: 'Nov 2024 — Jun 2025' },
    location: { en: 'Lima, PE (Hybrid)', es: 'Lima, PE (Híbrido)' },
    start: '2024-11',
    bullets: {
      en: [
        'Led architectural design of the SMART 3.0 platform, setting technical standards and guiding backend/frontend teams.',
        'Headed the ERP migration from SAP to NetSuite, coordinating critical data transfer and business-process redesign.',
        'Managed AWS infrastructure (EC2, ECS, S3), CI/CD pipelines, and cost/performance optimization.',
      ],
      es: [
        'Lideré el diseño de arquitectura de la plataforma SMART 3.0, definiendo estándares técnicos y guiando a los equipos de backend y frontend.',
        'Dirigí la migración del ERP de SAP a NetSuite, coordinando la transferencia de datos críticos y el rediseño de procesos de negocio.',
        'Gestioné la infraestructura en AWS (EC2, ECS, S3), los pipelines de CI/CD y la optimización de costos y rendimiento.',
      ],
    },
  },
  {
    company: 'Sokso',
    role: { en: 'Full Stack Developer', es: 'Desarrollador Full Stack' },
    period: { en: 'Nov 2023 — Nov 2024', es: 'Nov 2023 — Nov 2024' },
    location: { en: 'Lima, PE (Hybrid)', es: 'Lima, PE (Híbrido)' },
    start: '2023-11',
    bullets: {
      en: [
        'Led frontend (Vue.js) improvements for the SMART 2.0 platform and strengthened cybersecurity standards across frontend/backend (.NET).',
        "Contributed to SMART 3.0's initial build (Nest.js + Next.js) with a DevOps pipeline on AWS (ECS, S3, CI/CD).",
        'Built ML pilots for price forecasting and customer-churn prediction using time series techniques (PyTorch, GCP).',
      ],
      es: [
        'Lideré las mejoras de frontend (Vue.js) de la plataforma SMART 2.0 y reforcé los estándares de ciberseguridad en frontend y backend (.NET).',
        'Participé en la construcción inicial de SMART 3.0 (Nest.js + Next.js) con un pipeline de DevOps en AWS (ECS, S3, CI/CD).',
        'Construí pilotos de ML para pronóstico de precios y predicción de abandono de clientes con técnicas de series de tiempo (PyTorch, GCP).',
      ],
    },
  },
  {
    company: 'ArkRisk',
    role: {
      en: 'Full Stack Developer specialized in AI',
      es: 'Desarrollador Full Stack especializado en IA',
    },
    period: { en: 'Nov 2023 — Mar 2025', es: 'Nov 2023 — Mar 2025' },
    location: {
      en: 'New York, US (Remote, Part-time)',
      es: 'Nueva York, EE. UU. (Remoto, medio tiempo)',
    },
    start: '2023-11',
    bullets: {
      en: [
        'Built a RAG system with memory and tool use (FastAPI, LangGraph, Ollama) integrating DeepSeek, Llama3, and Phi4, deployed on a GPU-backed AWS instance.',
        'Shipped production LLM solutions (Hugging Face Inference Endpoints, custom PyTorch models on EC2) combined with OCR for insurance-policy digitization.',
        'Developed RAG-based QA chatbots integrating OpenAI Assistants v2, plus a Next.js frontend consuming the FastAPI services.',
      ],
      es: [
        'Construí un sistema RAG con memoria y uso de herramientas (FastAPI, LangGraph, Ollama) integrando DeepSeek, Llama3 y Phi4, desplegado en una instancia de AWS con GPU.',
        'Llevé a producción soluciones con LLMs (Hugging Face Inference Endpoints, modelos propios en PyTorch sobre EC2) combinadas con OCR para digitalizar pólizas de seguros.',
        'Desarrollé chatbots de preguntas y respuestas basados en RAG con OpenAI Assistants v2, más un frontend en Next.js que consume los servicios de FastAPI.',
      ],
    },
  },
  {
    company: 'Impacto AI',
    role: { en: 'Machine Learning Engineer', es: 'Machine Learning Engineer' },
    period: { en: 'May 2023 — Oct 2023', es: 'May 2023 — Oct 2023' },
    location: { en: 'Lima, PE (Remote)', es: 'Lima, PE (Remoto)' },
    start: '2023-05',
    bullets: {
      en: [
        'Led development of WhatsApp/Messenger/Instagram chatbots on GPT-based models, plus Computer Vision (OCR) and Speech Recognition models.',
        'Led Data Science projects using PySpark on AWS for large-scale data analysis and model development.',
        'Automated ML deployments in production with Airflow, managing real-time and batch pipelines.',
      ],
      es: [
        'Lideré el desarrollo de chatbots para WhatsApp, Messenger e Instagram sobre modelos GPT, además de modelos de visión computacional (OCR) y reconocimiento de voz.',
        'Lideré proyectos de ciencia de datos con PySpark en AWS para análisis de datos a gran escala y desarrollo de modelos.',
        'Automaticé despliegues de ML en producción con Airflow, gestionando pipelines en tiempo real y por lotes.',
      ],
    },
  },
  {
    company: 'AmauTeach Project',
    role: { en: 'Full Stack Developer', es: 'Desarrollador Full Stack' },
    period: { en: 'Jan 2022 — Dec 2022', es: 'Ene 2022 — Dic 2022' },
    location: { en: 'Lima, PE (Remote)', es: 'Lima, PE (Remoto)' },
    start: '2022-01',
    bullets: {
      en: [
        'Built AmauTeach Exam, an online testing platform with plagiarism-prevention ML (Vue, Flask, FastAPI, Node).',
        'Designed data-visualization systems to communicate insights to stakeholders.',
        'Integrated AWS services (Cognito, S3, Lambda) for auth, storage, and microservice processing.',
      ],
      es: [
        'Construí AmauTeach Exam, una plataforma de exámenes en línea con ML para prevenir el plagio (Vue, Flask, FastAPI, Node).',
        'Diseñé sistemas de visualización de datos para comunicar hallazgos a los stakeholders.',
        'Integré servicios de AWS (Cognito, S3, Lambda) para autenticación, almacenamiento y procesamiento con microservicios.',
      ],
    },
  },
  {
    company: 'Chazki',
    role: { en: 'Full Stack Developer', es: 'Desarrollador Full Stack' },
    period: { en: 'Jul 2021 — Dec 2021', es: 'Jul 2021 — Dic 2021' },
    location: { en: 'Lima, PE (Remote)', es: 'Lima, PE (Remoto)' },
    start: '2021-07',
    bullets: {
      en: [
        "Built features for Chazki's logistics platform (web + mobile) using Vue, React Native, Node, and GCP.",
        'Contributed to a Spring Boot backend calculating minimum delivery routes with optimization algorithms in Java.',
        'Implemented Kafka messaging for real-time data transmission in a Big Data environment.',
      ],
      es: [
        'Desarrollé funcionalidades para la plataforma logística de Chazki (web y móvil) con Vue, React Native, Node y GCP.',
        'Participé en un backend en Spring Boot que calcula rutas de entrega mínimas con algoritmos de optimización en Java.',
        'Implementé mensajería con Kafka para transmitir datos en tiempo real en un entorno de Big Data.',
      ],
    },
  },
  {
    company: 'MDP Consulting',
    role: {
      en: 'Full Stack Developer and Data Scientist',
      es: 'Desarrollador Full Stack y Data Scientist',
    },
    period: { en: 'Oct 2020 — Jul 2021', es: 'Oct 2020 — Jul 2021' },
    location: { en: 'Lima, PE (Remote)', es: 'Lima, PE (Remoto)' },
    start: '2020-10',
    bullets: {
      en: [
        'Managed data pipelines and AI services on IBM Cloud to improve debt-collection management for banking clients.',
        'Built ML models on service-usage insights using pandas, scikit-learn, and Jupyter.',
        'Conducted security testing (SQL injection) with SQLInjectMe, Sqliv, and Sqlmap.',
      ],
      es: [
        'Gestioné pipelines de datos y servicios de IA en IBM Cloud para mejorar la gestión de cobranzas de clientes bancarios.',
        'Construí modelos de ML sobre el uso de servicios con pandas, scikit-learn y Jupyter.',
        'Realicé pruebas de seguridad (inyección SQL) con SQLInjectMe, Sqliv y Sqlmap.',
      ],
    },
  },
];
