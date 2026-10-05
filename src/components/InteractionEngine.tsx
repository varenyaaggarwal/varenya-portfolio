import { useEffect } from 'react'
import gsap from 'gsap'

function InteractionEngine() {
  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (!finePointer || reducedMotion) {
      return
    }

    /* ======================================================
       MAGNETIC ELEMENTS
    ====================================================== */

    const magneticElements =
      document.querySelectorAll<HTMLElement>(
        `
        .primary-button,
        .secondary-button,
        .nav-resume,
        .nav-links a,
        .hero-socials a,
        .project-links a,
        .contact-links a,
        .contact-email
        `
      )

    const magneticCleanups: Array<() => void> = []

    magneticElements.forEach((element) => {
      const handleMouseMove = (event: MouseEvent) => {
        const rect = element.getBoundingClientRect()

        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const distanceX = event.clientX - centerX
        const distanceY = event.clientY - centerY

        gsap.to(element, {
          x: distanceX * 0.18,
          y: distanceY * 0.18,

          duration: 0.35,

          ease: 'power3.out',

          overwrite: true,
        })
      }

      const handleMouseLeave = () => {
        gsap.to(element, {
          x: 0,
          y: 0,

          duration: 0.8,

          ease: 'elastic.out(1, 0.35)',

          overwrite: true,
        })
      }

      element.addEventListener(
        'mousemove',
        handleMouseMove
      )

      element.addEventListener(
        'mouseleave',
        handleMouseLeave
      )

      magneticCleanups.push(() => {
        element.removeEventListener(
          'mousemove',
          handleMouseMove
        )

        element.removeEventListener(
          'mouseleave',
          handleMouseLeave
        )
      })
    })

    /* ======================================================
       PROJECT 3D TILT
    ====================================================== */

    const projectVisuals =
      document.querySelectorAll<HTMLElement>(
        '.project-visual'
      )

    const projectCleanups: Array<() => void> = []

    projectVisuals.forEach((project) => {
      const inner =
        project.querySelector<HTMLElement>(
          '.project-visual-content'
        )

      const handleProjectMove = (
        event: MouseEvent
      ) => {
        const rect =
          project.getBoundingClientRect()

        const x =
          event.clientX - rect.left

        const y =
          event.clientY - rect.top

        const percentX =
          x / rect.width

        const percentY =
          y / rect.height

        /*
          Convert mouse position into
          -1 → +1 range.
        */

        const normalizedX =
          percentX * 2 - 1

        const normalizedY =
          percentY * 2 - 1

        const rotateY =
          normalizedX * 8

        const rotateX =
          normalizedY * -8

        gsap.to(project, {
          rotateX,
          rotateY,

          scale: 1.018,

          transformPerspective: 1100,

          transformOrigin: 'center center',

          duration: 0.45,

          ease: 'power2.out',

          overwrite: true,
        })

        /*
          Inner project visual moves
          slightly opposite to outer card.
        */

        if (inner) {
          gsap.to(inner, {
            x: normalizedX * 14,
            y: normalizedY * 14,

            rotateX: rotateX * 0.4,
            rotateY: rotateY * 0.4,

            duration: 0.45,

            ease: 'power2.out',

            overwrite: true,
          })
        }

        /*
          Mouse-following light.
        */

        project.style.background = `
          radial-gradient(
            circle at ${percentX * 100}% ${percentY * 100}%,
            rgba(143, 118, 255, 0.24),
            rgba(143, 118, 255, 0.07) 28%,
            transparent 55%
          ),
          linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.035),
            rgba(255, 255, 255, 0.005)
          )
        `
      }

      const handleProjectLeave = () => {
        gsap.to(project, {
          rotateX: 0,
          rotateY: 0,

          scale: 1,

          duration: 0.9,

          ease: 'elastic.out(1, 0.4)',

          overwrite: true,
        })

        if (inner) {
          gsap.to(inner, {
            x: 0,
            y: 0,

            rotateX: 0,
            rotateY: 0,

            duration: 0.9,

            ease: 'elastic.out(1, 0.4)',

            overwrite: true,
          })
        }

        project.style.background = `
          radial-gradient(
            circle at 30% 30%,
            rgba(143, 118, 255, 0.22),
            transparent 35%
          ),
          linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.035),
            rgba(255, 255, 255, 0.005)
          )
        `
      }

      project.addEventListener(
        'mousemove',
        handleProjectMove
      )

      project.addEventListener(
        'mouseleave',
        handleProjectLeave
      )

      projectCleanups.push(() => {
        project.removeEventListener(
          'mousemove',
          handleProjectMove
        )

        project.removeEventListener(
          'mouseleave',
          handleProjectLeave
        )
      })
    })

    /* ======================================================
       SKILL CARD DEPTH
    ====================================================== */

    const skillCards =
      document.querySelectorAll<HTMLElement>(
        '.skill-group'
      )

    const skillCleanups: Array<() => void> = []

    skillCards.forEach((card) => {
      const handleSkillMove = (
        event: MouseEvent
      ) => {
        const rect =
          card.getBoundingClientRect()

        const x =
          event.clientX - rect.left

        const y =
          event.clientY - rect.top

        const normalizedX =
          (x / rect.width) * 2 - 1

        const normalizedY =
          (y / rect.height) * 2 - 1

        gsap.to(card, {
          rotateX:
            normalizedY * -4,

          rotateY:
            normalizedX * 4,

          scale: 1.015,

          transformPerspective: 900,

          duration: 0.45,

          ease: 'power2.out',

          overwrite: true,
        })
      }

      const handleSkillLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,

          scale: 1,

          duration: 0.8,

          ease: 'elastic.out(1, 0.4)',

          overwrite: true,
        })
      }

      card.addEventListener(
        'mousemove',
        handleSkillMove
      )

      card.addEventListener(
        'mouseleave',
        handleSkillLeave
      )

      skillCleanups.push(() => {
        card.removeEventListener(
          'mousemove',
          handleSkillMove
        )

        card.removeEventListener(
          'mouseleave',
          handleSkillLeave
        )
      })
    })

    /* ======================================================
       CLEANUP
    ====================================================== */

    return () => {
      magneticCleanups.forEach(
        (cleanup) => cleanup()
      )

      projectCleanups.forEach(
        (cleanup) => cleanup()
      )

      skillCleanups.forEach(
        (cleanup) => cleanup()
      )
    }
  }, [])

  return null
}

export default InteractionEngine