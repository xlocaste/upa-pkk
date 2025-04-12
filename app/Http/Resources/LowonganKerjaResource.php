<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LowonganKerjaResource extends JsonResource
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
            'judul_lowongan_kerja'=>$this->judul_lowongan_kerja,
            'deskripsi'=>$this->deskripsi,
            'kontak'=>$this->kontak,
            'image'=>$this->image,
        ];
    }
}
