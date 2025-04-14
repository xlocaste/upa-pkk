<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PraInkubasiResource extends JsonResource
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
            'nama_usaha'=>$this->nama_usaha,
            'prodi'=>$this->prodi,
            'kelas'=>$this->kelas,
            'semester'=>$this->semester,
            'brand_produk'=>$this->brand_produk,
            'link'=>$this->link,
        ];
    }
}
