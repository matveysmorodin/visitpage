import { useLanguage } from '../contexts/LanguageContext'

/**
 * Главная секция портфолио с приветствием и основными CTA
 */
const Hero = () => {
  const { t } = useLanguage()

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/cv.pdf'
    link.download = 'Смородин_Матвей_CV.pdf'
    link.click()
  }

  const handleContact = () => {
    const subject = t('hero.contact')
    window.location.href = `mailto:smorodinma@yandex.ru?subject=${encodeURIComponent(subject)}`
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center section-padding pt-24 bg-white dark:bg-gray-900"
    >
      <div className="container-custom text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-block px-4 py-2 bg-accent-light/10 dark:bg-accent-light/20 text-accent rounded-full text-sm font-medium mb-4">
            {t('hero.badge')}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            {t('hero.title')}{' '}
            <span className="gradient-text">{t('hero.name')}</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium">
            {t('hero.subtitle')}
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            {t('hero.tagline')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={handleDownloadCV}
              className="btn-primary w-full sm:w-auto"
              aria-label={t('hero.downloadCV')}
            >
              {t('hero.downloadCV')}
            </button>
            <button
              onClick={handleContact}
              className="btn-secondary w-full sm:w-auto dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              aria-label={t('hero.contact')}
            >
              {t('hero.contact')}
            </button>
            <a
              href="#projects"
              className="btn-secondary w-full sm:w-auto text-center dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              aria-label={t('hero.viewProjects')}
            >
              {t('hero.viewProjects')}
            </a>
          </div>

          {/* Контакты в Hero */}
          <div className="pt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <a
              href="tel:+79100390546"
              className="hover:text-accent transition-colors"
              aria-label={t('contact.phone')}
            >
              📞 +7 (910) 039-05-46
            </a>
            <a
              href="mailto:smorodinma@yandex.ru"
              className="hover:text-accent transition-colors"
              aria-label={t('contact.email')}
            >
              ✉️ smorodinma@yandex.ru
            </a>
            <a
              href="https://t.me/flashbangbtw"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label={t('contact.telegram')}
            >
              💬 @flashbangbtw
            </a>
            <a
              href="https://github.com/matveysmorodin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label={t('contact.github')}
            >
              💻 GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
