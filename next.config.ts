import type { NextConfig } from 'next';

const repoBase = '/brandingpage';
const useRepoBase = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  ...(useRepoBase
    ? { basePath: repoBase, assetPrefix: repoBase }
    : {}),
};

export default nextConfig;
