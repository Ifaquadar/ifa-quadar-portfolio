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
      'Designed and delivered full-stack enterprise features for a multinational healthcare client using Java (Spring Boot), Angular, and Ionic, serving end-users across 140 countries.',
      'Architected RESTful microservices on AWS, reducing API response times by ~ 50% through caching and query optimization ',
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
      'Worked across the full codebase of a cross-platform desktop application (Windows & macOS) built with Angular and Electron.js — a productivity tool helping users manage screen time and improve daily efficiency',
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
      'Integrated REST APIs into the banking frontend, enabling real-time account data, transactions, and user authentication flows.',
      'Implemented reactive forms with robust client-side validation, improving data accuracy and reducing form submission errors.',
      'Built reusable Angular component library used across multiple modules, improving consistency and reducing development time across the application',
      'Collaborated with designers to translate UI mockups into pixel-perfect, responsive layouts compatible across devices and screen sizes.',
    ]
  }
];
}
