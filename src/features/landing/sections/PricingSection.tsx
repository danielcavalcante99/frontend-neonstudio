import Check from "@/assets/icons/check.svg?react";

import {useState} from "react";
import type {PricingTranslation} from "@/features/landing/i18n/translation-landing.types.ts";

interface PricingSectionProps {
    pricing: PricingTranslation
}

export const PricingSection = ({pricing}: PricingSectionProps) => {
    const [activeTab, setActiveTab] = useState('monthly');

    return (
        <section id="pricing" className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-6">{pricing.title} <span
                    className="text-green-400">{pricing.titleHighlight}</span></h2>

                <div className="flex justify-center items-center gap-4 mb-16">
                    <span
                        className={`text-sm font-medium ${activeTab === 'monthly' ? 'text-white' : 'text-slate-500'}`}>{pricing.monthly}</span>
                    <button
                        onClick={() => setActiveTab(activeTab === 'monthly' ? 'annual' : 'monthly')}
                        className="w-14 h-7 bg-slate-800 rounded-full p-1 relative transition-colors cursor-pointer"
                    >
                        <div
                            className={`w-5 h-5 bg-cyan-400 rounded-full shadow-md transform transition-transform ${activeTab === 'annual' ? 'translate-x-7' : 'translate-x-0'}`}></div>
                    </button>
                    <span className={`text-sm font-medium ${activeTab === 'annual' ? 'text-white' : 'text-slate-500'}`}>
                            {pricing.annual} <span
                        className="text-xs text-cyan-400 ml-1 font-bold">{pricing.off}</span>
                        </span>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {pricing.subscriptionPlan.map(plan => {
                        const isPopular = Boolean(plan.mostPopular);

                        return (
                            <div
                                key={plan.id}
                                className={`bg-[#0e0e0e] rounded-3xl p-8 border text-left transition-all ${
                                    isPopular
                                        ? "border-purple-500/50 relative shadow-[0_0_30px_rgba(168,85,247,0.1)]"
                                        : "border-white/5 hover:border-white/10"
                                }`}
                            >
                                {isPopular && (
                                    <div
                                        className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl uppercase tracking-wider">
                                        {plan.mostPopular}
                                    </div>
                                )}

                                <h3 className={`text-xl font-medium ${isPopular ? "text-white" : "text-slate-300"}`}>
                                    {plan.category}
                                </h3>

                                <div className="mt-4 mb-8">
                                    <span className="text-4xl font-bold text-white">{plan.priceMonthly}</span>
                                    <span className="text-slate-500">/mo</span>
                                    <div className="text-xs text-green-400 mt-1">{plan.billedAnnually}</div>
                                </div>

                                <p className="text-slate-400 text-sm">{plan.observation}</p>

                                <button
                                    className={`w-full mt-8 py-3 rounded-xl text-white cursor-pointer ${
                                        isPopular
                                            ? "bg-gradient-to-r from-purple-600 to-cyan-500 font-bold hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:-translate-y-0.5"
                                            : "border border-white/20 font-medium hover:bg-white/5"
                                    }`}
                                >
                                    {plan.subscribe}
                                </button>

                                <ul className="mt-8 space-y-4 text-sm text-slate-400">
                                    {plan.inclusions.map(item => (
                                        <li key={item.id} className="flex gap-2">
                                            <Check className="text-cyan-400"/>
                                            {item.included}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
