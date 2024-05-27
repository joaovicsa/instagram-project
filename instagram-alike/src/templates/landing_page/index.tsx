/** @format */

import { SlideShow } from '../../components/slideshow'
import { Footer } from './footer'
import { Login } from './login'

export const LandingPage = (): JSX.Element => {
  return (
    <div id="layout" className="flex flex-wrap justify-center items-center">
      <SlideShow />
      <Login />
      <Footer />
    </div>
  )
}
