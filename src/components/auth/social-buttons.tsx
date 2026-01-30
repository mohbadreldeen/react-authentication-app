import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function SocialButtons() {
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
                    className="flex-1 flex items-center justify-center gap-3 py-4 bg-background-secondary hover:bg-background-secondary/90 text-foreground rounded-sm border border-transparent hover:border-brand transition-all cursor-pointer"
                >
                    <FcGoogle size={24} />
                    <span>Google</span>
                </button>
                <button
                    type="button"
                    className="flex-1 flex items-center justify-center gap-3 py-4 bg-background-secondary hover:bg-background-secondary/90 text-foreground rounded-sm border border-transparent hover:border-brand transition-all cursor-pointer"
                >
                    <FaApple size={24} className="fill-foreground" />
                    <span>Apple</span>
                </button>
            </div>
        </>
    );
}
