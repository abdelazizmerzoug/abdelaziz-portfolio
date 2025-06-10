"use client"

import { motion } from "framer-motion"
import { Brain, Code, Server, Database, Shield, Wrench, Sparkles, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"

const SkillsSection = () => {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t("skills.ai.title"),
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      skills: [
        "GPT-4o",
        "OpenAI API",
        "Generative AI",
        "RAG",
        "Embeddings",
        "pgvector",
        "LangChain",
        "Prompt Engineering",
      ],
    },
    {
      title: t("skills.frontend.title"),
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: t("skills.backend.title"),
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: ["Node.js", "Express.js", "Python", "Java", "C", "REST APIs", "Authentication", "Server Actions"],
    },
    {
      title: t("skills.database.title"),
      icon: Database,
      color: "from-orange-500 to-red-500",
      skills: ["PostgreSQL", "MySQL", "Supabase", "MongoDB", "SQL", "Database Design", "Data Modeling", "Migrations"],
    },
    {
      title: t("skills.security.title"),
      icon: Shield,
      color: "from-red-500 to-pink-500",
      skills: [
        "Cybersecurity",
        "Network Security",
        "Risk Analysis",
        "OS Security",
        "Encryption",
        "RLS",
        "Auth Systems",
        "OWASP",
      ],
    },
    {
      title: t("skills.tools.title"),
      icon: Wrench,
      color: "from-gray-500 to-slate-500",
      skills: ["Git", "GitHub", "Linux CLI", "Vercel", "Figma", "VSCode", "Docker", "CI/CD"],
    },
  ]

  const languages = [
    { name: "العربية", level: "Native (C1)", flag: "🇩🇿" },
    { name: "English", level: "Upper-Intermediate (B2)", flag: "🇺🇸" },
    { name: "Français", level: "Upper-Intermediate (B2)", flag: "🇫🇷" },
  ]

  return (
    <section className="pb-8 bg-white dark:bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("skills.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("skills.subtitle")}</p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="secondary"
                          className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">{t("skills.languages")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {languages.map((language, index) => (
                  <motion.div
                    key={language.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="text-2xl mb-2">{language.flag}</div>
                    <h4 className="font-semibold text-foreground">{language.name}</h4>
                    <p className="text-sm text-muted-foreground">{language.level}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Certifications Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">{t("skills.certifications")}</span>
          </div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{t("skills.certificationsDesc")}</p>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
