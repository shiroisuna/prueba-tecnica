<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductosController;
use App\Http\Controllers\ComentariosController;


Route::get('/', function () {
    return view('welcome');
});

Route::get('/productos', 'App\Http\Controllers\ProductosController@index');

Route::post('/productos/insert', 'App\Http\Controllers\ProductosController@create');

Route::get('/productos/detele/{$id}', 'App\Http\Controllers\ProductosController@destroy');

Route::post('/productos/update', 'App\Http\Controllers\ProductosController@update');

Route::post('/Comentario', 'App\Http\Controllers\ComentariosController@create');

Route::get('/comentarios', 'App\Http\Controllers\ComentariosController@index');





