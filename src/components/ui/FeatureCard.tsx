import type {ReactNode} from "react";

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    desc: string;
    highlight?: boolean;
}

export const FeatureCard = ({
                                icon,
                                title,
                                desc,
                                highlight = false
                            }: FeatureCardProps) => {
    return (
        <div className={`p-6 rounded-2xl bg-[#0F0F0F] border transition-all duration-300 group hover:-translate-y-1
    ${highlight ? 'border-cyan-500/40 bg-gradient-to-br from-[#0F0F0F] to-cyan-900/10 shadow-[0_0_20px_rgba(34,211,238,0.1)]' : 'border-white/5 hover:border-white/10'}
  `}>
            <div className="mb-4 p-3 bg-white/5 w-fit rounded-xl group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
        </div>
    );
};
