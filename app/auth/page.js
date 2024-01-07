import Link from "next/link";

export default function IniciarSessao() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="border border-primary rounded-xl w-[400px] bg-white">
        <div className="px-3 py-4 rounded-xl border-primary">
          <p className="font-bold text-xl text-center">Iniciar sessão</p>
        </div>
        <form className="p-3">
          <div className="flex border rounded-xl bg-gray-50">
            <div className="py-3 px-4">
              <i className="bi bi-at"></i>
            </div>
            <input className="w-full rounded-r-xl px-3 border-l" />
          </div>
          <div className="flex border rounded-xl bg-gray-50 mt-3 mb-6">
            <div className="py-3 px-4">
              <i className="bi bi-key-fill"></i>
            </div>
            <input
              className="w-full rounded-r-xl px-3 border-l"
              type="password"
            />
          </div>
          <div className="flex gap-3">
            <Link href="./" className="btn-primary">
              Cancelar
            </Link>
            <input
              type="submit"
              value="Entrar"
              className="btn-primary w-full"
            />
          </div>
        </form>
        <div className="text-center mt-4 mb-6">
          <a className="underline" href="auth/repor">Repor palavra-passe</a> ou <a className="underline" href="auth/repor">criar uma conta</a>
        </div>
      </div>
    </div>
  );
}
