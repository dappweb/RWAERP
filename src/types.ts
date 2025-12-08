import { ReactNode } from 'react';

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  isHighlight?: boolean;
}

export interface StatProps {
  value: string;
  label: string;
}
