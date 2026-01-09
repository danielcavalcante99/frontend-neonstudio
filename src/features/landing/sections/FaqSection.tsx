import {FaqItem} from "@/components/ui/FaqItem";
import type {FaqTranslation} from "@/features/landing/i18n/translation-landing.types.ts";

interface FaqSectionProps {
    faq: FaqTranslation
}

export const FaqSection = ({faq}: FaqSectionProps) => {

    return (
        <section id="faq" className="py-24 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
                {faq.title}
            </h2>

            <div className="space-y-4">
                {faq.questions.map((q) => {
                    return <FaqItem key={q.id} question={q.question} answer={q.answer}/>
                })}
            </div>
        </section>
    );
};
