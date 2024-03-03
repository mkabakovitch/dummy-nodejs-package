import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dummy Package",
  description: "Dummy package for playing with GitHub workflows",
  base: "/dummy-package/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Dummy Application', link: 'https://mkabakovitch.github.io/dummy-application' }
    ],
    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'About', link: '/about' },
        ]
      },
      {
        text: 'Package',
        items: [
          { text: 'Folder Structure', link: '/folder-structure' },
          { text: 'Configuration', link: '/configuration' },
          { text: 'Build', link: '/build' },
          { text: 'GitHub Packages', link: '/github-packages' },
          { text: 'GitHub Pages', link: '/github-pages' }
        ]
      },
      {
        text: 'Resources',
        items: [
          { text: 'Markdown Examples', link: 'https://vitepress.dev/guide/markdown' },
          { text: 'Emoji', link: '/emoji' },
          { text: 'VitePress API Examples', link: '/vitepress-examples' },]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mkabakovitch/dummy-package' }
    ],
    footer: {
      message: 'This is public information, feel free to use it.',
      copyright: 'Copyright © 2024 Michail Kabakovitch'
    },
    lastUpdated: {
      text: 'Updated ',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  }
})
