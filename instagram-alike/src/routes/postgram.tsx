/** @format */

import { SlideShow } from '../components/slideshow'
import { Login } from '../templates/login'
import '/src/index.css'

function Postgram() {
  return (
    <div id="layout" className="flex flex-wrap justify-center items-center">
      <SlideShow />
      <Login />
    </div>
  )
}

export default Postgram
