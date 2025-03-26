<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Alumni\MahasiswaController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('/mahasiswa')->name('mahasiswa.')->group(function() {
    Route::group(['middleware' => ['auth']], function() {
        Route::post('/', [MahasiswaController::class, 'store'])->name('store');
        Route::put('/{mahasiswa}', [MahasiswaController::class, 'update'])->name('updated');
        Route::get('/{mahasiswa}', [MahasiswaController::class, 'show'])->name('show');
        Route::get('/create', [MahasiswaController::class, 'create'])->name('create');
        Route::get('/{mahasiswa}/edit', [MahasiswaController::class, 'edit'])->name('edit');
    });
    Route::get('/', [MahasiswaController::class, 'index'])->name('index');
});

require __DIR__.'/auth.php';
