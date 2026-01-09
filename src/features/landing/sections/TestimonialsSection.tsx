import Star from "@/assets/icons/star.svg?react";
import type {TestimonialsTranslation} from "@/features/landing/i18n/translation-landing.types.ts";

interface TestimonialsSectionProps {
    testimonials: TestimonialsTranslation
}

export const TestimonialsSection = ({testimonials}:  TestimonialsSectionProps) => {

    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                        {testimonials.title} <span className="text-purple-500">{testimonials.titleHighlight}</span>.
                    </h2>
                    <p className="text-slate-400 text-lg">{testimonials.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.items.map((item, index) => (
                        <div key={index} className="bg-[#0a0a0a] border border-white/5 p-6 rounded-2xl hover:border-purple-500/30 transition-all group">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        width={14}
                                        height={14}
                                        className={i < item.stars ? "text-yellow-400 fill-yellow-400" : "text-slate-700"}
                                    />
                                ))}
                            </div>
                            <p className="text-slate-300 text-sm italic mb-6 leading-relaxed">
                                "{item.comment}"
                            </p>
                            <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-xs font-bold text-slate-400 border border-white/10">
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-white text-sm font-bold">{item.name}</h4>
                                    <p className="text-purple-400 text-[10px] uppercase tracking-wider">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

}