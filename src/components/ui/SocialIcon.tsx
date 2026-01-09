import type {ReactNode} from "react";

interface SocialIconProps {
    icon: ReactNode;
}

export const SocialIcon = ({ icon }: SocialIconProps) => {
    return (
        <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-all duration-300">
            {icon}
        </a>
    );
};
