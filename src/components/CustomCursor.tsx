import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const followerRef = useRef<HTMLDivElement | null>(null)

  const [label, setLabel] = useState('')
  const [active, setActive] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (!finePointer || reducedMotion) {
      return
    }

    const dot = dotRef.current
    const follower = followerRef.current

    if (!dot || !follower) return

    const moveDotX = gsap.quickTo(dot, 'x', {
      duration: 0.12,
      ease: 'power3.out',
    })

    const moveDotY = gsap.quickTo(dot, 'y', {
      duration: 0.12,
      ease: 'power3.out',
    })

    const moveFollowerX = gsap.quickTo(follower, 'x', {
      duration: 0.45,
      ease: 'power3.out',
    })

    const moveFollowerY = gsap.quickTo(follower, 'y', {
      duration: 0.45,
      ease: 'power3.out',
    })

    const handleMouseMove = (event: MouseEvent) => {
      moveDotX(event.clientX)
      moveDotY(event.clientY)

      moveFollowerX(event.clientX)
      moveFollowerY(event.clientY)
    }

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement

      const interactiveElement = target.closest<HTMLElement>(
        '[data-cursor]'
      )

      if (!interactiveElement) {
        setActive(false)
        setLabel('')
        return
      }

      const cursorLabel =
        interactiveElement.dataset.cursor || ''

      setLabel(cursorLabel)
      setActive(true)
    }

    const handleMouseOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const relatedTarget = event.relatedTarget as HTMLElement | null

      const currentInteractive = target.closest<HTMLElement>(
        '[data-cursor]'
      )

      const nextInteractive =
        relatedTarget?.closest<HTMLElement>('[data-cursor]')

      if (
        currentInteractive &&
        currentInteractive !== nextInteractive
      ) {
        setActive(false)
        setLabel('')
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
      />

      <div
        ref={followerRef}
        className={`cursor-follower ${
          active ? 'cursor-active' : ''
        }`}
      >
        <span>{label}</span>
      </div>
    </>
  )
}

export default CustomCursor