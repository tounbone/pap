export default function Registar() {
  return (
    <div>
      <div className="w-80 uppercase p-3 border-2 rounded-t border-primary text-primary ">
        <p className="font-bold">Criar nova conta</p>
      </div>
      <div className="w-80 p-3 border-2 rounded-b border-primary text-background bg-primary">
        <div className="flex">
          <div className="mr-4">
            <p className="font-bold">primeiro nome</p>
            <input className="rounded-sm w-full bg-background text-primary py-1 px-2 mb-3"></input>
          </div>
          <div>
            <p className="font-bold">apelido</p>
            <input className="rounded-sm w-full bg-background text-primary py-1 px-2 mb-3"></input>
          </div>
        </div>
        <p className="font-bold">email</p>
        <input className="rounded-sm w-full bg-background text-primary py-1 px-2 mb-3"></input>
        <p className="font-bold">palavra-passe</p>
        <input
          className="rounded-sm w-full bg-background text-primary py-1 px-2 mb-6"
          type="password"
        ></input>
        <div className="flex">
          <div className="text-sm w-64">
            <p>Já tem uma conta?</p>
            <p className="font-bold hover:underline hover:cursor-pointer">
              Iniciar sessão
            </p>
          </div>
          <button className="uppercase font-bold bg-background text-primary rounded py-2 w-full">
            Registar
          </button>
        </div>
      </div>
    </div>
  );
}
