import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "@/pages/home";
import SigninPage from "@/pages/auth/signin-page";
import SignupPage from "@/pages/auth/signup-page";
import ProtectedPage from "@/pages/protected";
import RequireAuth from "@/components/auth/require-auth";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />

            {/* Protected routes */}
            <Route element={<RequireAuth />}>
                <Route path="/protected" element={<ProtectedPage />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}
