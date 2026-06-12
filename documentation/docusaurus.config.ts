import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import webpack from "webpack";

import dotenv from "dotenv";

// Load .env values
dotenv.config({ path: '.env.docusaurops' });

const config: Config = {
  title: process.env.ENV_SITE_TITLE ? process.env.ENV_SITE_TITLE : 'DocusaurOps Project documentation template ',
  tagline: process.env.ENV_SITE_TAGLINE ? process.env.ENV_SITE_TAGLINE : 'Project tagline',
  favicon: 'img/favicon.ico',
  
  // Set the production url of your site here
  url: process.env.ENV_AZURE_DOCUSAUROPS_SITE_URL ? process.env.ENV_AZURE_DOCUSAUROPS_SITE_URL : 'http://localhost:3000',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.ENV_BASE_URL ? process.env.ENV_BASE_URL : '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'your-org', // Usually your GitHub org/user name.
  projectName: process.env.ENV_REPOSITORY_URL ? process.env.ENV_REPOSITORY_URL : 'https://github.com/your-org/docusaurops-template', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: process.env.ENV_REPOSITORY_URL ? process.env.ENV_REPOSITORY_URL : 'https://github.com/your-org/docusaurops-template',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          routeBasePath: '/'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'DocusaurOps demo site integration',
      logo: {
        alt: 'Company Logo',
        src: 'img/logo-light.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'How to use this template',
        },
        {
          href: process.env.ENV_REPOSITORY_URL ? process.env.ENV_REPOSITORY_URL : 'https://github.com/your-org/docusaurops-template',
          position: 'right',
          html: `
              <a style="display:flex" href="${process.env.ENV_REPOSITORY_URL ? process.env.ENV_REPOSITORY_URL : 'https://github.com/your-org/docusaurops-template'}" target="_blank" rel="noreferrer noopener" aria-label="Components playground">
                <svg id="f4337506-5d95-4e80-b7ca-68498c6e008e" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><defs><linearGradient id="ba420277-700e-42cc-9de9-5388a5c16e54" x1="9" y1="16.97" x2="9" y2="1.03" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0078d4" /><stop offset="0.16" stop-color="#1380da" /><stop offset="0.53" stop-color="#3c91e5" /><stop offset="0.82" stop-color="#559cec" /><stop offset="1" stop-color="#5ea0ef" /></linearGradient></defs><title>DevOps organization</title><path id="a91f0ca4-8fb7-4019-9c09-0a52e2c05754" d="M17,4v9.74l-4,3.28-6.2-2.26V17L3.29,12.41l10.23.8V4.44Zm-3.41.49L7.85,1V3.29L2.58,4.84,1,6.87v4.61l2.26,1V6.57Z" fill="url(#ba420277-700e-42cc-9de9-5388a5c16e54)" /></svg>
              </a>
            `
        },
        {
          href: process.env.ENV_AZURE_DOCUSAUROPS_SITE_URL ? process.env.ENV_AZURE_DOCUSAUROPS_SITE_URL : '/',
          label: 'DocusaurOps Home',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Your Company`,
    },
    metadata: [
      {name: 'docusaurOpsProjectName', property: "docusaurOpsProjectName", content: process.env.ENV_SITE_TITLE ? process.env.ENV_SITE_TITLE : 'Project documentation'},
      {name: 'docusaurOpsProjectType', property: "docusaurOpsProjectType", content: 'Internal'},
      {name: 'docusaurOpsProjectTechnologies', property: "docusaurOpsProjectTechnologies", content: process.env.ENV_PROJECT_TECHNOLOGIES ? process.env.ENV_PROJECT_TECHNOLOGIES : 'TypeScript'},
      {name: 'docusaurOpsProjectDescription', property: "docusaurOpsProjectDescription", content: process.env.ENV_PROJECT_DESCRIPTION ? process.env.ENV_PROJECT_DESCRIPTION : 'Project documentation template'},
      {name: 'docusaurOpsProjectRepository', property: "docusaurOpsProjectRepository", content: process.env.ENV_REPOSITORY_URL ? process.env.ENV_REPOSITORY_URL : 'https://github.com/your-org/docusaurops-template'},
      {name: 'docusaurOpsProjectContact', property: "docusaurOpsProjectContact", content: process.env.ENV_PROJECT_CONTACT ? process.env.ENV_PROJECT_CONTACT : 'john.doe@example.com'},
      {name: 'docusaurOpsSource', property: "source", content: 'Documentation'}
    ],
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {
      }
    }
  } satisfies Preset.ThemeConfig,

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    function webpackConfig(context, options) {
      return {
        name: 'loaders',
        configureWebpack(config, isServer) {

            return {
              module: {
                rules: [               
                  {
                    test: /strings\..+(\.d\.ts|\.map)$/,
                    use: 
                      {
                        loader: 'null-loader',
                      }                  
                  }
                ],
              },
              plugins: [
                new webpack.EnvironmentPlugin({
                  ENV_AZURE_DOCUSAUROPS_SITE_URL: process.env.ENV_AZURE_DOCUSAUROPS_SITE_URL ? process.env.ENV_AZURE_DOCUSAUROPS_SITE_URL : 'http://localhost:3000',
                  ENV_BASE_URL: process.env.ENV_BASE_URL ? process.env.ENV_BASE_URL : '/',
                })
              ]
            };
        }
      };
    },
    'docusaurus-plugin-image-zoom'
  ]
};

export default config;
