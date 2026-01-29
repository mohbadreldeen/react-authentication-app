import { useState } from "react";
import { Eye } from "lucide-react";

export default function SigninForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <form className="space-y-5">
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

            {/* Remember me and Forgot password */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div
                        onClick={() => setRememberMe(!rememberMe)}
                        className="w-6 h-6 rounded bg-[#3e3e4e] border-2 border-gray-600 flex items-center justify-center cursor-pointer hover:border-[#8b7fd6] transition-all"
                    >
                        {rememberMe && (
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.6667 3.5L5.25 9.91667L2.33333 7"
                                    stroke="#8b7fd6"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        )}
                    </div>
                    <label
                        className="text-gray-300 text-sm cursor-pointer"
                        onClick={() => setRememberMe(!rememberMe)}
                    >
                        Remember me
                    </label>
                </div>
                <a
                    href="#"
                    className="text-[#8b7fd6] hover:text-[#9d91e3] text-sm transition-colors"
                >
                    Forgot password?
                </a>
            </div>

            {/* Submit button */}
            <button
                type="submit"
                className="w-full py-4 bg-[#8b7fd6] hover:bg-[#9d91e3] text-white rounded-xl transition-all mt-8"
            >
                Log in
            </button>

            {/* Social login */}
            <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-[#2d2d3a] text-gray-400">
                        Or login with
                    </span>
                </div>
            </div>

            <div className="flex gap-4">
                <button
                    type="button"
                    className="flex-1 flex items-center justify-center gap-3 py-4 bg-[#3e3e4e] hover:bg-[#4a4a5a] text-white rounded-xl border border-transparent hover:border-gray-600 transition-all"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M18.1711 8.36788H17.5V8.33329H10V11.6666H14.7096C14.0225 13.6069 12.1763 15 10 15C7.23875 15 5 12.7612 5 9.99996C5 7.23871 7.23875 4.99996 10 4.99996C11.2746 4.99996 12.4342 5.48079 13.3171 6.26621L15.6742 3.90913C14.1858 2.52204 12.195 1.66663 10 1.66663C5.39791 1.66663 1.66666 5.39788 1.66666 9.99996C1.66666 14.602 5.39791 18.3333 10 18.3333C14.6021 18.3333 18.3333 14.602 18.3333 9.99996C18.3333 9.44121 18.2758 8.89579 18.1711 8.36788Z"
                            fill="#FFC107"
                        />
                        <path
                            d="M2.62292 6.12121L5.36542 8.12913C6.10625 6.29496 7.90042 4.99996 10 4.99996C11.2746 4.99996 12.4342 5.48079 13.3171 6.26621L15.6742 3.90913C14.1858 2.52204 12.195 1.66663 10 1.66663C6.79875 1.66663 4.02333 3.47371 2.62292 6.12121Z"
                            fill="#FF3D00"
                        />
                        <path
                            d="M10 18.3334C12.1525 18.3334 14.1084 17.5096 15.5871 16.17L13.0079 13.9875C12.1431 14.6452 11.0864 15.0009 10 15C7.82917 15 5.98667 13.6179 5.29583 11.6892L2.58125 13.7829C3.96042 16.4817 6.76125 18.3334 10 18.3334Z"
                            fill="#4CAF50"
                        />
                        <path
                            d="M18.1713 8.36796H17.5V8.33337H10V11.6667H14.7096C14.3809 12.5902 13.7889 13.3972 13.0067 13.9879L13.0079 13.9871L15.5871 16.1696C15.4046 16.3354 18.3333 14.1667 18.3333 10C18.3333 9.44129 18.2758 8.89587 18.1713 8.36796Z"
                            fill="#1976D2"
                        />
                    </svg>
                    <span>Google</span>
                </button>
                <button
                    type="button"
                    className="flex-1 flex items-center justify-center gap-3 py-4 bg-[#3e3e4e] hover:bg-[#4a4a5a] text-white rounded-xl border border-transparent hover:border-gray-600 transition-all"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16.4697 10.5833C16.4697 14.9583 13.1447 18.3333 8.83053 18.3333C4.5147 18.3333 1.16803 14.9583 1.16803 10.5833C1.16803 6.20833 4.5147 2.83333 8.83053 2.83333C10.8938 2.83333 12.7397 3.6 14.1072 4.88333L11.8105 7.125C11.0022 6.35 9.97887 5.91667 8.83053 5.91667C6.2147 5.91667 4.10637 8.05833 4.10637 10.5833C4.10637 13.1083 6.2147 15.25 8.83053 15.25C11.0772 15.25 12.9397 13.7667 13.3855 11.75H8.83053V8.83333H16.3772C16.4355 9.18333 16.4697 9.54167 16.4697 10.5833Z"
                            fill="white"
                        />
                    </svg>
                    <span>Apple</span>
                </button>
            </div>
        </form>
    );
}
