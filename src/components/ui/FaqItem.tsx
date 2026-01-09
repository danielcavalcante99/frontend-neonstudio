import { useState } from "react";

import ChevronDown from "@/assets/icons/chevrondown.svg?react";
import ChevronUp from "@/assets/icons/chevronup.svg?react";

interface FaqItemProps {
    question: string;
    answer: string;
}

export const FaqItem = ({ question, answer }: FaqItemProps) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="border border-white/5 rounded-xl bg-[#0a0a0a] overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors cursor-pointer"
            >
                <span className="font-medium text-slate-200">{question}</span>
                {open ? <ChevronUp className="text-cyan-400 w-6 h-6" /> : <ChevronDown className="text-slate-500 w-6 h-6" />}
            </button>
            {open && (
                <div className="px-6 pb-4 pt-2 text-slate-400 text-sm leading-relaxed border-t border-white/5 bg-black/20">
                    {answer}
                </div>
            )}
        </div>
    );
};
