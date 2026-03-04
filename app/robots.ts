import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://abdelaziz-portfolio-ebwqj5eux-abdelaziz-merzougs-projects.vercel.app/sitemap.xml',
  }
}
