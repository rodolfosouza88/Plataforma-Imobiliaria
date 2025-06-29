<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Imovel extends Model
{
    use HasFactory;

    // Definindo o nome correto da tabela
    protected $table = 'imoveis';

    protected $fillable = [
        'titulo',
        'descricao',
        'endereco',
        'finalidade',
        'valor',
        'quartos',
        'banheiros',
        'garagem',
        'corretor',
    ];
}
