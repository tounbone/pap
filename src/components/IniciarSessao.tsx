export default function IniciarSessao() {
  return (
    <div>
      <div className="w-80 uppercase p-3 border-2 rounded-t bg-secondary border-primary text-primary ">
        <p className="font-bold">Iniciar sessão</p>
      </div>
      <div className="w-80 p-3 border-2 rounded-b border-primary text-background bg-primary">
        <p className="font-bold">email</p>
        <input className="rounded-sm w-full bg-background text-primary py-1 px-2 mb-3"></input>
        <p className="font-bold">palavra-passe</p>
        <input className="rounded-sm w-full bg-background text-primary py-1 px-2 mb-6" type="password"></input>
        <div className="flex">
          <div className="text-sm w-64">
            <p>Não está registado?</p>
            <p className="font-bold hover:underline hover:cursor-pointer">Crie uma conta</p>
          </div>
          <button className="uppercase font-bold bg-secondary text-primary rounded py-2 w-full">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
