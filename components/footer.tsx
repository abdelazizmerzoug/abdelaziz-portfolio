"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

const Footer = () => {
  const { t } = useLanguage()

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/abdelazizmerzoug",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/abdelaziz-merzoug",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:merzougaziz800@gmail.com",
      icon: Mail,
    },
  ]

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Abdelaziz Merzoug</h3>
            <p className="text-muted-foreground">{t("footer.description")}</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t("footer.quickLinks")}</h4>
            <div className="flex flex-col space-y-2">
              {["about", "projects", "skills", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item)
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                >
                  {t(`nav.${item}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t("footer.connect")}</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.div key={link.name} whileHover={{ scale: 1.1 }}>
                  <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10">
                    <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                      <link.icon className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">© 2024 Abdelaziz Merzoug. {t("footer.rights")}</p>
            <p className="text-muted-foreground text-sm flex items-center gap-1 mt-2 md:mt-0">
              {t("footer.madeWith")} <Heart className="h-4 w-4 text-red-500" /> {t("footer.nextjs")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
