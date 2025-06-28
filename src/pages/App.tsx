import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { MenuProvider } from "../context/menu/MenuProvider";
import Empleados from "./Empleados";
import Reservas from "./Reservas";
import Notas from "./Notas";
import Habitaciones from "./Habitaciones";
import { MenuTableProvider } from "../context/menuTable/MenuTableProvider";

function App() {
  return (
    <MenuProvider>
      <MenuTableProvider>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/empleados" element={<Empleados />} />
              <Route path="/reservas" element={<Reservas />} />
              <Route path="/notas" element={<Notas />} />
              <Route path="/habitaciones" element={<Habitaciones />} />
          </Routes>
        </BrowserRouter>
      </MenuTableProvider>
    </MenuProvider>
  );
}

export default App;