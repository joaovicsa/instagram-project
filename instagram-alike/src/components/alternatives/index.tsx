/** @format */

import { FacebookButton } from './facebook'
import { ForgotPassword } from './forgot'
import { GoogleButton } from './google'
import { Header } from './header'

export const Alternatives = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="flex flex-wrap justify-center items-center gap-2">
        <FacebookButton />
        <GoogleButton />
      </div>
      <ForgotPassword />
    </>
  )
}
