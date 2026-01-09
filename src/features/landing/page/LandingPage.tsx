import {HeroSection} from "../sections/HeroSection.tsx";
import {FeaturesSection} from "../sections/FeaturesSection.tsx";
import {PricingSection} from "../sections/PricingSection.tsx";
import {FaqSection} from "../sections/FaqSection.tsx";
import {TestimonialsSection} from "@/features/landing/sections/TestimonialsSection.tsx";
import {useLanguage} from "@/i18n/useLanguage.ts";
import {translationLanding} from "@/features/landing/i18n/translations-landing.ts";

export const LandingPage = () => {
    const {lang} = useLanguage();
    const {hero, mockup, features, testimonials, pricing, faq} = translationLanding[lang]

    return (
        <>
            <HeroSection hero={hero} mockup={mockup}/>
            <FeaturesSection features={features}/>
            <TestimonialsSection testimonials={testimonials}/>
            <PricingSection pricing={pricing}/>
            <FaqSection faq={faq}/>
        </>
    );
};
