import Sidebar from "@/components/Sidebar";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatSidebar2 from "@/components/chat/ChatSidebar2";
import ChatSidebar3 from "@/components/chat/ChatSidebar3";

export default function Mensagens() {
  return (
    <div className="bg-gray-50">
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <nav className=" h-12 flex items-center p-2">
            <p className="font-semibold text-lg text-gray-700 w-full">Mensagens</p>
            <div className="flex gap-1">
              <button className="btn-primary">
                <i class="bi bi-pencil-square"></i>
              </button>
              <input className="input w-72" placeholder="Procurar"></input>
            </div>
          </nav>
          <div className="flex h-full">
          <div className="w-96 px-2">
              <ChatSidebar />
              <ChatSidebar2 />
              <ChatSidebar3 />
            </div>
            <div className="w-full border-l border-t rounded-tl-xl bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
