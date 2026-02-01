import { Link } from "react-router-dom";
import {
    useGetSessionQuery,
    useSignoutMutation,
} from "@/features/auth/auth-api-slice";
import { Button } from "@/components/ui/button";

export default function HomePage() {
    const { data: session } = useGetSessionQuery();
    const [signoutApi, { isLoading }] = useSignoutMutation();
    const user = session?.user;

    const handleSignout = async () => {
        try {
            await signoutApi().unwrap();
        } catch (err) {
            console.error("Signout failed:", err);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-4">
            <h1 className="text-3xl font-bold">Home Page</h1>

            {user ? (
                <div className="flex flex-col items-center gap-4">
                    <p className="text-lg">
                        Welcome, {user.name || user.email}!
                    </p>
                    <div className="flex gap-4">
                        <Link to="/protected">
                            <Button variant="outline">Protected Page</Button>
                        </Link>
                        <Button
                            onClick={handleSignout}
                            disabled={isLoading}
                            variant="destructive"
                        >
                            {isLoading ? "Signing out..." : "Sign Out"}
                        </Button>
                    </div>
                </div>
            ) : (
                <div className="flex gap-4">
                    <Link to="/signin">
                        <Button>Sign In</Button>
                    </Link>
                    <Link to="/signup">
                        <Button variant="outline">Sign Up</Button>
                    </Link>
                </div>
            )}
        </div>
    );
}
