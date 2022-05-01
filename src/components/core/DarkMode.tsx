import { useTheme } from "next-themes";
import { SunIcon } from "@heroicons/react/outline";

const DarkMode = () => {
  const { theme, setTheme } = useTheme();
  const toggleDark = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <span className="sr-only">Toggle Dark Mode</span>
      <SunIcon
        onClick={toggleDark}
        className="x-center flex h-6 w-6 text-gray-500 hover:cursor-pointer hover:text-gray-600"
      />
    </>
  );
};

export default DarkMode;
