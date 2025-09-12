export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '*',
        disallow: '/private/',
      },
      sitemap: 'https://www.smachstack.com/sitemap.xml', // Domain name 
    }
  }