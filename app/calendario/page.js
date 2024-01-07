import Sidebar from "@/components/Sidebar";

export default function Calendario() {
  return (
    <div className="bg-white">
      <div className="flex">
        <Sidebar />
        <div className="w-full h-12 flex items-center bg-gray-50 p-2 border-b">
          <p className="text-lg text-gray-700">Calendário</p>
        </div>
      </div>
    </div>
  );
}
