<?php

namespace App\Http\Requests\Inkubasi;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
            'nama_tenant' => ['required', 'string', 'max:255'],
            'bidang_fokus_tenant' => ['required', 'string', 'max:255'],
            'tahun_inkubasi_tenant' => ['required', 'integer', 'min:2000', 'max:' . date('Y')],
            'tahun_exit_tenant' => ['required', 'integer', 'min:2000', 'max:' . (date('Y') + 10)],
        ];
    }
}
