
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Eye, EyeSlash } from "@gravity-ui/icons";

import {
    Button,
    FieldError,
    Fieldset,
    Form,
    Input,
    Label,
    Surface,
    TextField,
} from "@heroui/react";

import { authClient } from "@/lib/auth-client";

export default function SignInPage() {
    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    // Form submission
    const onSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setErrorMessage("");

        try {
            const formData = new FormData(e.currentTarget);

            const email = formData.get("email");
            const password = formData.get("password");
            const rememberMe = formData.get("rememberMe") === "on";

            // Better Auth Sign In
            const { data, error } = await authClient.signIn.email({
                email,
                password,
                rememberMe,
                callbackURL: "/",
            });

            if (error) {
                setErrorMessage(
                    error.message || "Invalid email or password."
                );
                return;
            }

            // console.log("Sign in successful:", data);

            // Redirect after successful sign in
            router.push("/");
            router.refresh();

        } catch (error) {
            // console.error("Sign in error:", error);

            setErrorMessage(
                error.message || "Something went wrong. Please try again."
            );

        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">

            <Surface className="w-full max-w-md rounded-2xl shadow-lg p-8">

                {/* Logo */}
                <Link
                    href="/"
                    className="block text-3xl font-bold text-blue-600 text-center mb-6"
                >
                    ShopEase.
                </Link>

                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Welcome Back!
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Sign in to continue shopping with ShopEase.
                    </p>
                </div>

                {/* Sign In Form */}
                <Form onSubmit={onSubmit}>
                    <Fieldset className="w-full">

                        <Fieldset.Group>

                            {/* Email */}
                            <TextField
                                isRequired
                                name="email"
                                type="email"
                                validate={(value) => {
                                    if (!value) {
                                        return "Email is required.";
                                    }

                                    const emailRegex =
                                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                                    if (!emailRegex.test(value)) {
                                        return "Please enter a valid email address.";
                                    }

                                    return null;
                                }}
                            >
                                <Label>Email Address</Label>

                                <Input
                                    placeholder="Enter your email"
                                    autoComplete="email"
                                    variant="secondary"
                                />

                                <FieldError />
                            </TextField>

                            {/* Password */}
                            <TextField
                                isRequired
                                name="password"
                                validate={(value) => {
                                    if (!value) {
                                        return "Password is required.";
                                    }

                                    return null;
                                }}
                            >
                                <Label>Password</Label>

                                {/* Password Input + Eye Button */}
                                <div className="relative w-full">

                                    <Input
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        placeholder="Enter your password"
                                        autoComplete="current-password"
                                        variant="secondary"
                                        className="w-full pr-12!"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword((prev) => !prev)
                                        }
                                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center text-gray-500 hover:text-gray-800 cursor-pointer"
                                        aria-label={
                                            showPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                    >
                                        {showPassword ? (
                                            <EyeSlash className="size-5" />
                                        ) : (
                                            <Eye className="size-5" />
                                        )}
                                    </button>

                                </div>

                                <FieldError />
                            </TextField>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between text-sm">

                                <label className="flex items-center gap-2 text-gray-600 cursor-pointer">

                                    <input
                                        type="checkbox"
                                        name="rememberMe"
                                        className="accent-blue-600"
                                    />

                                    Remember me

                                </label>

                                <Link
                                    href="/auth/forgot-password"
                                    className="text-blue-600 hover:underline"
                                >
                                    Forgot Password?
                                </Link>

                            </div>

                        </Fieldset.Group>

                        {/* Error Message */}
                        {errorMessage && (
                            <p className="text-sm text-red-500 mt-3 text-center">
                                {errorMessage}
                            </p>
                        )}

                        {/* Submit Button */}
                        <Fieldset.Actions className="mt-5">
                            <Button
                                type="submit"
                                color="primary"
                                className="w-full"
                                isLoading={loading}
                                isDisabled={loading}
                            >
                                {loading ? "Signing In..." : "Sign In"}
                            </Button>
                        </Fieldset.Actions>

                    </Fieldset>
                </Form>

                {/* Sign Up */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    Don&apos;t have an account?{" "}

                    <Link
                        href="/auth/signup"
                        className="text-blue-600 font-semibold hover:underline"
                    >
                        Create Account
                    </Link>
                </p>

            </Surface>
        </section>
    );
}
