import Navbar from '@/Components/Navbar';
import { Head, router, useForm } from '@inertiajs/react';

interface PraInkubasi {
  id: number;
  nama_usaha: string;
  prodi: string;
  kelas: string;
  semester: number;
  brand_produk: string;
  link: string;
}

export default function Edit({ praInkubasi }: { praInkubasi: PraInkubasi }) {
  const { data, setData, put, processing, errors } = useForm({
    nama_usaha: praInkubasi.nama_usaha || '',
    prodi: praInkubasi.prodi || '',
    kelas: praInkubasi.kelas || '',
    semester: praInkubasi.semester || 1,
    brand_produk: praInkubasi.brand_produk || '',
    link: praInkubasi.link || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    put(route('pra-inkubasi.update', praInkubasi.id), {
      onSuccess: () => router.visit(route('pra-inkubasi.index')),
    });
  };

  return (
    <Navbar>
      <Head title="Edit Pra Inkubasi" />
      <div className="py-12 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-4">Edit Data Pra Inkubasi</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Nama Usaha"
                value={data.nama_usaha}
                onChange={(e) => setData('nama_usaha', e.target.value)}
                className="w-full border rounded p-2"
                required
              />
              <input
                type="text"
                placeholder="Program Studi"
                value={data.prodi}
                onChange={(e) => setData('prodi', e.target.value)}
                className="w-full border rounded p-2"
                required
              />
              <input
                type="text"
                placeholder="Kelas"
                value={data.kelas}
                onChange={(e) => setData('kelas', e.target.value)}
                className="w-full border rounded p-2"
                required
              />
              <input
                type="number"
                placeholder="Semester"
                value={data.semester}
                onChange={(e) => setData('semester', parseInt(e.target.value))}
                className="w-full border rounded p-2"
                required
                min={1}
                max={14}
              />
              <input
                type="text"
                placeholder="Brand Produk"
                value={data.brand_produk}
                onChange={(e) => setData('brand_produk', e.target.value)}
                className="w-full border rounded p-2"
                required
              />
              <input
                type="url"
                placeholder="Link Produk"
                value={data.link}
                onChange={(e) => setData('link', e.target.value)}
                className="w-full border rounded p-2"
              />
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                disabled={processing}
              >
                {processing ? 'Menyimpan...' : 'Update'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Navbar>
  );
}
