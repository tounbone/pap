import Sidebar from "./components/Sidebar";
import IniciarSessao from "./components/IniciarSessao";
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    import('preline');
  }, []);
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="m-2 flex">
          <div className="mr-4 mx-auto">
            <IniciarSessao />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
