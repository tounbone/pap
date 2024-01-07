import Correio from "@/components/pages/Correio";
import Sidebar from "@/components/Sidebar";

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex">
        <div>
          <a href="/auth">Iniciar sessão</a>
          <br></br>
          <a href="/inicio">Descrição do projeto</a>
        </div>
      </div>
    </div>
  );
}
