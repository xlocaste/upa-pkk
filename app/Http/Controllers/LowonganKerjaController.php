<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LowonganKerja;
use App\Http\Requests\LowonganKerja\StoreRequest;
use App\Http\Requests\LowonganKerja\UpdateRequest;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LowonganKerjaController extends Controller
{
    public function index()
    {
        $daftarLowonganKerja = LowonganKerja::all();

        return Inertia::render('LowonganKerja/List', [
            'lowonganKerja' => $daftarLowonganKerja,
            'auth' => [
                'user' => Auth::user(),
            ],
        ]);
    }

    public function store(StoreRequest $request)
    {
        if ($request->hasFile('image')) {
            $image = $request->file('image')->store('LowongaKerja', 'public');
        }

        $lowonganKerja = LowonganKerja::Create([
            'image'=>$image,
            'judul_lowongan_kerja'=>$request->judul_lowongan_kerja,
            'deskripsi'=>$request->deskripsi,
            'kontak'=>$request->kontak,
        ]);

        return redirect()->route('lowongan-kerja.index');
    }

    public function update(UpdateRequest $request, LowonganKerja $lowonganKerja)
    {
        if ($request->hasFile('image')) {
            $image = $request->file('image')->store('LowongaKerja', 'public');
        }

        $lowonganKerja->Update([
            'image'=>$image,
            'judul_lowongan_kerja'=>$request->judul_lowongan_kerja,
            'deskripsi'=>$request->deskripsi,
            'kontak'=>$request->kontak,
        ]);

        return redirect()->route('lowongan-kerja.index');
    }

    public function destroy(LowonganKerja $lowonganKerja)
    {
        $lowonganKerja->delete();

        return Redirect::route('lowongan-kerja.index')->with('message', 'Data berhasil dihapus');
    }

    public function edit(LowonganKerja $lowonganKerja)
    {
        return Inertia::render('LowonganKerja/Update', [
            'lowonganKerja' => $lowonganKerja
        ]);
    }

    public function create()
    {
        return Inertia::render('LowonganKerja/Add');
    }
}
