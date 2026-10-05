import {
    useEffect,
    useRef,
  } from 'react'
  
  import type {
    MouseEvent,
  } from 'react'
  
  import gsap from 'gsap'
  
  import {
    ScrollTrigger,
  } from 'gsap/ScrollTrigger'
  
  import HeroScene from './HeroScene'
  
  gsap.registerPlugin(ScrollTrigger)
  
  function Hero() {
    const heroRef =
      useRef<HTMLElement | null>(null)
  
    const spotlightRef =
      useRef<HTMLDivElement | null>(null)
  
    useEffect(() => {
      const hero =
        heroRef.current
  
      if (!hero) return
  
      const reducedMotion =
        window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches
  
      if (reducedMotion) return
  
      const ctx =
        gsap.context(() => {
          /*
            INTRO
          */
  
          gsap.fromTo(
            '.hero-line-inner',
            {
              yPercent: 105,
              opacity: 0,
            },
            {
              yPercent: 0,
              opacity: 1,
  
              duration: 1.05,
  
              stagger: 0.12,
  
              delay: 1.4,
  
              ease: 'power4.out',
            }
          )
  
          gsap.fromTo(
            '.hero-support',
            {
              y: 24,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
  
              duration: 0.8,
  
              stagger: 0.08,
  
              delay: 1.75,
  
              ease: 'power3.out',
            }
          )
  
          gsap.fromTo(
            '.hero-right-composition',
            {
              opacity: 0,
              scale: 0.92,
              x: 35,
            },
            {
              opacity: 1,
              scale: 1,
              x: 0,
  
              duration: 1.25,
  
              delay: 1.6,
  
              ease: 'power4.out',
            }
          )
  
          /*
            SCROLL CHOREOGRAPHY
          */
  
          const timeline =
            gsap.timeline({
              scrollTrigger: {
                trigger: hero,
  
                start: 'top top',
  
                end: 'bottom top',
  
                scrub: 1.1,
  
                invalidateOnRefresh: true,
              },
            })
  
          /*
            Left typography parallax.
          */
  
          timeline.to(
            '.hero-title-first',
            {
              xPercent: -2,
              yPercent: -8,
  
              ease: 'none',
            },
            0
          )
  
          timeline.to(
            '.hero-title-second',
            {
              xPercent: 4,
              yPercent: 5,
  
              ease: 'none',
            },
            0
          )
  
          timeline.to(
            '.hero-copy-block',
            {
              y: -25,
  
              opacity: 0.88,
  
              ease: 'none',
            },
            0
          )
  
          /*
            VERY IMPORTANT:
  
            We animate the whole right
            composition only slightly.
  
            VA itself remains large.
          */
  
          timeline.to(
            '.hero-right-composition',
            {
              y: 35,
  
              x: 15,
  
              rotate: -1.5,
  
              scale: 0.97,
  
              ease: 'none',
            },
            0
          )
  
          /*
            Labels move independently
            by only a few pixels.
          */
  
          timeline.to(
            '.hero-tech-label-top',
            {
              y: 12,
  
              opacity: 0.7,
  
              ease: 'none',
            },
            0
          )
  
          timeline.to(
            '.hero-tech-label-bottom',
            {
              y: -12,
  
              opacity: 0.7,
  
              ease: 'none',
            },
            0
          )
  
          gsap.to(
            '.hero-scroll-indicator',
            {
              opacity: 0,
              y: 15,
  
              scrollTrigger: {
                trigger: hero,
  
                start: 'top top',
  
                end: '25% top',
  
                scrub: true,
              },
            }
          )
  
          ScrollTrigger.refresh()
        }, hero)
  
      return () => {
        ctx.revert()
      }
    }, [])
  
    const handlePointerMove = (
      event: MouseEvent<HTMLElement>
    ) => {
      const hero =
        heroRef.current
  
      const spotlight =
        spotlightRef.current
  
      if (!hero || !spotlight) {
        return
      }
  
      const rect =
        hero.getBoundingClientRect()
  
      const x =
        event.clientX -
        rect.left
  
      const y =
        event.clientY -
        rect.top
  
      spotlight.style.setProperty(
        '--spotlight-x',
        `${x}px`
      )
  
      spotlight.style.setProperty(
        '--spotlight-y',
        `${y}px`
      )
    }
  
    return (
      <section
        className="hero"
        ref={heroRef}
        onMouseMove={
          handlePointerMove
        }
      >
        <div
          ref={spotlightRef}
          className="hero-spotlight"
          aria-hidden="true"
        />
  
        <div
          className="hero-grid-overlay"
          aria-hidden="true"
        />
  
        <div className="hero-grid">
          {/* LEFT */}
  
          <div className="hero-content">
            <p className="eyebrow hero-support">
              SOFTWARE ENGINEERING • SYDNEY
            </p>
  
            <h1 className="hero-title">
              <span className="hero-line">
                <span
                  className="
                    hero-line-inner
                    hero-title-first
                  "
                >
                  Varenya
                </span>
              </span>
  
              <span className="hero-line">
                <span
                  className="
                    hero-line-inner
                    hero-title-second
                    hero-outline
                  "
                >
                  Aggarwal.
                </span>
              </span>
            </h1>
  
            <div className="hero-copy-block">
              <h2 className="hero-support">
                Building software,
                systems and digital ideas
                with purpose.
              </h2>
  
              <p className="hero-description hero-support">
                Software Engineering student
                at the University of Sydney
                exploring software development,
                cybersecurity, AI, networking
                and entrepreneurship.
              </p>
  
              <div className="hero-buttons hero-support">
                <a
                  href="#projects"
                  className="primary-button"
                  data-cursor="EXPLORE"
                >
                  Explore my work
                </a>
  
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button"
                  data-cursor="RESUME"
                >
                  View Resume ↗
                </a>
              </div>
  
              <div className="hero-socials hero-support">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="OPEN"
                >
                  LinkedIn ↗
                </a>
  
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="CODE"
                >
                  GitHub ↗
                </a>
  
                <a
                  href="https://www.instagram.com/varenyaaggarwal/"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="OPEN"
                >
                  Instagram ↗
                </a>
              </div>
            </div>
          </div>
  
          {/* RIGHT */}
  
          <div className="hero-right-composition">
            <span className="hero-tech-label hero-tech-label-top">
              SOFTWARE / SECURITY
            </span>
  
            <HeroScene />
  
            <span className="hero-tech-label hero-tech-label-bottom">
              AI / SYSTEMS / IDEAS
            </span>
          </div>
        </div>
  
        <div className="hero-scroll-indicator">
          <span>
            SCROLL TO EXPLORE
          </span>
  
          <div className="scroll-indicator-line">
            <div />
          </div>
        </div>
      </section>
    )
  }
  
  export default Hero