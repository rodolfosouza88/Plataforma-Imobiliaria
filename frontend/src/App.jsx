import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ListaImoveis from "./components/ListaImoveis";
import FormularioImovel from "./components/FormularioImovel";
import DetalhesImovel from "./components/DetalhesImovel";

export default function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <nav className="mb-6 flex gap-4">
          <Link to="/" className="text-blue-600 hover:underline font-semibold">
            Lista de Imóveis
          </Link>
          <Link
            to="/novo"
            className="text-blue-600 hover:underline font-semibold"
          >
            Cadastrar Imóvel
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<ListaImoveis />} />
          <Route path="/novo" element={<FormularioImovel />} />
          <Route path="/detalhes/:id" element={<DetalhesImovel />} />
          {/* Você pode criar rota para edição se quiser */}
          {/* <Route path="/editar/:id" element={<FormularioImovel />} /> */}
        </Routes>
      </div>
    </Router>
  );
}
