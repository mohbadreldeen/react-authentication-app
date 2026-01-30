import { Link } from "react-router-dom";
import { AuthLayout } from "./layout";
import SigninForm from "@/components/auth/signin-form";

export function LoginPage() {
    return (
        <AuthLayout activeDot={1}>
            <h1 className="text-foreground text-4xl mb-4">Welcome back</h1>
            <p className="text-foreground-muted text-base mb-8">
                Don't have an account?{" "}
                <Link
                    to="/"
                    className="text-foreground underline hover:text-foreground-muted transition-colors"
                >
                    Sign up
                </Link>
            </p>
            <SigninForm />
        </AuthLayout>
    );
}
