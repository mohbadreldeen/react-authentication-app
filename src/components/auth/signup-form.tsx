import { useState } from "react";
import { Eye } from "lucide-react";
import SocialButtons from "@/pages/auth/social-buttons";

export default function SignupForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(true);

    return (
        <form className="space-y-5">
            {/* Name fields */}

            <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-4 bg-[#3e3e4e] text-white placeholder-gray-500 rounded-xl border border-transparent focus:border-[#8b7fd6] focus:outline-none transition-all"
            />

            {/* Email */}
            <input
                type="email"
                placeholder="Email"
                className="w-full px-5 py-4 bg-[#3e3e4e] text-white placeholder-gray-500 rounded-xl border border-transparent focus:border-[#8b7fd6] focus:outline-none transition-all"
            />

            {/* Password */}
            <div className="relative">
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full px-5 py-4 bg-[#3e3e4e] text-white placeholder-gray-500 rounded-xl border border-transparent focus:border-[#8b7fd6] focus:outline-none transition-all pr-12"
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                    <Eye className="w-5 h-5" />
                </button>
            </div>

            {/* Terms checkbox */}
            <div className="flex items-center gap-3">
                <div
                    onClick={() => setAgreedToTerms(!agreedToTerms)}
                    className="w-6 h-6 rounded bg-white flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
                >
                    {agreedToTerms && (
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.6667 3.5L5.25 9.91667L2.33333 7"
                                stroke="#2d2d3a"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </div>
                <label
                    className="text-gray-300 text-sm cursor-pointer"
                    onClick={() => setAgreedToTerms(!agreedToTerms)}
                >
                    I agree to the{" "}
                    <a
                        href="#"
                        className="text-white underline hover:text-gray-200 transition-colors"
                    >
                        Terms & Conditions
                    </a>
                </label>
            </div>

            {/* Submit button */}
            <button
                type="submit"
                className="w-full py-4 bg-[#8b7fd6] hover:bg-[#9d91e3] text-white rounded-xl transition-all mt-8"
            >
                Create account
            </button>
            <SocialButtons />
        </form>
    );
}
