/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.SITE_URL || 'https://nextjs-sitemap-capfj29yj-luizcorreadev.vercel.app/',
    generateRobotsTxt: true, // (optional)
    outDir: '.next/static/pages'
  }