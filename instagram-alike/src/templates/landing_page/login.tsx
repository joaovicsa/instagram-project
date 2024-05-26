/** @format */

import { useState } from 'react'
import { Alternatives } from '../../components/alternatives'
import { GetApp } from '../../components/getapp'
import { LoginInput } from '../../components/input'
import { SignUp } from '../../components/signup'

export const Login = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <div id="upper-right" className="mt-28">
      <div className="w-96 flex flex-wrap gap-2">
        <div className="border-gray border-2 w-96 h-[470px] flex items-center justify-center flex-wrap">
          <div className="w-full h-28 flex justify-center items-center">
            <h1 className="w-full text-5xl text-center">Postgram</h1>
          </div>
          <section className="container">
            <div className="container h-20 flex flex-wrap justify-center">
              <LoginInput.Root descriptionLabel="Telefone, nome de usuário ou email:">
                <LoginInput.Username
                  descriptionLabel="Telefone, nome de usuário ou email:"
                  typeInput="text"
                  name="username"
                  className={`w-[254px] h-[35px] bg-stone-100 text-xs z-10 pl-1 border-b-2 border-r-2 fixed focus:w-full focus:h-4 focus:z-0 focus:relative focus:border-none focus:outline-none focus:shadow-none`}
                  placeholder="Telefone, nome de usuário ou email:"
                />
              </LoginInput.Root>
              <LoginInput.Root
                descriptionLabel="Senha:"
                className={`flex flex-wrap w-64 h-9 border-2 rounded-sm bg-stone-100 overflow-hidden`}>
                <LoginInput.Userpassword
                  descriptionLabel="Senha:"
                  typeInput={`${showPassword ? 'text' : 'password'}`}
                  name="userpassword"
                  className={`w-[254px] h-[35px] bg-stone-100 text-xs z-10 pl-1 border-b-2 border-r-2 fixed focus:w-full focus:h-4 focus:z-0 focus:relative focus:border-none focus:outline-none focus:shadow-none `}
                  placeholder="Senha:"
                  onClick={() => setShowPassword(!showPassword)}
                  visibleLabel={`${showPassword ? 'Ocultar' : 'Mostrar'}`}
                  onChange={handleInputChange}
                  value={inputValue}
                />
              </LoginInput.Root>
            </div>
            <div className="container flex flex-wrap justify-center pt-2">
              <button
                className="bg-blue-500 w-64 rounded-md h-8 text-white"
                type="submit">
                Entrar
              </button>
            </div>
          </section>
          <Alternatives />
        </div>
        <SignUp />
        <GetApp />
      </div>
    </div>
  )
}
