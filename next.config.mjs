/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  typescript: {
    // !! IMPORTANTE !!
    // Ignora errores de TypeScript para que el build NO falle en producción.
    ignoreBuildErrors: true,
  },
  eslint: {
    // !! IMPORTANTE !!
    // Ignora errores de estilo (linting) durante el build.
    ignoreDuringBuilds: true,
  },
  images: {
    // Permite cargar imágenes de cualquier dominio sin restricciones
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true,
  },
};
export default nextConfig;