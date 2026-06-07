import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import { SiteNav } from '@/components/SiteNav'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'color-scheme', content: 'dark' },
      { name: 'theme-color', content: '#14100d' },
      { name: 'google-adsense-account', content: 'ca-pub-1146764090010119' },
      {
        name: 'description',
        content:
          'A space for spiritual exploration and reflection — free from religious affiliation, with no doctrine and no destination. An invitation to a direct, immediate encounter with what is already present within you.',
      },
      { title: 'Already Here — A Space for Awakening' },
      { property: 'og:title', content: 'Already Here — A Space for Awakening' },
      {
        property: 'og:description',
        content:
          'No guru, no belief system, no path to walk for years. Simply a direct encounter with a reality that already belongs to you.',
      },
      { property: 'og:type', content: 'website' },
    ],
    scripts: [
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1146764090010119',
        async: true,
        crossOrigin: 'anonymous',
      },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,300&family=Newsreader:ital,opsz,wght@0,6..72,340;0,6..72,500;1,6..72,340&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <meta name="google-site-verification" content="yiNL1VW0gbAHwQDnc4CWW6FyHbqV9Qg3VmHddKnegv0" />
      </head>
      <body>
        <SiteNav />
        {children}
        <Scripts />
      </body>
    </html>
  )
}
