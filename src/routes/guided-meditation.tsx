import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/guided-meditation')({
  component: GuidedMeditation,
})

function GuidedMeditation() {
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
          <p className="eyebrow">Guided Meditation</p>
          <h1>
            Find Your <em>Center</em>
          </h1>
          <p className="lede">
            Explore our collection of guided meditations designed to help you
            cultivate presence, clarity, and inner peace.
          </p>
        </div>
      </section>

      <section>
        <div className="measure" data-reveal data-reveal-delay="100ms">
          <p className="lead-line">
            <em>Stillness</em> in Motion
          </p>
          <div className="passage">
            <p>
              Our guided meditations offer a gentle path to inner stillness.
              Whether you're new to meditation or an experienced practitioner,
              these sessions are crafted to support your journey of self-discovery
              and awareness.
            </p>
            <p>
              Each meditation is designed to help you connect with the present
              moment, release stress, and cultivate a deeper sense of peace and
              clarity.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="measure" data-reveal data-reveal-delay="200ms">
          <p className="lead-line">
            <em>Practices</em> for Every Moment
          </p>
          <div className="passage">
            <p>
              From brief breathing exercises to extended contemplative sessions,
              our guided meditations adapt to your needs and schedule. Find the
              practice that resonates with you.
            </p>
          </div>
        </div>
      </section>

      <a
        href="https://quantheo.etsy.com"
        target="_blank"
        rel="noopener noreferrer"
        className="foot-link"
        style={{ display: 'inline-block', marginTop: '2rem' }}
      >
        Visit Our Etsy Shop for More
      </a>
    </div>
  )
}
