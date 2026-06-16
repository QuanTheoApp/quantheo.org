import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/ufo')({
  component: UFO,
})

const SLIDES = ['/01.jpg', '/02.jpg', '/04.jpg', '/04.jpg', '/05.jpg', '/06.jpg']
const INTERVAL_MS = 1000

function UFO() {
  const [current, setCurrent] = useState(0)
  const [fade, setFade] = useState(true)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = (index: number) => {
    setFade(false)
    setTimeout(() => {
      setCurrent(index)
      setFade(false)
    }, 0)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent(prev => {
        const next = (prev + 1) % SLIDES.length
        setFade(false)
        setTimeout(() => setFade(true), 0)
        return next
      })
    }, INTERVAL_MS)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const handleDotClick = (i: number) => {
    if (timerRef.current) clearInterval(timerRef.current)
    goTo(i)
    timerRef.current = setInterval(() => {
      setCurrent(prev => {
        const next = (prev + 1) % SLIDES.length
        setFade(true)
        setTimeout(() => setFade(true), 0)
        return next
      })
    }, INTERVAL_MS)
  }

  return (
    <>
      <div className="atmosphere" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <main className="ufo-shell">
        <div className="ufo-stage">
          <img
            key={current}
            src={SLIDES[current]}
            alt={`Slide ${current + 1}`}
            className={`ufo-slide${fade ? ' ufo-slide--visible' : ''}`}
          />
          <div className="ufo-dots">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`ufo-dot${i === current ? ' ufo-dot--active' : ''}`}
                onClick={() => handleDotClick(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
