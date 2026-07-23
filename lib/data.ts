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
    title: "Senior Software Engineer",
    company: "Alliance Global (AGBL Group)",
    employmentType: "Full-time",
    location: "Dubai, United Arab Emirates · Remote",
    date: "Oct 2024 - Present",
    highlights: [
      "Lead mobile application development using Flutter and Dart for production-grade cross-platform apps.",
      "Architect clean, modular, and maintainable codebases aligned with SOLID principles and industry best practices.",
      "Integrate REST APIs, Firebase, GraphQL, and WebSocket-based real-time features into scalable solutions.",
      "Establish CI/CD pipelines, conduct code reviews, optimize performance, and mentor development teams.",
    ],
    skills: ["Flutter", "Dart", "WebSocket", "Firebase", "GraphQL", "CI/CD"],
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Software Engineer",
    company: "ArhamSoft (Pvt) Ltd",
    employmentType: "Full-time",
    location: "Lahore, Punjab, Pakistan · On-site",
    date: "Aug 2022 - Sep 2024",
    highlights: [
      "Developed robust cross-platform iOS and Android applications with Dart and a unified, efficient codebase.",
      "Led technical delivery using Agile Scrum and Jira, improving team coordination and release velocity.",
      "Authored API documentation, conducted code reviews, and managed App Store and TestFlight deployments.",
      "Collaborated with cross-functional teams to ship features that improved user engagement and product quality.",
    ],
    featuredProject: {
      title: "Scotani",
      description:
        "A mobile app blending custom temporary tattoos with personalized fashion and e-commerce experiences.",
    },
    skills: ["Flutter", "Dart", "Firebase", "REST APIs", "Agile", "App Store"],
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Assistant Software Engineer",
    company: "Finjineers",
    employmentType: "Full-time",
    location: "Lahore, Punjab, Pakistan · On-site",
    date: "Nov 2021 - Aug 2022",
    highlights: [
      "Contributed to cross-platform iOS and Android app development using Flutter and Dart under senior guidance.",
      "Built responsive UIs with MVVM and MVC patterns and integrated RESTful APIs with backend services.",
      "Participated in Agile workflows, used Git for version control, and deployed apps to Google Play and the App Store.",
      "Implemented Firebase authentication, real-time database, push notifications, and custom UI animations.",
    ],
    skills: ["Flutter", "Dart", "Firebase", "REST APIs", "Git", "MVVM"],
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
