import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Özel klasörün olursa buraya yazarsın
    },
    sitemap: 'https://terrasondaj.net/sitemap.xml',
  }
}