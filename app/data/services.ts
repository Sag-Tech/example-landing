/* eslint-disable sonarjs/no-duplicate-string */
import { StepsCard } from "~/components/cards/StepCard";
import { Technology } from "~/services/api/technologies/types";

/* eslint-disable no-shadow */
export enum ServicesTypesNum {
  "mobile" = "mobile-development",
  "web" = "web-development",
  "artificial" = "artificial-intelligence",
  "blockchain" = "blockchain-development",
}

export type IconsCard = {
  icon: string;
  title?: string;
  text: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  preview: {
    big: string;
    medium: string;
    small: string;
  };
  get: Array<IconsCard>;
  process: Array<StepsCard>;
  technologies: Array<Technology> | [];
};

const MOBILE_WEB_PROCESS: Array<StepsCard> = [
  {
    title: "Discovery",
    text: "In this step, we work with you to gather and analyze your requirements, goals and objectives for the project",
  },
  {
    title: "Design",
    text: "By clearly understanding your needs, we create a design concept that fits your brand identity, user experience and target audience",
  },
  {
    title: "Development",
    text: "Once you approve the design concept, our web developers proceed to code and build your website or app, ensuring it is optimized for speed, performance and security",
  },
  {
    title: "Testing & Launching",
    text: "We thoroughly test your website or app to make sure it's bug-free, functional, and user-friendly. After testing, we launch the site or app, ensuring that it runs smoothly and efficiently",
  },
  {
    title: "Maintenance & Updates",
    text: "We provide ongoing maintenance and support to keep your site or app updated, secure, and optimized for performance",
  },
  {
    title: "Support & Updates",
    text: "Once the app is launched, we maintain and regularly update it, as well as fix possible bugs, add new functionality, and improve performance",
  },
];

export const SERVICES: Array<Service> = [
  {
    id: ServicesTypesNum.web,
    title: "Web Development",
    description:
      "Build or improve your digital product with\u00A0a\u00A0one\u2011stop\u00A0team",
    categoryId: "2",
    preview: {
      big: "web-bg-dpb.svg",
      medium: "web-bg-dp.svg",
      small: "web-bg-mb.svg",
    },
    get: [
      {
        icon: "/svg/services/web/1.svg",
        title: "Digital Products",
        text: "We turn an idea into a brilliant digital product, combining a strategic approach to development and modern technologies",
      },
      {
        icon: "/svg/services/web/2.svg",
        title: "Enterprise Software",
        text: "We have a solid custom software development expertise to deliver complex business solutions like CRM, ERP systems",
      },
      {
        icon: "/svg/services/web/3.svg",
        title: "Highload Systems",
        text: "We develop reliable, scalable web services and apps that handle large volumes of data requests and backend computing",
      },
    ],
    process: MOBILE_WEB_PROCESS,
    technologies: [],
  },
  {
    id: ServicesTypesNum.mobile,
    categoryId: "1",
    title: "Mobile Development",
    description:
      "Build or improve your digital product with\u00A0a\u00A0one\u2011stop\u00A0team",
    preview: {
      big: "mobile-bg-dpb.svg",
      medium: "mobile-bg-dp.svg",
      small: "mobile-bg-mb.svg",
    },
    get: [
      {
        icon: "/svg/services/mobile/1.svg",
        title: "Native & Hybrid Apps",
        text: "We create native mobile applications, as well as solutions that are not dependent on particular devices or platforms",
      },
      {
        icon: "/svg/services/mobile/2.svg",
        title: "Emerging Technologies",
        text: "We use the best practices in modern mobile development, and innovative technologies like IoT, AR/VR and ML",
      },
      {
        icon: "/svg/services/mobile/3.svg",
        title: "Wearables",
        text: "We strive to create products that keep up with the times and will not lose their relevance for future mobile devices like wearables",
      },
    ],
    process: MOBILE_WEB_PROCESS,
    technologies: [],
  },
  {
    id: ServicesTypesNum.artificial,
    categoryId: "4",
    title: "Artificial Intelligence",
    description:
      "Upgrade Your Business: Harness Next-Gen AI Software Solutions for Enhanced Efficiency, Innovation, and Competitive Edge",
    preview: {
      big: "artificial-bg-dpb.svg",
      medium: "artificial-bg-dp.svg",
      small: "artificial-bg-mb.svg",
    },
    get: [
      {
        icon: "/svg/services/artificial/1.svg",
        title: "Custom AI Software Development",
        text: "Unlock the potential of AI with our custom software development services, designed to meet the unique needs of your business. We create AI applications, AI-driven automation, and AI-powered analytics that help you stay ahead of the competition",
      },
      {
        icon: "/svg/services/artificial/2.svg",
        title: "Custom AI Software Development",
        text: "Leverage our expertise in machine learning to develop advanced models that learn from data and deliver actionable insights. We specialize in supervised learning, unsupervised learning, and reinforcement learning techniques",
      },
      {
        icon: "/svg/services/artificial/3.svg",
        title: "Natural Language Processing (NLP)",
        text: "Enhance your user experience with our NLP solutions, including chatbots, sentiment analysis, and text classification. We develop NLP applications that understand, interpret, and generate human-like responses",
      },
      {
        icon: "/svg/services/artificial/4.svg",
        title: "Computer Vision Solutions",
        text: "Harness the power of computer vision to automate visual tasks and gain valuable insights from images and videos. Our experts develop image recognition, object detection, and facial recognition solutions tailored to your business needs",
      },
      {
        icon: "/svg/services/artificial/5.svg",
        title: "AI Integration",
        text: "Maximize the value of your existing systems with our AI integration services. We help you seamlessly integrate AI capabilities and deploy AI models to enhance your operations",
      },
    ],
    process: [
      {
        title: "Initial Consultation & Goal Setting",
        text: "We discuss with you the business goals, objectives, and expectations for the AI project. Identify specific use cases and opportunities where AI can have a significant impact. Evaluate the feasibility of the project and set clear goals and KPIs",
      },
      {
        title: "Data Collection & Preparation",
        text: "Assist you in collecting relevant data from various sources such as databases, APIs or web scraping. Do data preprocessing and transformation to ensure data quality, consistency, and privacy compliance. Separate the data into training, validation and test sets to facilitate model development and evaluation",
      },
      {
        title: "Feature Engineering & Model Selection",
        text: "Select appropriate characteristics (variables) that will serve as inputs to the AI model. Create new features or modifications to existing features to improve the effectiveness of the model. Select appropriate AI algorithms or model architectures based on the problem, objectives, and available data",
      },
      {
        title: "Model Development & Evaluation",
        text: "Train the AI model on training data, adjusting its parameters to optimize performance. Regularly evaluate the model's performance on the validation set to prevent overshoot or undershoot. Fine-tune hyperparameters in the model and make necessary changes based on your requirements",
      },
      {
        title: "Model Deployment & Integration",
        text: "Deploy a trained AI model on your server, such as a cloud server or your own hardware. Provide support and guidance for you throughout the deployment and integration process, ensuring a smooth transition",
      },
      {
        title: "Model Monitoring, Maintenance & Updates",
        text: "For the first week, monitor the performance of the AI model in the production environment, identifying potential problems or performance degradation. Support you to resolve any issues, retrain the model for new data, and maintain its accuracy and adaptability",
      },
    ],
    technologies: [],
  },
  {
    id: ServicesTypesNum.blockchain,
    categoryId: "3",
    title: "Blockchain Development",
    description:
      "Unleash the Potential of Cutting-Edge Blockchain Solutions for Unparalleled Security, Transparency, and Operational Excellence",
    preview: {
      big: "blockchain-bg-dpb.svg",
      medium: "blockchain-bg-dp.svg",
      small: "blockchain-bg-mb.svg",
    },
    get: [
      {
        icon: "/svg/services/blockchain/1.svg",
        title: "Custom Blockchain Development",
        text: "Our team of experts will design and develop tailor-made blockchain solutions to meet your specific needs and industry requirements, ensuring a secure, scalable, and efficient system",
      },
      {
        icon: "/svg/services/blockchain/2.svg",
        title: "Smart Contract Development and Audit",
        text: "We create secure and reliable smart contracts, designed to automate processes, reduce costs, and minimize risks. Our team also offers comprehensive smart contract audit services to ensure the security and accuracy of your existing contracts",
      },
      {
        icon: "/svg/services/blockchain/6.svg",
        title: "Support and Maintenance Services",
        text: "We offer ongoing support and maintenance services to ensure the smooth operation and continuous improvement of your blockchain solutions, providing you with peace of mind and a reliable partner for your long-term success",
      },
      {
        icon: "/svg/services/blockchain/4.svg",
        title: "Token Creation and ICO/IDO/IEO Consulting",
        text: "From conceptualization to execution, our team will guide you through the entire process of launching a successful token offering, including whitepaper development, token design, marketing, and regulatory compliance",
      },
      {
        icon: "/svg/services/blockchain/5.svg",
        title: "Blockchain Integration with Existing Systems",
        text: "Our team can help you seamlessly integrate blockchain technology into your current infrastructure, enabling you to unlock the full potential of distributed ledger technology without disrupting your existing operations",
      },
      {
        icon: "/svg/services/blockchain/3.svg",
        title: "Decentralized Application (DApp) Development",
        text: "Our skilled developers can create user-friendly, high-performance DApps for various industries, providing seamless integration with your existing systems and a frictionless user experience",
      },
    ],
    process: [
      {
        title: "Requirements Analysis & Platform Selection",
        text: "Gather and analyze your needs and goals, evaluate blockchain solutions and select the most appropriate blockchain platform based on your project requirements",
      },
      {
        title: "System Architecture & Smart Contract Design",
        text: "We develop a comprehensive blueprint of the blockchain solution, describing system components and their interactions. Create secure and efficient smart contracts to manage business logic and rules",
      },
      {
        title: "User Interface & Application Development",
        text: "Design user-friendly interfaces and applications that interact with blockchain, providing a seamless user experience and easy access to blockchain functionality",
      },
      {
        title: "Integration & Testing",
        text: "Integrate blockchain solutions with existing systems and ensure interoperability with platforms. We perform comprehensive testing, including unit testing, integration, performance and security testing to identify and fix any issues",
      },
      {
        title: "Deployment & Launch",
        text: "Deploy blockchain solutions in a controlled environment, ensuring seamless integration with existing systems and minimal disruption to business operations",
      },
      {
        title: "Support, Maintenance & Continuous Improvement",
        text: "Provide ongoing support and maintenance of blockchain solutions, resolving any issues, implementing new features and ensuring security",
      },
    ],
    technologies: [],
  },
];
