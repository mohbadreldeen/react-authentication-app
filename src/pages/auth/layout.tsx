import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import SiteLogo from "@/components/common/site-logo";
interface AuthLayoutProps {
    children: ReactNode;
    /** Active pagination dot index (0, 1, or 2) */
    activeDot?: number;
}

export function AuthLayout({ children, activeDot = 2 }: AuthLayoutProps) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#6e7284] p-4 md:p-6">
            <div className="p-5 w-full max-w-240 bg-[#2d2d3a] rounded-3xl md:rounded-4xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                {/* Left Side - Hero Section */}
                <div
                    className="rounded-2xl flex w-full md:w-1/2 p-8 md:p-8 relative flex-col justify-between min-h-125 md:min-h-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/auth-bg.jpg')" }}
                >
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0  " />

                    {/* Header */}
                    <div className="relative z-10 flex items-center justify-between">
                        <SiteLogo />
                        <button className="flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all">
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
                        <h2 className="text-white text-3xl md:text-4xl mb-4">
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
                                            ? "w-12 md:w-16 bg-white"
                                            : "w-6 md:w-8 bg-white/30"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side - Form Content */}
                <div className="w-full md:w-1/2 p-6 md:px-10 md:py-5 flex flex-col justify-center">
                    <div className="max-w-md mx-auto w-full">{children}</div>
                </div>
            </div>
        </div>
    );
}
