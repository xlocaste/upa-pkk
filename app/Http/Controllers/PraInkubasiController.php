<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PraInkubasi;
use App\Http\Requests\PraInkubasi\StoreRequest;
use App\Http\Requests\PraInkubasi\UpdateRequest;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PraInkubasiController extends Controller
{
    public function index()
    {
        $daftarPraInkubasi = PraInkubasi::all();

        return Inertia::render('PraInkubasi/List', [
            'praInkubasi' => $daftarPraInkubasi,
            'auth' => [
                'user' => Auth::user(),
            ],
        ]);
    }

    public function store(StoreRequest $request)
    {
        $praInkubasi = PraInkubasi::create([
            'nama_usaha'=>$request->nama_usaha,
            'prodi'=>$request->prodi,
            'kelas'=>$request->kelas,
            'semester'=>$request->semester,
            'brand_produk'=>$request->brand_produk,
            'link'=>$request->link,
        ]);

        return redirect()->route('pra-inkubasi.index');
    }

    public function update(UpdateRequest $request, PraInkubasi $praInkubasi)
    {
        $praInkubasi->update([
            'nama_usaha'=>$request->nama_usaha,
            'prodi'=>$request->prodi,
            'kelas'=>$request->kelas,
            'semester'=>$request->semester,
            'brand_produk'=>$request->brand_produk,
            'link'=>$request->link,
        ]);

        return redirect()->route('pra-inkubasi.index');
    }

    public function destroy(PraInkubasi $praInkubasi)
    {
        $praInkubasi->delete();

        return Redirect::route('pra-inkubasi.index')->with('message', 'Data berhasil dihapus');
    }

    public function edit(PraInkubasi $praInkubasi)
    {
        return Inertia::render('PraInkubasi/Update', [
            'praInkubasi' => $praInkubasi
        ]);
    }

    public function create()
    {
        return Inertia::render('PraInkubasi/Add');
    }
}
