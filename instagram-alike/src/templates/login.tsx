/** @format */

import { Alternatives } from '../components/alternatives'
import { Input } from '../components/input'

function Login() {
  return (
    <div className="container border-gray border-2 w-96 h-[400px] flex items-center justify-center flex-wrap">
      <div className="w-full h-28">
        <h1 className="w-full h-full text-5xl text-center">Postgram</h1>
      </div>
      <section className="container">
        <div className="container h-20 flex flex-wrap justify-center">
          <Input description="Telefone, nome de usuário ou email" type="text" />
          <Input description="Senha" type="password" />
        </div>
        <div className="container flex flex-wrap justify-center">
          <button className="bg-blue-500 w-64 rounded-md h-8 text-white" type="submit">
            Entrar
          </button>
        </div>
      </section>
      <Alternatives />
    </div>
  )
}

export default Login
