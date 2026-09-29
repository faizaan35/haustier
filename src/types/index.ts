export interface ProductCategory {
  id: string;
  chapter: string;
  tag: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  alt: string;
  moq: string;
}

export interface CraftStep {
  number: string;
  title: string;
  facility: string;
  description: string;
  isHighlight?: boolean;
}

export interface MaterialSpec {
  code: string;
  colorDot: string;
  title: string;
  description: string;
  specA: { label: string; value: string };
  specB: { label: string; value: string };
}

export interface ExhibitionEvent {
  title: string;
  location: string;
  booth: string;
  description: string;
  isUpcoming?: boolean;
}

export interface PartnershipModel {
  number: string;
  title: string;
  description: string;
  badge: string;
}

export interface EnquiryFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  destinationMarket: string;
  categories: string[];
  orderVolume: string;
  swatchRequest: string;
  notes: string;
  requestNda: boolean;
}
