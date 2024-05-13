/** @format */

function Login() {
  return (
    <div className="container border-gray border-2 w-96 h-[400px] flex items-center flex-wrap">
      <div className="w-full h-28">
        <h1 className="w-full h-full text-5xl text-center">Postgram</h1>
      </div>
      <section className="container">
        <div className="container h-20 flex flex-wrap justify-center">
          <div id="input" className="flex flex-wrap w-full">
            <p className="w-full h-4 text-xs text-gray-400">
              Telefone, nome de usuário ou email:
            </p>
            <input
              className="w-full h-4 bg-stone-100"
              type="text"
              name="username"
              id="username"
            />
          </div>
          <div id="input" className="flex flex-wrap w-full">
            <p className="w-full h-4 text-xs text-gray-400">Senha:</p>
            <input
              className="w-full h-4 bg-stone-100"
              type="password"
              name="user password"
              id="userpassword"
            />
          </div>
        </div>
        <div className="container flex flex-wrap justify-center">
          <button className="bg-blue-500 w-64 rounded-md h-8 text-white" type="submit">
            Entrar
          </button>
        </div>
      </section>
    </div>
  )
}

export default Login
