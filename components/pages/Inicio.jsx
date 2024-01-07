export default function Inicio() {
  return (
    <>
      <div className="m-4">
        <p className="font-light text-2xl">Boa tarde, Joaquina.</p>
      </div>
      <div className="border w-full border-primary rounded-lg shadow-sm m-4">
        <div className="px-3 py-4 rounded-t-lg bg-background border-primary">
          <p className="font-bold">Hoje</p>
        </div>
        <div className="p-3 rounded-b-lg border-primary bg-primarylight">
          <div className="w-80 flex flex-col bg-background border border-primary shadow-sm rounded-md p-3 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <h3 className="text-lg font-bold text-gray-800 dark:text-background">
              Reunião
            </h3>
            <p className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
              13:00
            </p>
            <a
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-700"
              href="#"
            >
              Detalhes
              <svg
                className="w-2.5 h-auto"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
