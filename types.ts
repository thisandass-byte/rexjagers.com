import type { ComponentType } from 'react';

export interface NavLink {
  name: string;
  path: string;
}

export interface Service {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface Sector {
  image: string;
  name: string;
  description: string;
}

export interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string;
  linkedinUrl: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

export interface CareerOpening {
  id: string;
  title: string;
  location: string;
  description: string;
  requirements: string[];
}

export interface InsightArticle {
  image: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}