import Instagram from "@/assets/icons/instagram.svg?react";
import Twitter from "@/assets/icons/twitter.svg?react";
import Youtube from "@/assets/icons/youtube.svg?react";
import Facebook from "@/assets/icons/facebook.svg?react";
import Send from "@/assets/icons/send.svg?react";
import Globe from "@/assets/icons/globe.svg?react";
import Music from "@/assets/icons/music.svg?react";

import { FooterLink } from "@/components/ui/FooterLink";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { useLanguage } from "@/i18n/useLanguage.ts";

export const Footer = () => {
    const { lang, t} = useLanguage();

    return (
        <footer className="border-t border-white/10 bg-[#050505] pt-20 pb-10 overflow-hidden relative">
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

                    {/* Coluna 1: Branding */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded bg-gradient-to-tr from-cyan-400 to-purple-600 flex items-center justify-center">
                                <Music className="text-white w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                    NEON<span className="text-cyan-400">MUSIC</span>
                                </span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            {t.footer.description}
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={<Instagram className="w-5 h-5" />} />
                            <SocialIcon icon={<Twitter className="w-5 h-5" />} />
                            <SocialIcon icon={<Youtube className="w-5 h-5" />} />
                            <SocialIcon icon={<Facebook className="w-5 h-5" />} />
                        </div>
                    </div>

                    {/* Colunas de Links */}
                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest">{t.footer.product}</h4>
                        <ul className="space-y-2">
                            <FooterLink label={t.footer.links.features} />
                            <FooterLink label={t.footer.links.pricing} />
                            <FooterLink label={t.footer.links.download} />
                        </ul>
                    </div>

                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest">{t.footer.company}</h4>
                        <ul className="space-y-2">
                            <FooterLink label={t.footer.links.about} />
                            <FooterLink label={t.footer.links.careers} />
                            <FooterLink label={t.footer.links.blog} />
                        </ul>
                    </div>

                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest">{t.footer.support}</h4>
                        <ul className="space-y-2">
                            <FooterLink label={t.footer.links.help} />
                            <FooterLink label={t.footer.links.terms} />
                            <FooterLink label={t.footer.links.privacy} />
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest">{t.footer.newsletter}</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            {t.footer.newsletterDesc}
                        </p>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder={t.footer.placeholder}
                                className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-3 pr-10 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-cyan-400 hover:text-white transition-colors cursor-pointer">
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-slate-500 text-[10px] uppercase tracking-[0.2em]">
                        © 2024 NeonStudio Platform. {t.footer.rights}
                    </div>
                    <div className="flex gap-6">
                        <div className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer">
                            <Globe className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-wider">{lang}</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
