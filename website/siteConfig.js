const siteConfig = {
  title: 'Dash' /* title for your website */,
  tagline: 'Google Analytics Dashboard',
  url: 'https://rishabhmishra.me' /* your website url */,
  baseUrl: '/dash/' /* base url for your project */,
  projectName: 'dash',
  headerLinks: [
    {href: 'https://github.com/rishabh09/dash', label: 'Github'},
  ],
  /* path to images for header/footer */
  headerIcon: 'img/dash.png',
  footerIcon: 'img/dash.png',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#2c3e50',
    secondaryColor: '#205C3B',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  organizationName: 'rishabh09', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/rishabh09/dash',
};

module.exports = siteConfig;
