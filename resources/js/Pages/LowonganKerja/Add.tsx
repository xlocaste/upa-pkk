import Navbar from '@/Components/Navbar';
import { useForm } from '@inertiajs/react';

export default function Add() {
  const { data, setData, post, processing, errors } = useForm({
    judul_lowongan_kerja: '',
    deskripsi: '',
    kontak: '',
    image: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('lowongan-kerja.store'), {
      forceFormData: true,
    });
  };

  return (
    <Navbar>
      <div className="py-12 bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
            <h1 className="text-xl font-bold mb-4 text-gray-800">Tambah Lowongan Kerja</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Judul Lowongan Kerja"
                value={data.judul_lowongan_kerja}
                onChange={(e) => setData('judul_lowongan_kerja', e.target.value)}
                className="w-full border rounded p-2"
                required
              />
              <textarea
                placeholder="Deskripsi"
                value={data.deskripsi}
                onChange={(e) => setData('deskripsi', e.target.value)}
                className="w-full border rounded p-2"
                rows={4}
                required
              />
              <input
                type="text"
                placeholder="Kontak"
                value={data.kontak}
                onChange={(e) => setData('kontak', e.target.value)}
                className="w-full border rounded p-2"
                required
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setData('image', e.target.files?.[0] ?? null)}
                className="w-full border rounded p-2"
                required
              />

              {errors && (
                <div className="text-red-600 text-sm">
                  {Object.values(errors).map((error, index) => (
                    <div key={index}>{error}</div>
                  ))}
                </div>
              )}

              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                disabled={processing}
              >
                {processing ? 'Menyimpan...' : 'Simpan'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Navbar>
  );
}
