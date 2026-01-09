interface FooterLinkProps {
    label: string;
}

export const FooterLink = ({ label }: FooterLinkProps) => {
    return (
        <li>
            <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200 block py-1">
                {label}
            </a>
        </li>
    );
};
