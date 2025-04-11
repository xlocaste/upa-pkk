<?php

namespace App\Http\Controllers\Alumni;

use App\Http\Resources\AlumniResource;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
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
}
