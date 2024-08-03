/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    Array.prototype.push.apply(config.module.rules, [
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ]);
    return config;
  },
};

export default nextConfig;
