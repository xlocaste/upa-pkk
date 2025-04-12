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
            $image = $request->file('image')->store('items', 'public');
        }

        $lowonganKerja = LowongaKerja::Create([
            'image'=>$image,
            'judul_lowongan_kerja'=>$request->judul_lowongan_kerja,
            'deskripsi'=>$request->deskripsi,
            'kontak'=>$request->kontak,
        ]);

        return redirect()->route('lowongan-kerja.index');
    }
}
