import {useEffect, useRef, useState} from "react";
import {useLanguage} from "@/i18n/useLanguage.ts";

import ChevronDown from "@/assets/icons/chevrondown.svg?react";
import Check from "@/assets/icons/check.svg?react";
import type {Language} from "@/types/language.types.ts";

const languages: { code: Language; label: string; flag: string }[] = [
    {code: "pt", label: "Português", flag: "🇧🇷"},
    {code: "en", label: "English", flag: "🇺🇸"}
];

export const LanguageDropdown = () => {
    const {lang, setLang, t} = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-slate-300 px-3 py-2 rounded-lg transition-all border border-white/10"
            >
                <span className="text-lg leading-none">{t.flag}</span>
                <span className="text-xs font-bold uppercase hidden sm:inline-block">{lang}</span>
                <ChevronDown
                    className={`transition-transform duration-300 cursor-pointer ${isOpen ? 'rotate-180' : ''}`}/>
            </button>

            {isOpen && (
                <div
                    className="absolute right-0 mt-2 w-44 bg-[#0f0f0f] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-[60] animate-in fade-in zoom-in duration-200">
                    {languages.map((l) => (
                        <button
                            key={l.code}
                            onClick={() => {
                                setLang(l.code);
                                setIsOpen(false);
                            }}
                            className={`cursor-pointer w-full flex items-center justify-between px-4 py-3 text-sm transition-colors hover:bg-white/5 ${lang === l.code ? 'text-cyan-400 bg-cyan-400/5' : 'text-slate-400'}`}
                        >
                            <div className="flex items-center gap-3">
                                <span>{l.flag}</span>
                                <span>{l.label}</span>
                            </div>
                            {lang === l.code && <Check/>}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
