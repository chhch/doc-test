import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "File Snapshots",
  description: "Write tests with file snapshots in Playwright and Vitest.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/docs' }
    ],

    sidebar: [
        {
            text: 'Concept',
            items: [{ text: 'File Snapshot Testing', link: '/README.md' }],
        },
      {
        text: 'Integrations',
        items: [
          { text: 'Vitest', link: '/packages/vitest-file-snapshots/README.md' },
          { text: 'Playwright', link: '/packages/playwright-file-snapshots/README.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cronn/file-snapshots' }
    ],

    // Override the link of the title in the top left corner, see
    //  https://github.com/vuejs/vitepress/issues/3555#issuecomment-1931462157
    logoLink: '/doc-test/docs'
  },
  base: '/doc-test/',
  // Set srcDir to link to pages outside the docs folder
  srcDir: '../',

})
