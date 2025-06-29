---

#  **Projeto Completo Finalizado**


# 🏡 Gerenciador Completo de Imóveis - Projeto Full Stack

---

<p align="center">
  <img src="https://user-images.githubusercontent.com/your-username/project-image.png" alt="Projeto Imóveis" width="600" />
</p>

---

## 🚀 Sobre o Projeto

Aplicação completa full stack para gerenciamento de imóveis, composta por:

- **Frontend:** React com Tailwind CSS, interface intuitiva para cadastro, edição, listagem e visualização detalhada
- **Backend:** API RESTful em Laravel, com CRUD completo, validação e persistência em banco relacional

Projeto desenvolvido para demonstrar habilidades técnicas e capacidade de construir aplicações reais.

---

## 🛠️ Tecnologias Usadas

### Frontend

- React 18+
- React Router DOM
- Axios
- Tailwind CSS

### Backend

- PHP 8.x
- Laravel 10
- MySQL
- Eloquent ORM

---

## 🎯 Funcionalidades

- CRUD completo de imóveis
- Upload e exibição de fotos (com imagens padrão para imóveis sem foto)
- Modal com detalhes completos do imóvel
- Navegação SPA fluida
- Mensagens de sucesso/erro para interação amigável
- Validação e tratamento de erros no backend e frontend

---

## ⚙️ Como Rodar o Projeto Localmente

### Backend

```bash
cd backend-imoveis
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve

