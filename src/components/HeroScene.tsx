import {
    useEffect,
    useRef,
  } from 'react'
  
  import gsap from 'gsap'
  
  function HeroScene() {
    const sceneRef =
      useRef<HTMLDivElement | null>(null)
  
    const vaRef =
      useRef<HTMLDivElement | null>(null)
  
    const glowRef =
      useRef<HTMLDivElement | null>(null)
  
    useEffect(() => {
      const scene = sceneRef.current
      const va = vaRef.current
      const glow = glowRef.current
  
      if (!scene || !va || !glow) return
  
      const reducedMotion =
        window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches
  
      if (reducedMotion) return
  
      const moveVA = (
        event: MouseEvent
      ) => {
        const rect =
          scene.getBoundingClientRect()
  
        const x =
          (event.clientX -
            rect.left) /
            rect.width
  
        const y =
          (event.clientY -
            rect.top) /
            rect.height
  
        const normalizedX =
          x * 2 - 1
  
        const normalizedY =
          y * 2 - 1
  
        /*
          Strong, but controlled,
          mouse-following 3D tilt.
        */
  
        gsap.to(va, {
          rotateY:
            normalizedX * 28,
  
          rotateX:
            normalizedY * -17,
  
          rotateZ:
            normalizedX * -3,
  
          x:
            normalizedX * 28,
  
          y:
            normalizedY * 18,
  
          duration: 0.65,
  
          ease: 'power3.out',
  
          overwrite: true,
  
          transformPerspective: 900,
        })
  
        /*
          Glow moves independently,
          creating visual depth.
        */
  
        gsap.to(glow, {
          x:
            normalizedX * 45,
  
          y:
            normalizedY * 30,
  
          duration: 0.9,
  
          ease: 'power3.out',
  
          overwrite: true,
        })
      }
  
      const resetVA = () => {
        gsap.to(va, {
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
  
          x: 0,
          y: 0,
  
          duration: 1.1,
  
          ease:
            'elastic.out(1, 0.4)',
  
          overwrite: true,
        })
  
        gsap.to(glow, {
          x: 0,
          y: 0,
  
          duration: 1,
  
          ease: 'power3.out',
  
          overwrite: true,
        })
      }
  
      scene.addEventListener(
        'mousemove',
        moveVA
      )
  
      scene.addEventListener(
        'mouseleave',
        resetVA
      )
  
      return () => {
        scene.removeEventListener(
          'mousemove',
          moveVA
        )
  
        scene.removeEventListener(
          'mouseleave',
          resetVA
        )
      }
    }, [])
  
    return (
      <div
        ref={sceneRef}
        className="hero-va-stage"
        data-cursor="MOVE"
      >
        <div
          ref={glowRef}
          className="hero-va-glow"
          aria-hidden="true"
        />
  
        <div
          ref={vaRef}
          className="hero-va"
        >
          VA
        </div>
      </div>
    )
  }
  
  export default HeroScene