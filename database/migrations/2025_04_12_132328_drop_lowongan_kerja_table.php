<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::dropIfExists('lowongan_kerja');
    }

    public function down(): void
    {
        Schema::create('lowongan_kerja', function ($table) {
            $table->id();
            $table->string('judul_lowongan_kerja');
            $table->string('deskripsi');
            $table->string('kontak');
            $table->string('image');
            $table->timestamps();
        });
    }
};
