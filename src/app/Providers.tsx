import type {ReactNode} from "react";
import {LanguageProvider} from "@/i18n/LanguageContext.tsx";

export const Providers = ({ children }: { children: ReactNode }) => {
    return <LanguageProvider>{children}</LanguageProvider>;
};
