export default function ChatSidebar3() {
  return (
    <div className="btn-primary p-0 flex items-center gap-2.5 px-2.5">
      <div className="h-14 flex items-center">
        <img
          src="https://i.ibb.co/8jbLFbg/trabalhador3-Cropped.jpg"
          className="w-10 rounded-full"
          alt="Profile Avatar"
        />
      </div>
      <div className="w-full">
        <p className="font-semibold">Xavier Colina Roberto</p>
        <div class="inline-flex items-center gap-1.5">
          <span class="w-2 h-2 inline-block bg-green-500 rounded-full"></span>
          <p className="text-xs text-gray-600">Disponível</p>
        </div>
      </div>
    </div>
  );
}
