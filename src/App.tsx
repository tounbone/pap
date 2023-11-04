import Sidebar from "./components/Sidebar";
import IniciarSessao from "./components/IniciarSessao";
import { useEffect } from "react";
import Correio from "./components/pages/Correio";
import Calendario from "./components/pages/Calendario";
import Inicio from "./components/pages/Inicio";

const App = () => {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <div className="bg-white dark:bg-slate-900">
      <div className="flex">
        <Sidebar />
        <div className="flex">
          <div>
            <Correio />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
