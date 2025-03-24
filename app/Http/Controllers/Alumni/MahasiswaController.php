<?php

namespace App\Http\Controllers\Alumni;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Mahasiswa;
use App\Http\Requests\Product\StoreRequest;

class MahasiswaController extends Controller
{
    public function index()
    {
        $daftarMahasiswa = Mahasiswa::all();

        return inertia::render('Alumni/Mahasiswa/List', [
            'Mahasiswa' => $daftarMahasiswa
        ]);
    }

    public function store(StoreRequest $request)
    {
        $mahasiswa = Mahasiswa::create([
            'nama'=>$nama,
            'nim'=>$nim,
            'semester'=>$semester,
            'ipk'=>$ipk,
        ]);

        return redict()->route('mahasiswa.index');
    }
}
