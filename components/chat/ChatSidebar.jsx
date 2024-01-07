export default function ChatSidebar() {
  return (
    <div className="btn-primary p-0 flex items-center gap-2.5 px-2.5 mb-1">
      <div className="h-14 flex items-center">
        {" "}
        {/* Add 'flex items-center' here */}
        <img
          src="https://i.ibb.co/zmv0mqc/trabalhador1-Cropped.jpg"
          className="w-10 rounded-full"
          alt="Profile Avatar"
        />
      </div>
      <div className="w-full">
        <p className="font-semibold">Joaquina Campos</p>
        <div class="inline-flex items-center gap-1.5">
          <span class="w-2 h-2 inline-block bg-yellow-500 rounded-full"></span>
          <p className="text-xs text-gray-600">Ausente</p>
        </div>
      </div>
    </div>
  );
}
