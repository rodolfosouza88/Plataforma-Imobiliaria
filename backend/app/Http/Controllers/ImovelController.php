<?php

namespace App\Http\Controllers;

use App\Models\Imovel;
use Illuminate\Http\Request;

class ImovelController extends Controller
{
    // Listar todos os imóveis
    public function index()
    {
        $imoveis = Imovel::all();
        return response()->json($imoveis);
    }

    // Cadastrar um novo imóvel
    public function store(Request $request)
    {
        $request->validate([
            'titulo' => 'required|string|max:255',
            'descricao' => 'required|string',
            'endereco' => 'required|string',
            'finalidade' => 'required|in:venda,locacao',
            'valor' => 'required|numeric',
            'quartos' => 'required|integer|min:0',
            'banheiros' => 'required|integer|min:0',
            'garagem' => 'required|integer|min:0',
            'corretor' => 'required|string|max:255',
        ]);

        $dados = $request->all();

        // Definindo imagem com base em lógica simples
        if (str_contains(strtolower($dados['titulo']), 'apartamento')) {
            $dados['foto'] = 'apartamento.jpg';
        } elseif (str_contains(strtolower($dados['titulo']), 'sala')) {
            $dados['foto'] = 'sala-comercial.jpg';
        } elseif (str_contains(strtolower($dados['titulo']), 'casa')) {
            $dados['foto'] = 'casa.jpg';
        } else {
            $dados['foto'] = 'imovel-sem-foto.jpg';
        }

        $imovel = Imovel::create($dados);

        return response()->json($imovel, 201);
    }

    // Visualizar um imóvel específico
    public function show($id)
    {
        $imovel = Imovel::find($id);

        if (!$imovel) {
            return response()->json(['message' => 'Imóvel não encontrado'], 404);
        }

        return response()->json($imovel);
    }

    // Atualizar um imóvel existente
    public function update(Request $request, $id)
    {
        $imovel = Imovel::find($id);

        if (!$imovel) {
            return response()->json(['message' => 'Imóvel não encontrado'], 404);
        }

        $request->validate([
            'titulo' => 'sometimes|required|string|max:255',
            'descricao' => 'sometimes|required|string',
            'endereco' => 'sometimes|required|string',
            'finalidade' => 'sometimes|required|in:venda,locacao',
            'valor' => 'sometimes|required|numeric',
            'quartos' => 'sometimes|required|integer|min:0',
            'banheiros' => 'sometimes|required|integer|min:0',
            'garagem' => 'sometimes|required|integer|min:0',
            'corretor' => 'sometimes|required|string|max:255',
        ]);

        $dados = $request->all();

        // Se a imagem não for enviada na atualização, manter a atual ou definir padrão
        if (!isset($dados['foto']) || empty($dados['foto'])) {
            $dados['foto'] = $imovel->foto ?? 'imovel-sem-foto.jpg';
        }

        $imovel->update($dados);

        return response()->json($imovel);
    }

    // Excluir um imóvel
    public function destroy($id)
    {
        $imovel = Imovel::find($id);

        if (!$imovel) {
            return response()->json(['message' => 'Imóvel não encontrado'], 404);
        }

        $imovel->delete();

        return response()->json(['message' => 'Imóvel excluído com sucesso']);
    }
}
