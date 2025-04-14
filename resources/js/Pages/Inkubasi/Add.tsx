import Navbar from '@/Components/Navbar';
import { useForm } from '@inertiajs/react';

export default function Add() {
  const { data, setData, post, processing, errors } = useForm({
    nama_tenant: '',
    bidang_fokus_tenant: '',
    tahun_inkubasi_tenant: '',
    tahun_exit_tenant: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('inkubasi.store'));
  };

  return (
    <Navbar>
      <div className="py-12 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white shadow-sm sm:rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-4">Tambah Inkubasi</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Nama Inkubasi"
                  value={data.nama_tenant}
                  onChange={(e) => setData('nama_tenant', e.target.value)}
                  className="w-full border rounded p-2"
                  required
                />
                {errors.nama_tenant && (
                  <p className="text-red-500 text-sm">{errors.nama_tenant}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Bidang Fokus Tenant"
                  value={data.bidang_fokus_tenant}
                  onChange={(e) => setData('bidang_fokus_tenant', e.target.value)}
                  className="w-full border rounded p-2"
                  required
                />
                {errors.bidang_fokus_tenant && (
                  <p className="text-red-500 text-sm">{errors.bidang_fokus_tenant}</p>
                )}
              </div>

              <div>
                <input
                  type="number"
                  placeholder="Tahun Inkubasi"
                  value={data.tahun_inkubasi_tenant}
                  onChange={(e) => setData('tahun_inkubasi_tenant', e.target.value)}
                  className="w-full border rounded p-2"
                  required
                  min="2000"
                  max={new Date().getFullYear()}
                />
                {errors.tahun_inkubasi_tenant && (
                  <p className="text-red-500 text-sm">{errors.tahun_inkubasi_tenant}</p>
                )}
              </div>

              <div>
                <input
                  type="number"
                  placeholder="Tahun Exit"
                  value={data.tahun_exit_tenant}
                  onChange={(e) => setData('tahun_exit_tenant', e.target.value)}
                  className="w-full border rounded p-2"
                  required
                  min="2000"
                  max={new Date().getFullYear() + 10}
                />
                {errors.tahun_exit_tenant && (
                  <p className="text-red-500 text-sm">{errors.tahun_exit_tenant}</p>
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
