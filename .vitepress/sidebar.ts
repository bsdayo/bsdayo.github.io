import { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Sidebar = [
  { text: 'Services', items: [{ text: 'KMS', link: '/services/kms.md' }] },
  {
    text: 'Libraries',
    items: [
      {
        text: '.NET',
        items: [
          { text: 'Satori.NET', link: 'https://docs.bsdayo.moe/Satori.NET/' },
        ],
      },
    ],
  },
]

export default sidebar
