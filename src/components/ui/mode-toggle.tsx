import { useTheme } from "@/components/ui/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-md border border-input bg-background px-3 py-2"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
