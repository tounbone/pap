import Navbar from "./components/Navbar";
import IniciarSessao from "./components/IniciarSessao";
import Registar from "./components/Registar";
import Performance from "./components/Performance";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="m-4 flex">
      <div className="mr-4"><IniciarSessao /></div>
        <div className="mr-4"><Registar /></div>
        <div className="mr-4"><Performance /></div>
      </div>
    </>
  );
};

export default App;
