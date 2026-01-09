import Zap from "@/assets/icons/zap.svg?react";
import Music2 from "@/assets/icons/music2.svg?react";
import Repeat from "@/assets/icons/repeat.svg?react";
import Pause from "@/assets/icons/pause.svg?react";
import Activity from "@/assets/icons/activity.svg?react";
import FastForward from "@/assets/icons/fastforward.svg?react";

import {useAutoScroll} from "@/features/landing/hooks/useAutoScroll.ts";
import type {HeroTranslation, MockupTranslation} from "@/features/landing/i18n/translation-landing.types.ts";

interface HeroSectionProps {
    hero: HeroTranslation;
    mockup: MockupTranslation;
}

export const HeroSection = ({hero, mockup}:  HeroSectionProps) => {
    const scrollPosition = useAutoScroll();

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-2">
                            <Zap fill="currentColor" /> {hero.badge}
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1]">
                            {hero.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">{hero.titleHighlight}</span>.
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            {hero.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-full text-lg font-bold shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all hover:-translate-y-1 cursor-pointer">
                                {hero.ctaPrimary}
                            </button>
                            <button className="bg-transparent border border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded-full text-lg font-medium transition-all cursor-pointer">
                                {hero.ctaSecondary}
                            </button>
                        </div>

                        <div className="pt-6 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
                            <div className="flex -space-x-2">
                                {[1,2,3,4].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-[#050505] flex items-center justify-center text-xs">👤</div>
                                ))}
                            </div>
                            <p>{hero.social}</p>
                        </div>
                    </div>

                    <div className="relative mx-auto lg:ml-auto w-full max-w-[380px] perspective-1000">
                        <div className="relative bg-black border-[8px] border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden aspect-[9/19] transform rotate-y-12 rotate-z-2 hover:rotate-0 transition-transform duration-700 ease-out">
                            <div className="absolute inset-0 bg-[#0F0F0F] flex flex-col">
                                <div className="h-14 flex items-center justify-between px-4 border-b border-white/5 bg-[#0F0F0F] z-20">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{mockup.nowPlaying}</span>
                                    <Music2 className="text-cyan-400" />
                                </div>

                                <div className="p-6 pb-2 text-center z-10 bg-gradient-to-b from-[#0F0F0F] to-transparent">
                                    <h3 className="text-white font-bold text-lg">Neon Nights</h3>
                                    <p className="text-purple-400 text-sm">Electric Dreams</p>
                                </div>

                                <div className="flex-1 overflow-hidden relative">
                                    <div
                                        className="absolute w-full px-6 space-y-8 transition-transform duration-75 ease-linear"
                                        style={{ transform: `translateY(-${scrollPosition}px)` }}
                                    >
                                        <div className="text-slate-500 text-sm mb-4">Verse 1</div>
                                        <div className="space-y-6">
                                            <div className="flex justify-between items-center text-2xl font-bold text-slate-600">
                                                <span>Am7</span>
                                                <span className="h-[1px] flex-1 bg-slate-800 mx-4"></span>
                                            </div>
                                            <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/50 text-center shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                                                <span className="text-3xl font-bold text-white">Fmaj7</span>
                                                <p className="text-[10px] text-purple-300 mt-1 uppercase font-bold">{mockup.currentChord}</p>
                                            </div>
                                            <div className="flex justify-between items-center text-2xl font-bold text-slate-600">
                                                <span>C</span>
                                                <span className="h-[1px] flex-1 bg-slate-800 mx-4"></span>
                                            </div>
                                            <div className="flex justify-between items-center text-2xl font-bold text-slate-600">
                                                <span>G</span>
                                                <span className="h-[1px] flex-1 bg-slate-800 mx-4"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#0F0F0F] to-transparent pointer-events-none"></div>
                                </div>

                                <div className="h-32 bg-[#151515] border-t border-white/5 p-4 z-20">
                                    <div className="w-full bg-slate-800 h-1 rounded-full mb-4 overflow-hidden">
                                        <div className="bg-cyan-400 w-1/3 h-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                                    </div>
                                    <div className="flex justify-between items-center px-2">
                                        <Repeat className="text-slate-500" />
                                        <div className="flex gap-4 items-center">
                                            <div className="p-2 rounded-full bg-slate-800 text-white"><FastForward className="rotate-180"/></div>
                                            <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-black shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                                                <Pause fill="currentColor" />
                                            </div>
                                            <div className="p-2 rounded-full bg-slate-800 text-white"><FastForward /></div>
                                        </div>
                                        <Activity className="text-purple-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
