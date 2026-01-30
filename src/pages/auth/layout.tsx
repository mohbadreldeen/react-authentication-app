import { useEffect, type ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import SiteLogo from "@/components/common/site-logo";
interface AuthLayoutProps {
    children: ReactNode;
    /** Active pagination dot index (0, 1, or 2) */
    activeDot?: number;
}

export function AuthLayout({ children, activeDot = 2 }: AuthLayoutProps) {
    useEffect(() => {
        document.documentElement.classList.add("dark"); // For dark theme
        // or
        // document.documentElement.classList.remove("dark"); // For light theme
    }, []);
    return (
        <div className="min-h-screen flex items-center justify-center bg-background-tertiary">
            <div className="w-full max-w-300 bg-background-primary rounded-3xl md:rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                {/* Left Side - Hero Section */}
                <div className="rounded-xl flex w-full md:w-1/2 p-4 md:pr-0 relative flex-col justify-between min-h-125 md:min-h-0 bg-cover bg-center">
                    <div
                        className="rounded-xl flex w-full h-full p-8 md:p-6 relative flex-col justify-between min-h-125 md:min-h-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('/auth-bg-bw.jpg')" }}
                    >
                        {/* Overlay for better text readability */}
                        <div className="absolute inset-0 rounded-xl bg-linear-to-b from-background-primary/50 to-background-primary" />

                        {/* Header */}
                        <div className="relative z-10 flex items-center justify-between">
                            <SiteLogo />
                            <button className="flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-background-primary backdrop-blur-sm text-foreground hover:bg-foreground/20 transition-all cursor-pointer">
                                <span className="text-xs md:text-sm">
                                    Back to website
                                </span>
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Spacer */}
                        <div className="flex-1" />

                        {/* Tagline */}
                        <div className="relative z-10 text-center">
                            <h2 className="text-foreground text-3xl md:text-4xl mb-4">
                                Capturing Moments,
                                <br />
                                Creating Memories
                            </h2>
                            {/* Pagination dots */}
                            <div className="flex items-center justify-center gap-2 mt-6 md:mt-8">
                                {[0, 1, 2].map((index) => (
                                    <div
                                        key={index}
                                        className={`h-1 rounded-full ${
                                            index === activeDot
                                                ? "w-12 md:w-16 bg-foreground"
                                                : "w-6 md:w-8 bg-foreground/30"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Side - Form Content */}
                <div className="w-full md:w-1/2 p-6 md:p-10  flex flex-col justify-center">
                    <div className="max-w-md mx-auto w-full">{children}</div>
                </div>
            </div>
        </div>
    );
}
