<?php

namespace App\Http\Controllers\Alumni;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Mahasiswa;
use App\Http\Requests\Alumni\Mahasiswa\StoreRequest;
use App\Http\Requests\Alumni\Mahasiswa\UpdateRequest;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MahasiswaController extends Controller
{
    public function index()
    {
        $daftarMahasiswa = Mahasiswa::all();

        return inertia::render('Alumni/Mahasiswa/List', [
            'Mahasiswa' => $daftarMahasiswa,
            'auth' => [
                'user' => Auth::user(),
            ],
        ]);
    }

    public function show($mahasiswa)
    {
        $mahasiswa = Mahasiswa::findOrFail($mahasiswa);

        return response()->json($mahasiswa);
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

    public function update(UpdateRequest $request, Mahasiswa $mahasiswa)
    {
        $mahasiswa->update([
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

    public function edit(Mahasiswa $mahasiswa)
    {
        return Inertia::render('Alumni/Mahasiswa/Update', [
            'mahasiswa' => $mahasiswa
        ]);
    }
}
