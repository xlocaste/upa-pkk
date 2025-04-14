<?php

namespace App\Http\Requests\PraInkubasi;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nama_usaha'=> ['required', 'string', 'max:255'],
            'prodi'=> ['required', 'string', 'max:100'],
            'kelas'=> ['required', 'string', 'max:10'],
            'semester'=> ['required', 'integer', 'min:1', 'max:14'],
            'brand_produk'=> ['required', 'string', 'max:255'],
            'link'=> ['required', 'url', 'max:255'],
        ];
    }
}
