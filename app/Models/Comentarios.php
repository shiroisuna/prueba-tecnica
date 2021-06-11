<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comentarios extends Model
{
    use HasFactory;

    protected $fillable=[
        'producto_id',
        'comentario',
        
    ];

    protected $table="comentarios";

    public function productos(){
        
        return $this->hasMany(Productos::class);   
    }
}
