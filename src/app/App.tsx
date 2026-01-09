import { LandingPage } from "@/features/landing/page/LandingPage.tsx";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Footer } from "@/components/layout/Footer/Footer";

export const App = () => {
    return (
        <div className="bg-[#050505] text-slate-200">
            <Navbar />
            <LandingPage />
            <Footer />
        </div>
    );
};
