"use client"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"

const certificates = [
  {
    id: "google-cloud",
    title: "Google Cloud - GenAI",
    issuer: "Google Cloud",
    image: "/certificates/google.png",
  },
  {
    id: "michigan-ai",
    title: "AI for Everyone",
    issuer: "University of Michigan",
    image: "/certificates/michigan.png",
  },
  {
    id: "hopkins-sec",
    title: "Cybersecurity Basics",
    issuer: "Johns Hopkins University",
    image: "/certificates/hopkins.png",
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
              className="rounded-2xl shadow-md p-4 border dark:border-border hover:shadow-lg transition"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain rounded-md"
                />
              </div>
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="text-muted-foreground">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
