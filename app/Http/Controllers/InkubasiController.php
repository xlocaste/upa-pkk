<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Inkubasi;
use App\Http\Requests\Inkubasi\StoreRequest;
use App\Http\Requests\Inkubasi\UpdateRequest;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class InkubasiController extends Controller
{
    public function index()
    {
        $daftarInkubasi = Inkubasi::all();

        return inertia::render('Inkubasi/List', [
            'Inkubasi' => $daftarInkubasi,
            'auth' => [
                'user' => Auth::user(),
            ],
        ]);
    }

    public function store(StoreRequest $request)
    {
        $inkubasi = Inkubasi::create([
            'nama_tenant'=>$request->nama_tenant,
            'bidang_fokus_tenant'=>$request->bidang_fokus_tenant,
            'tahun_inkubasi_tenant'=>$request->tahun_inkubasi_tenant,
            'tahun_exit_tenant'=>$request->tahun_exit_tenant,
        ]);

        return redirect()->route('inkubasi.index');
    }

    public function update(UpdateRequest $request, Inkubasi $inkubasi)
    {
        $inkubasi->update([
            'nama_tenant'=>$request->nama_tenant,
            'bidang_fokus_tenant'=>$request->bidang_fokus_tenant,
            'tahun_inkubasi_tenant'=>$request->tahun_inkubasi_tenant,
            'tahun_exit_tenant'=>$request->tahun_exit_tenant,
        ]);

        return redirect()->route('inkubasi.index');
    }

    public function edit(Inkubasi $inkubasi)
    {
        return Inertia::render('Inkubasi/Update', [
            'inkubasi' => $inkubasi
        ]);
    }

    public function create()
    {
        return Inertia::render('Inkubasi/Add');
    }
}
