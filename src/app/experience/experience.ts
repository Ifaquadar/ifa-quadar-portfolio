import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experiences = [
    {
      role: 'Associate Consultant',
      company: 'Ernst & Young',
      duration: '18 September 2023 — 16 January 2026',
      dotClass: 'dot-orange',
      description: '',
      points: [
        'Architected and delivered 20+ RESTful APIs using Java 21+ and Spring Boot for Alcon, a global leader in eye care serving 140+ countries Implemented custom Spring Security filters with multi-layered JWT authentication, reducing API response times by 30%.',
        'A critical production outage affecting thousands of concurrent users,I traced it with AWS CloudWatch and Lambda, applied an urgent hotfix alongside an 8-engineer cross-functional team, and got failure detection and error logging running cleanly again.',
        'Redesigned PostgreSQL and DynamoDB schemas and maintained architecture diagrams for high-concurrency workloads — query latency dropped 20%. Also brought in Redis caching on my own initiative to push throughput further.',
        'Spent three months on rotational on-call for production support — monitoring AWS logs, gathering requirements across teams, and keeping incident response fast.',
        'Built a multilingual, pixel-perfect cross-platform mobile app (Angular, Ionic, Capacitor, Cordova; Android Studio, XCode) for a telecom provider with 15M+ users. Payment gateways, biometric auth, fault-tolerant error flows — all shipped.',
        'Led an internal commerce AI application for a client POC, pairing Angular 19 and Python to integrate OpenAI and DALL·E for conversational chat and image generation. Earned the Achiever Extraordinary Award for it.',
        'Standardized enterprise UI by developing 5+ reusable Thymeleaf components that got adopted across 3+ distinct product teams, pushed  SonarQube test coverage from 30% to 80%+ using  JUnit 5 and Mockito. ',
        'Helped peers through git conflicts and confluence documentation, database schemas and proactively managed Agile sprint priorities serving as a key technical point of contact for cross-timezone releases and production support calls.',
        'Mentored junior developers on Angular architecture, Spring Boot best practices, and Git workflows, improving overall team code quality'
      ]
    },
    {
      role: 'Junior Software Engineer',
      company: 'SentientGeeks',
      duration: '4 Jul 2022 - 30 Aug 2023',
      dotClass: 'dot-blue',
      description: 'Developed responsive websites and client dashboards.',
      points: [
        'Worked across the full codebase of a cross-platform desktop application (Windows & macOS) built with Angular 15 and Electron.js — a productivity tool helping users manage screen time and improve daily efficiency',
        'Delivered a major product feature end-to-end, from UI design through API integration and cross-platform testing, within a team of 5–8 engineers in Agile sprint cycles',
        'Ensured seamless cross-platform compatibility across Windows and macOS, identifying and resolving platform-specific rendering and behaviour inconsistencies',
        'Improved application performance through targeted troubleshooting and code optimisation, resulting in a noticeably smoother user experience and reduced crash rates',
        'Integrated third-party backend APIs into the Electron.js desktop shell, enabling real-time data sync and core productivity features',
        'Worked on a support project for Insurance Client to create a solution using Java 18, Spring Boot, and Azure SQL for user management pagination, multi-parameter search, with server-side sorting, while managing code releases using GitHub.',
      ]
    },
    {
      role: 'Junior Software Engineer',
      company: 'Xelpmoc Design and Technologies',
      duration: '2 August 2021 - 30 June 2022',
      dotClass: 'dot-blue',
      description: 'Developed responsive websites and client dashboards.',
      points: [
        'Developed a responsive consumer banking application using Angular, building reusable components, services, routing, and reactive forms from the ground up.',
        'Engineered an automated legal search engine that processed large-scale PDF repositories into searchable text formats, implementing efficient data extraction using Angular 13.',
        'Integrated REST APIs into the banking frontend, enabling real-time account data, transactions, and user authentication flows.',
        'Implemented reactive forms with robust client-side validation, improving data accuracy and reducing form submission errors.',
        'Developed a school management platform with Role-Based Access Control (RBAC) and complex scheduling algorithms, implemented secure multi-level authentication for teachers, principals, and students using React 17, and containerized/deployed application services using Docker.',
        'Built reusable Angular component library used across multiple modules, improving consistency and reducing development time across the application',
        'Collaborated with designers to translate UI mockups into pixel-perfect, responsive layouts compatible across devices and screen sizes.',
      ]
    }
  ];
}
