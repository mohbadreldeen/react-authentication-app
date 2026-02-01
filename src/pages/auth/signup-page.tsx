import { Link } from "react-router-dom";

import { AuthLayout } from "./layout";
import SignupForm from "@/components/auth/signup-form";

export default function SignupPage() {
    return (
        <AuthLayout activeDot={2}>
            <h1 className="text-white text-4xl mb-4">Create an account</h1>
            <p className="text-gray-400 text-base mb-8">
                Already have an account?{" "}
                <Link
                    to="/login"
                    className="text-white underline hover:text-gray-200 transition-colors"
                >
                    Log in
                </Link>
            </p>

            <SignupForm />
        </AuthLayout>
    );
}
