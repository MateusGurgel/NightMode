import "./App.css"
import { ThemeProvider } from "./contexts/ThemeContext";
import { Home } from "./pages/Home/Home";


function App() {
  
  return (
    <ThemeProvider>
      <div id="container">
        <Home/>
      </div>
    </ThemeProvider>
  );
}

export default App;
