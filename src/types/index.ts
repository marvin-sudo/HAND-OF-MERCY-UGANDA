export type PageRoute = 
  | 'home'
  | 'about'
  | 'programs'
  | 'volunteer'
  | 'impact'
  | 'get-involved'
  | 'partner'
  | 'stories'
  | 'contact'
  | 'admin';

export type ApplicationStatus = 
  | 'New'
  | 'Under Review'
  | 'Contacted'
  | 'Accepted'
  | 'Preparing'
  | 'Active'
  | 'Completed'
  | 'Declined';

export type ProgrammePathway = 'growing-minds' | 'growing-food-and-futures' | 'growing-communities' | 'general';

export interface VolunteerApplication {
  id: string;
  fullName: string;
  dateOfBirth: string;
  nationality: string;
  country: string;
  email: string;
  phone: string;
  address: string;
  preferredProgramme: string;
  preferredStartDate: string;
  preferredEndDate: string;
  skills: string;
  educationProfession: string;
  previousExperience: string;
  interests: string;
  motivationWhy: string;
  motivationLearn: string;
  motivationShare: string;
  emergencyContact: string;
  dietaryRequirements: string;
  accessibilityRequirements: string;
  otherInfo: string;
  consentAgreed: boolean;
  status: ApplicationStatus;
  adminNotes?: string;
  createdAt: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  category: 'Education' | 'Agriculture' | 'Youth' | 'Community Development' | 'Environment' | 'Volunteer Exchange';
  description: string;
  objectives: string[];
  progress: number; // 0-100%
  impactSummary: string;
  image: string;
  volunteerOpportunities: string;
  status: 'Active' | 'Ongoing' | 'Completed' | 'Upcoming';
  featured?: boolean;
}

export interface Story {
  id: string;
  title: string;
  slug: string;
  category: 'Volunteer Stories' | 'Student Stories' | 'Community Stories' | 'Agriculture Stories' | 'Partner Stories';
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  date: string;
  image: string;
  readTime: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  category: 'Community Partners' | 'Education Partners' | 'International Partners' | 'Volunteer Partners' | 'Institutional Partners';
  description: string;
  website: string;
  country: string;
  isActive: boolean;
}

export interface ImpactMetric {
  id: string;
  metric: string;
  value: string;
  numericValue?: number;
  description: string;
  category: 'Education' | 'Agriculture' | 'Community Development' | 'Youth' | 'Volunteer Exchange' | 'General';
  verifiedDate: string;
}

export interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferredContactMethod: 'Email' | 'Phone' | 'WhatsApp';
  status: 'New' | 'Read' | 'Responded';
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  country: string;
  quote: string;
  image: string;
  category: 'Volunteer' | 'Community' | 'Teacher' | 'Partner';
}

export type AdminRole = 
  | 'Super Admin'
  | 'Programme Manager'
  | 'Content Manager'
  | 'Volunteer Coordinator'
  | 'Viewer';
