import { Helmet } from 'react-helmet-async'
import { profile } from '../data/profile'

export function Seo({ title, description }) {
  const pageTitle = title ? `${title} | ${profile.name}` : `${profile.name} | Portfolio`
  const metaDescription = description || profile.summary

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.tagline,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    url: typeof window !== 'undefined' ? window.location.origin : '',
    sameAs: profile.socials.map((item) => item.url),
  }

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
