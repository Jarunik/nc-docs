module.exports = {
    base: '/nc-docs/',
    title: 'NextColony Documentation',
    description: 'NextColony Documentation',
    head : [
      ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
      logo: "/logo.png",
      repo: "/jarunik/nc-docs",
      nav: [
        { text: 'Nextcolony: The Game', link: 'https://nextcolony.io' },
      ],
      sidebar: [
        "/",
        "/json/",
        "/api/",
        "/uid/",
      ],
    }
  }