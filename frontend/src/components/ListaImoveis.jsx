import React, { useState, useEffect } from "react";

export default function ListaImoveis() {
  const [imoveis, setImoveis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/imoveis")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar imóveis");
        }
        return response.json();
      })
      .then((data) => {
        setImoveis(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando imóveis...</p>;

  if (error) return <p className="text-red-600">Erro: {error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Imóveis</h1>
      <ul>
        {imoveis.map((imovel) => (
          <li key={imovel.id} className="border rounded p-4 mb-2 shadow">
            <h2 className="font-semibold text-lg">{imovel.titulo}</h2>
            <p>{imovel.descricao}</p>
            <p>
              <strong>Valor:</strong> R$ {imovel.valor}
            </p>
            <p>
              <strong>Finalidade:</strong> {imovel.finalidade}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
