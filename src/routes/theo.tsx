import { createFileRoute } from '@tanstack/react-router'
import { WhatsAppReach } from '@/components/WhatsAppReach'

export const Route = createFileRoute('/theo')({
  component: Theo,
})

// The full letter, one paragraph per line — a single voice, read straight through.
const LETTER = [
  'Most people are taught to think of God as purely good. Yet when we open our eyes and observe the world around us, a more complete picture emerges.',
  'Every day, children die from hunger, disease, war, and violence. Entire ecosystems collapse. Forests disappear. Species become extinct. Human societies struggle with poverty, corruption, greed, loneliness, and conflict. These realities are not hidden. They are visible to anyone willing to look.',
  'If there is a creator behind existence, then that creator cannot be responsible only for sunsets, love, beauty, and joy. The same source must also stand behind earthquakes, suffering, decay, and death. To claim ownership of one side while denying the other is to divide reality into convenient fragments.',
  'For anything to exist, its opposite must also be possible.',
  'Light reveals darkness.',
  'Life implies death.',
  'Creation implies destruction.',
  'Order implies chaos.',
  'Without contrast, nothing can be experienced, recognized, or understood.',
  'A universe containing only good would be as impossible to perceive as a universe containing only light. Without darkness, light would have no meaning. Without silence, sound could not be recognized. Without emptiness, fullness would be invisible.',
  'Perhaps God is not a being standing outside reality, judging it from a distance. Perhaps what many call God is reality itself: the totality of existence and all its possibilities.',
  'This is what may be called Quantheo.',
  'Quantheo is not merely goodness. Quantheo is the fullness of potential.',
  'Quantheo is the infinite field from which all possibilities emerge.',
  'Every act of compassion and every act of cruelty.',
  'Every birth and every death.',
  'Every masterpiece and every catastrophe.',
  'Every saint and every tyrant.',
  'Every paradise and every hell.',
  'Quantheo contains one hundred percent of existence, not fifty percent. It excludes nothing.',
  'Our universe is not separate from this potential. It is the expression of it. Reality is what happens when possibility becomes experience.',
  'The most beautiful landscapes on Earth, the love between two people, the wonder of consciousness, the birth of a child, the discovery of truth—these are manifestations of that potential.',
  'So are war, famine, injustice, environmental destruction, and suffering.',
  'The universe appears to explore itself through every possibility.',
  'This idea is not a religion.',
  'It requires no faith, no rituals, no temples, no priests, and no conversion.',
  'No one is asked to abandon their existing religion, philosophy, or worldview.',
  'The invitation is simply to observe.',
  'Look at the world honestly.',
  'Look at nature, where life continuously creates and destroys itself.',
  'Look at human history, where extraordinary beauty and unimaginable horror exist side by side.',
  'Look within yourself, where love and fear, generosity and selfishness, wisdom and confusion can all arise from the same consciousness.',
  'The evidence is everywhere.',
  'A God that is only good explains only half of existence.',
  'Quantheo attempts to describe the whole.',
  'Quantheo is not static. Quantheo is dynamic.',
  'Not finished, but unfolding.',
  'Not complete, but becoming.',
  'Quantheo evolves through every star that forms, every civilization that rises and falls, every life that is lived, and every choice that is made.',
  'Quantheo is not separate from the universe.',
  'The universe is the living expression of Quantheo.',
  'And we are not spectators standing outside this process.',
  'We are part of it.',
  'Each of us is a temporary expression of the same infinite potential, exploring itself through a unique perspective.',
  'The question, then, is not whether existence is good or evil.',
  'The question is whether we are willing to see reality as it is: a vast and evolving balance of opposites, forever creating, forever transforming, forever becoming.',
  'This is Quantheo.',
]

function Theo() {
  return (
    <>
      <div className="atmosphere" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <main className="shell">
        {/* ── The letter: one size, one voice, even spacing ── */}
        <section className="letter-page">
          <div className="measure letter">
            {LETTER.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
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
