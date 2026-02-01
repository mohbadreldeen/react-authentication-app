import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSignupMutation } from "@/features/auth/auth-api-slice";

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

import { signupSchema } from "@/features/zod/auth-schemas";
import type { SignupFormValues } from "@/features/zod/auth-schemas";

export default function SignupForm() {
    const navigate = useNavigate();
    const [signup, { isLoading }] = useSignupMutation();

    const form = useForm<SignupFormValues>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            agreedToTerms: true,
        },
    });

    useEffect(() => {
        form.setFocus("name");
    }, []);

    const onSubmit = async (data: SignupFormValues) => {
        try {
            await signup({
                name: data.name,
                email: data.email,
                password: data.password,
            }).unwrap();
            form.reset();
            navigate("/");
        } catch (err: unknown) {
            const error = err as { data?: { message?: string } };
            form.setError("root", {
                message: error?.data?.message || "Sign up failed",
            });
        }
    };

    const inputClassName = "input";

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                {/* Name field */}
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="Your Name"
                                    className={inputClassName}
                                    disabled={isLoading}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                        </FormItem>
                    )}
                />

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

                {/* Confirm Password field */}
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <PasswordInput
                                    placeholder="Confirm your password"
                                    className={inputClassName}
                                    disabled={isLoading}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                        </FormItem>
                    )}
                />

                {/* Terms checkbox */}
                <FormField
                    control={form.control}
                    name="agreedToTerms"
                    render={({ field }) => (
                        <FormItem>
                            <div className="flex items-center gap-3">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        className="bg-background-secondary border-brand"
                                        disabled={isLoading}
                                    />
                                </FormControl>
                                <label
                                    className="text-foreground-muted text-sm cursor-pointer"
                                    onClick={() => field.onChange(!field.value)}
                                >
                                    I agree to the{" "}
                                    <a
                                        href="#"
                                        className="text-brand text-sm cursor-pointer"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Terms & Conditions
                                    </a>
                                </label>
                            </div>
                            <FormMessage className="text-red-400" />
                        </FormItem>
                    )}
                />

                {/* Error message display */}
                {form.formState.errors.root && (
                    <p className="text-red-400 text-sm" role="alert">
                        {form.formState.errors.root.message}
                    </p>
                )}

                {/* Submit button */}
                <Button type="submit" className="button" disabled={isLoading}>
                    {isLoading ? "Creating account..." : "Create account"}
                </Button>

                <SocialButtons />
            </form>
        </Form>
    );
}
