<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Productos;
use App\Models\Comentarios;

class ComentariosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $resp = Comentarios::all();
        

        return response()->json($resp);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request ){
        //

        $comentario = new Comentarios;
        $prod = Productos::find($request->prod_id);

        $id = $prod->id;

        $resp = $comentario->create(['productos_id'=>$id, 'comentario' => $request->comentario]);

        return response()->json($resp);

    }


    public function update(Request $request, $id)
    {
        //
    }


    public function destroy($id)
    {
        
    }
}
