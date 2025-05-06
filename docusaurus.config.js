// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Natalie the Nerd Wiki',
  tagline: 'Game Boy board scans, schematics, refrences and more',
  favicon: 'img/favicon.ico',

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
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'NatalieTheNerd Wiki',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'wikiSidebar',
            position: 'left',
            label: 'Wiki Intro',
          },
          {
            to: '/docs/category/game-boy',
            position: 'left',
            label: 'Game Boy',
          },
          {
            to: '/docs/category/game-boy-carts',
            position: 'left',
            label: 'Game Boy Carts',
          },
          {
            to: '/docs/category/other',
            position: 'left',
            label: 'Other',
          },
          {
            href: 'https://github.com/nataliethenerd',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Devices',
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

  // ✅ Add LightGallery Scripts and Stylesheets for image zoom
  scripts: [
    'https://cdn.jsdelivr.net/npm/lightgallery@2.7.1/lightgallery.min.js',
    'https://cdn.jsdelivr.net/npm/lightgallery@2.7.1/plugins/zoom/lg-zoom.min.js',
  ],
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/lightgallery@2.7.1/css/lightgallery-bundle.min.css',
  ],
};

export default config;
