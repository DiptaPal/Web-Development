
"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navigation() {
    const { data, isPending } = authClient.useSession();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const user = data?.user;

    // Get the first character of the user's name
    const userInitial =
        user?.name?.trim()?.charAt(0)?.toUpperCase() || "U";

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Close dropdown when pressing Escape
    useEffect(() => {
        function handleEscape(event) {
            if (event.key === "Escape") {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    // Sign out user
    const handleLogout = async () => {
        try {
            await authClient.signOut();
            setIsDropdownOpen(false);
        } catch (error) {
            // console.error("Logout failed:", error);
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-bold text-blue-600"
                >
                    ShopEase.
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-gray-700 hover:text-primary">
                        Home
                    </Link>

                    <Link href="/products" className="text-gray-700 hover:text-primary">
                        Products
                    </Link>

                    <Link href="/" className="text-gray-700 hover:text-primary">
                        Categories
                    </Link>

                    <Link href="/" className="text-gray-700 hover:text-primary">
                        About
                    </Link>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">

                    {/* Search */}
                    <div className="hidden lg:block w-48">
                        <Input
                            placeholder="Search products..."
                            size="sm"
                        />
                    </div>

                    {/* Authentication */}
                    {isPending ? (
                        <div className="w-10 h-10 rounded-full bg-gray-100 animate-pulse" />
                    ) : user ? (

                        /* Logged-in User Avatar */
                        <div className="relative" ref={dropdownRef}>

                            <button
                                type="button"
                                onClick={() =>
                                    setIsDropdownOpen((prev) => !prev)
                                }
                                className="relative w-11 h-11 rounded-full border-2 border-gray-200 hover:border-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Open user menu"
                                aria-expanded={isDropdownOpen}
                            >
                                {/* User Photo or Initial */}
                                {user.image ? (
                                    <Image
                                        src={user.image}
                                        alt={user.name || "User"}
                                        width={44}
                                        height={44}
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                ) : (
                                    <span className="w-full h-full rounded-full flex items-center justify-center bg-blue-600 text-white text-lg font-bold">
                                        {userInitial}
                                    </span>
                                )}

                                {/* Email Verification Badge */}
                                <span
                                    className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white ${user.emailVerified
                                        ? "bg-green-500"
                                        : "bg-red-500"
                                        }`}
                                    title={
                                        user.emailVerified
                                            ? "Email verified"
                                            : "Email not verified"
                                    }
                                />
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute right-0 top-14 w-72 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">

                                    {/* User Information */}
                                    <div className="px-4 py-4 border-b border-gray-100">
                                        <div className="font-semibold text-gray-900 truncate">
                                            {user.name || "User"}
                                        </div>

                                        <div className="text-sm text-gray-500 truncate mt-1">
                                            {user.email}
                                        </div>

                                        <div className="mt-2">
                                            <span
                                                className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${user.emailVerified
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-red-100 text-red-700"
                                                    }`}
                                            >
                                                <span
                                                    className={`w-1.5 h-1.5 rounded-full ${user.emailVerified
                                                        ? "bg-green-500"
                                                        : "bg-red-500"
                                                        }`}
                                                />
                                                {user.emailVerified
                                                    ? "Email Verified"
                                                    : "Email Not Verified"}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Dropdown Links */}
                                    <div className="p-2">

                                        <Link
                                            href="/"
                                            onClick={() => setIsDropdownOpen(false)}
                                            className="block px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                        >
                                            Profile Update
                                        </Link>

                                        <Link
                                            href="/"
                                            onClick={() => setIsDropdownOpen(false)}
                                            className="block px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                        >
                                            Settings
                                        </Link>

                                        <div className="border-t border-gray-100 my-2" />

                                        <Button
                                            color="danger"
                                            variant="light"
                                            className="w-full justify-start"
                                            onPress={handleLogout}
                                        >
                                            Log Out
                                        </Button>

                                    </div>
                                </div>
                            )}
                        </div>

                    ) : (

                        /* Not Logged In */
                        <Link href="/auth/signin">
                            <Button
                                color="default"
                                variant="flat"
                            >
                                Sign In
                            </Button>
                        </Link>
                    )}

                    {/* Cart */}
                    <Button color="primary">
                        Cart (0)
                    </Button>

                </div>
            </nav>
        </header>
    );
}
