export default function ChatSidebar2() {
  return (
    <div className="btn-primary p-0 flex items-center gap-2.5 px-2.5 mb-1">
      <div className="h-14 flex items-center">
        {" "}
        {/* Add 'flex items-center' here */}
        <img
          src="https://i.ibb.co/mFhVB6x/trabalhador2-Cropped.jpg"
          className="w-10 rounded-full"
          alt="Profile Avatar"
        />
      </div>
      <div className="w-full">
        <p className="font-semibold">Roberta dos Santos</p>
        <div class="inline-flex items-center gap-1.5">
          <span class="w-2 h-2 inline-block bg-green-500 rounded-full"></span>
          <p className="text-xs text-gray-600">Disponível</p>
        </div>
      </div>
    </div>
  );
}
