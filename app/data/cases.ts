/* eslint-disable no-shadow */
/* eslint-disable sonarjs/no-duplicate-string */

export type Case = {
  id: string;
  preview: string;
  preview2x: string;
  previewFull2x: string;
  previewFull: string;
  banner: string;
  banner2x: string;
  name: string;
  shortDescription: string;
  descriptionTitle: string;
  industry: Array<string>;
  client: string;
  description: string;
  results: string;
  team: string;
  stack: Array<string>;
  projectLife: string;
  seoDescription: string;
};

export const CASES: Array<Case> = [
  {
    id: "1",
    preview: "/img/cases/preview-1.webp",
    preview2x: "/img/cases/preview-1@2x.webp",
    previewFull2x: "/img/cases/preview-1-full.webp",
    previewFull: "/img/cases/preview-1-full@2x.webp",
    banner: "/img/cases/banner-1.webp",
    banner2x: "/img/cases/banner-1@2x.webp",
    name: "GF",
    shortDescription: "CRM system for organizing an annual competition",
    descriptionTitle: "Revolutionize Your Competition Process Today",
    industry: ["Non-profit"],
    client:
      "Non-profit foundation based in New York that supports contemporary art and education",
    description:
      "The foundation has been organizing an annual competition for scholarships in arts, social, physical, and humanities sciences since 1951. The competition invites participants from all over the world to submit their work examples, such as articles, paintings, photographs, or music. A jury team is formed to evaluate the entries and select winners in different categories. Over 170 scholarships are awarded each year., Previously, the foundation used an old CRM system to track participants, but the work had to be sent manually via email. To streamline the process, a new platform needed to be developed that would allow participants to apply online and attach their competition entries. The platform would enable the jury to receive the submissions faster, evaluate them, and select the winners.",
    results:
      "By developing a new platform, we helped them automate and update their CRM system, allowing for faster submission of competition entries, improved jury evaluations, and streamlined communication between participants and other users. We're proud to say that the platform's implementation resulted in a successful competition, with over 2500 applicants submitting their applications through the platform in 2021. Our continued system support ensures that the Foundation can continue to utilize the platform to its full potential, making a greater impact in the art and education industry.",
    team: "The project was completed by a team of 2 frontend developers, 1 backend developer, and 1 project manager.",
    stack: [
      "React",
      "Javascript",
      "Tailwind Css",
      "Material UI",
      "Mobx",
      "Webpack",
      "Python",
      "Django",
      "PostgreSQL",
    ],
    projectLife:
      "The project took 14 months to complete, with further system support provided afterward.",
    seoDescription:
      "Our software development team created an online platform for a non-profit organization to streamline their scholarship competition. As a result, client received an improved submission process, increased applicant participation, and positively impacted the art and education industry. Contact us to learn how we can help your organization achieve its goals.",
  },
  {
    id: "2",
    preview: "/img/cases/preview-2.webp",
    preview2x: "/img/cases/preview-2@2x.webp",
    previewFull2x: "/img/cases/preview-2-full.webp",
    previewFull: "/img/cases/preview-2-full@2x.webp",
    banner: "/img/cases/banner-2.webp",
    banner2x: "/img/cases/banner-2@2x.webp",
    name: "CharityToken, CT",
    shortDescription: "Mobile app for charity",
    descriptionTitle:
      "Empowering Charitable Giving through Blockchain Technology",
    industry: ["Non-profit", "Blockchain"],
    client: "Privately owned company based in sunny Australia",
    description:
      "As blockchain technologies continue to develop in Australia, the client recognized an opportunity to use them to revolutionize charitable giving. To accomplish this goal, the team developed five smart contracts, along with a robust backend and an admin panel to verify registered non-profit organizations. They also created a mobile application that enables users to make donations to specific charities or to all organizations at once. Additionally, with each transaction and swap made through the platform, users receive a percentage of the project's own currency.",
    results:
      "We created an admin panel for checking non-profit organizations, and we developed a mobile application both for iOS and Android that enables everyone to make a difference in the world. By investing in the charities, you can be part of a movement that helps others and promotes financial empowerment. Ordinary users have the ability to send donations to charitable organizations, buy tokens with a credit or debit card through the Indacoin payment system, and exchange tokens. Meanwhile, charitable organizations have the ability to collect donations, exchange them for other tokens, and withdraw them to their internal wallet. Each user additionally earns from any transaction that is made by other users. Now the app has more than 1200 users.",
    team: "The project was completed by a team of 1 blockchain developer, 1 backend developer, 1 frontend developer, 1 mobile app developer, 1 project manager.",
    stack: [
      "Typescript",
      "Solidity",
      "Nest.js",
      "Postgres",
      "Redis",
      "BSC",
      "Polygon",
      "Flutter",
      "Dart",
    ],
    projectLife:
      "The project took 9 months to complete, with further system support provided afterward.",
    seoDescription:
      "Our software team has harnessed the power of blockchain technology to create a revolutionary platform for charity in Australia. Our solution includes writing smart contracts, development of a mobile app and an admin panel for non-profits. Join the movement and secure your financial freedom while making a positive impact. Start development today!",
  },
  {
    id: "3",
    preview: "/img/cases/preview-3.webp",
    preview2x: "/img/cases/preview-3@2x.webp",
    previewFull2x: "/img/cases/preview-3-full.webp",
    previewFull: "/img/cases/preview-3-full@2x.webp",
    banner: "/img/cases/banner-3.webp",
    banner2x: "/img/cases/banner-3@2x.webp",
    name: "The Foreman",
    shortDescription: "Streamlined site for beef producers",
    descriptionTitle:
      "Take Your Beef Business to the Next Level with Our Site Solution",
    industry: ["Manufacturing"],
    client:
      "A large cooperative of American ranchers who produce and sell beef",
    description:
      "With ranchers located throughout the United States and a database containing information on cow weight, date of slaughter, meat production from each cow, and customer accounts, the cooperative needed to optimize its website's performance. The sheer volume of data was causing long loading times and slow request processing.",
    results:
      "We were able to enhance their website's loading time, improve long request issues, and create new pages with multiple payment options.",
    team: "Our team consists of a dedicated project manager, a talented backend developer, and a skilled frontend developer.",
    stack: [
      "NodeJS",
      "AWS lambda",
      "MySQL",
      "Sequelize",
      "Angular",
      "TypeScript",
      "PrimeNg",
      "SCSS",
    ],
    projectLife:
      "Project took just 5 months to complete, and the customer was so pleased with our work that he returned to us for additional features, which we completed in just 3 months.",
    seoDescription:
      "We helped a large American beef cooperative optimize its CRM system by reducing load times and improving query processing. We also implemented multiple payment options to provide customers with greater convenience. With our CRM system development solutions, we optimized data management and improved customer service for this manufacturing industry client. Let's check how our client saved his money and increased the performance of the platform.",
  },
  {
    id: "4",
    preview: "/img/cases/preview-4.webp",
    preview2x: "/img/cases/preview-4@2x.webp",
    previewFull2x: "/img/cases/preview-4-full.webp",
    previewFull: "/img/cases/preview-4-full@2x.webp",
    banner: "/img/cases/banner-4.webp",
    banner2x: "/img/cases/banner-4@2x.webp",
    name: "Novel, NL",
    shortDescription: "Mobile application for learning music",
    descriptionTitle:
      "Unlock Your Musical Potential with a New Revolutionary Mobile Learning App!",
    industry: ["EdTech", "ML"],
    client: "Startup from the USA",
    description:
      "Our client aims to revolutionize music education by creating a mobile application that utilizes game-based learning and artificial intelligence. The application is designed to help users learn how to play music by determining their level of proficiency and providing personalized lessons to improve their skills.",
    results:
      "We created a mobile app that's perfect for beginners and experienced musicians alike. You can determine your current level of proficiency and start taking lessons tailored to your needs. You'll have access to a neural network-powered player that will help you learn to play songs correctly. Plus, you can track your progress with detailed statistics and control your learning experience.",
    team: "The project was completed by a team of 1 ML engineer, 1 backend developer, 1 frontend developer, 2 mobile developers, 1 project manager.",
    stack: [
      "AWS",
      "Python/Django",
      "Django Ninja",
      "PostgreSQL",
      "React",
      "Typescript",
      "Neural network",
      "Dart",
      "Flutter",
    ],
    projectLife: "The project took 14 months to complete.",
    seoDescription:
      "Find out how our client, a US based startup, is revolutionizing music education with its mobile app. Using game-based learning and artificial intelligence, the app provides personalized lessons tailored to your level of knowledge. With a neural network-based player and detailed progress tracking, users can improve their skills and monitor their learning. Whether you're a beginner or an experienced musician, our EdTech solutions can help you. Get the look at how our client makes a positive impact on music education by drawing  on our mobile app development expertise.",
  },
  {
    id: "5",
    preview: "/img/cases/preview-5.webp",
    preview2x: "/img/cases/preview-5@2x.webp",
    previewFull2x: "/img/cases/preview-5-full.webp",
    previewFull: "/img/cases/preview-5-full@2x.webp",
    banner: "/img/cases/banner-5.webp",
    banner2x: "/img/cases/banner-5@2x.webp",
    name: "OSMO, OS",
    shortDescription: "Platform for video calls",
    descriptionTitle:
      "Experience Video Conferencing with New Advanced Platform - Transcription, Cloud Storage, and More",
    industry: ["Video meetings"],
    client: "Startup from the USA",
    description:
      "Our client, a startup from the USA, recognizes the growing demand for video conferencing platforms, especially after the events of 2020. They have tasked us with developing a new and advanced platform that offers transcription of both video and audio, as well as the ability to mark meeting topics and identify speakers. The platform will also store video calls in the cloud and allow registration through the platform or a Google account.",
    results:
      "The resulting video conferencing platform supports Zoom and offer video transcription, enabling users to arrange meetings, invite other participants, including non-users, and create topics and subtopics for their meetings. The platform's user-friendly interface makes it easy for users to access their meetings, track discussions, and save meeting data for later reference.",
    team: "Our team consisted of 3 professionals, including 1 backend developer, 1 frontend developer, and 1 project manager. ",
    stack: [
      "Vite",
      "Vue",
      "Tailwind Css",
      "JavaScript",
      "NestJS",
      "PostgreSQL",
      "TypeScript",
      "Electron",
    ],
    projectLife: "The project took 5 months to complete. ",
    seoDescription:
      "Get more info how our client, a video meetings startup from the USA, is meeting the growing demand for advanced conferencing platforms. The video conferencing platform offers transcription of both audio and video, speaker identification, and the ability to mark meeting topics, all with cloud storage and Google account registration. With a user-friendly interface and support for Zoom, arranging meetings and tracking discussions has never been easier. Discover how our web development solutions helped this startup create a cutting-edge video conferencing platform that meets the needs of modern remote work environments.",
  },
  {
    id: "6",
    preview: "/img/cases/preview-6.webp",
    preview2x: "/img/cases/preview-6@2x.webp",
    previewFull2x: "/img/cases/preview-6-full.webp",
    previewFull: "/img/cases/preview-6-full@2x.webp",
    banner: "/img/cases/banner-6.webp",
    banner2x: "/img/cases/banner-6@2x.webp",
    name: "EyesOn",
    shortDescription: "Mobile application for restaurant signs recognition",
    descriptionTitle: "Discover the Best Restaurants with Ease",
    industry: ["Entertainment"],
    client: "Startup from the USA",
    description:
      "The client approached us with a unique problem in the entertainment industry. They needed a mobile application that could recognize restaurant signs and provide information such as the price category, level of service, quality of dishes, and customer reviews.",
    results:
      "Our solution was to use a neural network that works in conjunction with the Yelp database. The prototype was released with a working neural network that accurately led users to the Yelp website based on the photo of the restaurant sign. Currently, we are developing the functionality for the next iteration of the application, which will further improve the user experience and provide more accurate information about nearby restaurants.",
    team: "Our team consisted of 1 ML engineer, 1 backend developer, 1 mobile app developer, and 1 project manager.",
    stack: [
      "Dart",
      "Flutter",
      "Azure neural network",
      "Yelp integration",
      "Python",
    ],
    projectLife:
      "We were able to complete the project within the set timeframe of 3 months.",
    seoDescription:
      "Learn how our web development solutions helped a startup from the USA solve a unique problem in the entertainment industry. Our team developed a mobile application that uses a neural network and Yelp database to recognize restaurant signs and provide information such as price category, level of service, quality of dishes, and customer reviews. The prototype already delivers accurate results and the next iteration of the app will further improve user experience and provide more precise information. Discover how our innovative technology is changing the way we explore the dining scene in urban environments.",
  },
  {
    id: "7",
    preview: "/img/cases/preview-7.webp",
    preview2x: "/img/cases/preview-7@2x.webp",
    previewFull2x: "/img/cases/preview-7-full.webp",
    previewFull: "/img/cases/preview-7-full@2x.webp",
    banner: "/img/cases/banner-7.webp",
    banner2x: "/img/cases/banner-7@2x.webp",
    name: "Listerly",
    shortDescription: "Mobile application for real estate agents",
    descriptionTitle:
      "Maximize Your Sales Potential with The Real Estate Mobile App",
    industry: ["RealTech", "ML"],
    client: "Startup from the USA",
    description:
      "The mobile application has been developed to make it easier for real estate agents to create ads for the sale and purchase of apartments. The app offers various features, such as the ability to create branded video tours, edit photos, create advertisements, and other marketing materials.",
    results:
      "The team successfully created a turnkey mobile application that offers various features for real estate agents. The application allows recording of video tours and overlaying SVG on them. The photo editor developed for the application enables users to change brightness, contrast, saturation, and other settings. Furthermore, the team developed and trained a neural network that allows changing the sky in photographs.",
    team: "The project was completed by a team of 1 backend developer, 1 mobile app developer, 1 project manager. ",
    stack: ["Python", "Django", "TensorFlow", "PostgresQL", "Dart", "Flutter"],
    projectLife:
      "We were able to complete the project within the set timeframe of 9 months.",
    seoDescription:
      "The mobile app offers a turnkey solution for real estate agents to create ads for the sale and purchase of apartments. Create branded video tours, edit photos, and use our trained neural network to change the sky in photographs.",
  },
  {
    id: "8",
    preview: "/img/cases/preview-8.webp",
    preview2x: "/img/cases/preview-8@2x.webp",
    previewFull2x: "/img/cases/preview-8-full.webp",
    previewFull: "/img/cases/preview-8-full@2x.webp",
    banner: "/img/cases/banner-8.webp",
    banner2x: "/img/cases/banner-8@2x.webp",
    name: "Gorilla diamonds",
    shortDescription: "Crypto Wallet App",
    descriptionTitle:
      "Simplify Your Crypto Transactions with a New Innovative Wallet App",
    industry: ["FinTech", "Blockchain"],
    client: "Startup from Canada",
    description:
      "Our client, a blockchain startup from Canada, required a robust mobile application that could simplify the process of buying and exchanging cryptocurrencies for their users.",
    results:
      "We rose to the challenge and developed a cutting-edge crypto wallet app with a range of advanced features. The app is targeted towards users in the blockchain industry who want to make hassle-free transactions using their mobile devices. It allows users to buy any tokens on PancakeSwap with a debit or credit card, track rewards for transactions, and exchange tokens quickly and securely. We also developed support for 6 languages and 4 currencies, making the app more accessible to a global audience.",
    team: "Our team consisted of a blockchain developer, a backend developer, a frontend developer, a mobile app developer, and a project manager.",
    stack: [
      "Nest.js",
      "web3.js",
      "Redis",
      "PostgreSQL",
      "Vue 3",
      "Typescript",
      "Quasar",
      "Dart",
      "Flutter",
    ],
    projectLife:
      "We completed the project within 8 months, delivering a highly-functional crypto wallet app that is revolutionizing the way users buy and exchange tokens.",
    seoDescription:
      "Our FinTech client from Canada wanted a robust mobile app to simplify buying and exchanging cryptocurrencies. Our cutting-edge solutions for a crypto wallet app let users buy tokens, track rewards, and exchange tokens quickly and securely. Available in 6 languages and 4 currencies, the app is perfect for users in the blockchain industry who want to make hassle-free transactions on their mobile devices.",
  },
  {
    id: "9",
    preview: "/img/cases/preview-9.webp",
    preview2x: "/img/cases/preview-9@2x.webp",
    previewFull2x: "/img/cases/preview-9-full.webp",
    previewFull: "/img/cases/preview-9-full@2x.webp",
    banner: "/img/cases/banner-9.webp",
    banner2x: "/img/cases/banner-9@2x.webp",
    name: "Hardi",
    shortDescription: "Analytics system for distributors",
    descriptionTitle:
      "Analytics System that Increases Your Distribution Network Sales",
    industry: ["Distribution"],
    client:
      "A large American distributor of heat exchange and ventilation equipment",
    description:
      "In order to predict sales of products, equipment, or services, it is important for any large industrial or service structure to have the right tools. The client created a research and education fund to find the best solutions for the development of production and business and needed a good tool for sales prediction.",
    results:
      "We have created a system that allows you to forecast total sales, track monthly progress, and compare data trends to make informed decisions. The client gets a market report system that provides critical insights into various equipment markets in the USA. This system also includes a visual data comparison tool that provides real-time weather indicators, trends, and other factors that impact sales. This tool enables the client to find correlations between different data sets and gain critical insights into how to improve the distribution network.",
    team: "The project was completed by a team of 1 ML engineer, 1 project manager. ",
    stack: ["R", "R Shiny", "DYGRAPHS"],
    projectLife: "Project took 12 months to complete.",
    seoDescription:
      "Large American distributor of heat exchange and ventilation equipment needed a tool for sales prediction. Our team created a system that forecasts sales, tracks progress, and compares data trends to provide critical insights into equipment markets in the USA. Read more how we helped to increase the company's sales.",
  },
  {
    id: "10",
    preview: "/img/cases/preview-10.webp",
    preview2x: "/img/cases/preview-10@2x.webp",
    previewFull2x: "/img/cases/preview-10-full.webp",
    previewFull: "/img/cases/preview-10-full@2x.webp",
    banner: "/img/cases/banner-10.webp",
    banner2x: "/img/cases/banner-10@2x.webp",
    name: "Dreamz",
    shortDescription: "Education platform",
    descriptionTitle: "An Education Platform for the Future",
    industry: ["EdTech"],
    client: "Startup from the USA",
    description:
      "Our client approached us with the challenge of creating an online learning platform that would connect students with teachers and offer flexible, high-quality courses.",
    results:
      "We were able to create a platform that provides students with access to information about teachers, course descriptions, schedules, and more. The platform offers a range of features that make online learning easy and convenient. Registered users can attend lectures and classes at any time, choose the right teacher and course, and even attend group classes. This platform is perfect for anyone looking to expand their knowledge and improve their skills. This is a state-of-the-art education platform that is changing the way people learn.",
    team: "Our team consisted of a backend developer, 2 frontend developers and a project manager.",
    stack: [
      "React",
      "SCSS",
      "Tailwind",
      "Webpack",
      "NodeJS",
      "Typescript",
      "PostgresQL",
    ],
    projectLife: "We completed the project within a timeframe of 4 months.",
    seoDescription:
      "Discover a cutting-edge online learning platform that connects students with teachers and offers flexible, high-quality courses. Register for classes, attend lectures and group classes at any time, and choose from a range of courses to expand your knowledge and improve your skills.",
  },
  {
    id: "11",
    preview: "/img/cases/preview-11.webp",
    preview2x: "/img/cases/preview-11@2x.webp",
    previewFull2x: "/img/cases/preview-11-full.webp",
    previewFull: "/img/cases/preview-11-full@2x.webp",
    banner: "/img/cases/banner-11.webp",
    banner2x: "/img/cases/banner-11@2x.webp",
    name: "Honey Health",
    shortDescription: "Mobile app for self-management diabetes",
    descriptionTitle:
      "Achieve Better Health Outcomes with a New Self-Management Mobile App",
    industry: ["Healthcare"],
    client: "Startup from the USA",
    description:
      "Our client approached us with an innovative concept for a mobile app that helps users manage their diabetes effectively. They provided us with the design and backend, and we took on the task of implementing the existing logic and making mobile layouts. The app's key features included glucose level monitoring and connecting with like-minded individuals.",
    results:
      "We developed a cutting-edge mobile app that helps users manage their diabetes, form healthier habits, and achieve better outcomes. The app along with its community of experts, leaders, and creators, enhances the self-management journey by providing education, motivation, and inspiration. The app has gained over 800 users within three months of its launch.",
    team: "Our team comprised a mobile developer and a project manager.",
    stack: ["Dart", "Flutter", "AWS", "Python", "PostgresQL"],
    projectLife:
      "We delivered the primary project in seven months and continue to add new features and improvements.",
    seoDescription:
      "Our client's innovative concept for a diabetes management app inspired us to create a cutting-edge mobile app that helps users form healthier habits and achieve better outcomes. With glucose level monitoring and a supportive community, our app has gained over 800 users in just three months.",
  },
  {
    id: "12",
    preview: "/img/cases/preview-12.webp",
    preview2x: "/img/cases/preview-12@2x.webp",
    previewFull2x: "/img/cases/preview-12-full.webp",
    previewFull: "/img/cases/preview-12-full@2x.webp",
    banner: "/img/cases/banner-12.webp",
    banner2x: "/img/cases/banner-12@2x.webp",
    name: "TMT",
    shortDescription: "Mobile apps for trucking business",
    descriptionTitle:
      "Streamline Your Trucking Business with Custom Mobile Apps",
    industry: ["Transportation"],
    client: "Startup from the USA",
    description:
      "Our client approached us with a set of mobile apps that had multiple issues, including non-functional Stripe payments, GPS tracking, and notifications. These apps were designed for truck owners and service provider companies that work with truck owners.",
    results:
      "We successfully rewrote the code, updated the layouts, and changed the logic in the mobile apps, resulting in a more user-friendly experience. We also resolved the issues with payments, notifications, and GPS tracking, ensuring seamless operation for truck owners and service providers. Our efforts resulted in increased performance  and streamlined operations for our client.",
    team: "Our team comprised 2 mobile developers and a project manager.",
    stack: ["Flutter", "Node.js", "Firebase", "Google cloud"],
    projectLife: "The project took 2 months to complete.",
    seoDescription:
      "Our transportation startup client from the USA approached us with non-functional Stripe payments, GPS tracking, and notification issues. We successfully rewrote the code, updated layouts, and changed the logic in the apps for a better user experience, seamless operations, and increased performance. Contact us for cutting-edge mobile app solutions.",
  },
  {
    id: "13",
    preview: "/img/cases/preview-13.webp",
    preview2x: "/img/cases/preview-13@2x.webp",
    previewFull2x: "/img/cases/preview-13-full.webp",
    previewFull: "/img/cases/preview-13-full@2x.webp",
    banner: "/img/cases/banner-13.webp",
    banner2x: "/img/cases/banner-13@2x.webp",
    name: "Medical solutions",
    shortDescription: "Solutions for the governmental body",
    descriptionTitle: "Enhancing Cardiovascular Disease Diagnosis with ML",
    industry: ["Healthcare"],
    client: "Department of Health and Human Services",
    description:
      "The main task was to find a comprehensive solution in Medical Image Analysis and Computer Vision.",
    results:
      "Our team worked with raw MRI data scans to identify the existence of cardiovascular disease and its progression. We developed a state-of-the-art model that accurately predicts diseases with a staggering 87.9835259232% accuracy rate. Our solution has been implemented across the department, streamlining the process of diagnosing and treating cardiovascular disease.",
    team: "Our team consisted of a ML developer.",
    stack: ["Python", "PyTorch", "TensorFlow"],
    projectLife: "The project took 2 months to complete.",
    seoDescription:
      "Our team developed a cutting-edge Medical Image Analysis and Computer Vision solution for the Department of Health and Human Services that accurately predicts cardiovascular diseases with an 87.98% accuracy rate. Our model has streamlined the process of diagnosing and treating these diseases, improving patient outcomes.",
  },
];
