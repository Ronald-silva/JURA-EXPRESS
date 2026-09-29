import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { Calculadora } from "@/components/sections/Calculadora";
import { Servicos } from "@/components/sections/Servicos";
import { Ferramentas } from "@/components/sections/Ferramentas";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { Duvidas } from "@/components/sections/Duvidas";
import { Contato } from "@/components/sections/Contato";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Diferenciais />
        <Servicos />
        {/* A calculadora vem depois dos serviços: o visitante já sabe o que é
            vendido quando descobre quanto custa a alternativa. */}
        <Calculadora />
        <Ferramentas />
        <Depoimentos />
        <Duvidas />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
