import Navbar from '@/Components/Navbar';
import { Head, router, useForm } from '@inertiajs/react';

interface Inkubasi {
  id: number;
  nama_tenant: string;
  bidang_fokus_tenant: string;
  tahun_inkubasi_tenant: number;
  tahun_exit_tenant: number;
}

export default function Edit({ inkubasi }: { inkubasi: Inkubasi }) {
  const { data, setData, put, processing } = useForm({
    nama_tenant: inkubasi.nama_tenant || '',
    bidang_fokus_tenant: inkubasi.bidang_fokus_tenant || '',
    tahun_inkubasi_tenant: inkubasi.tahun_inkubasi_tenant || '',
    tahun_exit_tenant: inkubasi.tahun_exit_tenant || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    put(route('inkubasi.update', inkubasi.id), {
      onSuccess: () => router.visit(route('inkubasi.index')),
    });
  };

  return (
    <>
      <Navbar>
        <Head title="Edit Inkubasi" />
        <div className="py-12 bg-gray-100 min-h-screen">
          <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
              <h1 className="text-2xl font-bold mb-4">Edit Data Inkubasi</h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Nama Tenant"
                  value={data.nama_tenant}
                  onChange={(e) => setData('nama_tenant', e.target.value)}
                  className="w-full border rounded p-2"
                  required
                />
                <input
                  type="text"
                  placeholder="Bidang Fokus Tenant"
                  value={data.bidang_fokus_tenant}
                  onChange={(e) => setData('bidang_fokus_tenant', e.target.value)}
                  className="w-full border rounded p-2"
                  required
                />
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
                <input
                  type="number"
                  placeholder="Tahun Exit"
                  value={data.tahun_exit_tenant}
                  onChange={(e) => setData('tahun_exit_tenant', e.target.value)}
                  className="w-full border rounded p-2"
                  required
                  min={data.tahun_inkubasi_tenant || 2000}
                  max={new Date().getFullYear() + 10}
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
    </>
  );
}
