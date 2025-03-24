<?php

namespace App\Http\Controllers\Alumni;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Mahasiswa;
use App\Http\Requests\Alumni\Mahasiswa\StoreRequest;
use Inertia\Inertia;

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
            'nama'=>$request->nama,
            'nim'=>$request->nim,
            'semester'=>$request->semester,
            'ipk'=>$request->ipk,
        ]);

        return redirect()->route('mahasiswa.index');
    }

    public function create()
    {
        return Inertia::render('Alumni/Mahasiswa/Add');
    }
}
