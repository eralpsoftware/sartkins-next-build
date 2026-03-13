import createNextIntlPlugin from "next-intl/plugin";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // S3 signed URL gibi cross-origin img isteklerinde Referer gönderilmesin (403 önlemek için)
  {
    key: "Referrer-Policy",
    value: "same-origin",
  },
  {
    key: "Permissions-Policy",
    value: ["camera=()", "microphone=()", "geolocation=()", "payment=()"].join(
      ", "
    ),
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api-sartkins.eralpsoftware.net/api/:path*',
      },
      // File servisi proxy — tarayıcı aynı origin'e istek atar, CORS olmaz
      {
        source: '/file-api/:path*',
        destination: 'https://file.heoxasoft.com/:path*',
      },
      // S3 proxy — tarayıcı /aws-s3/... ile istek atar, CORS olmaz
      {
        source: '/aws-s3/:path*',
        destination: 'https://eral-file-buck.s3.eu-north-1.amazonaws.com/:path*',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eral-file-buck.s3.eu-north-1.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
