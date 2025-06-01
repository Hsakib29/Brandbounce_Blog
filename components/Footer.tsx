import { FaEnvelopeOpenText } from '@react-icons/all-files/fa/FaEnvelopeOpenText'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaGlobe } from '@react-icons/all-files/fa/FaGlobe'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaMastodon } from '@react-icons/all-files/fa/FaMastodon'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube'
import { FaZhihu } from '@react-icons/all-files/fa/FaZhihu'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
import * as React from 'react'

import * as config from '@/lib/config'
import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './styles.module.css'

export function FooterImpl() {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  const currentYear = new Date().getFullYear()

  const onToggleDarkMode = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>© {currentYear} Brandbounce</div>

      <div className={styles.settings}>
        {hasMounted && (
          <a
            className={`${styles.toggleDarkMode} ${styles.iconFadeIn}`}
            href='#'
            role='button'
            onClick={onToggleDarkMode}
            title='Toggle dark mode'
            aria-label='Toggle dark mode'
          >
            {isDarkMode ? (
              <IoMoonSharp aria-hidden='true' />
            ) : (
              <IoSunnyOutline aria-hidden='true' />
            )}
          </a>
        )}
      </div>

      <div className={styles.social}>
        {config.twitter && (
          <a
            className={`${styles.twitter} ${styles.iconFadeIn}`}
            href={`https://twitter.com/${config.twitter}`}
            title={`Twitter @${config.twitter}`}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`Twitter @${config.twitter}`}
          >
            <FaTwitter aria-hidden='true' />
          </a>
        )}

        {config.mastodon && (
          <a
            className={`${styles.mastodon} ${styles.iconFadeIn}`}
            href={config.mastodon}
            title={`Mastodon ${config.getMastodonHandle()}`}
            target='_blank'
            rel='me noreferrer'
            aria-label={`Mastodon ${config.getMastodonHandle()}`}
          >
            <FaMastodon aria-hidden='true' />
          </a>
        )}

        {config.zhihu && (
          <a
            className={`${styles.zhihu} ${styles.iconFadeIn}`}
            href={`https://zhihu.com/people/${config.zhihu}`}
            title={`Zhihu @${config.zhihu}`}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`Zhihu @${config.zhihu}`}
          >
            <FaZhihu aria-hidden='true' />
          </a>
        )}

        {config.github && (
          <a
            className={`${styles.github} ${styles.iconFadeIn}`}
            href={`https://github.com/${config.github}`}
            title={`GitHub @${config.github}`}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`GitHub @${config.github}`}
          >
            <FaGithub aria-hidden='true' />
          </a>
        )}

        <a
          className={`${styles.linkedin} ${styles.iconFadeIn}`}
          href='https://www.linkedin.com/company/brandbounceuk'
          title='LinkedIn Brandbounce'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn Brandbounce'
        >
          <FaLinkedin aria-hidden='true' />
        </a>

        <a
          className={`${styles.email} ${styles.iconFadeIn}`}
          href='mailto:info@brandbounce.app'
          title='Email Brandbounce'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Email Brandbounce'
        >
          <FaEnvelopeOpenText aria-hidden='true' />
        </a>

        <a
          className={`${styles.website} ${styles.iconFadeIn}`}
          href='https://brandbounce.app'
          title='Brandbounce Website'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Brandbounce Website'
        >
          <FaGlobe aria-hidden='true' />
        </a>

        {config.youtube && (
          <a
            className={`${styles.youtube} ${styles.iconFadeIn}`}
            href={`https://www.youtube.com/${config.youtube}`}
            title={`YouTube ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`YouTube ${config.author}`}
          >
            <FaYoutube aria-hidden='true' />
          </a>
        )}
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
