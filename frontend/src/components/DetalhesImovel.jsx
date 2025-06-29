import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DetalhesImovel({ id, onFechar }) {
  const [imovel, setImovel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImovel = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8000/api/imoveis/${id}`
        );
        setImovel(response.data);
        setError(null);
        // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError("Erro ao carregar detalhes do imóvel.");
      } finally {
        setLoading(false);
      }
    };

    fetchImovel();
  }, [id]);

  if (loading) return <p>Carregando detalhes...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  if (!imovel) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded shadow max-w-md w-full relative">
        <button
          onClick={onFechar}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-bold text-xl"
          aria-label="Fechar detalhes"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">{imovel.titulo}</h2>
        <p className="mb-2">{imovel.descricao}</p>
        <p>
          <strong>Endereço:</strong> {imovel.endereco}
        </p>
        <p>
          <strong>Finalidade:</strong> {imovel.finalidade}
        </p>
        <p>
          <strong>Valor:</strong> R$ {imovel.valor.toLocaleString("pt-BR")}
        </p>
        <p>
          <strong>Quartos:</strong> {imovel.quartos}
        </p>
        <p>
          <strong>Banheiros:</strong> {imovel.banheiros}
        </p>
        <p>
          <strong>Garagem:</strong> {imovel.garagem}
        </p>
        <p>
          <strong>Corretor:</strong> {imovel.corretor}
        </p>
      </div>
    </div>
  );
}
