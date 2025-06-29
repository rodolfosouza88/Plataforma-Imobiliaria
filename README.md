# 🏠 Plataforma Imobiliária

Bem-vindo à **Plataforma Imobiliária**, um projeto completo Full Stack desenvolvido com foco em usabilidade, organização de código e boas práticas! Esse sistema permite o gerenciamento de imóveis para venda e locação, incluindo funcionalidades de **CRUD**, **exibição de detalhes**, e **upload dinâmico de imagens**. Tudo isso com uma interface moderna e responsiva.

> 💼 Este projeto foi desenvolvido com fins profissionais e faz parte do meu portfólio para candidaturas na área de desenvolvimento web.

---

## ✨ Funcionalidades

✅ Cadastro, edição, visualização e exclusão de imóveis  
✅ Exibição de detalhes com modal estilizado  
✅ Upload e exibição de imagens por tipo de imóvel (apartamento, casa, sala comercial)  
✅ Imagem padrão para imóveis sem foto  
✅ Design responsivo e elegante com **Tailwind CSS**  
✅ Back-end robusto com **Laravel** e API RESTful  
✅ Integração front-back completa com **Axios**

---

## 🧪 Tecnologias utilizadas

### 🔷 Front-end

- [React.js](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/) (Deploy)

### 🔶 Back-end

- [Laravel 10](https://laravel.com/)
- [PHP 8.x](https://www.php.net/)
- [MySQL](https://www.mysql.com/)
- [XAMPP / Laravel Artisan](https://www.apachefriends.org/)
- [Postman](https://www.postman.com/) (Testes de API)

---

## 💻 Como rodar o projeto localmente

### 📁 Clone o repositório:

```bash
git clone https://github.com/rodolfosouza88/Plataforma-Imobiliaria.git
🧩 Configurar o Back-end
bash
Copiar
Editar
cd Plataforma-Imobiliaria/backend

# Instale as dependências
composer install

# Crie o arquivo de ambiente
cp .env.example .env

# Configure o .env com suas credenciais do MySQL

# Gere a key
php artisan key:generate

# Execute as migrations
php artisan migrate

# Inicie o servidor
php artisan serve
🖼️ Imagens
As imagens estão na pasta backend/public/img e são carregadas dinamicamente conforme o tipo do imóvel:

apartamento.jpg

casa.jpg

sala-comercial.jpg

imovel-sem-foto.jpg (imagem padrão)

🌐 Configurar o Front-end
bash
Copiar
Editar
cd ../frontend

# Instale as dependências
npm install

# Rode o projeto
npm run dev
🧭 Navegação
Página inicial: lista todos os imóveis

Clique em um título para ver os detalhes

Botões de Editar e Excluir

Página para cadastrar novos imóveis

Responsivo em desktop, tablet e mobile 📱

🔗 Deploys
🖥️ Front-end (Vercel): https://plataforma-imobiliaria-c2ouawzkm-rodolfo-souzas-projects.vercel.app/

🌐 Back-end: Localhost via Laravel (http://localhost:8000/api/imoveis)

👨‍💻 Autor
Rodolfo Vasconcellos de Souza
📍 Franca/SP
📧 rodolfovasconcellos88@gmail.com
📞 (16) 99434-6006
🔗 LinkedIn | GitHub

⭐ Curtiu o projeto?
Deixe uma ⭐ aqui no GitHub, me adicione no LinkedIn e compartilhe! Seu apoio é muito importante para meu crescimento na área de tecnologia! 🚀💙
```
