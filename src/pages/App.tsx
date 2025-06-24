import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { MenuProvider } from "../context/menu/MenuProvider";

function App() {
  return (
    <MenuProvider>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        </BrowserRouter>
    </MenuProvider>
  );
}

export default App;