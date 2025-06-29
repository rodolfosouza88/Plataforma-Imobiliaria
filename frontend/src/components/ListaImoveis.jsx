import React, { useState, useEffect } from "react";
import axios from "axios";
import DetalhesImovel from "./DetalhesImovel";
import { useNavigate } from "react-router-dom";

export default function ListaImoveis() {
  const [imoveis, setImoveis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [idDetalhes, setIdDetalhes] = useState(null);
  const navigate = useNavigate();

  const carregarImoveis = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:8000/api/imoveis");
      setImoveis(response.data);
      setError(null);
    } catch (err) {
      setError("Erro ao buscar imóveis");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarImoveis();
  }, []);

  const handleExcluir = async (id) => {
    if (!window.confirm("Tem certeza que deseja excluir este imóvel?")) return;

    try {
      await axios.delete(`http://localhost:8000/api/imoveis/${id}`);
      setImoveis((prev) => prev.filter((imovel) => imovel.id !== id));
      alert("Imóvel excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir:", error);
      alert("Erro ao tentar excluir o imóvel.");
    }
  };

  const handleEditar = (id) => {
    navigate(`/editar/${id}`);
  };

  if (loading) return <p>Carregando imóveis...</p>;
  if (error) return <p className="text-red-600">Erro: {error}</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Lista de Imóveis</h1>
      <ul>
        {imoveis.map((imovel) => (
          <li
            key={imovel.id}
            className="border rounded p-4 mb-4 shadow hover:shadow-lg transition cursor-default"
          >
            <h2
              onClick={() => setIdDetalhes(imovel.id)}
              className="font-semibold text-xl text-blue-600 hover:underline cursor-pointer"
            >
              {imovel.titulo}
            </h2>
            <p className="mt-1 text-gray-700">{imovel.descricao}</p>
            <p className="mt-1">
              <strong>Valor:</strong>{" "}
              {typeof imovel.valor === "number"
                ? `R$ ${imovel.valor.toLocaleString("pt-BR")}`
                : imovel.valor}
            </p>
            <p>
              <strong>Finalidade:</strong> {imovel.finalidade}
            </p>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleEditar(imovel.id);
                }}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
              >
                Editar
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleExcluir(imovel.id);
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>

      {idDetalhes && (
        <DetalhesImovel
          id={idDetalhes}
          onFechar={() => setIdDetalhes(null)}
          atualizarLista={carregarImoveis}
        />
      )}
    </div>
  );
}
