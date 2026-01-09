import {useState, type ReactNode, useMemo} from "react";
import {translations} from "./translations.ts";
import {LanguageContext} from "@/i18n/useLanguage.ts";
import {getBrowserLanguage} from "@/utils/browserLanguage.ts";
import type {Language} from "@/types/language.types.ts";

export const LanguageProvider = ({children}: { children: ReactNode }) => {
    const browserLanguage = getBrowserLanguage();
    const [lang, setLang] = useState<Language>(browserLanguage);

    return (
        <LanguageContext.Provider
            value={useMemo(
                () => ({
                    lang,
                    setLang,
                    t: translations[lang],
                }),
                [lang]
            )}
        >
            {children}
        </LanguageContext.Provider>
    );
};


