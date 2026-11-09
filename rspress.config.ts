import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Exifed',
  description: 'Exifed — photos with your signature.',
  lang: 'zh',
  icon: '/brand/favicon.ico',
  logo: {
    // Asset names describe the lettering color, not the background theme.
    light: '/brand/logo-dark.svg',
    dark: '/brand/logo-light.svg',
    width: 141,
    height: 48,
  },
  locales: [
    {
      lang: 'en',
      label: 'English',
      title: 'Exifed',
      description: 'Exifed — photos with your signature.',
    },
    {
      lang: 'zh',
      label: '简体中文',
      title: 'Exifed',
      description: 'Exifed — 照片，加上你的水印。',
    },
  ],
  themeConfig: {
    darkMode: 'dark',
  },
});
