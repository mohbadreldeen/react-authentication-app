import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function SocialButtons() {
    const [isLoading, setIsLoading] = useState(false);

    const handleOAuthClick = async (provider: string) => {
        try {
            setIsLoading(true);
            const frontendURL = "http://localhost:5173";
            console.log(
                "Calling social sign-in with callbackURL:",
                frontendURL
            );
            await authClient.signIn.social({
                provider: provider as "google" | "github" | "apple",
                callbackURL: frontendURL,
            });
        } catch (error) {
            console.error("OAuth error:", error);
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Social login */}
            <div className="relative mt-4 mb-6">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-background-primary text-foreground-muted">
                        Or Continue with
                    </span>
                </div>
            </div>
            <div className="flex gap-4">
                <button
                    type="button"
                    onClick={() => handleOAuthClick("google")}
                    disabled={isLoading}
                    className="flex-1 flex items-center justify-center gap-3 py-4 bg-background-secondary hover:bg-background-secondary/90 disabled:opacity-50 disabled:cursor-not-allowed text-foreground rounded-sm border border-transparent hover:border-brand transition-all cursor-pointer"
                >
                    <FcGoogle size={24} />
                    <span>Google</span>
                </button>
                <button
                    type="button"
                    onClick={() => handleOAuthClick("github")}
                    disabled={isLoading}
                    className="flex-1 flex items-center justify-center gap-3 py-4 bg-background-secondary hover:bg-background-secondary/90 disabled:opacity-50 disabled:cursor-not-allowed text-foreground rounded-sm border border-transparent hover:border-brand transition-all cursor-pointer"
                >
                    <FaGithub size={24} className="fill-foreground" />
                    <span>GitHub</span>
                </button>
            </div>
        </>
    );
}
