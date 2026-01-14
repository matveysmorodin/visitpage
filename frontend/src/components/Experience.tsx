import { useLanguage } from '../contexts/LanguageContext'

/**
 * Секция опыта работы / учебных проектов с timeline
 */
const Experience = () => {
  const { t } = useLanguage()

  const experiences = [
    {
      periodKey: 'experience.period1',
      roleKey: 'experience.role1',
      descriptionKey: 'experience.desc1',
      technologies: ['Python', 'SQL Server', 'Git'],
    },

  ]

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          {t('experience.title')}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-dark mx-auto mb-12 rounded"></div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-8 h-8 bg-accent rounded-full border-4 border-white dark:border-gray-900 shadow-md"></div>

                  <div className="card">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {t(exp.roleKey)}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1 sm:mt-0">
                        {t(exp.periodKey)}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{t(exp.descriptionKey)}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
