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
    'PostMan', 'OAuth 2.0', 'Hibernate', 'Maven', 'Gradle', 'SonarQube', 'OpenAI API', 'NVIDIA API', 'Claude API', 'Jenkins', 'Kubernetes', 'Terraform',
    'Swagger ', 'Agile / Scrum', 'Linux', '', 'JWT', 'Tailwind CSS' ,'NgRx', ' RXJS'
  ];
  animated = false;
  categories: SkillCategory[] = [
    {
      name: 'Backend', subtitle: 'APIs & services', emoji: '🔧',
      iconClass: 'ic-blue', fillClass: 'fill-blue',
      items: [
        { name: 'Spring Boot', percent: 90 },
        { name: 'Java', percent: 92 },
        { name: 'REST APIs', percent: 93 },
        { name: 'Microservices', percent: 85 },
      ]
    },
    {
      name: 'Frontend', subtitle: 'UI & frameworks', emoji: '⚡',
      iconClass: 'ic-orange', fillClass: 'fill-orange',
      items: [
        { name: 'Angular', percent: 95 },
        { name: 'React', percent: 90 },
        { name: 'TypeScript', percent: 92 },
        { name: 'HTML / CSS / SCSS', percent: 85 },
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
         { name: 'AWS ', percent: 80 },
         { name: 'Git / GitHub', percent: 92 },
        { name: 'Docker', percent: 60 },
        { name: 'Azure ', percent: 50 }
      ]
    },
    {
      name: 'Testing', subtitle: 'Quality assurance', emoji: '🧪',
      iconClass: 'ic-red', fillClass: 'fill-red',
      items: [
        { name: 'JUnit', percent: 80 },
        { name: 'Mockito', percent: 80 },
         { name: 'Jasmine / Karma', percent: 60 },
      ]
    },
    {
      name: 'Tools', subtitle: 'Workflow & collab', emoji: '🛠️',
      iconClass: 'ic-yellow', fillClass: 'fill-yellow',
      items: [
        { name: 'Jira / Confluence', percent: 88 },
        { name: 'Postman', percent: 90 },
        { name: 'VS Code / IntelliJ', percent: 93 },
        { name: 'Figma', percent: 70 },
      ]
    },
  ];

  ngAfterViewInit() {
  setTimeout(() => {
    this.animated = true;
  }, 100);
}


}
