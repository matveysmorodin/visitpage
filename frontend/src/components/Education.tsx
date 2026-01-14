import { useLanguage } from '../contexts/LanguageContext'

/**
 * Секция образования
 */
const Education = () => {
  const { t } = useLanguage()

  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          {t('education.title')}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-dark mx-auto mb-12 rounded"></div>

        <div className="max-w-3xl mx-auto">
          <div className="card">
            <div className="flex items-start gap-6">
              <div className="text-4xl">🎓</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {t('education.university')}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                  {t('education.faculty')}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('education.specialty')}
                </p>
                <span className="inline-block px-4 py-2 bg-accent-light/10 dark:bg-accent-light/20 text-accent rounded-full text-sm font-medium">
                  {t('education.period')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
