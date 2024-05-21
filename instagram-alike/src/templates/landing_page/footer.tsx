/** @format */

import { Filter } from '../../components/filter'

export const Footer = (): JSX.Element => {
  return (
    <footer className="container flex flex-wrap justify-center items-center">
      <div className="w-[750px] text-gray-500">
        <div className="w-full flex flex-wrap justify-around">
          <a href="./">Viyse Creative</a>
          <a href="./">Sobre</a>
          <a href="./">Blog</a>
          <a href="./">Carreiras</a>
          <a href="./">API</a>
          <a href="./">Privacidade</a>
          <a href="./">Termos</a>
          <a href="./">Endereço</a>
        </div>
        <div className="w-full flex justify-center items-center">
          <Filter />
          <p>© 2024 Viyse Creative</p>
        </div>
      </div>
    </footer>
  )
}
