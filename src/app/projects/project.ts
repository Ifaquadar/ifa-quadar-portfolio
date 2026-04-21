export interface Project {
    title: string;
    description: string;
    domain: 'finance' | 'health' | 'telecom';
    domainLabel: string;
    domainClass: string;
    bannerClass: string;
    emoji: string;
    tags: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured?: boolean;
}
