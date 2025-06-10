"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Brain, Plane, Calendar, ChevronLeft, ChevronRight, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import { useState } from "react"

const ProjectsSection = () => {
  const { t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState({})

  const projects = [
    {
      id: 1,
      title: "المساعد القانوني الجزائري الذكي",
      description: t("projects.legal.description"),
      longDescription: t("projects.legal.longDescription"),
      icon: Brain,
      images: [
        "/LandPage.png?height=300&width=500&text=LandPage",
        "/ChatBot.png?height=300&width=500&text=ChatBot",
        "/Settings.png?height=300&width=500&text=Settings",
        "/Feedbacks.png?height=300&width=500&text=Feedbacks"
      ],
      technologies: ["GPT-4o", "Next.js", "Supabase", "pgvector", "TypeScript", "Tailwind CSS"],
      features: [
        t("projects.legal.feature1"),
        t("projects.legal.feature2"),
        t("projects.legal.feature3"),
        t("projects.legal.feature4"),
      ],
      demoUrl: "https://algerian-legal-assist.vercel.app",
      githubUrl: "private",
      grade: "17/20",
    },
    {
      id: 2,
      title: t("projects.travel.title"),
      description: t("projects.travel.description"),
      longDescription: t("projects.travel.longDescription"),
      icon: Plane,
      images: [
        "/placeholder.svg?height=300&width=500&text=Travel+Bot+Interface",
        "/placeholder.svg?height=300&width=500&text=Travel+Recommendations",
        "/placeholder.svg?height=300&width=500&text=Travel+Itinerary",
        "/placeholder.svg?height=300&width=500&text=Travel+Booking"
      ],
      technologies: ["OpenAI API", "React", "Node.js", "MongoDB", "Express", "Socket.io"],
      features: [
        t("projects.travel.feature1"),
        t("projects.travel.feature2"),
        t("projects.travel.feature3"),
        t("projects.travel.feature4"),
      ],
      demoUrl: "#",
      githubUrl: "private",
    },
    {
      id: 3,
      title: t("projects.dentist.title"),
      description: t("projects.dentist.description"),
      longDescription: t("projects.dentist.longDescription"),
      icon: Calendar,
      images: [
        "/placeholder.svg?height=300&width=500&text=Dentist+Dashboard",
        "/placeholder.svg?height=300&width=500&text=Appointment+Booking",
        "/placeholder.svg?height=300&width=500&text=Patient+Management",
        "/placeholder.svg?height=300&width=500&text=Calendar+View"
      ],
      technologies: ["Next.js", "Supabase", "PostgreSQL", "Auth", "Tailwind CSS", "TypeScript"],
      features: [
        t("projects.dentist.feature1"),
        t("projects.dentist.feature2"),
        t("projects.dentist.feature3"),
        t("projects.dentist.feature4"),
      ],
      demoUrl: "#",
      githubUrl: "#",
    },
  ]

  const nextImage = (projectId) => {
    const project = projects.find(p => p.id === projectId)
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % project.images.length
    }))
  }

  const prevImage = (projectId) => {
    const project = projects.find(p => p.id === projectId)
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + project.images.length) % project.images.length
    }))
  }

  const goToImage = (projectId, index) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: index
    }))
  }

  const handleGithubClick = (project) => {
    if (project.githubUrl === "private") {
      alert("This repository is private and not publicly accessible.")
      return
    }
    window.open(project.githubUrl, "_blank", "noopener noreferrer")
  }

  return (
    <section id="projects" className="pb-6 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("projects.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("projects.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300">
                {/* Project Image Carousel */}
                <div className="relative overflow-hidden bg-gray-100">
                  <div className="relative w-full h-56 sm:h-48">
                    <img
                      src={project.images[currentImageIndex[project.id] || 0]}
                      alt={`${project.title} - Image ${(currentImageIndex[project.id] || 0) + 1}`}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
                    
                    {/* Navigation Arrows */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage(project.id)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 shadow-lg"
                        >
                          <ChevronLeft className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => nextImage(project.id)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 shadow-lg"
                        >
                          <ChevronRight className="h-3.5 w-3.5" />
                        </button>
                      </>
                    )}

                    {/* Image Indicators */}
                    {project.images.length > 1 && (
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {project.images.map((_, imgIndex) => (
                          <button
                            key={imgIndex}
                            onClick={() => goToImage(project.id, imgIndex)}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 shadow-sm ${
                              (currentImageIndex[project.id] || 0) === imgIndex
                                ? 'bg-white scale-125 shadow-lg'
                                : 'bg-white/60 hover:bg-white/80'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Project Icon */}
                  <div className="absolute top-3 left-3">
                    <div className="w-10 h-10 bg-primary/95 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
                      <project.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Grade Badge */}
                  {project.grade && (
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-green-500/90 text-white backdrop-blur-sm shadow-lg font-medium">
                        {project.grade}
                      </Badge>
                    </div>
                  )}
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{project.longDescription}</p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">{t("projects.keyFeatures")}:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-1">
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-auto">
                    <Button size="sm" className="flex-1 gap-2" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        {t("projects.liveDemo")}
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 gap-2" 
                      onClick={() => handleGithubClick(project)}
                    >
                      {project.githubUrl === "private" ? (
                        <Lock className="h-4 w-4" />
                      ) : (
                        <Github className="h-4 w-4" />
                      )}
                      {t("projects.code")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/abdelazizmerzoug" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              {t("projects.viewMore")}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection