import {createContext, useContext} from "react";
import {translations} from "@/i18n/translations.ts";
import type {Language} from "@/types/language.types.ts";

interface LanguageContextData {
    lang: Language;
    setLang: (lang: Language) => void;
    t: typeof translations.pt;
}

export const LanguageContext = createContext<LanguageContextData | null>(null);

export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
    return ctx;
};