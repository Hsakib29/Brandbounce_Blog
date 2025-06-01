import cs from 'classnames'

import styles from './styles.module.css'

interface SocialShareButtonProps {
  platform: 'linkedin' | 'email' | 'website' | 'github'
  href: string
  ariaLabel: string
  icon: React.ReactNode
  fillColor?: string
}

export function SocialShareButton({
  platform,
  href,
  ariaLabel,
  icon,
  fillColor = '#70B7FD' // Default fallback color
}: SocialShareButtonProps) {
  const platformColors = {
    linkedin: '#0077b5',
    email: '#777777',
    website: '#4a90e2',
    github: '#c9510c'
  }

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={cs(styles.githubCorner, styles[platform])}
      aria-label={ariaLabel}
    >
      <svg
        width='80'
        height='80'
        viewBox='0 0 250 250'
        style={{
          fill: platformColors[platform] || fillColor,
          color: '#fff',
          position: 'absolute',
          zIndex: 1001,
          top: 0,
          right: 0,
          border: 0,
          transform: 'scale(1, 1)'
        }}
        aria-hidden='true'
      >
        <title>{ariaLabel}</title>
        <path d='M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z' />
        {icon}
      </svg>
    </a>
  )
}

// Example usage with Brandbounce links
export function BrandbounceShareButtons() {
  return (
    <>
      <SocialShareButton
        platform='website'
        href='https://brandbounce.app'
        ariaLabel='Visit Brandbounce Website'
        icon={
          <path
            d='M128,48 C162.66,48 192,77.34 192,112 C192,146.66 162.66,176 128,176 C93.34,176 64,146.66 64,112 C64,77.34 93.34,48 128,48 M128,0 C57.31,0 0,57.31 0,128 C0,198.69 57.31,256 128,256 C198.69,256 256,198.69 256,128 C256,57.31 198.69,0 128,0 Z M128,208 C75.02,208 32,164.98 32,112 C32,59.02 75.02,16 128,16 C180.98,16 224,59.02 224,112 C224,164.98 180.98,208 128,208 Z'
            fill='currentColor'
            className={styles.octoBody}
          />
        }
      />
      <SocialShareButton
        platform='email'
        href='mailto:info@brandbounce.app'
        ariaLabel='Email Brandbounce'
        icon={
          <path
            d='M128,48 C162.66,48 192,77.34 192,112 C192,146.66 162.66,176 128,176 C93.34,176 64,146.66 64,112 C64,77.34 93.34,48 128,48 M128,0 C57.31,0 0,57.31 0,128 C0,198.69 57.31,256 128,256 C198.69,256 256,198.69 256,128 C256,57.31 198.69,0 128,0 Z M128,208 C75.02,208 32,164.98 32,112 C32,59.02 75.02,16 128,16 C180.98,16 224,59.02 224,112 C224,164.98 180.98,208 128,208 Z'
            fill='currentColor'
            className={styles.octoBody}
          />
        }
      />
      <SocialShareButton
        platform='linkedin'
        href='https://www.linkedin.com/company/brandbounceuk'
        ariaLabel='Share on LinkedIn'
        icon={
          <path
            d='M128,48 C162.66,48 192,77.34 192,112 C192,146.66 162.66,176 128,176 C93.34,176 64,146.66 64,112 C64,77.34 93.34,48 128,48 M128,0 C57.31,0 0,57.31 0,128 C0,198.69 57.31,256 128,256 C198.69,256 256,198.69 256,128 C256,57.31 198.69,0 128,0 Z M128,208 C75.02,208 32,164.98 32,112 C32,59.02 75.02,16 128,16 C180.98,16 224,59.02 224,112 C224,164.98 180.98,208 128,208 Z'
            fill='currentColor'
            className={styles.octoBody}
          />
        }
      />
    </>
  )
}
