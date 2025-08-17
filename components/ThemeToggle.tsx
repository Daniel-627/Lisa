"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Laptop, Sun, Moon } from "lucide-react"; // icons

const themes = ["system", "light", "dark"] as const;

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  // Pick correct icon
  const current = theme === "system" ? systemTheme : theme;

  const icon =
    current === "light" ? (
      <Sun className="h-5 w-5" />
    ) : current === "dark" ? (
      <Moon className="h-5 w-5" />
    ) : (
      <Laptop className="h-5 w-5" />
    );

  const handleToggle = () => {
    const index = themes.indexOf(theme as typeof themes[number]);
    const next = themes[(index + 1) % themes.length];
    setTheme(next);
  };

  return (
    <button
      onClick={handleToggle}
      aria-label="Toggle theme"
      className="p-2 rounded-lg border hover:bg-accent"
    >
      {icon}
    </button>
  );
}
