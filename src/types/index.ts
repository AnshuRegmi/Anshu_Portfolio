export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    demoUrl?: string;
    codeUrl?: string;
  }
  
  export interface Skill {
    name: string;
    level: number; // 1-5
    category: 'frontend' | 'backend' | 'design' | 'other';
  }
  
  export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
  }