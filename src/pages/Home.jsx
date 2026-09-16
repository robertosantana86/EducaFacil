import React from "react";
import Cursos from "../components/Cursos";
import Contato from "../components/Contato";

export default function Home() {
  return (
    <div>
      <section className="hero text-center text-white p-5">
        <h1>Educação Transforma Vidas</h1>
        <p>ODS 4 - Educação de Qualidade</p>
      </section>

      <div className="container mt-4">
        <h2>Cursos e Conteúdos</h2>
        <Cursos />

        <h2 className="mt-4">Contato</h2>
        <Contato />
      </div>
    </div>
  );
}