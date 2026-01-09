export type Language = "pt" | "en";

export function getBrowserLanguage(): Language {
    const browserLang =
        navigator.languages?.[0] || navigator.language || "en";

    const langCode = browserLang.split("-")[0];

    const supportedLanguages: Language[] = ["pt", "en"];

    if (supportedLanguages.includes(langCode as Language)) {
        return langCode as Language;
    }

    return "en"; // fallback
}