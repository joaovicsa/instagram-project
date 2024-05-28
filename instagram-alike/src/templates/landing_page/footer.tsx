/** @format */

import { Filter } from '../../components/filter'

export const Footer = (): JSX.Element => {
  return (
    <footer className="container flex flex-wrap justify-center items-center xl:pt-24 md:pt-6 pt-12 overflow-hidden">
      <div className="lg:w-[750px] md:w-[600px] w-full px-2 md:px-0 text-gray-500">
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
        <div className="w-full flex justify-center items-center pt-6 md:pt-0">
          <Filter />
          <p>© 2024 Viyse Creative</p>
        </div>
      </div>
    </footer>
  )
}
