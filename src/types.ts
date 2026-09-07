export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  iconName: string;
  deliverables: string[];
  metrics: string;
  badge: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  segment: string;
  growth: string;
  timeline: string;
  description: string;
  metrics: {
    label: string;
    value: string;
    trend: string;
  }[];
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
  rating: number;
  highlight: string;
  metric: string;
}

export interface StatMetric {
  id: string;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface LeadForm {
  name: string;
  phone: string;
  email: string;
  monthlyRevenue: string;
  service: string;
  notes: string;
}
