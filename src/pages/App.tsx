import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { MenuProvider } from "../context/menu/MenuProvider";
import Empleados from "./Empleados";
import Reservas from "./Reservas";
import Notas from "./Notas";
import Habitaciones from "./Habitaciones";

function App() {
  return (
    <MenuProvider>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empleados" element={<Empleados />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/notas" element={<Notas />} />
            <Route path="/habitaciones" element={<Habitaciones />} />
        </Routes>
        </BrowserRouter>
    </MenuProvider>
  );
}

export default App;