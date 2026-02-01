import { apiSlice } from "@/api/api-slice";

export interface User {
    id: string;
    name: string;
    email: string;
}

interface SigninRequest {
    email: string;
    password: string;
}

interface SignupRequest {
    name: string;
    email: string;
    password: string;
}

interface AuthResponse {
    user: User;
    session: {
        id: string;
        token: string;
    };
}

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signin: builder.mutation<AuthResponse, SigninRequest>({
            query: (credentials) => ({
                url: "/api/v1/auth/sign-in/email",
                method: "POST",
                body: credentials,
            }),
            invalidatesTags: ["Session"],
        }),
        signup: builder.mutation<AuthResponse, SignupRequest>({
            query: (userData) => ({
                url: "/api/v1/auth/sign-up/email",
                method: "POST",
                body: userData,
            }),
            invalidatesTags: ["Session"],
        }),
        signout: builder.mutation<void, void>({
            query: () => ({
                url: "/api/v1/auth/sign-out",
                method: "POST",
            }),
            invalidatesTags: ["Session", "User"],
        }),
        getSession: builder.query<AuthResponse | null, void>({
            query: () => "/api/v1/auth/get-session",
            providesTags: ["Session"],
        }),
        oauthSignin: builder.query<{ url: string }, string>({
            query: (provider) => `/api/v1/auth/oauth/${provider}`,
        }),
    }),
});

export const {
    useSigninMutation,
    useSignupMutation,
    useSignoutMutation,
    useGetSessionQuery,
    useOauthSigninQuery,
} = authApiSlice;
