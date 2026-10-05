import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reducedMotion) {
      return
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      autoRaf: false,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const update = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    ScrollTrigger.refresh()

    return () => {
      lenis.destroy()
      gsap.ticker.remove(update)
    }
  }, [])

  return null
}

export default SmoothScroll