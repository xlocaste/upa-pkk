<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PraInkubasi extends Model
{
    use HasFactory;

    protected $table = 'pra_inkubasi';

    protected $fillable = [
        'nama_usaha',
        'prodi',
        'kelas',
        'semester',
        'brand_produk',
        'link',
    ];
}
