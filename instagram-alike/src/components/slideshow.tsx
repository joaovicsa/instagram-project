/** @format */

import { useEffect, useState } from 'react'

interface Slide {
  src: string
  className: string
}

const slides: Slide[] = [
  { src: '../media/bgsmartphoneback.png', className: 'z-20' },
  { src: '../media/bgsmartphonehome.png', className: 'z-20' },
  // Add more slides here...
]

export const SlideShow = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!animating) {
        setCurrentSlide((currentSlide + 1) % slides.length)
        if (currentSlide + 1 >= slides.length) {
          setCurrentSlide(0) // Reset to 0 when reaching the end
        }
      }
    }, 5000) // Change slide every 5 seconds
    return () => clearInterval(intervalId)
  }, [animating])

  const handleTransitionEnd = () => {
    setAnimating(false)
  }

  return (
    <div className="w-[500px] flex justify-end relative">
      <img
        src="../media/bgsmartphoneexplore.png"
        className="z-10 absolute left-1/3"
        style={{
          zIndex: 10,
          position: 'fixed',
          top: 100,
          left: '23.33%',
        }}
      />
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.src}
          className={`${slide.className} ${
            index === currentSlide ? ' opacity-100' : ' opacity-0'
          }`}
          style={{
            transition: 'opacity 0.5s ease-in-out',
            opacity: index === currentSlide ? 1 : 0,
            position: 'fixed',
            top: 100,
            left: '33.33%',
            zIndex: 20,
          }}
        />
      ))}
    </div>
  )
}
