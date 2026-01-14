import { useLanguage } from '../contexts/LanguageContext'

/**
 * Футер с дополнительной информацией и ссылками
 */
const Footer = () => {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 dark:text-gray-400 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white dark:text-gray-100 font-bold text-lg mb-4">
              Матвей Смородин
            </h3>
            <p className="text-sm">Backend-разработчик</p>
            <p className="text-sm mt-2">{t('footer.tagline')}</p>
          </div>

          <div>
            <h3 className="text-white dark:text-gray-100 font-semibold mb-4">
              {t('footer.links')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-accent-light transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-accent-light transition-colors">
                  {t('nav.skills')}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent-light transition-colors">
                  {t('nav.projects')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent-light transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white dark:text-gray-100 font-semibold mb-4">
              {t('footer.contacts')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:smorodinma@yandex.ru"
                  className="hover:text-accent-light transition-colors"
                >
                  smorodinma@yandex.ru
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/matveysmorodin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-light transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/flashbangbtw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-light transition-colors"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-800 pt-8 text-center text-sm">
          <p>
            © {currentYear} Матвей Смородин. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
