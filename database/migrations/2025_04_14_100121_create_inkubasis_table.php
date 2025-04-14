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
        Schema::create('inkubasi', function (Blueprint $table) {
            $table->id();
            $table->string('nama_tenant');
            $table->string('bidang_fokus_tenant');
            $table->string('tahun_inkubasi_tenant');
            $table->string('tahun_exit_tenant');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inkubasi');
    }
};
