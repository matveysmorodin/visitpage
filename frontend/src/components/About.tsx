import { useLanguage } from '../contexts/LanguageContext'

/**
 * Секция "О себе" с кратким описанием профессионального опыта
 */
const About = () => {
  const { t } = useLanguage()

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            {t('about.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-dark mx-auto mb-12 rounded"></div>

          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-4">
            <p>
              {t('about.text1')}{' '}
              <strong className="text-gray-900 dark:text-white">C#</strong> и{' '}
              <strong className="text-gray-900 dark:text-white">ASP.NET Core</strong>. {t('about.text3')}{' '}
              <strong className="text-gray-900 dark:text-white">Python (Django/FastAPI)</strong>.
            </p>
            <p>
              {t('about.text4')} <strong className="text-gray-900 dark:text-white">SQL Server</strong>,{' '}
              {t('about.text5')} <strong className="text-gray-900 dark:text-white">REST API</strong>,{' '}
              {t('about.text6')} <strong className="text-gray-900 dark:text-white">Git</strong>.
            </p>
            <p>{t('about.text7')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
