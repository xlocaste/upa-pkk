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
}
