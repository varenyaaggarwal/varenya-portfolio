import { useEffect, useState } from 'react'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop

      const scrollHeight =
        document.documentElement.scrollHeight -
        window.innerHeight

      const currentProgress =
        scrollHeight > 0
          ? (scrollTop / scrollHeight) * 100
          : 0

      setProgress(currentProgress)
    }

    window.addEventListener('scroll', updateProgress)

    updateProgress()

    return () => {
      window.removeEventListener('scroll', updateProgress)
    }
  }, [])

  return (
    <div className="scroll-progress-track">
      <div
        className="scroll-progress-bar"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  )
}

export default ScrollProgress