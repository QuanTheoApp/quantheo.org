import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { WhatsAppReach } from '@/components/WhatsAppReach'
import { Plate } from '@/components/Plate'

export const Route = createFileRoute('/about')({
  component: About,
})

// The litany of labels. Each is something the self is named by, paired with
// the gentle reminder that the name is not the thing.
const LABELS = [
  'I am called Theo, yet the name is only a label I happen to wear.',
  'I appear as male, yet that is only a gender.',
  'My age counts the years, yet it is only a number.',
  'I belong to a nationality, yet it is only a category.',
  'I practise a profession, yet it is only a role.',
  'I hold beliefs, yet they are only ideas.',
  'I carry memories, yet they are only stories.',
  'I have known successes, yet they are only events.',
  'I have met failures, yet they are only experiences.',
  'I live in a body, yet it is only a form.',
  'I show a personality, yet it is only a pattern.',
  'I feel emotions, yet they are only movements.',
  'I have thoughts, yet they are only appearances.',
  'I keep preferences, yet they are only tendencies.',
  'I trace a history, yet it is only a narrative.',
  'I hold a reputation, yet it is only an image.',
  'I own possessions, yet they are only objects.',
  'I count achievements, yet they are only milestones.',
  'I speak with a voice, yet it is only a sound.',
  'I wear a face, yet it is only an appearance.',
  'I answer to an identity, yet it is only a concept.',
  'I tell a story, yet it is only a description.',
  'I sense an ego, yet it is only a construct.',
]

function About() {
  // Reveal sections as they enter the viewport — mirrors the other pages.
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
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -6% 0px' },
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="atmosphere" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <main className="shell">
        {/* ── Header ── */}
        <section className="hero donate-hero">
          <div className="measure">
            <span className="eyebrow" data-reveal>
              About me
            </span>
            <figure className="portrait" data-reveal style={{ '--reveal-delay': '90ms' }}>
              <span className="portrait-frame">
                <img
                  src="/theo.jpg"
                  alt="A portrait of Theo"
                  width={320}
                  height={320}
                  loading="lazy"
                />
              </span>
              <figcaption className="portrait-label">I am</figcaption>
            </figure>
            <h1 data-reveal style={{ '--reveal-delay': '180ms' }}>
              I am here, yet I am <em>none of the labels.</em>
            </h1>
            <p
              className="lede"
              data-reveal
              style={{ '--reveal-delay': '320ms' }}
            >
              Everything you could name about me is true, and yet not one of
              those names is what I am.
            </p>
          </div>
        </section>

        {/* ── The litany ── */}
        <section>
          <div className="measure litany">
            {LABELS.map((line, i) => (
              <p
                key={i}
                data-reveal
                style={{ '--reveal-delay': `${(i % 4) * 70}ms` }}
              >
                {line}
              </p>
            ))}
          </div>
        </section>

        {/* ── Closing ── */}
        <section className="closing">
          <div className="measure">
            <p className="lead-line" data-reveal>
              What I truly am cannot be held by a name, a form, a role, a
              belief, a history, or any definition.
            </p>
            <p
              className="lead-line"
              data-reveal
              style={{ '--reveal-delay': '160ms', marginTop: '1.6rem' }}
            >
              Names may change. Descriptions may fall away.{' '}
              <em>Yet that which is aware of them all remains.</em>
            </p>
            <Plate
              src="/awareness-eye.webp"
              alt="A single open eye at the centre of the frame, quietly aware"
              width={554}
              height={554}
              caption="That which is aware remains"
              square
              delay="240ms"
            />
          </div>
        </section>

        {/* ── Reach out ── */}
        <WhatsAppReach />
      </main>

      <footer className="foot">
        <span className="foot-note">
          A space for reflection &middot; no doctrine, no destination
        </span>
      </footer>
    </>
  )
}
