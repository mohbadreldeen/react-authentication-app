import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL: import.meta.env.VITE_API_URL, // "http://localhost:3000"
    basePath: "/api/v1/auth", // Full path to auth endpoints
});
