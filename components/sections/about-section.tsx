"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"


const AboutSection = () => {
  const { t } = useLanguage()

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/abdelazizmerzoug",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/abdelaziz-merzoug-84986b364/",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:merzougaziz800@gmail.com",
      icon: Mail,
    },
  ]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-foreground"
              >
                {t("about.greeting")}
                <span className="text-primary block">Abdelaziz Merzoug</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted-foreground"
              >
                {t("about.title")}
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {t("about.description")}
            </motion.p>

            {/* Education & Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <GraduationCap className="h-5 w-5" />
                <span>{t("about.education")}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Tipaza, Algeria</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex gap-4"
            >
              {socialLinks.map((link, index) => (
                <motion.div key={link.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                      <link.icon className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <Card className="w-full max-w-md">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  {/* Avatar */}
                  <motion.div whileHover={{ scale: 1.05 }} className="mx-auto w-32 h-32 rounded-full overflow-hidden shadow-md">
                    <Image
                      src="/profile.png"
                      alt="Abdelaziz Merzoug"
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>



                  {/* Specialties */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">{t("about.specialties")}</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {["🧠 IA & ML", "🌐 Web Dev", "🔒 Cybersécurité"].map((specialty, index) => (
                        <motion.span
                          key={specialty}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.2 + index * 0.1 }}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {specialty}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>📧 merzougaziz800@gmail.com</p>
                    <p>📱 +213 561-669-880</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
