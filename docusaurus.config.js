// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const beian = '粤ICP备2023040449号-1';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '刘泽桦的快乐学习屋',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blog.hhdev.top',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jeffery-9', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   '#',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: "近期文章",
          // blogSidebarCount: "ALL",//所有blog，默认是最近
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   '',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'keywords', content: '刘泽桦,技术博客,知识笔记,前端'}
      ],
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '刘泽桦的快乐学习屋',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            position: 'right',
            docId: 'doc-home',//docs/doc-home
            label: 'Notes',
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'right'
          },
          {
            label: 'Fun',
            to: '/fun',
            position: 'right'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Website',
            items: [
              {
                label: 'Notes',
                to: '/docs/doc-home',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Fun',
                to: '/fun',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: '博客园',
                href: 'https://www.cnblogs.com/jeffery-liu/#/c/subject/category/default.html',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                html: `<a href="https://docusaurus.io/zh-CN/" target="_blank" title="docusaurus"><img alt="Docusaurus官网" style="height:50px;margin-top:0.5rem" src="/img/buildwith.png" /><a/>`,
              },
            ],
          },
        ],
        copyright: `<p><a href="http://beian.miit.gov.cn/"  title="备案">${beian}</a></p>Copyright © ${new Date().getFullYear()} 刘泽桦, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      [
        "@docusaurus/plugin-content-docs",
        {
          id: "fun",
          path: "fun",
          routeBasePath: "fun",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: false,
        },
      ],
    ]
};

module.exports = config;
