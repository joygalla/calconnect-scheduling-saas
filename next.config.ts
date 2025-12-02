import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /**
   * Experimental features
   * Leave this object empty if you are not using anything special.
   * If later you need server actions, you can add:
   *
   * serverActions: {}
   */
  experimental: {
    // serverActions: {},
  },
};

export default nextConfig;