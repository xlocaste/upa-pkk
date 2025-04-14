<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inkubasi extends Model
{
    use HasFactory;

    protected $table = 'inkubasi';

    protected $fillable = [
        'nama_tenant',
        'bidang_fokus_tenant',
        'tahun_inkubasi_tenant',
        'tahun_exit_tenant',
    ];
}
