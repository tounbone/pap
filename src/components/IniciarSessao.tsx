export default function IniciarSessao() {
  return (
    <div className="border border-primary rounded-lg shadow-sm">
      <div className="px-3 py-4 rounded-t-lg bg-white border-primary">
        <p className="font-bold">Iniciar sessão</p>
      </div>
      <div className="p-3 rounded-b-lg border-primary bg-primarylight">
        <label className="text-sm text-secondarylight font-thin">Email</label>
        <input
          type="text"
          className="border border-primary py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 mb-1"
        ></input>
        <label className="text-sm text-secondarylight font-thin">
          Password
        </label>
        <input
          type="password"
          className="border border-primary py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 mb-6"
        ></input>
        <div className="flex">
          <div className="text-sm w-64">
            <p>Não está registado?</p>
            <p className="font-semibold hover:underline hover:cursor-pointer">
              Crie uma conta
            </p>
          </div>
          <button
            type="button"
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-primary font-medium bg-background text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
          >
            Entrar
            <svg
              className="w-2.5 h-auto"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1 7C0.447715 7 -3.73832e-07 7.44771 -3.49691e-07 8C-3.2555e-07 8.55228 0.447715 9 1 9L13.0858 9L7.79289 14.2929C7.40237 14.6834 7.40237 15.3166 7.79289 15.7071C8.18342 16.0976 8.81658 16.0976 9.20711 15.7071L16.0303 8.88388C16.5185 8.39573 16.5185 7.60427 16.0303 7.11612L9.20711 0.292893C8.81658 -0.0976318 8.18342 -0.0976318 7.79289 0.292893C7.40237 0.683417 7.40237 1.31658 7.79289 1.70711L13.0858 7L1 7Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
