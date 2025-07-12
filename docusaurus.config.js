// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Natalie the Nerd Wiki',
  tagline: 'Game Boy board scans, schematics, refrences and more',
  favicon: 'img/favicon.png',

  url: 'https://wiki.nataliethenerd.com',
  baseUrl: '/',

  organizationName: 'nataliethenerd',
  projectName: 'nataliethenerd-wiki',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },



  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({ metadata: [
      {name: 'keywords', content: 'gameboy, game boy, game boy schematics, gameboy schematics, gameboy scans, game boy scans, pcb scans, board scans'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
      navbar: {
        title: 'NatalieTheNerd Wiki',
        logo: {
          alt: 'NatalieTheNerdLogo',
          src: 'img/logo.svg',
        },
         items: [
      {
        label: 'Scans',
        position: 'left',
        items: [
          { label: 'DMG Scans', to: 'docs/scans/gameboyscans/DMG' },
          { label: 'Pocket Scans', to: 'docs/scans/gameboyscans/pocket' },
          { label: 'Color Scans', to: 'docs/scans/gameboyscans/color' },
          { label: 'SP Scans', to: 'docs/scans/gameboyscans/SP' },
          { label: 'Micro Scans', to: 'docs/scans/gameboyscans/micro' },
          { label: 'Cart Scans', to: 'docs/category/game-boy-carts' },
          { label: 'Other Scans', to: 'docs/category/other' },
        ],
      },
      {
        label: 'Device References',
        position: 'left',
        items: [
          { label: 'DMG References', to: 'docs/devicereferences/gameboy/DMG' },
          { label: 'Pocket References', to: 'docs/devicereferences/gameboy/pocket' },
          { label: 'Color References', to: 'docs/devicereferences/gameboy/color' },
          { label: 'SP References', to: 'docs/devicereferences/gameboy/SP' },
          { label: 'Micro References', to: 'docs/devicereferences/gameboy/micro' },
          { label: 'Cart References', to: 'docs/devicereferences/game-boy-carts' },
          { label: 'Other References', to: 'docs/devicereferences/other' },
        ],
      },
      { href: 'https://github.com/nataliethenerd', label: 'GitHub', position: 'right' },
    ],
      },
      footer: {
        links: [
          {
            title: 'Scans',
            items: [
              { label: 'Game Boy', to: '/docs/category/game-boy' },
              { label: 'Game Boy Carts', to: '/docs/category/game-boy-carts' },
              { label: 'Other', to: '/docs/category/other' },
            ],
          },
          {
            title: 'Device References',
            items: [
              { label: 'Game Boy', to: '/docs/category/game-boy' },
              { label: 'Game Boy Carts', to: '/docs/category/game-boy-carts' },
              { label: 'Other', to: '/docs/category/other' },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/natalie.thenerd/',
              },
              {
                label: 'BlueSky',
                href: 'https://bsky.app/profile/nataliethenerd.com',
              },
              {
                label: 'Ko-Fi',
                href: 'https://ko-fi.com/nataliethenerd',
              },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'GitHub', href: 'https://github.com/nataliethenerd' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Natalie the Nerd.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
