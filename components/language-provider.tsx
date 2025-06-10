import type React from "react"
'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "fr" | "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  fr: {
    // Navigation
    "nav.about": "À propos",
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.contact": "Contact",
    "nav.downloadCV": "Télécharger CV",

    // About Section
    "about.greeting": "Salut, je suis",
    "about.title": "Étudiant Développeur & Passionné d'IA",
    "about.description":
      "Je suis Abdelaziz, étudiant à l'Université de Blida en Informatique (ISIL). Passionné par l'IA (RAG, GPT, embeddings), la cybersécurité, et les solutions web concrètes. J'ai réalisé des projets IA juridiques, de voyage, et des sites full-stack avec dashboard sécurisé.",
    "about.education": "Université Saad Dahlab Blida 1",
    "about.specialties": "Spécialités",

    // Projects Section
    "projects.title": "Mes Projets",
    "projects.subtitle": "Découvrez mes réalisations en IA, développement web et cybersécurité",
    "projects.keyFeatures": "Fonctionnalités clés",
    "projects.liveDemo": "Démo Live",
    "projects.code": "Code",
    "projects.viewMore": "Voir plus sur GitHub",

    // Legal Assistant Project
    "projects.legal.title": "Assistant Juridique Algérien",
    "projects.legal.description": "Chatbot IA spécialisé dans le droit algérien",
    "projects.legal.longDescription":
      "Premier assistant juridique algérien alimenté par GPT-4o avec RAG et base vectorielle pour des réponses précises sur la législation algérienne.",
    "projects.legal.feature1": "Interface multilingue (FR/AR/EN)",
    "projects.legal.feature2": "Base de données vectorielle avec pgvector",
    "projects.legal.feature3": "Recherche sémantique avancée",
    "projects.legal.feature4": "Authentification sécurisée",

    // Travel Project
    "projects.travel.title": "WanderAI - Bot de Voyage",
    "projects.travel.description": "Recommandations de voyage personnalisées par IA",
    "projects.travel.longDescription":
      "Chatbot intelligent qui analyse vos préférences pour suggérer des destinations, itinéraires et activités personnalisés.",
    "projects.travel.feature1": "Recommandations personnalisées",
    "projects.travel.feature2": "Planification d'itinéraires",
    "projects.travel.feature3": "Intégration APIs voyage",
    "projects.travel.feature4": "Chat en temps réel",

    // Dentist Project
    "projects.dentist.title": "Application Dentiste",
    "projects.dentist.description": "Système de gestion de rendez-vous dentaires",
    "projects.dentist.longDescription":
      "Application web complète pour la gestion des rendez-vous dentaires avec authentification, dashboard admin et interface patient.",
    "projects.dentist.feature1": "Système de réservation",
    "projects.dentist.feature2": "Dashboard administrateur",
    "projects.dentist.feature3": "Gestion des patients",
    "projects.dentist.feature4": "Notifications automatiques",

    // Skills Section
    "skills.title": "Mes Compétences",
    "skills.subtitle": "Technologies et outils que je maîtrise pour créer des solutions innovantes",
    "skills.ai.title": "IA & Machine Learning",
    "skills.frontend.title": "Frontend & UI/UX",
    "skills.backend.title": "Backend & API",
    "skills.database.title": "Bases de Données",
    "skills.security.title": "Cybersécurité",
    "skills.tools.title": "Outils & DevOps",
    "skills.languages": "Langues",
    "skills.certifications": "Certifications & Formations",
    "skills.certificationsDesc": "Google Cloud, University of Michigan, Johns Hopkins et plus encore",

    // Contact Section
    "contact.title": "Contactez-moi",
    "contact.subtitle": "Discutons de vos projets et collaborations",
    "contact.getInTouch": "Restons en contact",
    "contact.description":
      "Je suis toujours ouvert aux nouvelles opportunités, collaborations et discussions techniques. N'hésitez pas à me contacter !",
    "contact.quickResponse": "Réponse rapide garantie",
    "contact.responseTime": "Je réponds généralement dans les 24h",
    "contact.sendMessage": "Envoyer un message",
    "contact.form.name": "Nom complet",
    "contact.form.namePlaceholder": "Votre nom",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "votre.email@exemple.com",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Décrivez votre projet ou votre demande...",
    "contact.form.send": "Envoyer le message",
    "contact.form.sending": "Envoi en cours...",
    "contact.form.success": "Message envoyé avec succès !",
    "contact.form.error": "Erreur lors de l'envoi. Réessayez.",

    // Footer
    "footer.description": "Étudiant développeur passionné par l'IA et les technologies web modernes.",
    "footer.quickLinks": "Liens rapides",
    "footer.connect": "Me suivre",
    "footer.rights": "Tous droits réservés.",
    "footer.madeWith": "Fait avec",
    "footer.nextjs": "et Next.js",
  },
  en: {
    // Navigation
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "nav.downloadCV": "Download CV",

    // About Section
    "about.greeting": "Hi, I'm",
    "about.title": "Student Developer & AI Enthusiast",
    "about.description":
      "I'm Abdelaziz, a Computer Science student at University of Blida (ISIL track). Passionate about AI (RAG, GPT, embeddings), cybersecurity, and concrete web solutions. I've built legal AI projects, travel apps, and full-stack websites with secure dashboards.",
    "about.education": "University Saad Dahlab Blida 1",
    "about.specialties": "Specialties",

    // Projects Section
    "projects.title": "My Projects",
    "projects.subtitle": "Discover my achievements in AI, web development and cybersecurity",
    "projects.keyFeatures": "Key Features",
    "projects.liveDemo": "Live Demo",
    "projects.code": "Code",
    "projects.viewMore": "View More on GitHub",

    // Legal Assistant Project
    "projects.legal.title": "Algerian Legal Assistant",
    "projects.legal.description": "AI chatbot specialized in Algerian law",
    "projects.legal.longDescription":
      "First Algerian legal assistant powered by GPT-4o with RAG and vector database for accurate responses on Algerian legislation.",
    "projects.legal.feature1": "Multilingual interface (FR/AR/EN)",
    "projects.legal.feature2": "Vector database with pgvector",
    "projects.legal.feature3": "Advanced semantic search",
    "projects.legal.feature4": "Secure authentication",

    // Travel Project
    "projects.travel.title": "WanderAI - Travel Bot",
    "projects.travel.description": "AI-powered personalized travel recommendations",
    "projects.travel.longDescription":
      "Intelligent chatbot that analyzes your preferences to suggest personalized destinations, itineraries and activities.",
    "projects.travel.feature1": "Personalized recommendations",
    "projects.travel.feature2": "Itinerary planning",
    "projects.travel.feature3": "Travel APIs integration",
    "projects.travel.feature4": "Real-time chat",

    // Dentist Project
    "projects.dentist.title": "Dentist Application",
    "projects.dentist.description": "Dental appointment management system",
    "projects.dentist.longDescription":
      "Complete web application for dental appointment management with authentication, admin dashboard and patient interface.",
    "projects.dentist.feature1": "Booking system",
    "projects.dentist.feature2": "Admin dashboard",
    "projects.dentist.feature3": "Patient management",
    "projects.dentist.feature4": "Automatic notifications",

    // Skills Section
    "skills.title": "My Skills",
    "skills.subtitle": "Technologies and tools I master to create innovative solutions",
    "skills.ai.title": "AI & Machine Learning",
    "skills.frontend.title": "Frontend & UI/UX",
    "skills.backend.title": "Backend & API",
    "skills.database.title": "Databases",
    "skills.security.title": "Cybersecurity",
    "skills.tools.title": "Tools & DevOps",
    "skills.languages": "Languages",
    "skills.certifications": "Certifications & Training",
    "skills.certificationsDesc": "Google Cloud, University of Michigan, Johns Hopkins and more",

    // Contact Section
    "contact.title": "Contact Me",
    "contact.subtitle": "Let's discuss your projects and collaborations",
    "contact.getInTouch": "Get In Touch",
    "contact.description":
      "I'm always open to new opportunities, collaborations and technical discussions. Feel free to reach out!",
    "contact.quickResponse": "Quick response guaranteed",
    "contact.responseTime": "I usually respond within 24h",
    "contact.sendMessage": "Send Message",
    "contact.form.name": "Full Name",
    "contact.form.namePlaceholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "your.email@example.com",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Describe your project or request...",
    "contact.form.send": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.success": "Message sent successfully!",
    "contact.form.error": "Error sending message. Please try again.",

    // Footer
    "footer.description": "Student developer passionate about AI and modern web technologies.",
    "footer.quickLinks": "Quick Links",
    "footer.connect": "Follow Me",
    "footer.rights": "All rights reserved.",
    "footer.madeWith": "Made with",
    "footer.nextjs": "and Next.js",
  },
  ar: {
    // Navigation
    "nav.about": "نبذة",
    "nav.projects": "المشاريع",
    "nav.skills": "المهارات",
    "nav.contact": "اتصل",
    "nav.downloadCV": "تحميل السيرة الذاتية",

    // About Section
    "about.greeting": "مرحبا، أنا",
    "about.title": "طالب مطور ومتحمس للذكاء الاصطناعي",
    "about.description": "أنا عبد العزيز، طالب في جامعة البليدة تخصص علوم الكمبيوتر (مسار ISIL). شغوف بالذكاء الاصطناعي (GPT، RAG، embeddings) والأمن السيبراني وتطوير حلول الويب العملية. قمت بإنشاء مشاريع متنوعة تشمل: تطبيقات الذكاء الاصطناعي القانونية، تطبيقات السفر، ومواقع ويب كاملة التكامل مع لوحات تحكم آمنة.",
    "about.education": "جامعة سعد دحلب البليدة 1",
    "about.specialties": "التخصصات",

    // Projects Section
    "projects.title": "مشاريعي",
    "projects.subtitle": "اكتشف إنجازاتي في الذكاء الاصطناعي وتطوير الويب والأمن السيبراني",
    "projects.keyFeatures": "الميزات الرئيسية",
    "projects.liveDemo": "عرض مباشر",
    "projects.code": "الكود",
    "projects.viewMore": "عرض المزيد على جيثب",

    // Legal Assistant Project
    "projects.legal.title": "مساعد قانوني جزائري",
    "projects.legal.description": "روبوت محادثة يعمل بالذكاء الاصطناعي متخصص في القانون الجزائري",
    "projects.legal.longDescription":
      "أول مساعد قانوني جزائري مدعوم من GPT-4o مع RAG وقاعدة بيانات متجهية للحصول على ردود دقيقة على التشريعات الجزائرية.",
    "projects.legal.feature1": "واجهة متعددة اللغات (FR/AR/EN)",
    "projects.legal.feature2": "قاعدة بيانات متجهية مع pgvector",
    "projects.legal.feature3": "بحث دلالي متقدم",
    "projects.legal.feature4": "مصادقة آمنة",

    // Travel Project
    "projects.travel.title": "WanderAI - روبوت السفر",
    "projects.travel.description": "توصيات سفر مخصصة مدعومة بالذكاء الاصطناعي",
    "projects.travel.longDescription": "روبوت محادثة ذكي يحلل تفضيلاتك لاقتراح وجهات سفر ومسارات وأنشطة مخصصة.",
    "projects.travel.feature1": "توصيات مخصصة",
    "projects.travel.feature2": "تخطيط مسارات الرحلات",
    "projects.travel.feature3": "تكامل واجهات برمجة تطبيقات السفر",
    "projects.travel.feature4": "دردشة في الوقت الفعلي",

    // Dentist Project
    "projects.dentist.title": "تطبيق طبيب الأسنان",
    "projects.dentist.description": "نظام إدارة مواعيد طب الأسنان",
    "projects.dentist.longDescription":
      "تطبيق ويب كامل لإدارة مواعيد طب الأسنان مع المصادقة ولوحة تحكم المسؤول وواجهة المريض.",
    "projects.dentist.feature1": "نظام الحجز",
    "projects.dentist.feature2": "لوحة تحكم المسؤول",
    "projects.dentist.feature3": "إدارة المرضى",
    "projects.dentist.feature4": "إشعارات تلقائية",

    // Skills Section
    "skills.title": "مهاراتي",
    "skills.subtitle": "التقنيات والأدوات التي أتقنها لإنشاء حلول مبتكرة",
    "skills.ai.title": "الذكاء الاصطناعي والتعلم الآلي",
    "skills.frontend.title": "الواجهة الأمامية وتجربة المستخدم",
    "skills.backend.title": "الواجهة الخلفية و API",
    "skills.database.title": "قواعد البيانات",
    "skills.security.title": "الأمن السيبراني",
    "skills.tools.title": "الأدوات و DevOps",
    "skills.languages": "اللغات",
    "skills.certifications": "الشهادات والتدريب",
    "skills.certificationsDesc": "جوجل كلاود وجامعة ميشيغان وجونز هوبكنز والمزيد",

    // Contact Section
    "contact.title": "اتصل بي",
    "contact.subtitle": "دعنا نناقش مشاريعك وتعاونك",
    "contact.getInTouch": "ابقى على تواصل",
    "contact.description": "أنا منفتح دائمًا على الفرص الجديدة والتعاون والمناقشات الفنية. لا تتردد في التواصل!",
    "contact.quickResponse": "استجابة سريعة مضمونة",
    "contact.responseTime": "عادة ما أرد في غضون 24 ساعة",
    "contact.sendMessage": "أرسل رسالة",
    "contact.form.name": "الاسم الكامل",
    "contact.form.namePlaceholder": "اسمك",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.emailPlaceholder": "your.email@example.com",
    "contact.form.message": "الرسالة",
    "contact.form.messagePlaceholder": "صف مشروعك أو طلبك...",
    "contact.form.send": "أرسل رسالة",
    "contact.form.sending": "إرسال...",
    "contact.form.success": "تم إرسال الرسالة بنجاح!",
    "contact.form.error": "خطأ في إرسال الرسالة. حاول مرة أخرى.",

    // Footer
    "footer.description": "طالب مطور شغوف بالذكاء الاصطناعي وتقنيات الويب الحديثة.",
    "footer.quickLinks": "روابط سريعة",
    "footer.connect": "تابعني",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.madeWith": "صنع مع",
    "footer.nextjs": "و Next.js",
  },
}

const getInitialLanguage = (): Language => {
  if (typeof window !== "undefined") {
    const browserLanguage = navigator.language.substring(0, 2)
    if (["fr", "en", "ar"].includes(browserLanguage)) {
      return browserLanguage as Language
    }
  }
  return "fr"
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const t = (key: string): string => {
    return (translations[language] as any)[key] || key
  }

  if (!hasMounted) return null

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }

  return context
}