export interface BusinessVertical {
  id: string;
  title: string;
  description: string;
  tags: string[];
  iconName: string;
}

export interface AgroProduct {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  category: 'grain' | 'pulse' | 'spice' | 'oil' | 'general';
  specPreview?: string;
}

export interface OngoingProject {
  id: string;
  name: string;
  category: string;
  status: string;
  location?: string;
  highlights?: string[];
}

export interface DirectorProfile {
  id: string;
  code: string;
  name: string;
  designation: string;
  bio: string;
  photo?: string;
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  areaOfInterest: string;
  message: string;
}
