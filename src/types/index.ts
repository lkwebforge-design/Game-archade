export interface Project {
  id: string;
  title: string;
  category: 'game-direction' | 'realtime-3d' | 'biometric-ai' | 'virtual-production';
  categoryLabel: string;
  year: string;
  tagline: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  accentColor: string;
  featured: boolean;
}

export interface StudioLocation {
  city: string;
  country: string;
  district: string;
  timezone: string;
  coordinates: string;
  status: 'Active Lab' | 'Creative HQ' | 'Motion Capture';
}

export type ScannerLayer = 'bio' | 'neural' | 'skeletal' | 'streetwear';
