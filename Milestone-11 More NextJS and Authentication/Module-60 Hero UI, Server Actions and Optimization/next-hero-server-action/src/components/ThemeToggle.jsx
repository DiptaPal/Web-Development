
"use client";
"use client"

import { Moon, Sun } from "@gravity-ui/icons";
import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribe = () => () => { }; // nothing to subscribe to
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();

    const mounted = useSyncExternalStore(
        subscribe,
        getClientSnapshot,
        getServerSnapshot
    );

    if (!mounted) return <div className="h-8 w-14" />;

    const isDark = resolvedTheme === "dark";

    return (
        <Switch
            size="lg"
            isSelected={isDark}
            onChange={(selected) => setTheme(selected ? "dark" : "light")}
        >
            {({ isSelected }) => (
                <Switch.Content>
                    <Switch.Control>
                        <Switch.Thumb>
                            <Switch.Icon>
                                {isSelected ? (
                                    <Sun className="size-3 text-inherit opacity-100" />
                                ) : (
                                    <Moon className="size-3 text-inherit opacity-70" />
                                )}
                            </Switch.Icon>
                        </Switch.Thumb>
                    </Switch.Control>
                </Switch.Content>
            )}
        </Switch >
    );
}
