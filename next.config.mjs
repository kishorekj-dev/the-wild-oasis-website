/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nfajhrofmdqwqkqbnaej.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabins//**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
