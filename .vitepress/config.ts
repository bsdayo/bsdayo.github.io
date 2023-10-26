import { defineConfig } from 'vitepress'
import sidebar from './sidebar'

export default defineConfig({
  title: 'BsDocs',
  description: "Collection of bsdayo's Project Documentation",
  ignoreDeadLinks: true,

  themeConfig: {
    sidebar,
    sidebarMenuLabel: 'All Docs',
  },
})
