import {LanguageDropdown} from "./LanguageDropdown";
import {useLanguage} from "@/i18n/useLanguage.ts";
import {useState} from "react";

import Music from "@/assets/icons/music.svg?react";
import X from "@/assets/icons/x.svg?react";
import Menu from "@/assets/icons/menu.svg?react";

export const Navbar = () => {
    const { t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-gradient-to-tr from-cyan-400 to-purple-600 flex items-center justify-center">
                            <Music className="text-white w-5 h-5" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">
                                NEON<span className="text-cyan-400">STUDIO</span>
                            </span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#features" className="hover:text-cyan-400 transition-colors text-sm">{t.nav.features}</a>
                            <a href="#pricing" className="hover:text-cyan-400 transition-colors text-sm">{t.nav.pricing}</a>
                            <a href="#faq" className="hover:text-cyan-400 transition-colors text-sm">{t.nav.faq}</a>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <LanguageDropdown  />

                        <button className="text-white px-4 py-2 text-sm font-medium hover:text-cyan-400 transition-all cursor-pointer">
                            {t.nav.login}
                        </button>
                        <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-2 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all transform hover:-translate-y-0.5 cursor-pointer">
                            {t.nav.cta}
                        </button>
                    </div>

                    <div className="-mr-2 flex md:hidden items-center gap-3">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-400 hover:text-white p-2">
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-[#0a0a0a] border-b border-white/10 animate-in slide-in-from-top duration-300">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#features" className="block px-3 py-2 text-base font-medium hover:text-cyan-400">{t.nav.features}</a>
                        <a href="#pricing" className="block px-3 py-2 text-base font-medium hover:text-cyan-400">{t.nav.pricing}</a>
                        <button className="w-full mt-4 bg-cyan-500 text-black py-3 rounded-lg font-bold">{t.nav.cta}</button>
                    </div>
                </div>
            )}
        </nav>
    );
};
