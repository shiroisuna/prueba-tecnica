<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Productos;
use App\Models\Comentarios;

class ProductosController extends Controller
{
    
    public function index(){
        // Procedemos a mostrar todos los productos

        $resp = Productos::all();
        

        return response()->json($resp);
    }

   
    public function create(Request $request){

        // Instanciamos la clase productos;
        $productos = new Productos;

        // Para luego llamar la funcion create que insertara el request en la BD
        $productos->create($request->all());
    }

   
    public function show($id){
        //Mostrar un producto de la lista a traves de su id

        $resp = Productos::find($id);

        return response()->json($resp);
    }


    public function update(Request $request, $id)
    {
        //

        $productos = Productos::find($id);

        $productos->producto = $request->producto;
        $productos->precio = $request->precio;

        $productos->save();

    }


    public function destroy($id)
    {
        //

        $producto = Productos::find($id);

        $producto->delete();
    }
}
