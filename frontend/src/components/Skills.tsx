import { useLanguage } from '../contexts/LanguageContext'

/**
 * Секция навыков с визуализацией через skill chips
 */
const Skills = () => {
  const { t } = useLanguage()

  const skillCategories = [
    {
      titleKey: 'skills.cat.languages',
      skills: ['C#', 'Python'],
      icon: '💻',
    },
    {
      titleKey: 'skills.cat.frameworks',
      skills: ['ASP.NET Core (MVC, Web API)', 'Django', 'FastAPI'],
      icon: '⚙️',
    },
    {
      titleKey: 'skills.cat.databases',
      skills: ['SQL Server', 'MySQL', 'Проектирование БД (через ORM)', 'SQL'],
      icon: '🗄️',
    },
    {
      titleKey: 'skills.cat.orm',
      skills: ['Entity Framework Core'],
      icon: '🔗',
    },
    {
      titleKey: 'skills.cat.auth',
      skills: ['ASP.NET Identity', 'JWT'],
      icon: '🔐',
    },
    {
      titleKey: 'skills.cat.principles',
      skills: ['MVC', 'Основы SOLID', 'Архитектура клиент-сервер'],
      icon: '📐',
    },
    {
      titleKey: 'skills.cat.tools',
      skills: ['Git (GitHub)', 'Postman', 'Swagger'],
      icon: '🛠️',
    },
    {
      titleKey: 'skills.cat.web',
      skills: ['HTML', 'CSS', 'TypeScript', 'React', 'React Bootstrap'],
      noteKey: 'skills.webNote',
      icon: '🌐',
    },
  ]

  const learningSkills = ['Golang']

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          {t('skills.title')}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-dark mx-auto mb-12 rounded"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <div className="text-3xl mb-3">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t(category.titleKey)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-accent-light/10 dark:hover:bg-accent-light/20 hover:text-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              {category.noteKey && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 italic">
                  {t(category.noteKey)}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* В процессе изучения */}
        <div className="max-w-2xl mx-auto card bg-accent-light/5 dark:bg-accent-light/10 border-accent-light/20 dark:border-accent-light/30">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span>📚</span> {t('skills.learning')}
          </h3>
          <div className="flex flex-wrap gap-2">
            {learningSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-accent text-white rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
