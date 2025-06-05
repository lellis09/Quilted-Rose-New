/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://quiltedrose.org', // ✅ no "www"
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: 'public', // Make sure the sitemap and robots.txt go into /public
};