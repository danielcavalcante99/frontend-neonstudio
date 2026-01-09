import type {Translation} from "./translation.types.ts";
import type {Language} from "@/types/language.types.ts";

export const translations: Record<Language, Translation> = {
    pt: {
        flag: "🇧🇷",
        nav: {
            features: "Funcionalidades",
            howItWorks: "Como Funciona",
            pricing: "Planos",
            faq: "FAQ",
            login: "Login",
            cta: "Começar Agora"
        },
        footer: {
            description: "A plataforma definitiva para músicos que buscam excelência no estudo diário. Do iniciante ao profissional.",
            product: "Produto",
            company: "Empresa",
            support: "Suporte",
            newsletter: "Newsletter",
            newsletterDesc: "Receba dicas de estudo e novidades.",
            placeholder: "Seu melhor e-mail",
            rights: "Todos os direitos reservados.",
            links: {
                features: "Funcionalidades",
                pricing: "Planos",
                download: "Download App",
                about: "Sobre Nós",
                careers: "Carreiras",
                blog: "Blog Musical",
                help: "Central de Ajuda",
                terms: "Termos de Uso",
                privacy: "Privacidade"
            }
        }
    },
    en: {
        flag: "🇺🇸",
        nav: {
            features: "Features",
            howItWorks: "How it Works",
            pricing: "Pricing",
            faq: "FAQ",
            login: "Login",
            cta: "Get Started"
        },
        footer: {
            description: "The ultimate platform for musicians seeking excellence in daily practice. From beginner to pro.",
            product: "Product",
            company: "Company",
            support: "Support",
            newsletter: "Newsletter",
            newsletterDesc: "Get practice tips and updates.",
            placeholder: "Your best email",
            rights: "All rights reserved.",
            links: {
                features: "Features",
                pricing: "Pricing",
                download: "Download App",
                about: "About Us",
                careers: "Careers",
                blog: "Music Blog",
                help: "Help Center",
                terms: "Terms of Use",
                privacy: "Privacy"
            }
        }
    }
};