import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FormularioImovel({
  imovelSelecionado,
  onSalvar,
  onCancelar,
}) {
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    endereco: "",
    finalidade: "venda",
    valor: "",
    quartos: "",
    banheiros: "",
    garagem: "",
    corretor: "",
  });

  const [mensagemSucesso, setMensagemSucesso] = useState("");

  useEffect(() => {
    if (imovelSelecionado) {
      setFormData({
        titulo: imovelSelecionado.titulo || "",
        descricao: imovelSelecionado.descricao || "",
        endereco: imovelSelecionado.endereco || "",
        finalidade: (imovelSelecionado.finalidade || "venda").toLowerCase(),
        valor: imovelSelecionado.valor || "",
        quartos: imovelSelecionado.quartos || "",
        banheiros: imovelSelecionado.banheiros || "",
        garagem: imovelSelecionado.garagem || "",
        corretor: imovelSelecionado.corretor || "",
      });
    } else {
      setFormData({
        titulo: "",
        descricao: "",
        endereco: "",
        finalidade: "venda",
        valor: "",
        quartos: "",
        banheiros: "",
        garagem: "",
        corretor: "",
      });
    }
    setMensagemSucesso(""); // limpa mensagem ao trocar o imóvel
  }, [imovelSelecionado]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (imovelSelecionado) {
        await axios.put(
          `http://localhost:8000/api/imoveis/${imovelSelecionado.id}`,
          formData
        );
      } else {
        await axios.post("http://localhost:8000/api/imoveis", formData);
      }
      setMensagemSucesso("Imóvel cadastrado com sucesso!");
      if (onSalvar) onSalvar();
    } catch (error) {
      console.error("Erro ao salvar imóvel:", error);
      alert("Erro ao salvar imóvel.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-10 space-y-4">
      <input
        type="text"
        name="titulo"
        value={formData.titulo}
        onChange={handleChange}
        placeholder="Título"
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        name="descricao"
        value={formData.descricao}
        onChange={handleChange}
        placeholder="Descrição"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="endereco"
        value={formData.endereco}
        onChange={handleChange}
        placeholder="Endereço"
        className="w-full p-2 border rounded"
        required
      />
      <select
        name="finalidade"
        value={formData.finalidade}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      >
        <option value="venda">Venda</option>
        <option value="locacao">Locação</option>
      </select>
      <input
        type="number"
        name="valor"
        value={formData.valor}
        onChange={handleChange}
        placeholder="Valor"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="number"
        name="quartos"
        value={formData.quartos}
        onChange={handleChange}
        placeholder="Quartos"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="number"
        name="banheiros"
        value={formData.banheiros}
        onChange={handleChange}
        placeholder="Banheiros"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="number"
        name="garagem"
        value={formData.garagem}
        onChange={handleChange}
        placeholder="Garagem"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="corretor"
        value={formData.corretor}
        onChange={handleChange}
        placeholder="Corretor"
        className="w-full p-2 border rounded"
        required
      />

      <div className="flex justify-between items-center">
        <button
          type="submit"
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          {imovelSelecionado ? "Atualizar" : "Cadastrar"}
        </button>
        {onCancelar && (
          <button
            type="button"
            onClick={onCancelar}
            className="bg-gray-400 text-white font-bold py-2 px-4 rounded hover:bg-gray-500"
          >
            Cancelar
          </button>
        )}
      </div>

      {mensagemSucesso && (
        <p className="mt-4 text-green-600 font-semibold">{mensagemSucesso}</p>
      )}
    </form>
  );
}
