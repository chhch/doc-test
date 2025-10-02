import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "File Snapshots",
  description: "Write tests with file snapshots in Playwright and Vitest.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
        {
            text: 'Concept',
            items: [{ text: 'File Snapshot Testing', link: '/file-snapshot-testing' }],
        },
      {
        text: 'Integrations',
        items: [
          { text: 'Vitest', link: '/vitest-file-snapshots' },
          { text: 'Playwright', link: '/playwright-file-snapshots' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cronn/file-snapshots' }
    ]
  },
  base: '/doc-test/'
})
