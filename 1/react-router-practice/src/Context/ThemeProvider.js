import React, { createContext } from "react";
import { THEME_TYPE } from "../Constant/Theme";
import { useEffect, useState } from "react";
export const ThemeContext = createContext({
  theme: {},
  toggleTheme: () => {},
});
export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(THEME_TYPE.LIGHT);
  useEffect(() => {
    setTheme(THEME_TYPE.LIGHT);
  }, []);
  const toggleTheme = () => {
    if (theme === THEME_TYPE.LIGHT) {
      setTheme(THEME_TYPE.DARK);
    } else {
      setTheme(THEME_TYPE.LIGHT);
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
