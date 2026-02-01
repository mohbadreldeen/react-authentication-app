import { z } from "zod";

export const signupSchema = z
    .object({
        name: z.string().min(2, "Name must be at least 2 characters"),
        email: z.email("Please enter a valid email address"),
        password: z
            .string()
            .min(8, "Password must be at least 8 characters")
            .regex(
                /[A-Z]/,
                "Password must contain at least one uppercase letter"
            )
            .regex(
                /[a-z]/,
                "Password must contain at least one lowercase letter"
            )
            .regex(/[0-9]/, "Password must contain at least one number"),
        confirmPassword: z.string().min(1, "Please confirm your password"),
        agreedToTerms: z.boolean().refine((val) => val === true, {
            message: "You must agree to the terms and conditions",
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });
export const signinSchema = z
    .object({
        email: z.string().email("Please enter a valid email address"),
        password: z.string().min(1, "Password is required"),
    })
    .required();

export type SignupFormValues = z.infer<typeof signupSchema>;
export type SigninFormValues = z.infer<typeof signinSchema>;
