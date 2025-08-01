import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { MenuProvider } from "../context/menu/MenuProvider";
import Empleados from "./Empleados";
import Reservas from "./Reservas";
import Notas from "./Nota";
import Habitaciones from "./Habitaciones";
import { MenuTableProvider } from "../context/menuTable/MenuTableProvider";
import { Provider } from "react-redux";
import { store } from "../features/store/store";
import { ModalProvider } from "../context/modal/ModalProvider";

function App() {
  return (
    <Provider store={store}>
      <ModalProvider>
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
      </ModalProvider>
    </Provider>
  );
}

export default App;