import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const initinalState = {
  nightMode: false,
  toggleTheme: () => {},
};

const ThemeContext = createContext(initinalState);

export function useTheme() {
  return useContext(ThemeContext);
}

interface ThemeContextProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeContextProps) => {
  const [isNightMode, setNightMode] = useState(false);

  function toggleTheme() {
    setNightMode((prevNigthMode: boolean) => !prevNigthMode);
  }

  useEffect(() => {
    if (isNightMode) {
      document.body.classList.add("dark-content");
    } else {
      document.body.classList.remove("dark-content");
    }

    return () => {
      document.body.classList.remove("dark-content");
    };
  }, [isNightMode]);

  return (
    <ThemeContext.Provider value={{ nightMode: isNightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
