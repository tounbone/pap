import Sidebar from "./components/Sidebar";
import IniciarSessao from "./components/IniciarSessao";

const App = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="m-4 flex">
          <div className="mr-4">
            <IniciarSessao />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
