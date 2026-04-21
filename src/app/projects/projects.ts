import { Component } from '@angular/core';
import { Project } from './project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  activeFilter: string = 'all';

  filters = [
    { label: 'All',     value: 'all'     },
    { label: 'Finance', value: 'finance' },
    { label: 'Health',  value: 'health'  },
    { label: 'Telecom', value: 'telecom' },
  ];

  projects: Project[] = [
    {
      title: 'EY Tax Dashboard',
      description: 'Enterprise tax reporting platform serving 500+ clients. Built with Angular 16 and Spring Boot, featuring real-time data visualization, role-based access control, and multi-currency support.',
      domain: 'finance',
      domainLabel: 'Finance',
      domainClass: 'domain-finance',
      bannerClass: 'banner-finance',
      emoji: '📊',
      tags: ['Angular 16', 'Spring Boot', 'PostgreSQL', 'D3.js'],
      githubUrl: 'https://github.com/your-username',
      liveUrl: '#',
      featured: true,
    },
    {
      title: 'Patient Portal',
      description: 'HIPAA-compliant patient management system with appointment scheduling, medical record access, and doctor–patient messaging.',
      domain: 'health',
      domainLabel: 'Healthcare',
      domainClass: 'domain-health',
      bannerClass: 'banner-health',
      emoji: '🏥',
      tags: ['Angular', 'Java', 'MySQL'],
      githubUrl: 'https://github.com/your-username',
    },
    {
      title: 'Network Monitor',
      description: 'Real-time telecom network monitoring dashboard with alerting, uptime tracking, and incident management workflows.',
      domain: 'telecom',
      domainLabel: 'Telecom',
      domainClass: 'domain-telecom',
      bannerClass: 'banner-telecom',
      emoji: '📡',
      tags: ['Angular', 'Spring Boot', 'WebSocket'],
      githubUrl: 'https://github.com/your-username',
      liveUrl: '#',
    },
    {
      title: 'Audit Trail System',
      description: 'Immutable audit logging service for financial transactions with compliance reporting and export capabilities.',
      domain: 'finance',
      domainLabel: 'Finance',
      domainClass: 'domain-finance',
      bannerClass: 'banner-dark',
      emoji: '💳',
      tags: ['Spring Boot', 'Kafka', 'PostgreSQL'],
      githubUrl: 'https://github.com/your-username',
    },
    {
      title: 'Lab Results Tracker',
      description: 'Diagnostic lab integration layer that aggregates results from multiple providers in a unified patient-facing view.',
      domain: 'health',
      domainLabel: 'Healthcare',
      domainClass: 'domain-health',
      bannerClass: 'banner-neutral',
      emoji: '🧬',
      tags: ['Angular', 'REST API', 'TypeScript'],
      githubUrl: 'https://github.com/your-username',
    },
  ];

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') return this.projects;
    return this.projects.filter(p => p.domain === this.activeFilter);
  }

  setFilter(value: string): void {
    this.activeFilter = value;
  }
}
