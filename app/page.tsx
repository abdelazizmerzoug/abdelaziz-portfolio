"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AboutSection from "@/components/sections/about-section"
import ProjectsSection from "@/components/sections/projects-section"
import SkillsSection from "@/components/sections/skills-section"
import ContactSection from "@/components/sections/contact-section"
import CertificatesSection from "@/components/sections/certificates-section"


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="relative">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <CertificatesSection />
          <ContactSection />
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
