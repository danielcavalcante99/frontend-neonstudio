export interface NavTranslation {
    features: string;
    howItWorks: string;
    pricing: string;
    faq: string;
    login: string;
    cta: string;
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

export interface Translation {
    flag: string;
    nav: NavTranslation;
    footer: FooterTranslation;
}