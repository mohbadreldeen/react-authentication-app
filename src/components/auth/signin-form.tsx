import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

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

import { signinSchema } from "@/lib/zod/auth-schemas";
import type { SigninFormValues } from "@/lib/zod/auth-schemas";

export default function SigninForm() {
    const [rememberMe, setRememberMe] = useState(false);

    const form = useForm<SigninFormValues>({
        resolver: zodResolver(signinSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (data: SigninFormValues) => {
        console.log("Form submitted:", data, "Remember me:", rememberMe);
        // Handle signin logic here
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

                {/* Submit button */}
                <Button type="submit" className="button">
                    Log in
                </Button>

                <SocialButtons />
            </form>
        </Form>
    );
}
