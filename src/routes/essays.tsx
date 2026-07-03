import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/essays')({
  component: Essays,
})

function Essays() {
  // Reveal sections as they enter the viewport
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    )
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        }
      },
      { threshold: 0.15 },
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="shell">
      <section className="hero">
        <div className="measure" data-reveal data-reveal-delay="0ms">
          <p className="eyebrow">Essays</p>
          <h1>
            Written <em>Reflections</em>
          </h1>
          <p className="lede">
            Thoughtful explorations on consciousness, presence, and the nature
            of being.
          </p>
        </div>
      </section>

      <section>
        <div className="measure" data-reveal data-reveal-delay="100ms">
          <p className="lead-line">
            <em>Words</em> as Windows
          </p>
          <div className="passage">
            <p>
              Our essays delve into the nature of consciousness, the practice of
              presence, and the journey of self-discovery. Each piece is an
              invitation to explore the depths of human experience and
              understanding.
            </p>
            <p>
              Through thoughtful reflection and contemplative inquiry, these
              writings offer insights and perspectives that may resonate with
              your own journey.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="measure" data-reveal data-reveal-delay="200ms">
          <p className="lead-line">
            <em>Read</em>, Ponder, Discover
          </p>
          <div className="passage">
            <p>
              Take your time with these essays. Let the words sink in and stir
              your own thoughts and feelings. Each reading is an opportunity to
              connect more deeply with yourself and the world around you.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
