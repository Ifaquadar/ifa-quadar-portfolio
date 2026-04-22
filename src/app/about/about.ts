import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
   techStack = ['Angular', 'Spring Boot', 'Java', 'TypeScript', 'REST APIs', 'PostgreSQL'];

  highlights = [
    { value: '4',  suffix: '+', label: 'Years of experience',           iconBg: '/assets/portfolio.png' },
    { value: '20', suffix: '+', label: 'Projects delivered',             iconBg: '/assets/fast-delivery.png'   },
    { value: '3',  suffix: '',  label: 'Domains — Finance, Health, Telecom', iconBg: '/assets/project.png'  },
    { value: 'EY', suffix: '',  label: 'Previous employer',               iconBg: '/assets/hierarchy.png' },
  ];
}
