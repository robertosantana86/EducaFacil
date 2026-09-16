import React, { useState } from "react";

export default function Contato() {
  const [mensagem, setMensagem] = useState("");

  function enviar(e) {
    e.preventDefault();
    setMensagem("Mensagem enviada com sucesso!");
  }

  return (
    <form className="card p-3" onSubmit={enviar}>
      <input
        className="form-control mb-2"
        type="text"
        placeholder="Nome"
      />

      <input
        className="form-control mb-2"
        type="email"
        placeholder="E-mail"
      />

      <textarea
        className="form-control mb-2"
        placeholder="Mensagem"
      />

      <button className="btn btn-success">
        Enviar
      </button>

      <p className="mt-2">{mensagem}</p>
    </form>
  );
}
``