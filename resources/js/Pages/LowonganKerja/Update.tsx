import Navbar from '@/Components/Navbar';
import { Head, router, useForm } from '@inertiajs/react';

interface LowonganKerja {
  id: number;
  judul_lowongan_kerja: string;
  deskripsi: string;
  kontak: string;
  image: string;
}

export default function Edit({ lowonganKerja }: { lowonganKerja: LowonganKerja }) {
    const { data, setData, put, processing } = useForm<{
        judul_lowongan_kerja: string;
        deskripsi: string;
        kontak: string;
        image: string | File;
      }>({
        judul_lowongan_kerja: lowonganKerja.judul_lowongan_kerja || '',
        deskripsi: lowonganKerja.deskripsi || '',
        kontak: lowonganKerja.kontak || '',
        image: lowonganKerja.image || '',
      });

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('_method', 'PUT'); // 👈 override ke PUT
        formData.append('judul_lowongan_kerja', data.judul_lowongan_kerja);
        formData.append('deskripsi', data.deskripsi);
        formData.append('kontak', data.kontak);

        if (data.image instanceof File) {
          formData.append('image', data.image);
        } else {
          formData.append('image', data.image); // kalau belum diubah
        }

        router.post(route('lowongan-kerja.update', lowonganKerja.id), formData, {
          forceFormData: true,
          onSuccess: () => router.visit(route('lowongan.index')),
        });
      };

  return (
    <>
      <Navbar>
        <Head title="Edit Lowongan Kerja" />
        <div className="py-12 bg-gray-100 min-h-screen">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
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
                {data.image && (
                  <div className="mb-4">
                    <img
                      src={`/storage/${data.image}`}
                      alt={data.judul_lowongan_kerja}
                      className="w-20 h-20 object-cover rounded"
                    />
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setData('image', e.target.files[0]);
                    }
                  }}
                  className="w-full border rounded p-2"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                  disabled={processing}
                >
                  {processing ? 'Menyimpan...' : 'Update'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
}
