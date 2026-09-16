import React, { useEffect, useState } from "react";

export default function Cursos() {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((response) => response.json())
      .then((data) => {
        const nomesCursos = [
          {
            titulo: "Informática Básica",
            descricao:
              "Aprenda o uso do computador, internet, editores de texto e planilhas."
          },
          {
            titulo: "Programação Web",
            descricao:
              "Desenvolvimento de sites utilizando HTML, CSS, JavaScript e React."
          },
          {
            titulo: "Banco de Dados",
            descricao:
              "Modelagem de dados, SQL e gerenciamento de informações."
          },
          {
            titulo: "Segurança da Informação",
            descricao:
              "Práticas para proteger sistemas, redes e dados digitais."
          },
          {
            titulo: "Lógica de Programação",
            descricao:
              "Fundamentos de algoritmos, estruturas de decisão e repetição."
          },
          {
            titulo: "Inclusão Digital",
            descricao:
              "Capacitação tecnológica para ampliar o acesso ao conhecimento."
          }
        ];

        const cursosFormatados = data.map((item, index) => ({
          id: item.id,
          titulo: nomesCursos[index].titulo,
          descricao: nomesCursos[index].descricao
        }));

        setCursos(cursosFormatados);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando cursos...</p>;
  }

  return (
    <div className="row">
      {cursos.map((curso) => (
        <div className="col-md-6" key={curso.id}>
          <div className="card m-2">
            <div className="card-body">
              <h5>{curso.titulo}</h5>
              <p>{curso.descricao}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}