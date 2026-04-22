import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { SkillCategory } from './skillcategory';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill',
  imports: [CommonModule],
  templateUrl: './skill.html',
  styleUrl: './skill.scss',
})
export class Skill implements AfterViewInit {
  alsoFamiliarWith = [
    'Kafka', 'WebSocket', 'NgRx', 'Hibernate', 'Maven', 'Gradle',
    'Swagger / OpenAPI', 'Agile / Scrum', 'Linux', 'OAuth 2.0', 'JWT', 'Tailwind CSS'
  ];
  animated = false;
  categories: SkillCategory[] = [
    {
      name: 'Frontend', subtitle: 'UI & frameworks', emoji: '⚡',
      iconClass: 'ic-orange', fillClass: 'fill-orange',
      items: [
        { name: 'Angular', percent: 95 },
        { name: 'TypeScript', percent: 90 },
        { name: 'HTML / CSS / SCSS', percent: 92 },
        { name: 'RxJS', percent: 85 },
      ]
    },
    {
      name: 'Backend', subtitle: 'APIs & services', emoji: '🔧',
      iconClass: 'ic-blue', fillClass: 'fill-blue',
      items: [
        { name: 'Spring Boot', percent: 90 },
        { name: 'Java', percent: 88 },
        { name: 'REST APIs', percent: 93 },
        { name: 'Microservices', percent: 80 },
      ]
    },
    {
      name: 'Database', subtitle: 'Storage & queries', emoji: '🗄️',
      iconClass: 'ic-green', fillClass: 'fill-green',
      items: [
        { name: 'PostgreSQL', percent: 85 },
        { name: 'MySQL', percent: 82 },
        { name: 'MongoDB', percent: 72 },
        { name: 'Redis', percent: 68 },
      ]
    },
    {
      name: 'DevOps', subtitle: 'CI/CD & cloud', emoji: '🚀',
      iconClass: 'ic-purple', fillClass: 'fill-purple',
      items: [
        { name: 'Docker', percent: 80 },
        { name: 'Git / GitHub', percent: 92 },
        { name: 'Jenkins / CI', percent: 75 },
        { name: 'AWS Basics', percent: 65 },
      ]
    },
    {
      name: 'Testing', subtitle: 'Quality assurance', emoji: '🧪',
      iconClass: 'ic-red', fillClass: 'fill-red',
      items: [
        { name: 'Jasmine / Karma', percent: 82 },
        { name: 'JUnit', percent: 80 },
        { name: 'Cypress (E2E)', percent: 70 },
        { name: 'Mockito', percent: 78 },
      ]
    },
    {
      name: 'Tools', subtitle: 'Workflow & collab', emoji: '🛠️',
      iconClass: 'ic-yellow', fillClass: 'fill-yellow',
      items: [
        { name: 'Jira / Confluence', percent: 88 },
        { name: 'Postman', percent: 90 },
        { name: 'VS Code / IntelliJ', percent: 93 },
        { name: 'Figma', percent: 65 },
      ]
    },
  ];

  ngAfterViewInit() {
  setTimeout(() => {
    this.animated = true;
  }, 100);
}


}
