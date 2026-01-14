import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'ru' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Переводы
const translations = {
  ru: {
    // Header
    'nav.about': 'О себе',
    'nav.skills': 'Навыки',
    'nav.experience': 'Опыт',
    'nav.projects': 'Проекты',
    'nav.contact': 'Контакты',
    'nav.skip': 'Перейти к основному содержимому',
    
    // Hero
    'hero.badge': 'Backend-разработчик',
    'hero.title': 'Привет, я',
    'hero.name': 'Смородин Матвей',
    'hero.subtitle': 'Backend-разработчик',
    'hero.tagline': 'Начинающий backend-разработчик. C# / ASP.NET Core, Python (Django/FastAPI), работа с БД',
    'hero.downloadCV': 'Скачать CV (PDF)',
    'hero.contact': 'Связаться',
    'hero.viewProjects': 'Посмотреть проекты',
    
    // About
    'about.title': 'О себе',
    'about.text1': 'Начинающий backend-разработчик с опытом разработки веб-приложений на',
    'about.text2': 'и',
    'about.text3': 'Обучаюсь на данный момент backend-разработке на',
    'about.text4': 'Имею базовые знания работы с базой данных',
    'about.text5': 'понимаю принципы',
    'about.text6': 'архитектуры клиент-серверных приложений. Участвовал в учебных и пет-проектах, умею работать с системой контроля версий',
    'about.text7': 'Стремлюсь развиваться в области серверной разработки, учусь писать чистый и поддерживаемый код, заинтересован в получении коммерческого опыта и работе в команде с опытными разработчиками. Быстро обучаюсь, ответственно подхожу к поставленным задачам.',
    
    // Skills
    'skills.title': 'Навыки',
    'skills.languages': 'Языки программирования',
    'skills.frameworks': 'Фреймворки',
    'skills.databases': 'Базы данных',
    'skills.orm': 'ORM',
    'skills.auth': 'Аутентификация/Авторизация',
    'skills.principles': 'Принципы разработки',
    'skills.tools': 'Инструменты',
    'skills.web': 'Веб-технологии',
    'skills.webNote': 'Базовый уровень frontend',
    'skills.learning': 'В процессе изучения',
    
    // Experience
    'experience.title': 'Опыт / Учебные проекты',
    'experience.role1': 'Участие в учебных и pet-проектах',
    'experience.period1': '2023 - настоящее время',
    'experience.desc1': 'Разработка веб-приложений на ASP.NET Core, работа с REST API, базами данных. Участие в командных проектах через Git.',
    
    // Education
    'education.title': 'Образование',
    'education.university': 'Московский политехнический университет',
    'education.faculty': 'Факультет информационных технологий',
    'education.specialty': 'Специальность: "Автоматизированные системы обработки информации и управления"',
    'education.period': '2023 — настоящее время',
    
    // Projects
    'projects.title': 'Проекты',
    'projects.more': 'Больше проектов и примеров кода вы можете найти в моем',
    'projects.repo': 'GitHub репозитории',
    'projects.note': 'Примечание: Замените ссылки на репозитории на реальные в файле',
    'projects.repoLink': 'Репозиторий',
    'projects.demo': 'Демо',
    
    // Contact
    'contact.title': 'Контакты',
    'contact.phone': 'Телефон',
    'contact.email': 'Email',
    'contact.telegram': 'Telegram',
    'contact.github': 'GitHub',
    'contact.ready': 'Готов к обсуждению проектов и возможностей сотрудничества',
    
    // Footer
    'footer.tagline': 'Создаю качественные веб-приложения',
    'footer.links': 'Быстрые ссылки',
    'footer.contacts': 'Контакты',
    'footer.copyright': 'Все права защищены. | Сделано с React, TypeScript и Tailwind CSS',
    
    // Skills categories
    'skills.cat.languages': 'Языки программирования',
    'skills.cat.frameworks': 'Фреймворки',
    'skills.cat.databases': 'Базы данных',
    'skills.cat.orm': 'ORM',
    'skills.cat.auth': 'Аутентификация/Авторизация',
    'skills.cat.principles': 'Принципы разработки',
    'skills.cat.tools': 'Инструменты',
    'skills.cat.web': 'Веб-технологии',
    
    // Projects
    'projects.arch': 'Архитектура',
    'projects.contrib': 'Вклад',
    'projects.cicd': 'CI/CD',
  },
  en: {
    // Header
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.skip': 'Skip to main content',
    
    // Hero
    'hero.badge': 'Backend Developer',
    'hero.title': 'Hi, I\'m',
    'hero.name': 'Matvey Smorodin',
    'hero.subtitle': 'Backend Developer',
    'hero.tagline': 'Junior backend developer. C# / ASP.NET Core, Python (Django/FastAPI), database work',
    'hero.downloadCV': 'Download CV (PDF)',
    'hero.contact': 'Contact',
    'hero.viewProjects': 'View Projects',
    
    // About
    'about.title': 'About Me',
    'about.text1': 'Junior backend developer with experience in web application development using',
    'about.text2': 'and',
    'about.text3': 'Currently learning backend development with',
    'about.text4': 'I have basic knowledge of working with',
    'about.text5': 'understand the principles of',
    'about.text6': 'client-server application architecture. Participated in educational and pet projects, able to work with version control system',
    'about.text7': 'I strive to develop in the field of server-side development, learn to write clean and maintainable code, interested in gaining commercial experience and working in a team with experienced developers. I learn quickly and approach assigned tasks responsibly.',
    
    // Skills
    'skills.title': 'Skills',
    'skills.languages': 'Programming Languages',
    'skills.frameworks': 'Frameworks',
    'skills.databases': 'Databases',
    'skills.orm': 'ORM',
    'skills.auth': 'Authentication/Authorization',
    'skills.principles': 'Development Principles',
    'skills.tools': 'Tools',
    'skills.web': 'Web Technologies',
    'skills.webNote': 'Basic frontend level',
    'skills.learning': 'Currently Learning',
    
    // Experience
    'experience.title': 'Experience / Educational Projects',
    'experience.role1': 'Participation in educational and pet projects',
    'experience.period1': '2023 - present',
    'experience.desc1': 'Development of web applications on ASP.NET Core, work with REST API, databases. Participation in team projects through Git.',
    
    // Education
    'education.title': 'Education',
    'education.university': 'Moscow Polytechnic University',
    'education.faculty': 'Faculty of Information Technology',
    'education.specialty': 'Specialty: "Automated Information Processing and Control Systems"',
    'education.period': '2023 — present',
    
    // Projects
    'projects.title': 'Projects',
    'projects.more': 'More projects and code examples can be found in my',
    'projects.repo': 'GitHub repository',
    'projects.note': 'Note: Replace repository links with real ones in file',
    'projects.repoLink': 'Repository',
    'projects.demo': 'Demo',
    
    // Contact
    'contact.title': 'Contact',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.telegram': 'Telegram',
    'contact.github': 'GitHub',
    'contact.ready': 'Ready to discuss projects and collaboration opportunities',
    
    // Footer
    'footer.tagline': 'Creating quality web applications',
    'footer.links': 'Quick Links',
    'footer.contacts': 'Contacts',
    'footer.copyright': 'All rights reserved. | Made with React, TypeScript and Tailwind CSS',
    
    // Skills categories
    'skills.cat.languages': 'Programming Languages',
    'skills.cat.frameworks': 'Frameworks',
    'skills.cat.databases': 'Databases',
    'skills.cat.orm': 'ORM',
    'skills.cat.auth': 'Authentication/Authorization',
    'skills.cat.principles': 'Development Principles',
    'skills.cat.tools': 'Tools',
    'skills.cat.web': 'Web Technologies',
    
    // Projects
    'projects.arch': 'Architecture',
    'projects.contrib': 'Contributions',
    'projects.cicd': 'CI/CD',
  },
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language
    return saved || 'ru'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ru] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

