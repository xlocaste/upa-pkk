<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pra_inkubasi', function (Blueprint $table) {
            $table->id();
            $table->string('nama_usaha');
            $table->string('prodi');
            $table->string('kelas');
            $table->string('semester');
            $table->string('brand_produk');
            $table->string('link');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pra_inkubasi');
    }
};
