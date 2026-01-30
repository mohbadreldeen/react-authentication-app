import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

import { signupSchema } from "@/lib/zod/auth-schemas";
import type { SignupFormValues } from "@/lib/zod/auth-schemas";

export default function SignupForm() {
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

    const onSubmit = (data: SignupFormValues) => {
        console.log("Form submitted:", data);
        // Handle signup logic here
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

                {/* Submit button */}
                <Button type="submit" className="button">
                    Create account
                </Button>

                <SocialButtons />
            </form>
        </Form>
    );
}
