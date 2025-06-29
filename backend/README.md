# Backend - API de Imóveis

## Descrição

Este é o backend da API de imóveis, desenvolvido em Laravel. Ele oferece um conjunto de endpoints RESTful para gerenciar imóveis, incluindo operações de criação, leitura, atualização e exclusão (CRUD).

---

## Tecnologias utilizadas

-   PHP 8.x
-   Laravel 12.x
-   MySQL (via XAMPP)
-   Composer para gerenciamento de dependências

---

## Requisitos

-   PHP >= 8.0
-   Composer instalado
-   MySQL (banco de dados configurado)
-   XAMPP ou outro servidor local (opcional)
-   Laravel instalado via Composer (geralmente já instalado com o projeto)

---

## Configuração inicial

1. Clone este repositório:

```bash
git clone <URL_DO_REPOSITÓRIO>

Entre na pasta do backend:

bash
Copiar
Editar
cd backend
Instale as dependências do PHP:

bash
Copiar
Editar
composer install
Copie o arquivo .env.example para .env:

bash
Copiar
Editar
cp .env.example .env
Configure as variáveis do banco de dados no arquivo .env:

env
Copiar
Editar
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=plataforma_imobiliaria
DB_USERNAME=root
DB_PASSWORD=senha_do_mysql
Gere a chave da aplicação:

bash
Copiar
Editar
php artisan key:generate
Rode as migrations para criar as tabelas no banco:

bash
Copiar
Editar
php artisan migrate
(Opcional) Rode os seeders para popular dados de teste:

bash
Copiar
Editar
php artisan db:seed
Executando o servidor localmente
bash
Copiar
Editar
php artisan serve
Por padrão, o servidor estará rodando em: http://localhost:8000

Endpoints principais
Método	Endpoint	Descrição
GET	/api/imoveis	Lista todos os imóveis
GET	/api/imoveis/{id}	Exibe um imóvel específico
POST	/api/imoveis	Cria um novo imóvel
PUT	/api/imoveis/{id}	Atualiza um imóvel existente
DELETE	/api/imoveis/{id}	Exclui um imóvel

Testando a API
Recomenda-se usar ferramentas como Postman ou Insomnia para consumir e testar os endpoints da API.

Estrutura básica do projeto
bash
Copiar
Editar
backend/
├── app/
│   ├── Http/
│   ├── Models/
│   └── ...
├── database/
│   ├── migrations/
│   ├── seeders/
│   └── ...
├── routes/
│   ├── api.php
│   └── web.php
├── .env
├── composer.json
├── artisan
└── README.md
Contato
Desenvolvido por Rodolfo Vasconcellos de Souza
Email: rodolfovasconcellos88@gmail.com
LinkedIn: https://www.linkedin.com/in/rodolfosouza88/
```
