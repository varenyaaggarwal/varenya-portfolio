import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
}

function Reveal({
  children,
  delay = 0,
  y = 50,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const element = elementRef.current

    if (!element) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 88%',
            once: true,
          },
        }
      )
    }, element)

    return () => ctx.revert()
  }, [delay, y])

  return <div ref={elementRef}>{children}</div>
}

export default Reveal