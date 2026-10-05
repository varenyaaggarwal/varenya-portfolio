import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function CinematicLoader() {
  const loaderRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const loader = loaderRef.current

    if (!loader) return

    document.body.classList.add('is-loading')

    const timeline = gsap.timeline({
      defaults: {
        ease: 'power3.out',
      },
    })

    timeline
      .fromTo(
        '.loader-va',
        {
          opacity: 0,
          y: 35,
          scale: 0.92,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
        }
      )
      .fromTo(
        '.loader-progress-inner',
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: 0.9,
          ease: 'power2.inOut',
        },
        '-=0.25'
      )
      .to('.loader-va', {
        opacity: 0,
        y: -25,
        duration: 0.4,
      })
      .to(
        loader,
        {
          yPercent: -100,
          duration: 0.8,
          ease: 'power4.inOut',
          onComplete: () => {
            document.body.classList.remove('is-loading')
            loader.style.display = 'none'
          },
        },
        '-=0.1'
      )

    return () => {
      timeline.kill()
      document.body.classList.remove('is-loading')
    }
  }, [])

  return (
    <div
      ref={loaderRef}
      className="cinematic-loader"
    >
      <div className="loader-inner">
        <div className="loader-va">
          VA
        </div>

        <div className="loader-progress">
          <div className="loader-progress-inner" />
        </div>

        <p>
          VARENYA AGGARWAL
        </p>
      </div>
    </div>
  )
}

export default CinematicLoader