/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://your-domain.com', // TODO: update to your real domain or Vercel URL
  generateRobotsTxt: true,
  exclude: ['/api/*'],
};
