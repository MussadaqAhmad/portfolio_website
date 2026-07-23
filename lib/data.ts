import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Full-Stack Mobile Engineer",
    company: "Alliance Global (AGBL Group)",
    employmentType: "Full-time",
    location: "Dubai, United Arab Emirates · Remote",
    date: "Oct 2024 – Present",
    highlights: [
      "Architect and deliver cross-platform and native mobile solutions across Flutter, React Native, native Android (Kotlin/Java), and native iOS (Swift), ensuring consistent performance and user experience across a multi-tenant SaaS platform.",
      "Own mobile architecture and system design for multi-platform initiatives, applying Clean Architecture and SOLID principles to reduce technical debt and improve long-term maintainability across cross-platform and native codebases.",
      "Build and maintain native Android and iOS modules using Kotlin/Java and Swift, extending platform-specific capabilities beyond what cross-platform frameworks support alone.",
      "Design and implement REST, GraphQL, and Firebase integrations across multiple mobile technology stacks, enabling dynamic feature delivery for international enterprise clients.",
      "Establish and maintain CI/CD pipelines (GitHub Actions, GitLab CI) automating build, test, and deployment across Flutter, React Native, and native projects, increasing release consistency across environments.",
      "Lead and mentor a cross-functional mobile engineering team through structured code reviews and technical guidance spanning multiple frameworks, raising code quality standards and reducing production regressions.",
      "Drive performance optimization across cross-platform and native codebases, improving UI responsiveness and load times in line with modern UX standards.",
      "Own end-to-end mobile application delivery from architecture and technical design through App Store and Google Play release, coordinating with product, design, and backend teams to meet business objectives on schedule.",
    ],
    skills: [
      "Flutter",
      "React Native",
      "Kotlin",
      "Java",
      "Swift",
      "GraphQL",
      "Firebase",
      "CI/CD",
      "Clean Architecture",
      "SOLID",
    ],
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Flutter Engineer",
    company: "Arhamsoft Pvt Ltd",
    employmentType: "Full-time",
    location: "Lahore, Pakistan · On-site",
    date: "Aug 2022 – Oct 2024",
    highlights: [
      "Delivered multiple concurrent Flutter applications for iOS and Android on schedule by leading a team of developers and maintaining high coding standards across releases.",
      "Increased project delivery speed by 20% by implementing an Agile/Scrum sprint framework with Jira-based tracking across cross-functional teams.",
      "Reduced bug incidence by 15% by introducing a systematic code review process, improving overall release stability.",
      "Improved cross-team API performance and reduced integration errors by authoring structured JSON API documentation for backend development.",
      "Cut project timeline overruns by 10% by partnering with project managers on accurate technical estimation and proactive status reporting.",
      "Streamlined iOS release cycles by managing end-to-end App Store and TestFlight deployment pipelines.",
      "Increased user engagement by 25% by partnering with design and product teams to design and ship new Flutter features.",
      "Owned the full development lifecycle from planning through deployment across cross-functional product initiatives, ensuring consistent alignment with business goals.",
    ],
    skills: [
      "Flutter",
      "Dart",
      "Agile/Scrum",
      "Jira",
      "REST APIs",
      "App Store",
      "TestFlight",
      "Code Review",
    ],
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Associate Flutter Developer",
    company: "Finjineers Pvt Ltd",
    employmentType: "Full-time",
    location: "Lahore, Pakistan · On-site",
    date: "Nov 2021 – Aug 2022",
    highlights: [
      "Delivered responsive, production-ready Flutter applications for iOS and Android by applying MVVM and MVC architecture patterns to build scalable, testable app foundations.",
      "Improved data transfer reliability by integrating RESTful APIs to synchronize application data with backend services.",
      "Increased team workflow efficiency by participating in Agile/Scrum ceremonies and managing sprint tasks via Trello.",
      "Enhanced user experience while reducing development time by implementing custom UI animations and integrating third-party libraries.",
      "Strengthened Flutter development best practices by supporting senior engineers in debugging and performance optimization initiatives.",
      "Ensured smooth, consistent release cycles by deploying applications to Google Play and Apple App Store.",
    ],
    skills: [
      "Flutter",
      "Dart",
      "MVVM",
      "MVC",
      "REST APIs",
      "Agile/Scrum",
      "Trello",
      "App Store",
      "Google Play",
    ],
    icon: React.createElement(CgWorkAlt),
  },
] as const;

export const projectsData = [
  {
    title: "TP Auction",
    description:
      "A luxury auction platform with a dynamic bidding system, expert-verified listings, seamless seller onboarding, and secure payments via Total Processing.",
    tags: [
      "Flutter",
      "Firebase",
      "Socket.IO",
      "WebSockets",
      "REST APIs",
      "Deep Linking",
    ],
    imageUrl: corpcommentImg,
  },
  {
    title: "Inner Light Academy",
    description:
      "A wellness app with spiritual courses, meditation, audio/video integration, dynamic booking, and secure payments via PayPal, Stripe, and Tap Pay.",
    tags: [
      "Flutter",
      "Firebase",
      "Subscriptions",
      "REST APIs",
      "PayPal",
      "Stripe",
    ],
    imageUrl: rmtdevImg,
  },
  {
    title: "Twadini",
    description:
      "A multi-service ride app for bookings, deliveries, rentals, and flights, with real-time tracking, secure OTP login, and Google Maps integration.",
    tags: ["Flutter", "Firebase", "Google Maps", "REST APIs", "SQLite"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Captain Twadini",
    description:
      "A driver app for trip management, real-time updates, secure OTP login, and Google Maps-based routing with an enhanced UI.",
    tags: [
      "Flutter",
      "Firebase Real Time Database",
      "Real Time Tracking",
      "REST APIs",
    ],
    imageUrl: corpcommentImg,
  },
  {
    title: "HR Connect",
    description:
      "An employee management app with GPS-based attendance, salary tracking, tax details, and multi-company support via tenant ID.",
    tags: ["Flutter", "Firebase", "GPS Attendance", "REST APIs", "File Saving"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Scotani",
    description:
      "An AI-powered tattoo design app using DALL-E, with customization features, order tracking, and secure payments via PayPal and Stripe.",
    tags: ["Flutter", "DALL-E", "Google Maps", "REST APIs", "E-Commerce"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Stocker",
    description:
      "An AI-powered stock analysis app with real-time data, interactive charts, dynamic price visualization, and premium features via in-app purchases.",
    tags: [
      "Flutter",
      "SQLite",
      "REST APIs",
      "In-App Purchases",
      "Subscriptions",
    ],
    imageUrl: corpcommentImg,
  },
  {
    title: "Vendi Order Booking",
    description:
      "An order management app with offline support, tax calculations, daily sync, and geo-tagging for enhanced tracking and performance.",
    tags: [
      "Flutter",
      "SQLite",
      "Google Maps",
      "Offline Data Sync",
      "REST APIs",
    ],
    imageUrl: rmtdevImg,
  },
  {
    title: "Venus",
    description:
      "A pregnancy, birth, and postnatal education app with educational video content, midwife chat, and a user interaction forum.",
    tags: [
      "Flutter",
      "SQLite",
      "Video Player",
      "Firebase",
      "Subscriptions",
    ],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "BeautyFixy",
    description:
      "A SaaS platform where multiple marketplace businesses and professionals can showcase their work, with online booking across beauty, cafe, fitness, laundry, and cleaning services.",
    tags: ["Flutter", "SQLite", "Firebase", "Subscriptions", "E-Commerce"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Qpid Asia",
    description:
      "A Flutter and Dart-based dating app with live streams, real-time chat, audio/video calls, and a gift shop for meaningful romantic connections.",
    tags: [
      "Flutter",
      "SQLite",
      "Video Player",
      "Firebase",
      "In-App Purchases",
    ],
    imageUrl: rmtdevImg,
  },
  {
    title: "IKWTEAT",
    description:
      "Offers real-time access to restaurant details and reviews, including nearby restaurant discovery, with push notifications and REST API integration.",
    tags: [
      "Flutter",
      "SQLite",
      "Google Maps",
      "Internationalization",
      "REST APIs",
    ],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Flutter",
  "Dart",
  "React Native",
  "Java",
  "Kotlin",
  "Swift",
  "Node.js",
  "MongoDB",
  "Firebase",
  "REST APIs",
  "GraphQL",
  "Socket.IO",
  "SQLite",
  "Google Maps",
  "CI/CD",
  "Git",
  "Stripe",
  "PayPal",
  "Agile Scrum",
  "SOLID Principles",
] as const;
