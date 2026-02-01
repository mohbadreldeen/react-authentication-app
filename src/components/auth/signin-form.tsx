import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useSigninMutation } from "@/features/auth/auth-api-slice";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { PasswordInput } from "@/components/common/password-input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import SocialButtons from "@/components/auth/social-buttons";

import { signinSchema } from "@/features/zod/auth-schemas";
import type { SigninFormValues } from "@/features/zod/auth-schemas";

export default function SigninForm() {
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from =
        (location.state as { from?: { pathname: string } })?.from?.pathname ||
        "/";

    const [signin, { isLoading }] = useSigninMutation();

    const form = useForm<SigninFormValues>({
        resolver: zodResolver(signinSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    useEffect(() => {
        form.setFocus("email");
    }, []);

    const onSubmit = async (data: SigninFormValues) => {
        try {
            await signin({
                email: data.email,
                password: data.password,
            }).unwrap();
            form.reset();
            navigate(from, { replace: true });
        } catch (err: unknown) {
            const error = err as { data?: { message?: string } };
            form.setError("root", {
                message: error?.data?.message || "Sign in failed",
            });
        }
    };

    const inputClassName = "input";

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                {/* Email field */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    className={inputClassName}
                                    disabled={isLoading}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                        </FormItem>
                    )}
                />

                {/* Password field */}
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <PasswordInput
                                    placeholder="Enter your password"
                                    className={inputClassName}
                                    disabled={isLoading}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                        </FormItem>
                    )}
                />

                {/* Remember me and Forgot password */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Checkbox
                            className="bg-background-secondary border-brand"
                            id="rememberMe"
                            checked={rememberMe}
                            onCheckedChange={(checked) =>
                                setRememberMe(checked === true)
                            }
                        />
                        <label
                            htmlFor="rememberMe"
                            className="text-foreground-muted text-sm cursor-pointer"
                        >
                            Remember me
                        </label>
                    </div>
                    <a
                        href="#"
                        className="text-brand hover:text-brand/80 text-sm transition-colors"
                    >
                        Forgot password?
                    </a>
                </div>

                {/* Error message display */}
                {form.formState.errors.root && (
                    <p className="text-red-400 text-sm" role="alert">
                        {form.formState.errors.root.message}
                    </p>
                )}

                {/* Submit button */}
                <Button type="submit" className="button" disabled={isLoading}>
                    Log in
                </Button>

                <SocialButtons />
            </form>
        </Form>
    );
}
