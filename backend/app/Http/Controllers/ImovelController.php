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
            'finalidade' => 'required|in:Venda,Locação',
            'valor' => 'required|numeric',
            'quartos' => 'required|integer|min:0',
            'banheiros' => 'required|integer|min:0',
            'garagem' => 'required|boolean',
            'corretor' => 'required|string|max:255',
        ]);

        $imovel = Imovel::create($request->all());

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
            'finalidade' => 'sometimes|required|in:Venda,Locação',
            'valor' => 'sometimes|required|numeric',
            'quartos' => 'sometimes|required|integer|min:0',
            'banheiros' => 'sometimes|required|integer|min:0',
            'garagem' => 'sometimes|required|boolean',
            'corretor' => 'sometimes|required|string|max:255',
        ]);

        $imovel->update($request->all());

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
