<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class InkubasiResource extends JsonResource
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
            'nama_tenant'=>$this->nama_tenant,
            'bidang_fokus_tenant'=>$this->bidang_fokus_tenant,
            'tahun_inkubasi_tenant'=>$this->tahun_inkubasi_tenant,
            'tahun_exit_tenant'=>$this->tahun_exit_tenant,
            'created_at'=>$this->created_at,
            'updated_at'=>$this->updated_at,
        ];
    }
}
