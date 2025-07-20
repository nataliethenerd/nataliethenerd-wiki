// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Natalie the Nerd Wiki',
  tagline: 'Game Boy board scans, schematics, references and more',
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
    ],
      navbar: {
        title: 'NatalieTheNerd Wiki',
        logo: {
          alt: 'NatalieTheNerdLogo',
          src: 'img/logo.svg',
        },
         items: [
      {
        label: 'Game Boy Scans',
        position: 'left',
        items: [
          { label: 'DMG Scans', to: 'docs/dmg/dmgscans' },
          { label: 'Pocket Scans', to: 'docs/gameboypocket/pocketscans' },
          { label: 'Color Scans', to: 'docs/gameboycolor/colorscans' },
          { label: 'Advance Scans', to: 'docs/gameboyadvance/advancescans' },
          { label: 'Advance SP Scans', to: 'docs/gameboyadvancesp/spscans' },
          { label: 'Micro Scans', to: 'docs/gameboymicro/microscans' },

        ],
      },
      {
        label: 'Game Boy References',
        position: 'left',
        items: [
          { label: 'Game Boy Color CPU pinout', to: 'docs/gameboycolor/colorcpuguide' },
          { label: 'Game Boy Advance CPU pinout', to: 'docs/gameboyadvance/advancecpuguide' },
          { label: 'Game Boy Color Schematic', to: 'docs/gameboycolor/colorschematic' },
          { label: 'Game Boy Advance Schematic', to: 'docs/gameboyadvance/advanceschematic' },
        ],
      },
      {
        label: 'Other',
        position: 'left',
        items: [
          { label: 'DS Lite', to: 'docs/category/ds-lite' },
          { label: 'Game Boy Carts', to: 'docs/category/game-boy-carts' },
          { label: 'Game Boy Advance Carts', to: 'docs/category/game-boy-advance-carts' },
        ],
      },
      { href: 'https://github.com/nataliethenerd', label: 'GitHub', position: 'right' },
    ],
      },
      footer: {
        links: [
          {
            title: 'Device',
            items: [
              { label: 'DMG', to: 'docs/dmg' },
              { label: 'Game Boy Pocket', to: 'docs/category/game-boy-pocket' },
              { label: 'Game Boy Color', to: 'docs/category/game-boy-color' },
              { label: 'Game Boy Advance ', to: 'docs/category/game-boy-advance' },
              { label: 'Game Boy Advance SP', to: 'docs/category/game-boy-advance-sp' },
              { label: 'Game Boy Micro', to: 'docs/category/game-boy-micro' },
            ],
          },
          {
            title: 'Schematics',
            items: [
              { label: 'Game Boy Color Schematic', to: 'docs/gameboycolor/colorschematic' },
              { label: 'Game Boy Advance Schematic', to: 'docs/gameboyadvance/advanceschematic' },
              { label: 'DS Lite Schematic', to: 'docs/dslite/dsliteschematic' },
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
