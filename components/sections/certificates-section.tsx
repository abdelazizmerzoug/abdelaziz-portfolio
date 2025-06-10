"use client"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"

const certificates = [
  {
    id: "michigan-python",
    title: "Programming for Everybody (Getting Started with Python)",
    issuer: "University of Michigan",
    date: "Aug 27, 2020",
    image: "/michigan.png",
  },
  {
    id: "deep-teaching-learning",
    title: "Learning How to Learn: Powerful mental tools to help you master tough subjects",
    issuer: "Deep Teaching Solutions",
    date: "Jul 26, 2023",
    image: "/deep-teaching.png",
  },
  {
    id: "google-cybersecurity",
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    date: "Aug 6, 2023",
    image: "/google.png",
  },
]

export default function CertificatesSection() {
  const { t } = useLanguage()

  return (
    <section id="certificates" className="pt-4 pb-16 bg-white dark:bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          🎓 {t("skills.certifications")}
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl shadow-md p-6 border dark:border-border hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-card"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  fill
                  className="object-contain rounded-md"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold leading-tight">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground font-medium">
                  {cert.issuer}
                </p>
                <p className="text-sm text-muted-foreground">
                  Completed: {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}