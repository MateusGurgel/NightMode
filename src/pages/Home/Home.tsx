import "./Home.css"
import { useTheme } from "../../contexts/ThemeContext";

export function Home () {
    const {nightMode, toggleTheme} = useTheme()

    return (
      <div id="home">
        <div id="wrap">
          <h1>{nightMode ? "Good Night!" : "Good Day!" }</h1>
          <button onClick={toggleTheme}>Toggle theme</button>
        </div>
      </div>
    );
}