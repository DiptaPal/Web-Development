
"use client";

import Link from "next/link";
import { useState } from "react";

import { Eye, EyeSlash } from "@gravity-ui/icons";

import { authClient } from "@/lib/auth-client";
import {
    Button,
    Description,
    FieldError,
    Fieldset,
    Form,
    Input,
    Label,
    Surface,
    TextField,
} from "@heroui/react";

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    // Password validation rules
    const passwordRules = [
        {
            label: "At least 8 characters",
            test: (value) => value.length >= 8,
        },
        {
            label: "One uppercase letter",
            test: (value) => /[A-Z]/.test(value),
        },
        {
            label: "One lowercase letter",
            test: (value) => /[a-z]/.test(value),
        },
        {
            label: "One number",
            test: (value) => /[0-9]/.test(value),
        },
        {
            label: "One special character",
            test: (value) => /[^A-Za-z0-9]/.test(value),
        },
    ];

    // Form submission
    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const name = formData.get("name");
        const email = formData.get("email");
        const passwordValue = formData.get("password");

        // Better Auth integration will go here

        try {
            const { data, error } = await authClient.signUp.email({
                name,
                email,
                password: passwordValue,
                callbackURL: "/"
            });
        } catch (error) {

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
                        Create an Account
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Join ShopEase and start shopping today!
                    </p>
                </div>

                {/* Signup Form */}
                <Form onSubmit={onSubmit}>
                    <Fieldset className="w-full">

                        <Fieldset.Group>

                            {/* Full Name */}
                            <TextField
                                isRequired
                                name="name"
                                validate={(value) => {
                                    if (!value.trim()) {
                                        return "Name is required.";
                                    }

                                    if (value.trim().length < 3) {
                                        return "Name must be at least 3 characters.";
                                    }

                                    return null;
                                }}
                            >
                                <Label>Full Name</Label>

                                <Input
                                    placeholder="Enter your full name"
                                    autoComplete="name"
                                    variant="secondary"
                                />

                                <FieldError />
                            </TextField>

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
                                    const failedRule = passwordRules.find(
                                        (rule) => !rule.test(value)
                                    );

                                    if (failedRule) {
                                        return failedRule.label;
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
                                        placeholder="Create a password"
                                        autoComplete="new-password"
                                        variant="secondary"
                                        className="w-full pr-12!"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
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

                                {/* Password Requirements */}
                                <Description>
                                    Your password must contain:

                                    <span className="block mt-2 space-y-1">
                                        {passwordRules.map((rule, index) => (
                                            <span
                                                key={index}
                                                className={`block ${rule.test(password)
                                                    ? "text-green-600"
                                                    : "text-gray-500"
                                                    }`}
                                            >
                                                {rule.test(password)
                                                    ? "✓"
                                                    : "○"}
                                                {" "}
                                                {rule.label}
                                            </span>
                                        ))}
                                    </span>
                                </Description>

                                <FieldError />
                            </TextField>

                            {/* Confirm Password */}
                            <TextField
                                isRequired
                                name="confirmPassword"
                                validate={(value) => {
                                    if (!value) {
                                        return "Please confirm your password.";
                                    }

                                    if (value !== password) {
                                        return "Passwords do not match.";
                                    }

                                    return null;
                                }}
                            >
                                <Label>Confirm Password</Label>

                                {/* Confirm Password Input + Eye Button */}
                                <div className="relative w-full">

                                    <Input
                                        type={
                                            showConfirmPassword
                                                ? "text"
                                                : "password"
                                        }
                                        placeholder="Confirm your password"
                                        autoComplete="new-password"
                                        variant="secondary"
                                        className="w-full pr-12!"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                (prev) => !prev
                                            )
                                        }
                                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center text-gray-500 hover:text-gray-800 cursor-pointer"
                                        aria-label={
                                            showConfirmPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                    >
                                        {showConfirmPassword ? (
                                            <EyeSlash className="size-5" />
                                        ) : (
                                            <Eye className="size-5" />
                                        )}
                                    </button>

                                </div>

                                <FieldError />
                            </TextField>

                        </Fieldset.Group>

                        {/* Submit Button */}
                        <Fieldset.Actions className="mt-5">
                            <Button
                                type="submit"
                                color="primary"
                                className="w-full"
                                isDisabled={loading}
                            >
                                {loading ? "Creating Account..." : "Create Account"}
                            </Button>
                        </Fieldset.Actions>

                    </Fieldset>
                </Form>

                {/* Sign In */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{" "}

                    <Link
                        href="/auth/signin"
                        className="text-blue-600 font-semibold hover:underline"
                    >
                        Sign In
                    </Link>
                </p>

            </Surface>
        </section>
    );
}
