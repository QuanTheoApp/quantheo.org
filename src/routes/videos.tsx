import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/videos')({
  component: Videos,
})

function Videos() {
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
          <p className="eyebrow">Videos</p>
          <h1>
            Moving <em>Images</em>
          </h1>
          <p className="lede">
            A collection of visual meditations, talks, and reflections to
            inspire and guide your journey.
          </p>
        </div>
      </section>

      <section>
        <div className="measure" data-reveal data-reveal-delay="100ms">
          <p className="lead-line">
            <em>Visual</em> Contemplations
          </p>
          <div className="passage">
            <p>
              Our video collection features guided visual meditations, insightful
              talks, and contemplative reflections. Each piece is designed to
              engage both the mind and the heart.
            </p>
            <p>
              Through the power of moving images and thoughtful narration, these
              videos offer a unique way to explore the depths of consciousness
              and presence.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="measure" data-reveal data-reveal-delay="200ms">
          <p className="lead-line">
            <em>Watch</em>, Reflect, Be
          </p>
          <div className="passage">
            <p>
              Take time to pause and immerse yourself in these visual
              experiences. Let the images and words wash over you, carrying you
              into a space of deeper awareness and understanding.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
