export default function IniciarSessao() {
  return (
    <div className="border border-primary rounded-lg">
      <div className="uppercase p-3 rounded-t-lg bg-white border-primary">
        <p className="font-bold">Iniciar sessão</p>
      </div>
      <div className="p-3 rounded-b border-primary bg-primary">
        <p>email</p>
        <input className="rounded-sm w-full bg-background py-1 px-2 mb-3"></input>
        <p>palavra-passe</p>
        <input className="rounded-sm w-full bg-background py-1 px-2 mb-6" type="password"></input>
        <div className="flex">
          <div className="text-sm w-64">
            <p className="font-light">Não está registado?</p>
            <p className="font-semibold hover:underline hover:cursor-pointer">Crie uma conta</p>
          </div>
          <button className="uppercase bg-background rounded py-2 w-full">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
