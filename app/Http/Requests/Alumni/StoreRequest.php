<?php

namespace App\Http\Requests\Alumni;

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
            'mahasiswa_id' => ['required', 'exists:mahasiswa,id', 'unique:alumni,mahasiswa_id'],
            'tempat_magang' => ['required'],
            'judul_magang' => ['required'],
            'judul_tugas_akhir' => ['required'],
            'tahun_lulus' => ['required'],
        ];
    }

    public function messages(): array
    {
        return [
            'mahasiswa_id.unique' => 'Mahasiswa ini sudah terdaftar sebagai alumni.',
        ];
    }
}
