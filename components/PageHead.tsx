import Head from 'next/head'

import type * as types from '@/lib/types'
import * as config from '@/lib/config'
import { getSocialImageUrl } from '@/lib/get-social-image-url'

export function PageHead({
  site,
  title,
  description,
  pageId,
  image,
  url
}: types.PageProps & {
  title?: string
  description?: string
  image?: string
  url?: string
}) {
  const rssFeedUrl = `${config.host}/feed`
  const brandbounceName = 'Brandbounce'
  const brandbounceDescription =
    description ??
    'Brandbounce: Empowering brands with innovative marketing solutions.'

  title = title ?? brandbounceName
  description = brandbounceDescription

  const socialImageUrl =
    getSocialImageUrl(pageId) || image || 'https://brandbounce.app/og-image.jpg'

  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover'
      />

      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='black' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link rel='icon' type='image/png' href='/favicon.png' />
      <link rel='manifest' href='/site.webmanifest' />

      <meta
        name='theme-color'
        media='(prefers-color-scheme: light)'
        content='#ffffff'
        key='theme-color-light'
      />
      <meta
        name='theme-color'
        media='(prefers-color-scheme: dark)'
        content='#1a2b3c'
        key='theme-color-dark'
      />

      <meta name='robots' content='index,follow' />
      <meta
        name='keywords'
        content='Brandbounce, marketing, branding, digital agency, UK'
      />
      <meta name='author' content='Brandbounce' />
      <meta property='og:type' content='website' />
      <meta property='og:locale' content='en_GB' />

      <link rel='preconnect' href='https://www.linkedin.com' />
      {socialImageUrl && (
        <link rel='preconnect' href={new URL(socialImageUrl).origin} />
      )}

      {site && (
        <>
          <meta property='og:site_name' content={brandbounceName} />
          <meta property='twitter:domain' content='brandbounce.app' />
        </>
      )}

      {config.twitter && (
        <meta name='twitter:creator' content={`@${config.twitter}`} />
      )}

      {description && (
        <>
          <meta name='description' content={description} />
          <meta property='og:description' content={description} />
          <meta name='twitter:description' content={description} />
        </>
      )}

      {socialImageUrl ? (
        <>
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:image' content={socialImageUrl} />
          <meta property='og:image' content={socialImageUrl} />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='627' />
        </>
      ) : (
        <meta name='twitter:card' content='summary' />
      )}

      {url && (
        <>
          <link rel='canonical' href={url} />
          <meta property='og:url' content={url} />
          <meta property='twitter:url' content={url} />
        </>
      )}

      <link
        rel='alternate'
        type='application/rss+xml'
        href={rssFeedUrl}
        title={brandbounceName}
      />

      <meta property='og:title' content={title} />
      <meta name='twitter:title' content={title} />
      <title>{title}</title>

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Brandbounce',
            url: 'https://brandbounce.app',
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'info@brandbounce.app',
              contactType: 'Customer Service'
            },
            sameAs: ['https://www.linkedin.com/company/brandbounceuk']
          })
        }}
      />
    </Head>
  )
}
