import { useLanguage } from '../contexts/LanguageContext'

/**
 * Секция контактов с контактной информацией
 */
const Contact = () => {
  const { t } = useLanguage()

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          {t('contact.title')}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-dark mx-auto mb-12 rounded"></div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="tel:+79100390546"
              className="card hover:shadow-lg transition-shadow text-center"
              aria-label={t('contact.phone')}
            >
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {t('contact.phone')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">+7 (910) 039-05-46</p>
            </a>

            <a
              href="mailto:smorodinma@yandex.ru"
              className="card hover:shadow-lg transition-shadow text-center"
              aria-label={t('contact.email')}
            >
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {t('contact.email')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">smorodinma@yandex.ru</p>
            </a>

            <a
              href="https://t.me/flashbangbtw"
              target="_blank"
              rel="noopener noreferrer"
              className="card hover:shadow-lg transition-shadow text-center"
              aria-label={t('contact.telegram')}
            >
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {t('contact.telegram')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">@flashbangbtw</p>
            </a>

            <a
              href="https://github.com/matveysmorodin"
              target="_blank"
              rel="noopener noreferrer"
              className="card hover:shadow-lg transition-shadow text-center"
              aria-label={t('contact.github')}
            >
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {t('contact.github')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">matveysmorodin</p>
            </a>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400">{t('contact.ready')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
