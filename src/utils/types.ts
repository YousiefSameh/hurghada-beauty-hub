export interface MultiLangText {
  en: string; ar: string; de: string; fr: string; ru: string; pl: string;
}

export interface TreatmentDetail {
  id: string;
  slug: string;
  image: string;
  
  title: MultiLangText;
  tagline: MultiLangText;

  howItWorks: MultiLangText;
  whenResultsSeen: MultiLangText;
  whatYouAchieve: MultiLangText[];
  productsUsed: {
    name: string;
    image: string;
    description: MultiLangText;
  }[];
  beforeAfterImages: {
    before: string;
    after: string;
  }[];
  prePostCare: {
    preTreatment: MultiLangText[];
    postTreatment: MultiLangText[];
  };
}