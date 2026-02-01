import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useGetSessionQuery } from "@/features/auth/auth-api-slice";

export default function RequireAuth() {
    const { data: session, isLoading } = useGetSessionQuery();
    const location = useLocation();

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Loading...</p>
            </div>
        );
    }

    if (!session?.user) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }
    return <Outlet />;
}
