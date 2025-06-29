<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Imovel;

class ImovelSeeder extends Seeder
{
    public function run()
    {
        $imoveis = [
            [
                'titulo' => 'Apartamento Moderno',
                'descricao' => 'Apartamento com 3 quartos, varanda e garagem.',
                'endereco' => 'Rua das Flores, 123, Centro',
                'finalidade' => 'Venda',
                'valor' => 350000.00,
                'quartos' => 3,
                'banheiros' => 2,
                'garagem' => true,
                'corretor' => 'João Silva',
            ],
            [
                'titulo' => 'Casa de Campo',
                'descricao' => 'Casa espaçosa com 4 quartos e piscina.',
                'endereco' => 'Estrada Rural, 456, Zona Rural',
                'finalidade' => 'Locação',
                'valor' => 2500.00,
                'quartos' => 4,
                'banheiros' => 3,
                'garagem' => true,
                'corretor' => 'Maria Oliveira',
            ],
            [
                'titulo' => 'Kitnet Compacta',
                'descricao' => 'Kitnet ideal para estudantes, mobiliada.',
                'endereco' => 'Av. Universitária, 789, Bairro Universitário',
                'finalidade' => 'Locação',
                'valor' => 900.00,
                'quartos' => 1,
                'banheiros' => 1,
                'garagem' => false,
                'corretor' => 'Carlos Pereira',
            ],
            [
                'titulo' => 'Cobertura Luxuosa',
                'descricao' => 'Cobertura com vista para o mar, 5 quartos.',
                'endereco' => 'Rua Beira-Mar, 101, Bairro Nobre',
                'finalidade' => 'Venda',
                'valor' => 1200000.00,
                'quartos' => 5,
                'banheiros' => 4,
                'garagem' => true,
                'corretor' => 'Fernanda Souza',
            ],
            [
                'titulo' => 'Sala Comercial',
                'descricao' => 'Sala comercial em ponto estratégico da cidade.',
                'endereco' => 'Av. Central, 202, Centro',
                'finalidade' => 'Locação',
                'valor' => 3000.00,
                'quartos' => 0,
                'banheiros' => 1,
                'garagem' => false,
                'corretor' => 'Ricardo Lima',
            ],
        ];

        foreach ($imoveis as $imovel) {
            Imovel::create($imovel);
        }
    }
}
