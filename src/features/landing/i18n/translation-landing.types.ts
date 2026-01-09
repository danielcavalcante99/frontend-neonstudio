export interface HeroTranslation {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    social: string;
}

export interface MockupTranslation {
    nowPlaying: string;
    currentChord: string;
}

export interface FeatureItem {
    t: string;
    d: string;
}

export interface FeaturesTranslation {
    title: string;
    titleHighlight: string;
    subtitle: string;
    f1: FeatureItem;
    f2: FeatureItem;
    f3: FeatureItem;
    f4: FeatureItem;
    f5: FeatureItem;
    f6: FeatureItem;
}

export interface TestimonialItem {
    name: string;
    role: string;
    comment: string;
    stars: number;
}

export interface TestimonialsTranslation {
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: TestimonialItem[];
}

export interface SubscriptionInclusion {
    id: number;
    included: string;
}

export interface SubscriptionPlan {
    id: number;
    category: string;
    subscribe: string;
    priceMonthly: string;
    observation: string;
    billedAnnually: string;
    mostPopular?: string;
    inclusions: SubscriptionInclusion[];
}

export interface PricingTranslation {
    title: string;
    titleHighlight: string;
    monthly: string;
    annual: string;
    off: string;
    subscriptionPlan: SubscriptionPlan[]
}

export interface FaqQuestionAnswer {
    id: number;
    question: string;
    answer: string;
}

export interface FaqTranslation {
    title: string;
    questions: FaqQuestionAnswer[];
}

export interface FooterTranslation {
    description: string;
    product: string;
    company: string;
    support: string;
    newsletter: string;
    newsletterDesc: string;
    placeholder: string;
    rights: string;
    links: Record<string, string>;
}

export interface TranslationLanding {
    hero: HeroTranslation;
    mockup: MockupTranslation;
    features: FeaturesTranslation;
    testimonials: TestimonialsTranslation;
    pricing: PricingTranslation;
    faq: FaqTranslation;
    footer: FooterTranslation;
}
