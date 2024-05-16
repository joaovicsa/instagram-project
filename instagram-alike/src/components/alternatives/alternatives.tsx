/** @format */

import { FacebookButton } from './facebook'
import { ForgotPassword } from './forgot'
import { GoogleButton } from './google'
import { Header } from './header'

export const Alternatives = (): JSX.Element => {
  return (
    <>
      <Header />
      <FacebookButton />
      <GoogleButton />
      <ForgotPassword />
    </>
  )
}
