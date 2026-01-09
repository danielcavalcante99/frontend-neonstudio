import Mic2 from "@/assets/icons/mic.svg?react";
import Activity from "@/assets/icons/activity.svg?react";
import Music from "@/assets/icons/music.svg?react";
import Headphones from "@/assets/icons/headphones.svg?react";
import Ear from "@/assets/icons/ear.svg?react";
import Zap from "@/assets/icons/zap.svg?react";

import {FeatureCard} from "@/components/ui/FeatureCard";
import type {FeaturesTranslation} from "@/features/landing/i18n/translation-landing.types.ts";

interface FeaturesSectionProps {
    features: FeaturesTranslation
}

export const FeaturesSection = ({features}:  FeaturesSectionProps) => {

    return (
        <section id="features" className="py-24 bg-black">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                <FeatureCard
                    icon={<Mic2 className="text-purple-400"/>}
                    title={features.f1.t}
                    desc={features.f1.d}
                />
                <FeatureCard
                    icon={<Activity className="text-cyan-400"/>}
                    title={features.f2.t}
                    desc={features.f2.d}
                />
                <FeatureCard
                    icon={<Music className="text-pink-500"/>}
                    title={features.f3.t}
                    desc={features.f3.d}
                    highlight
                />
                <FeatureCard
                    icon={<Headphones className="text-green-400"/>}
                    title={features.f3.t}
                    desc={features.f3.d}
                />
                <FeatureCard
                    icon={<Ear className="text-yellow-400"/>}
                    title={features.f3.t}
                    desc={features.f3.d}
                />
                <FeatureCard
                    icon={<Zap className="text-blue-500"/>}
                    title={features.f3.t}
                    desc={features.f3.d}
                />
            </div>
        </section>
    );
};
