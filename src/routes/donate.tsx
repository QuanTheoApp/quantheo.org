import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { WhatsAppReach } from '@/components/WhatsAppReach'
import { Plate } from '@/components/Plate'

export const Route = createFileRoute('/donate')({
  component: Donate,
})

// Donation addresses. `network` is the label shown beneath each ticker;
// `qr` points to a pre-rendered SVG in /public/qr.
const WALLETS = [
  { ticker: 'ADA', name: 'Cardano', network: 'Cardano', qr: '/qr/ada.svg', address: 'addr1vyd8p38nlyxfn8d4ed5960vvgl9m90pjcpk7zf0s77mf07q3pms88' },
  { ticker: 'ALGO', name: 'Algorand', network: 'Algorand', qr: '/qr/algo.svg', address: 'DGRCBMNSLNRZHVVM5SRYLH2HMR5RGY2HYRXUQTJCPTSME7NPSLGQVKPZ4M' },
  { ticker: 'BTC', name: 'Bitcoin', network: 'Bitcoin', qr: '/qr/btc.svg', address: '141LrurxUFFQF9cLoVcCTHj23fFuKfgL3D' },
  { ticker: 'ETH', name: 'Ethereum', network: 'ERC20', qr: '/qr/eth.svg', address: '0x60a9cd3042d19ed08a496c66f832219a575f555d' },
  { ticker: 'SOL', name: 'Solana', network: 'Solana', qr: '/qr/sol.svg', address: 'HR1j7ZqdKLpNLj1QrUVhZnEXhiRCarrSQ4e4FkteJmzb' },
  { ticker: 'BNB', name: 'BNB', network: 'BEP20', qr: '/qr/bnb.svg', address: '0x60a9cd3042d19ed08a496c66f832219a575f555d' },
  { ticker: 'DOGE', name: 'Dogecoin', network: 'Dogecoin', qr: '/qr/doge.svg', address: 'DRHmU8WJiX4LPTXXkNWutjpgNtCwjpiq6F' },
  { ticker: 'TRX', name: 'TRON', network: 'ERC20', qr: '/qr/trx.svg', address: '0x60a9cd3042d19ed08a496c66f832219a575f555d' },
  { ticker: 'USDC', name: 'USD Coin', network: 'ERC20', qr: '/qr/usdc.svg', address: '0x60a9cd3042d19ed08a496c66f832219a575f555d' },
  { ticker: 'USDT', name: 'Tether', network: 'ERC20', qr: '/qr/usdt.svg', address: '0x60a9cd3042d19ed08a496c66f832219a575f555d' },
  { ticker: 'XRP', name: 'XRP', network: 'ERC20', qr: '/qr/xrp.svg', address: '0x60a9cd3042d19ed08a496c66f832219a575f555d' },
]

function Donate() {
  // Reveal sections as they enter the viewport — mirrors the home page.
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
            <span
              className="eyebrow"
              data-reveal
            >
              Support this work
            </span>
            <h1 data-reveal style={{ '--reveal-delay': '180ms' }}>
              The first session is <em>freely given.</em>
            </h1>
            <p
              className="lede"
              data-reveal
              style={{ '--reveal-delay': '320ms' }}
            >
              The first one-on-one video session is offered at no cost. A
              donation is warmly encouraged, never required &mdash; give only
              what feels right to you.
            </p>
            <Plate
              src="/awareness-heads.webp"
              alt="A gathering of faces in profile, one marked with an open eye"
              width={920}
              height={456}
              caption="A space held open for whoever comes"
              delay="420ms"
            />
          </div>
        </section>

        {/* ── Follow-up sessions ── */}
        <section>
          <div className="measure passage">
            <span className="eyebrow" data-reveal>
              If you wish to continue
            </span>
            <p
              data-reveal
              style={{ '--reveal-delay': '120ms', marginTop: '1.8rem' }}
            >
              Should you feel called to a follow-up session, it is offered at a
              fixed price of <strong>299 USD per session</strong>, lasting up to
              two hours.
            </p>
            <p data-reveal style={{ '--reveal-delay': '180ms' }}>
              There is no subscription, no package, and no obligation to return.
              Each meeting stands on its own.
            </p>
          </div>
        </section>

        {/* ── Crypto donations ── */}
        <section className="donate-section">
          <div className="measure">
            <span className="eyebrow" data-reveal>
              Ways to give
            </span>
            <p
              className="lead-line"
              data-reveal
              style={{ '--reveal-delay': '120ms', marginTop: '1.8rem' }}
            >
              Donations may be sent in any of the following currencies.
            </p>
          </div>

          <div className="wallet-grid measure-wide">
            {WALLETS.map((w, i) => (
              <WalletCard key={w.ticker} wallet={w} index={i} />
            ))}
          </div>
        </section>

        {/* ── Reach out ── */}
        <WhatsAppReach note="Questions before you give? You are welcome to reach out directly on WhatsApp. (GMT+7)" />
      </main>

      <footer className="foot">
        <Link to="/" className="foot-link">
          Return to the beginning
        </Link>
      </footer>
    </>
  )
}

function WalletCard({
  wallet,
  index,
}: {
  wallet: (typeof WALLETS)[number]
  index: number
}) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(wallet.address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard unavailable — the address remains visible to copy by hand.
    }
  }

  return (
    <article
      className="wallet"
      data-reveal
      style={{ '--reveal-delay': `${(index % 3) * 90}ms` }}
    >
      <header className="wallet-head">
        <span className="wallet-ticker">{wallet.ticker}</span>
        <span className="wallet-net">{wallet.network}</span>
      </header>
      <div className="wallet-qr">
        <img
          src={wallet.qr}
          alt={`${wallet.name} (${wallet.ticker}) donation address QR code`}
          width={150}
          height={150}
          loading="lazy"
        />
      </div>
      <span className="wallet-name">{wallet.name}</span>
      <code className="wallet-address">{wallet.address}</code>
      <button
        type="button"
        className="wallet-copy"
        onClick={copy}
        aria-label={`Copy ${wallet.ticker} address`}
      >
        {copied ? 'Copied' : 'Copy address'}
      </button>
    </article>
  )
}
