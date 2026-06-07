import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { WhatsAppReach } from '@/components/WhatsAppReach'
import { Plate } from '@/components/Plate'

export const Route = createFileRoute('/')({
  component: Awakening,
})

function Awakening() {
  // The hero clip autoplays muted (browsers require it); let visitors lift the silence.
  const videoRef = useRef<HTMLIFrameElement>(null)
  const [muted, setMuted] = useState(true)

  const toggleSound = () => {
    const frame = videoRef.current
    if (!frame || !frame.contentWindow) return
    const func = muted ? 'unMute' : 'mute'
    frame.contentWindow.postMessage(
      JSON.stringify({ event: 'command', func, args: [] }),
      '*',
    )
    setMuted((m) => !m)
  }

  // Reveal passages as they enter the viewport — a slow, deliberate unfolding.
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
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="atmosphere" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <main className="shell">
        {/* ── Hero ── */}
        <section className="hero">
          <div className="measure">
            <div className="invocation" data-reveal>
              <p className="invocation-body">
                One experience has remained unchanged across the whole of your
                conscious life. It was already here before every thought, every
                feeling, every sensation, every perception &mdash; before the
                sense of who you are. It has stayed through each success and
                each failure, beneath every belief and every doubt. It has
                never aged, never evolved, never become more or less itself.
              </p>
              <p className="invocation-ask">
                Can you recognize which experience this is?
              </p>
            </div>
            <div
              className="video-embed"
              data-reveal
              style={{ '--reveal-delay': '160ms' }}
            >
              <iframe
                ref={videoRef}
                src="https://www.youtube-nocookie.com/embed/LGfI17__R9A?autoplay=1&mute=1&playsinline=1&loop=1&playlist=LGfI17__R9A&rel=0&modestbranding=1&enablejsapi=1"
                title="A space for awakening"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
              <button
                type="button"
                className="sound-toggle"
                onClick={toggleSound}
                aria-pressed={!muted}
              >
                {muted ? 'Unmute' : 'Mute'}
              </button>
            </div>
            <span
              className="eyebrow"
              data-reveal
              style={{ '--reveal-delay': '120ms' }}
            >
              A space for awakening
            </span>
            <h1 data-reveal style={{ '--reveal-delay': '240ms' }}>
              What you are looking for <em>is already here.</em>
            </h1>
            <p
              className="lede"
              data-reveal
              style={{ '--reveal-delay': '380ms' }}
            >
              Not a path to walk for years. A single, direct encounter with a
              reality that already belongs to you.
            </p>
            <a
              href="#begin"
              className="scroll-cue"
              data-reveal
              style={{ '--reveal-delay': '520ms' }}
            >
              <span className="stroke" aria-hidden="true" />
              Read slowly
            </a>
          </div>
        </section>

        {/* ── The invitation ── */}
        <section id="begin">
          <div className="measure passage">
            <span className="eyebrow" data-reveal>
              No affiliation
            </span>
            <p
              data-reveal
              style={{ '--reveal-delay': '120ms', marginTop: '1.8rem' }}
            >
              This website is a space for spiritual exploration and reflection,
              free from any religious affiliation and with no intention of
              replacing anyone&rsquo;s beliefs, traditions, or personal
              convictions.
            </p>
            <p data-reveal style={{ '--reveal-delay': '180ms' }}>
              You will never be asked to abandon your religion, change your
              worldview, renounce your personality, or reshape your ego.
            </p>
            <Plate
              src="/awareness-three.webp"
              alt="Three faces in profile, dissolving into colour and light"
              width={900}
              height={504}
              caption="One awareness, many faces"
              delay="260ms"
            />
          </div>
        </section>

        {/* ── The disavowal ── */}
        <section>
          <div className="measure declaration">
            <p className="lead-line" data-reveal>
              I am neither a guru, nor a master, nor a teacher. I do not claim to
              possess a truth that must be transmitted, nor do I offer a learning
              path to which you must commit for <em>months or years.</em>
            </p>
          </div>
        </section>

        {/* ── The honest caveat ── */}
        <section>
          <div className="measure passage">
            <span className="eyebrow" data-reveal>
              An honest note
            </span>
            <p
              data-reveal
              style={{ '--reveal-delay': '120ms', marginTop: '1.8rem' }}
            >
              Your psychologist, coach, mentor, meditation teacher, therapist, or
              any other personal guide may not particularly appreciate this
              approach.
            </p>
            <p data-reveal style={{ '--reveal-delay': '180ms' }}>
              Not because it opposes their work, but because instead of leading
              you through a lengthy, complex, and sometimes challenging process, I
              offer the possibility of{' '}
              <strong>immediate liberation.</strong>
            </p>
          </div>
        </section>

        {/* ── Gradual vs. immediate ── */}
        <section>
          <div className="measure">
            <div className="contrast">
              <div className="col gradual" data-reveal>
                <h3>Many methods</h3>
                <p>
                  rely on gradual progress, sustained effort, and a destination
                  somewhere ahead of you.
                </p>
              </div>
              <div
                className="col immediate"
                data-reveal
                style={{ '--reveal-delay': '160ms' }}
              >
                <h3>Here, instead</h3>
                <p>
                  you discover, in a single session, what has always been present
                  within you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── What this is ── */}
        <section>
          <div className="measure passage">
            <span className="eyebrow" data-reveal>
              What this is
            </span>
            <p
              className="lead-line"
              data-reveal
              style={{ '--reveal-delay': '120ms', marginTop: '1.8rem' }}
            >
              No indoctrination. No belief system to adopt. No special effort
              required. Simply a direct encounter with a reality that no one can
              give you &mdash; because it already belongs to you.
            </p>
            <Plate
              src="/awareness-spectrum.webp"
              alt="A spectrum of profiles, the same awareness in shifting colour"
              width={643}
              height={360}
              caption="Already, and always, here"
              delay="220ms"
            />
          </div>
        </section>

        {/* ── Closing & breathing ── */}
        <section className="closing">
          <div className="measure">
            <p className="lead-line" data-reveal>
              What follows does not depend on me. It depends solely on{' '}
              <em>what you are willing to see.</em>
            </p>

            <div className="breath" data-reveal>
              <div className="orb">
                <div className="label" aria-hidden="true">
                  <span className="in">Breathe in</span>
                  <span className="out">Breathe out</span>
                </div>
              </div>
              <p className="seal">
                Before you read on, take one slow breath. There is nowhere else
                to arrive.
              </p>
            </div>
          </div>
        </section>

        {/* ── Reach out ── */}
        <WhatsAppReach note="If anything here speaks to you, you are welcome to reach out directly on WhatsApp. (GNT+7)" />
      </main>

      <footer className="foot">
        <Link to="/donate" className="foot-link">
          Support this work
        </Link>
        <span className="foot-note">
          A space for reflection &middot; no doctrine, no destination
        </span>
      </footer>
    </>
  )
}
