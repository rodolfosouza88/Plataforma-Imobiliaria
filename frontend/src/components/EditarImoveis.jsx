import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import FormularioImovel from "./FormularioImovel";

export default function EditarImovel() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [imovel, setImovel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchImovel() {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/imoveis/${id}`
        );
        setImovel(response.data);
        setError(null);
        // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError("Erro ao carregar imóvel.");
      } finally {
        setLoading(false);
      }
    }
    fetchImovel();
  }, [id]);

  const handleSalvar = () => {
    alert("Imóvel atualizado com sucesso!");
    navigate("/"); // volta para a lista de imóveis
  };

  if (loading) return <p>Carregando imóvel...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  if (!imovel) return null;

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Editar Imóvel</h1>
      <FormularioImovel
        imovelSelecionado={imovel}
        onSalvar={handleSalvar}
        onCancelar={() => navigate("/")}
      />
    </div>
  );
}
