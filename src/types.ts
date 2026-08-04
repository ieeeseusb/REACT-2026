export interface TechPartnerInfo {
  name: string;
  type: string;
  logo: string;
  secondaryLogo?: string;
  secondaryName?: string;
  websiteUrl?: string;
}

export interface Segment {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  eligibility: string;
  feeText: string;
  feeAmount: number; // base per-person or default fee
  currency: string;
  teamSize: string;
  totalPrizePool: string;
  image: string;
  formUrl?: string;
  portalUrl?: string;
  techPartner?: TechPartnerInfo;
  rules: string[];
  categories?: {
    name: string;
    feeText: string;
    feeAmount: number;
    description: string;
    teamSize?: string;
  }[];
}

export interface Partner {
  id: string;
  name: string;
  type: string;
  logo: string;
  secondaryLogo?: string;
  secondaryName?: string;
  description: string;
  websiteUrl?: string;
}

export interface Collaborator {
  id: string;
  name: string;
  type: string;
  logo: string;
  description: string;
  link?: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  location: string;
  day: 'Day 1' | 'Day 2';
  category?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Registration' | 'Segments' | 'Payment';
}

export interface RegistrationData {
  id: string;
  teamName: string;
  institution: string;
  segmentId: string;
  segmentTitle: string;
  subCategory?: string;
  leaderName: string;
  leaderEmail: string;
  leaderPhone: string;
  whatsappNumber: string;
  membersCount: number;
  members: { name: string; role: string; email: string }[];
  paymentMethod: 'bKash' | 'Nagad' | 'Rocket' | 'Bank Transfer';
  transactionId: string;
  amountPaid: number;
  registeredAt: string;
  status: 'Confirmed' | 'Pending Verification';
}
