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
    duration: 'September 2023 — January 2026',
    dotClass: 'dot-orange',
    description: '',
    points: [
      'Microservices & secure APIs at global scale: Designed and delivered RESTful microservices using Spring Boot,implementing multi-level authentication and custom Spring Security filters for a multinational healthcare client using Java 21, serving end-users across 140+ countries.',
      'Engineered a reusable header/footer UI component: using Java Spring Boot and Thymeleaf, standardising branding and navigation across 5+ enterprise web applications and eliminating redundant frontend setup per deployment.',
      'Customer-facing cross-platform app: Developed a localized cross-platform application (iOS, Android, Web) for a major telecom provider using Angular 18 & Ionic, implementing secure third-party payment integrations, biometric face authentication & robust error-handling workflows.',
      'Database optimisation at scale: Optimized PostgreSQL and DynamoDB schemas to support high-concurrency healthcare systems, resolved production performance bottlenecks using CloudWatch, and scripted CI/CD deployment pipelines using Bitbucket and Azure DevOps to streamline releases and improve deployment efficiency.',
      'Quality & reliability: Increased Sonar code coverage and system reliability through comprehensive test suites (JUnit 5,Mockito). Collaborated with stakeholders in Agile sprints — requirements gathering, demos, and sprint planning.',
      'Architected RESTful microservices on AWS, reducing API response times by ~ 20% through caching and query optimization ',
      'Built and integrated the full Angular UI with SAP Commerce Cloud for a global retail enterprise client, achieving official SAP AI certification for the application — recognized with the Achiever Extraordinaire award for this delivery',
      'Received direct User Recognition from the client stakeholder for the quality and reliability of delivered features throughout the engagement',
      'Identified and resolved N+1 query issues and missing database indexes in Spring Boot microservices, reducing API response times by over 10 seconds on critical endpoints',
      'Led front-end module development in Angular 14+, building a reusable component library that reduced repeated UI work across sprints and improved team delivery consistency',
      'Collaborated within a cross-functional team of 5–8 engineers in 1-week Agile sprints, consistently shipping features on schedule with minimal post-release defects',
      'Mentored junior developers on Angular architecture, Spring Boot best practices, and Git workflows, improving overall team code quality'
    ]
  },
  {
    role: 'JuniorSoftware Engineer',
    company: 'SentientGeeks',
    duration: 'Jul 2022 - Aug 2023',
    dotClass: 'dot-blue',
    description: 'Developed responsive websites and client dashboards.',
    points: [
      'Worked across the full codebase of a cross-platform desktop application (Windows & macOS) built with Angular 15 and Electron.js — a productivity tool helping users manage screen time and improve daily efficiency',
      'High-concurrency REST APIs: Engineered high-concurrency REST APIs using Java 18, Spring Boot, and Azure SQL for user management, multi-parameter search, and asynchronous notifications with server-side sorting, while managing code releases using GitHub.',
      ' Delivered a major product feature end-to-end, from UI design through API integration and cross-platform testing, within a team of 5–8 engineers in Agile sprint cycles',
      'Ensured seamless cross-platform compatibility across Windows and macOS, identifying and resolving platform-specific rendering and behaviour inconsistencies',
      'Improved application performance through targeted troubleshooting and code optimisation, resulting in a noticeably smoother user experience and reduced crash rates',
      'Integrated third-party backend APIs into the Electron.js desktop shell, enabling real-time data sync and core productivity features',
    ]
  },
   {
    role: 'Xelpmoc Design and Tech',
    company: 'SentientGeeks',
    duration: 'Jul 2022 - Aug 2023',
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
