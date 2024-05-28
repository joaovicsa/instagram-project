/** @format */

import { useEffect, useState } from 'react'

interface Slide {
  src: string
  className: string
}

const slides: Slide[] = [
  { src: '../media/bgsmartphoneback.png', className: 'z-20 invisible lg:visible' },
  { src: '../media/bgsmartphonehome.png', className: 'z-20 invisible lg:visible' },
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

  const isMobile = window.innerWidth < 1024
  const isDesktop = window.innerWidth >= 1024 && window.innerWidth < 1440

  const imageStyleRight = isMobile
    ? {
        left: '25%',
      }
    : isDesktop
    ? {
        left: '19%',
        top: 40,
      }
    : {
        left: '33,33%',
        top: 100,
      }
  const imageStyleLeft = isMobile
    ? {
        left: '25%',
      }
    : isDesktop
    ? {
        left: '10%',
        top: 40,
      }
    : {
        left: '23.33%',
        top: 100,
      }

  return (
    <div className="w-[500px] flex justify-end relative">
      <img
        src="../media/bgsmartphoneexplore.png"
        className="z-10 absolute left-1/3 invisible lg:visible"
        style={{
          zIndex: 10,
          position: 'fixed',

          ...imageStyleLeft,
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
            zIndex: 20,
            ...imageStyleRight,
          }}
        />
      ))}
    </div>
  )
}
