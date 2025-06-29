import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import FormularioImovel from "./components/FormularioImovel";
import ListaImoveis from "./components/ListaImoveis";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaImoveis />} />
        <Route path="/cadastrar" element={<FormularioImovel />} />
        <Route path="/editar/:id" element={<FormularioImovel editar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
