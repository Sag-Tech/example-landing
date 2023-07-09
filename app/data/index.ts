import { ServicesTypesNum } from "./services";

/* eslint-disable sonarjs/no-duplicate-string */
export const ABOUT_SECTION = {
  title: "About company",
  description:
    "We provide solutions for Enterprises, Startups and Other businesses",
  items: [
    {
      content: "3+ years",
      text: "serving clients",
    },

    {
      content: "Expertise",
      text: "in Healthcare, Edtech, RealTech,\nManufacturing and Transportation",
    },

    {
      content: "Experienced",
      text: "in the US market",
    },
  ],
};

export const COMPANY_SECTION = {
  title: "Company size",
  description: "Our growth is based on",
  items: [
    {
      content: "/svg/company/sun.svg",
      text: "Ability to understand our\ncustomers needs",
    },

    {
      content: "/svg/company/users.svg",
      text: "Creating meaningful content\ntailored to clients",
    },

    {
      content: "/svg/company/bag.svg",
      text: "Providing great customer\nservice",
    },
  ],
};

export const PHOTO_URLS = {
  small: [
    {
      id: 1,
      url: "/img/services/web-small.svg",
      index: 0,
    },
    {
      id: 2,
      url: "/img/services/mobile-small.svg",
      index: 1,
    },
    {
      id: 3,
      url: "/img/services/artificial-small.svg",
      index: 2,
    },
    {
      id: 4,
      url: "/img/services/blockchain-small.svg",
      index: 3,
    },
    {
      id: 5,
      url: "/img/services/web-small.svg",
      index: 0,
    },
    {
      id: 6,
      url: "/img/services/mobile-small.svg",
      index: 1,
    },
    {
      id: 7,
      url: "/img/services/artificial-small.svg",
      index: 2,
    },
    {
      id: 8,
      url: "/img/services/blockchain-small.svg",
      index: 3,
    },
  ],
  bigDesktop: [
    {
      id: 1,
      url: "/img/services/web-big.svg",
    },
    {
      id: 2,
      url: "/img/services/mobile-big.svg",
    },
    {
      id: 3,
      url: "/img/services/artificial-big.svg",
    },
    {
      id: 4,
      url: "/img/services/blockchain-big.svg",
    },
  ],
  bigMobile: [
    {
      id: 1,
      url: "/img/services/web-small.svg",
    },
    {
      id: 2,
      url: "/img/services/mobile-small.svg",
    },
    {
      id: 3,
      url: "/img/services/artificial-small.svg",
    },
    {
      id: 4,
      url: "/img/services/blockchain-small.svg",
    },
    {
      id: 5,
      url: "/img/services/web-small.svg",
    },
    {
      id: 6,
      url: "/img/services/mobile-small.svg",
    },
    {
      id: 7,
      url: "/img/services/artificial-small.svg",
    },
    {
      id: 8,
      url: "/img/services/blockchain-small.svg",
    },
  ],
};

export const SERVICES_DESCRIPTION = [
  {
    title: "Web development",
    text: "Create your application based on modern UI/UX design approaches, using best design and development practices",
    link: ServicesTypesNum.web,
  },
  {
    title: "Mobile development",
    text: "Increase your online presence with a mobile app. Make an app that's relevant",
    link: ServicesTypesNum.mobile,
  },
  {
    title: "Artificial Intelligence",
    text: "Upgrade Your Business: Harness Next-Gen AI Software Solutions for Enhanced Efficiency, Innovation, and Competitive Edge!",
    link: ServicesTypesNum.artificial,
  },
  {
    title: "Blockchain development",
    text: "Step into the world of Web3 with us. Build decentralized services that will change the world",
    link: ServicesTypesNum.blockchain,
  },
];

export const WHAT_YOU_GET_SECTION = [
  {
    url: "/svg/services/coding.svg",
    text: "Expertise in web and\nmobile apps",
  },

  {
    url: "/svg/services/heart.svg",
    text: "Scalable solutions from\nscratch that users love",
  },

  {
    url: "/svg/services/calendar.svg",
    text: "Products on time and\nat affordable costs",
  },

  {
    url: "/svg/services/rocket.svg",
    text: "Speed to market without\ncompromising quality",
  },

  {
    url: "/svg/services/palette.svg",
    text: "Bringing your product vision to life",
  },

  {
    url: "/svg/services/headphone.svg",
    text: "The technical advice and support that you need to succeed.",
  },

  {
    url: "/svg/services/verified.svg",
    text: "Development turnkey solutions.",
  },
];
export const CUSTOMERS_SECTION = {
  leftSide: ["iOS", "Android"],
  rightSide: [
    "CRM Systems",
    "Content Management Systems",
    "Analytical Systems",
    "Blockchain Platforms",
    "Highload Systems",
    "Web Services",
  ],
};

export const HOW_WORK_TABS = {
  requirements: "Requirements",
  estimation: "Estimation",
  scrum: "Scrum Development",
  releasing: "Releasing",
  support: "Support",
};

export const STACK_SECTION = [
  {
    imageURL: "/svg/stack/add-menu.svg",
    text: "Use cutting edge technologies and trends to reduce clients’ cost and improve speed to market",
  },
  {
    imageURL: "/svg/stack/graph.svg",
    text: "Help our customers remain competitive in their industry",
  },
  {
    imageURL: "/svg/stack/document.svg",
    text: "Maintain detailed documentation throughout the development process",
  },
];

export const HOW_WORK_SECTION = [
  {
    category: HOW_WORK_TABS.requirements,
    text:
      "The first step is to communicate with you about your company's goals and what you would like to achieve " +
      "as a result.",
  },
  {
    category: HOW_WORK_TABS.estimation,
    text: "Based on your needs and requirements, we prepare an estimate of features of your product.",
  },
  {
    category: HOW_WORK_TABS.scrum,
    text:
      "As you are able to see intermediate results of our work, we divide the development into 3 parts." +
      " You can start with any stage because we work with both scratch projects and active projects developed " +
      "by previous development teams.",

    description: [
      "Wireframes and design. By developing high-fidelity wireframes and prototypes, we can ensure that" +
        " they pass rigorous UX testing and stakeholder reviews before being implemented into production. This helps " +
        "to ensure that your product meets the desired user experience standards while also delivering on all design " +
        "requirements.",
      "Development. In order to ensure that the product meets your expectations, developers work in release " +
        "cycles where they build new features or improve existing ones. This helps them keep up with changing " +
        "market demands. With each release cycle, you can keep track of progress and make sure that you are " +
        "receiving a quality product.",
      "Testing. To ensure that the app runs smoothly and without any bugs, we conduct automated or manual " +
        "testing. By doing this, we can check that your web or mobile application is bug-free, up-to-date " +
        "with the latest technologies, and will deliver a great user experience.",
    ],
  },

  {
    category: HOW_WORK_TABS.releasing,
    text:
      "After a product has been thoroughly tested and verified to be ready for release, it is then released " +
      "into the production stage.",
  },
  {
    category: HOW_WORK_TABS.support,
    text:
      "When the product has been launched, we provide continuous monitoring and support. This includes working " +
      "on new features, improving existing ones based on user feedback, and responding to your queries in a timely " +
      "manner. You can rest assured that your product will remain competitive in the market for years to come.",
  },
];

export const SCALABILITY_SECTION = [
  {
    url: "/svg/scalability/Education.svg",
    text: "Multi-year contracts with 2 Local Technical Universities that provide technical talents as needed",
  },

  {
    url: "/svg/scalability/Star.svg",
    text: "A mentoring program to train young professionals",
  },

  {
    url: "/svg/scalability/Checked.svg",
    text: "Help talented young software engineers grow with the industry",
  },

  {
    url: "/svg/scalability/Flash.svg",
    text: "Participate in IT competitions:\nKaggle and hackathons",
  },
];
