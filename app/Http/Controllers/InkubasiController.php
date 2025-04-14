<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Inkubasi;
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
}
