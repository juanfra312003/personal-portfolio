/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Genera HTML/CSS/JS estático
  reactCompiler: true,
  images: {
    unoptimized: true,  // Necesario para export estático
  },
};

export default nextConfig;
