import { Link } from "react-router-dom";
import {
    useGetSessionQuery,
    useSignoutMutation,
} from "@/features/auth/auth-api-slice";
import { Button } from "@/components/ui/button";

export default function ProtectedPage() {
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
            <h1 className="text-3xl font-bold">Protected Page</h1>
            <p className="text-lg text-muted-foreground">
                This page is only visible to authenticated users.
            </p>

            {user && (
                <div className="flex flex-col items-center gap-4">
                    <p>
                        Logged in as: <strong>{user.name || user.email}</strong>
                    </p>
                    <div className="flex gap-4">
                        <Link to="/">
                            <Button variant="outline">Home</Button>
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
            )}
        </div>
    );
}
