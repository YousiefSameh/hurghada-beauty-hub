export interface LocalizedString {
  en: string;
  ar: string;
  de: string;
  fr: string;
  pl: string;
  ru: string;
}

export interface LocalizedArray {
  en: string[];
  ar: string[];
  de: string[];
  fr: string[];
  pl: string[];
  ru: string[];
}

export interface Product {
  name: string;
  image: string;
  desc: LocalizedString;
}

export interface BeforeAfterCase {
  id: number;
  before: string;
  after: string;
  label: LocalizedString;
  desc: LocalizedString;
}

export interface TreatmentDetail {
  slug: string;
  image: string;
  category: LocalizedString;
  title: LocalizedString;
  desc: LocalizedString;
  tagline: LocalizedString;
  howItWorks: LocalizedString;
  whenResultsSeen: LocalizedString;
  achievements: { en: string; ar: string; de: string; fr: string; pl: string; ru: string }[];
  beforeAfterCases: BeforeAfterCase[];
  instructions: {
    before: { en: string; ar: string; de: string; fr: string; pl: string; ru: string }[];
    after: { en: string; ar: string; de: string; fr: string; pl: string; ru: string }[];
  };
}
