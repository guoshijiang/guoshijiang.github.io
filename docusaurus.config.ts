import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Bridge Alchemy',
  tagline: 'An infrastructure which support l1 deposit to any l2, any l2 withdraw to l1, any l2 transfer to any l2',
  favicon: 'img/logo.png',

  url: 'https://bridge-alchemy.github.io/',
  baseUrl: '/',

  organizationName: 'bridge alchemy', // Usually your GitHub org/user name.
  projectName: 'bridge alchemy website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        language: ['zh', 'en'],
      }),
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/bridge-alchemy/bridge-alchemy.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/bridge-alchemy/bridge-alchemy.github.io/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    announcementBar: {
      id: 'announcementBar-1',
      content:
        `🎉 We love to have you stop by! 👉<a target="_blank" rel="noopener noreferrer" href="https://github.com/bridge-alchemy">Bridge Alchemy</a>! ⭐️`,
    },
    navbar: {
      title: 'Bridge Alchemy',
      logo: {
        alt: 'Bridge Alchemy Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documents',
        },
        {to: '/blog', label: 'Blogs', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/bridge-alchemy',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '🔍 Read It',
          items: [
            {
              label: 'Documents',
              to: '/docs/intro',
            },
            {
              label: 'Blogs',
              to: '/blog',
            },
          ],
        },
        {
          title: '🌍 Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/+F2a3OS2rrGBlOGFl',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/9N62gJgMVW',
            },
          ],
        },
        {
          title: '⬇️ More',
          items: [
            {
              label: 'Bridge Alchemy',
              href: 'https://github.com/bridge-alchemy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bridge Alchemy. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
