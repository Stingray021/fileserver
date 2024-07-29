import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import { Context } from "./index";
import NavBar from "./components/NavBar/NavBar";
import { useContext, useEffect, useState } from "react";
import { check } from "./http/userAPI";

function App() {
  const [checkAuth, setCheckAuth] = useState(false);
  const { user } = useContext(Context);
  useEffect(() => {
    try {
      check()
      .then((data) => {
        if (data.userId) {
          user.setUser({ userId: data.userId });
          user.setIsAuth(true);
        }
      })
      .catch(e => console.log(e))
      .finally(() => setCheckAuth(true));
    }
    catch (err) {
      console.log(err)
    }
    
  }, []);
  return checkAuth ? (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div style={{ display: "flex", maxHeight: "100%" }}></div>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </div>
  ) : (
    <div className="App">
      <h1>ПРОВЕРКА</h1>
    </div>
  );
}

export default App;
