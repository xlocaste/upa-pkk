<?php

namespace App\Http\Controllers\Alumni;

use App\Http\Resources\AlumniResource;
use App\Http\Controllers\Controller;
use App\Http\Requests\Alumni\StoreRequest;
use Illuminate\Http\Request;
use App\Models\Mahasiswa;
use App\Models\Alumni;
use Inertia\Inertia;

class AlumniController extends Controller
{
    public function index()
    {
        $daftarAlumni = Alumni::with('mahasiswa')->get();

        return Inertia::render('Alumni/List', [
            'daftarAlumni' => $daftarAlumni
        ]);
    }

    public function store(StoreRequest $request)
    {
        $alumni = Alumni::create([
            'mahasiswa_id'=>$request->mahasiswa_id,
            'tempat_magang'=>$request->tempat_magang,
            'judul_magang'=>$request->judul_magang,
            'judul_tugas_akhir'=>$request->judul_tugas_akhir,
            'tugas_akhir'=>$request->tugas_akhir,
            'tahun_lulus'=>$request->tahun_lulus,
        ]);

        return redirect()->route('alumni.index')->with('success', 'Data alumni berhasil ditambahkan.');
    }

    public function create()
    {
        $mahasiswa = Mahasiswa::all(['id', 'nim', 'nama']);

        return Inertia::render('Alumni/Add', [
            'mahasiswa' => $mahasiswa,
        ]);
    }
}
