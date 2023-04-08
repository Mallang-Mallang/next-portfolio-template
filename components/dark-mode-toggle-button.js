import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function DarkModeToggleButton() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <button
        className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 hover:bg-gray-200 hover:text-orange-500 dark:bg-slate-600 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-yellow-300"
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {/* 라이트모드 */}
        <SunIcon className="visible dark:invisible dark:h-0 dark:w-0 h-5 w-5" />
        {/* 다크모드 */}
        <MoonIcon className="invisible dark:visible dark:h-5 dark:w-5 h-0 w-0" />
      </button>
    </>
  );
}
