import Navbar from '@/Components/Navbar';
import { useForm } from '@inertiajs/react';

export default function Add() {
  const { data, setData, post, processing, errors } = useForm({
    nama_usaha: '',
    prodi: '',
    kelas: '',
    semester: '',
    brand_produk: '',
    link: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('pra-inkubasi.store'));
  };

  return (
    <Navbar>
      <div className="py-12 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white shadow-sm sm:rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-4">Tambah Pra Inkubasi</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Nama Usaha"
                  value={data.nama_usaha}
                  onChange={(e) => setData('nama_usaha', e.target.value)}
                  className="w-full border rounded p-2"
                />
                {errors.nama_usaha && (
                  <p className="text-red-500 text-sm">{errors.nama_usaha}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Program Studi"
                  value={data.prodi}
                  onChange={(e) => setData('prodi', e.target.value)}
                  className="w-full border rounded p-2"
                />
                {errors.prodi && (
                  <p className="text-red-500 text-sm">{errors.prodi}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Kelas"
                  value={data.kelas}
                  onChange={(e) => setData('kelas', e.target.value)}
                  className="w-full border rounded p-2"
                />
                {errors.kelas && (
                  <p className="text-red-500 text-sm">{errors.kelas}</p>
                )}
              </div>

              <div>
                <input
                  type="number"
                  placeholder="Semester"
                  value={data.semester}
                  onChange={(e) => setData('semester', e.target.value)}
                  className="w-full border rounded p-2"
                  min={1}
                  max={14}
                />
                {errors.semester && (
                  <p className="text-red-500 text-sm">{errors.semester}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Brand Produk"
                  value={data.brand_produk}
                  onChange={(e) => setData('brand_produk', e.target.value)}
                  className="w-full border rounded p-2"
                />
                {errors.brand_produk && (
                  <p className="text-red-500 text-sm">{errors.brand_produk}</p>
                )}
              </div>

              <div>
                <input
                  type="url"
                  placeholder="Link Produk (URL)"
                  value={data.link}
                  onChange={(e) => setData('link', e.target.value)}
                  className="w-full border rounded p-2"
                />
                {errors.link && (
                  <p className="text-red-500 text-sm">{errors.link}</p>
                )}
              </div>

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
