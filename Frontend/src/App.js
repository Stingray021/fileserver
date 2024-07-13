import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div style={{ display: "flex", maxHeight: "100%" }}></div>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </div>
  );
}

export default App;
