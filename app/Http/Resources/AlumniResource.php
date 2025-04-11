<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AlumniResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->id,
            'mahasiswa_id'=>$this->mahasiswa_id,
            'tempat_magang'=>$this->tempat_magang,
            'judul_magang'=>$this->judul_magang,
            'judul_tugas_akhir'=>$this->judul_tugas_akhir,
            'tugas_akhir'=>$this->tugas_akhir,
            'created_at'=>$this->created_at,
            'updated_at'=>$this->updated_at,

            'mahasiswa' => new MahasiswaResource($this->whenLoaded('mahasiswa')),
        ];
    }
}
