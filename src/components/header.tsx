
'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { FilterGenre } from "./FilterGenre";

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);


const onClickGenre= () => {};


  useEffect(() => {
    const storedMode = localStorage.getItem("theme");
    if (storedMode === "dark") {
      setIsDarkMode(true);
    }
  }, []);
  
  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    
    <header
      className={`py-4 shadow-md ${isDarkMode ? "bg-black text-white" : "bg-gradient-to-r"}`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-3xl font-bold tracking-wide">
        
          <img src="logo.png" alt="logo" />
        </Link>

        <FilterGenre />
        
       

        <button
          className="text-2xl p-2 rounded-2xl transition-colors border-2  border-white-200"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </header>
  );
};
