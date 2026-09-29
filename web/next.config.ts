import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // O repositório tem dois package-lock.json: o dos scripts Higgsfield na raiz
  // e o deste app. Fixar a raiz em web/ evita que o Turbopack escolha a de cima.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
