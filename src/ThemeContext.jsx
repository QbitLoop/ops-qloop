import { createContext, useContext, useState } from "react";
import { dark, light } from "./tokens";

const ThemeCtx = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);
  const T = isDark ? dark : light;
  const toggle = () => setIsDark((d) => !d);
  return (
    <ThemeCtx.Provider value={{ T, isDark, toggle }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeCtx);
}
