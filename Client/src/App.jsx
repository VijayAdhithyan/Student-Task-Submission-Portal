import NavBar from "./components/navBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
