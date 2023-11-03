import SidebarPerfil from "./SidebarPerfil";

export default function Sidebar() {
  return (
    <div className="w-18 p-2 h-screen flex flex-col border-r border-primary bg-gray-100 dark:bg-slate-950">
      <div className="flex-grow">
        <div className="max-w-xs flex flex-col rounded-md shadow-sm mb-2 bg-white">
          <button
            type="button"
            className="hs-tooltip [--placement:right] p-5 inline-flex justify-center items-center gap-2 rounded-t-md border border-primary font-medium bg-white align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
            </svg>
            <span
              className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity ml-32 inline-block absolute invisible py-1 px-2 bg-gray-50 border text-xs font-medium text-primarylight rounded-md shadow-sm dark:bg-slate-700"
              role="tooltip"
            >
              Início
            </span>
          </button>
          <button
            type="button"
            className="hs-tooltip [--placement:right] -mt-px p-5 inline-flex justify-center items-center gap-2 border border-primary font-medium bg-white align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
            <span
              className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity ml-32 inline-block absolute invisible py-1 px-2 bg-gray-50 border text-xs font-medium text-primarylight rounded-md shadow-sm dark:bg-slate-700"
              role="tooltip"
            >
              Correio
            </span>
          </button>

          <button
            type="button"
            className="hs-tooltip [--placement:right] -mt-px p-5 inline-flex justify-center items-center gap-2 border border-primary font-medium bg-white align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
            </svg>
            <span
              className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity ml-32 inline-block absolute invisible py-1 px-2 bg-gray-50 border text-xs font-medium text-primarylight rounded-md shadow-sm dark:bg-slate-700"
              role="tooltip"
            >
              Chat
            </span>
          </button>
          <button
            type="button"
            className="hs-tooltip [--placement:right] -mt-px p-5 inline-flex justify-center items-center gap-2 border border-primary font-medium bg-white align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"
              />
            </svg>
            <span
              className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity ml-32 inline-block absolute invisible py-1 px-2 bg-gray-50 border text-xs font-medium text-primarylight rounded-md shadow-sm dark:bg-slate-700"
              role="tooltip"
            >
              Reuniões
            </span>
          </button>
          <button
            type="button"
            className="hs-tooltip [--placement:right] -mt-px p-5 inline-flex justify-center items-center gap-2 rounded-b-md border border-primary font-medium bg-white align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
              <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
            <span
              className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity ml-32 inline-block absolute invisible py-1 px-2 bg-gray-50 border text-xs font-medium text-primarylight rounded-md shadow-sm dark:bg-slate-700"
              role="tooltip"
            >
              Calendário
            </span>
          </button>
        </div>
      </div>
      <div className="hs-tooltip inline-block [--trigger:click] [--placement:top]">
        <a className="hs-tooltip-toggle block text-center" href="javascript:;">
          <span className="w-full p-2 inline-flex justify-center items-center rounded-md bg-white border border-primary shadow-sm text-gray-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/[.05] dark:hover:border-white/[.1] dark:hover:text-white">
            <div className="relative inline-block">
              <img
                className="inline-block h-[2.375rem] w-[2.375rem] rounded-full dark:ring-gray-800"
                src="https://i.pinimg.com/564x/ac/7d/3b/ac7d3b23135fbab320eaddd23ec6afed.jpg"
                alt="Image Description"
              ></img>
              <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500"></span>
            </div>
          </span>
          <div
            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 w-60 bg-white border text-left rounded-md shadow-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400"
            role="tooltip"
          >
            <SidebarPerfil/>
          </div>
        </a>
      </div>
    </div>
  );
}
