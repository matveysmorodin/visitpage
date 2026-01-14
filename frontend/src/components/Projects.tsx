import { useLanguage } from '../contexts/LanguageContext'

/**
 * Секция проектов с карточками и ссылками на репозитории
 */
const Projects = () => {
  const { t, language } = useLanguage()

  const projects = [
    {
      title: {
        ru: 'Решение задач с LeetCode',
        en: 'LeetCode solve tasks',
      },
      description: {
        ru: 'Решение задач на Leetcode с попыткой поика оптимального решения, путем примненения различных алгоритмов',
        en: 'Solving Leetcode problems by trying to find the optimal solution using various algorithms',
      },
      stack: ['Python'],
      repo: 'https://github.com/matveysmorodin/Leetcode-task',
      demo: null,
      architecture: {
        ru: 'Алгоритмический подход к решению задач, модульная архитектура, разделение ответственности, тестируемый код',
        en: 'Algorithmic problem-solving, modular Python architecture, separation of concerns, testable design',
      },
      contributions: {
        ru: 'Проектирование модульной архитектуры репозитория, реализация алгоритмических решений с анализом сложности, переиспользуемые структуры данных и unit-тесты',
        en: 'Modular repository design, algorithmic solutions with complexity analysis, reusable data structures and unit tests',
      },
      cicd: {
        ru: 'CI-пайплайн на GitHub Actions: автоматическая проверка стиля (PEP8), форматирования и корректности решений через тесты',
        en: 'GitHub Actions CI pipeline: automated PEP8 linting, formatting validation, and solution correctness via tests',
      },
    },

    {
      title: {
        ru: 'Python FastAPI Microservice',
        en: 'Python FastAPI Microservice',
      },
      description: {
        ru: 'Микросервис на Python FastAPI для обработки данных. Асинхронная обработка запросов, интеграция с внешними API, логирование и мониторинг.',
        en: 'Data processing microservice built with Python FastAPI. Asynchronous request handling, integration with external APIs, logging and monitoring.',
      },
      stack: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Docker'],
      repo: 'https://github.com/matveysmorodin/notes-microservices',
      demo: null,
      architecture: {
        ru: 'Microservices, Async/Await',
        en: 'Microservices, Async/Await',
      },
      contributions: {
        ru: 'Разработка API endpoints, работа с асинхронными операциями, настройка Docker',
        en: 'API endpoints development, async operations, Docker setup',
      },
      cicd: {
        ru: 'Docker Compose для локальной разработки, автоматическое тестирование',
        en: 'Docker Compose for local development, automated testing',
      },
    },
  ]

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          {t('projects.title')}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-dark mx-auto mb-12 rounded"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {project.title[language]}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description[language]}
              </p>

              <div className="mb-4 space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>{t('projects.arch')}:</strong> {project.architecture[language]}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>{t('projects.contrib')}:</strong> {project.contributions[language]}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>{t('projects.cicd')}:</strong> {project.cicd[language]}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-accent-light/10 dark:bg-accent-light/20 text-accent rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-dark font-medium flex items-center gap-2 transition-colors"
                  aria-label={`${t('projects.repoLink')} ${project.title[language]}`}
                >
                  <span>📦 {t('projects.repoLink')}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-dark font-medium flex items-center gap-2 transition-colors"
                    aria-label={`${t('projects.demo')} ${project.title[language]}`}
                  >
                    <span>🚀 {t('projects.demo')}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {t('projects.more')}{' '}
            <a
              href="https://github.com/matveysmorodin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-dark font-medium underline"
            >
              {t('projects.repo')}
            </a>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 italic">
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projects
