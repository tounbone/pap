export default function Sidebar() {
  return (
    <div className="flex flex-col h-screen p-2 border-r bg-gray-100">
      <div className="w-min border rounded-xl">
        <a href="./auth">
          <button className="btn-sidebar rounded-t-xl">
            <i className="bi bi-house"></i>
          </button>
        </a>
        <a href="./calendario">
          <button className="btn-sidebar">
            <i className="bi bi-calendar4"></i>
          </button>
        </a>{" "}
        <a href="./mensagens">
          <button className="btn-sidebar">
            <i className="bi bi-chat"></i>
          </button>
        </a>{" "}
        <a href="./">
          <button className="btn-sidebar rounded-b-xl">
            <i className="bi bi-camera-video"></i>
          </button>
        </a>
      </div>
      <div className="flex-grow flex flex-col">
        <div className="flex-grow"></div>
        <button className="btn-sidebar2">
          <i class="bi bi-list"></i>
        </button>
      </div>
    </div>
  );
}
