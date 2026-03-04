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
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
          {t("skills.certifications")}
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <article
              key={cert.id}
              className="rounded-2xl shadow-md hover:shadow-xl hover:border-primary/50 p-6 border dark:border-primary/10 transition-all duration-300 bg-background/50 backdrop-blur-sm dark:bg-background/50"
            >
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={cert.image}
                  alt={`${cert.title} - Certificate from ${cert.issuer}`}
                  fill
                  className="object-contain rounded-md"
                  loading="lazy"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
