import { Link } from "react-router-dom";
import { AuthLayout } from "./layout";
import SigninForm from "@/components/auth/signin-form";

export function LoginPage() {
    return (
        <AuthLayout activeDot={1}>
            <h1 className="text-white text-5xl mb-4">Welcome back</h1>
            <p className="text-gray-400 text-base mb-8">
                Don't have an account?{" "}
                <Link
                    to="/"
                    className="text-white underline hover:text-gray-200 transition-colors"
                >
                    Sign up
                </Link>
            </p>
            <SigninForm />
        </AuthLayout>
    );
}
